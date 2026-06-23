import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function EditStudentModal({ isOpen, onClose, studentData, onRefreshList }) {
  const [hoTen, setHoTen] = useState('');
  const [lop, setLop] = useState('');
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (studentData) {
      setHoTen(studentData.ho_ten);
      setLop(studentData.lop);
      setTenDangNhap(studentData.ten_dang_nhap);
      setMatKhau(studentData.mat_khau);
    }
  }, [studentData]);

  if (!isOpen || !studentData) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('hoc_vien')
        .update({ ho_ten: hoTen, lop: lop, ten_dang_nhap: tenDangNhap, mat_khau: matKhau })
        .eq('id', studentData.id);

      if (error) throw error;
      alert("Cập nhật thông tin học viên thành công!");
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
        <h2 className="modal-title">Sửa Thông Tin Học Viên</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group"><label>Họ và tên</label><input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required /></div>
          <div className="form-group"><label>Lớp</label><input type="text" value={lop} onChange={(e) => setLop(e.target.value)} required /></div>
          <div className="form-group"><label>Tên đăng nhập</label><input type="text" value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)} required /></div>
          <div className="form-group"><label>Mật khẩu</label><input type="text" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required /></div>
          <button type="submit" className="btn-submit-form" disabled={loading}>{loading ? "Đang lưu..." : "Xác nhận cập nhật"}</button>
        </form>
      </div>
    </div>
  );
}
