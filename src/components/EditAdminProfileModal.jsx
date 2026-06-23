import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function EditAdminProfileModal({ isOpen, onClose, onAdminUpdated }) {
  const [hoTen, setHoTen] = useState('');
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [loading, setLoading] = useState(false);
  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const savedAdmin = localStorage.getItem('current_student');
      if (savedAdmin) {
        const adminObj = JSON.parse(savedAdmin);
        setAdminId(adminObj.id);
        setHoTen(adminObj.ho_ten);
        setTenDangNhap(adminObj.ten_dang_nhap);
        setMatKhau(adminObj.mat_khau);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('hoc_vien')
        .update({ ho_ten: hoTen, ten_dang_nhap: tenDangNhap, mat_khau: matKhau })
        .eq('id', adminId)
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        localStorage.setItem('current_student', JSON.stringify(data[0]));
        alert("Cập nhật tài khoản Admin thành công!");
        if (onAdminUpdated) onAdminUpdated(data[0]);
        onClose();
      }
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
        <h2 className="modal-title">Cấu Hình Tài Khoản Admin</h2>
        <form onSubmit={handleUpdateAdmin}>
          <div className="form-group"><label>Họ và tên Admin</label><input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required /></div>
          <div className="form-group"><label>Tên đăng nhập Admin</label><input type="text" value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)} required /></div>
          <div className="form-group"><label>Mật khẩu mới Admin</label><input type="text" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required /></div>
          <button type="submit" className="btn-submit-form" disabled={loading}>{loading ? "Đang lưu..." : "Lưu thay đổi Admin"}</button>
        </form>
      </div>
    </div>
  );
}
