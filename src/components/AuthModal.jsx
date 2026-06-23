import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Cầu nối Supabase của thầy

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
      setError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
      return;
    }

    setLoading(true);

    try {
      // 👑 KIỂM TRA QUYỀN ADMIN (CỤC BỘ) ĐỂ TRÁNH BỊ KHÓA KHỎI HỆ THỐNG
      if (tenDangNhap.trim().toLowerCase() === 'admin' && matKhau.trim() === 'admin123') {
        const adminData = {
          id: 'admin_default',
          name: 'Quản Trị Viên',
          username: 'admin',
          password: 'admin123',
          role: 'admin',
          loginCount: 1,
          history: []
        };
        localStorage.setItem('current_student', JSON.stringify(adminData));
        if (onLoginSuccess) {
          onLoginSuccess(adminData);
        }
        onClose();
        return;
      }

      // 🚀 BƯỚC QUAN TRỌNG: Quét và nhận diện tài khoản trong bảng hoc_vien
      const { data, error: dbError } = await supabase
        .from('hoc_vien')
        .select('*')
        .eq('ten_dang_nhap', tenDangNhap.trim().toLowerCase())
        .eq('mat_khau', matKhau.trim()); // So khớp cả 2 điều kiện cùng lúc

      if (dbError) throw dbError;

      // 🚀 ĐOẠN CODE KHI ĐỐI CHIẾU TÀI KHOẢN THÀNH CÔNG:
      if (data && data.length > 0) {
        const studentData = data[0];

        // 1. Tạo một mã phiên đăng nhập ngẫu nhiên duy nhất cho thiết bị này
        const newSessionId = 'ss_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

        // 2. Gửi lệnh UPDATE lên Supabase để ghi đè mã mới này vào tài khoản của em đó
        const { error: updateError } = await supabase
          .from('hoc_vien')
          .update({ session_id: newSessionId }) // Cập nhật mã mới lên đám mây
          .eq('id', studentData.id);

        if (updateError) throw updateError;

        // 3. Cập nhật mã này vào object để lưu xuống máy học sinh hiện tại
        studentData.session_id = newSessionId;
        localStorage.setItem('current_student', JSON.stringify(studentData));

        if (onLoginSuccess) {
          onLoginSuccess(studentData);
        }
        onClose();
      } else {
        // Nếu không tìm thấy ai trùng khớp
        setError('Tên đăng nhập hoặc mật khẩu không chính xác!');
      }

    } catch (err) {
      console.error(err);
      setError('Lỗi kết nối hệ thống: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ position: 'relative' }}>
        <button className="close-btn" onClick={onClose} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>

        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>Đăng Nhập Hệ Thống</h2>

        {error && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '14px', marginBottom: '15px' }}>{error}</p>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#9ca3af' }}>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập..."
              value={tenDangNhap}
              onChange={(e) => setTenDangNhap(e.target.value)}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #232d3f', backgroundColor: '#090d14', color: '#fff', outline: 'none' }}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#9ca3af' }}>Mật khẩu</label>
            <input
              type="text"
              placeholder="Nhập mật khẩu..."
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              style={{ 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid #232d3f', 
                backgroundColor: '#090d14', 
                color: '#fff', 
                outline: 'none',
                WebkitTextSecurity: 'disc'
              }}
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ padding: '14px', borderRadius: '10px', border: 'none', backgroundColor: '#5d6cfc', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            {loading ? "Đang xử lý..." : "Đăng nhập ngay"}
          </button>
        </form>
      </div>
    </div>
  );
}
