import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!tenDangNhap || !matKhau) {
      setError('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // 👑 KIỂM TRA QUYỀN ADMIN (CỤC BỘ) ĐỂ TRÁNH BỊ KHÓA KHỎI HỆ THỐNG
    if (tenDangNhap === 'admin' && matKhau === 'admin123') {
      const adminData = {
        id: 'admin_default',
        ho_ten: 'Quản Trị Viên',
        ten_dang_nhap: 'admin',
        mat_khau: 'admin123',
        role: 'admin',
        session_id: 'admin_session'
      };
      localStorage.setItem('current_student', JSON.stringify(adminData));
      if (onLoginSuccess) onLoginSuccess(adminData);
      onClose();
      return;
    }

    setLoading(true);

    try {
      // 🚀 YÊU CẦU 1: So khớp chính xác 100% từng ký tự viết HOA - viết thường
      const { data, error: dbError } = await supabase
        .from('hoc_vien')
        .select('*')
        .eq('ten_dang_nhap', tenDangNhap) // Giữ nguyên chữ thầy gõ, không dùng .toLowerCase()
        .eq('mat_khau', matKhau);

      if (dbError) throw dbError;

      if (data && data.length > 0) {
        const studentData = data[0];

        // 🚀 YÊU CẦU 2: Sinh mã phiên đăng nhập ngẫu nhiên (Duy nhất cho thiết bị này)
        const newSessionId = 'ss_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

        // Đẩy mã mới này lên đè vào tài khoản trên Supabase
        const { error: updateError } = await supabase
          .from('hoc_vien')
          .update({ session_id: newSessionId })
          .eq('id', studentData.id);

        if (updateError) throw updateError;

        // Lưu thông tin phiên mới xuống máy hiện tại
        studentData.session_id = newSessionId;
        localStorage.setItem('current_student', JSON.stringify(studentData));

        if (onLoginSuccess) onLoginSuccess(studentData);
        onClose();
      } else {
        setError('Tên đăng nhập hoặc mật khẩu không chính xác! (Vui lòng kiểm tra kỹ chữ HOA/thường)');
      }
    } catch (err) {
      setError('Lỗi hệ thống: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2 className="modal-title">Đăng Nhập Hệ Thống</h2>
        {error && <p className="error-text" style={{ color: '#ef4444', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input type="text" value={tenDangNhap} onChange={(e) => setTenDangNhap(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input type="password" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required />
          </div>
          <button type="submit" className="btn-submit-form" disabled={loading}>
            {loading ? "Đang xử lý..." : "Đăng nhập ngay"}
          </button>
        </form>
      </div>
    </div>
  );
}
