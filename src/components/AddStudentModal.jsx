import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AddStudentModal({ isOpen, onClose, onRefreshList }) {
  const [hoTen, setHoTen] = useState('');
  const [lop, setLop] = useState('');
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: existing, error: checkError } = await supabase
        .from('hoc_vien')
        .select('id')
        .eq('ten_dang_nhap', tenDangNhap);

      if (checkError) throw checkError;
      if (existing && existing.length > 0) {
        alert("Tên đăng nhập này đã tồn tại!");
        setLoading(false);
        return;
      }

      const { error } = await supabase
        .from('hoc_vien')
        .insert([{ ho_ten: hoTen, lop: lop, ten_dang_nhap: tenDangNhap, mat_khau: matKhau }]);

      if (error) throw error;
      alert("Thêm học viên mới thành công!");
      
      setHoTen('');
      setLop('');
      setTenDangNhap('');
      setMatKhau('');
      
      if (onRefreshList) onRefreshList();
      onClose();
    } catch (err) {
      alert("Lỗi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2 className="modal-title">Thêm Học Viên Mới</h2>
        <form onSubmit={handleAdd}>
          <div className="form-group"><label>Họ và tên</label><input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required /></div>
          <div className="form-group"><label>Lớp</label><input type="text" value={lop} onChange={(e) => setLop(e.target.value)} required /></div>
          <div className="form-group"><label>Tên đăng nhập</label><input type="text" value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)} required /></div>
          <div className="form-group"><label>Mật khẩu</label><input type="text" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required /></div>
          <button type="submit" className="btn-submit-form" disabled={loading}>{loading ? "Đang lưu..." : "Thêm mới"}</button>
        </form>
      </div>
    </div>
  );
}
