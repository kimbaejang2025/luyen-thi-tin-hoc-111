import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import AddStudentModal from './AddStudentModal';
import EditStudentModal from './EditStudentModal';
import EditAdminProfileModal from './EditAdminProfileModal';

export default function DashboardAdmin({ currentAdmin, onAdminUpdated }) {
  const [students, setStudents] = useState([]);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isEditStudentOpen, setIsEditStudentOpen] = useState(false);
  const [isEditAdminOpen, setIsEditAdminOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const { data } = await supabase.from('hoc_vien').select('*').order('created_at', { ascending: false });
    if (data) setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="admin-container" style={{ padding: '20px', color: '#fff' }}>
      
      {/* 1. THANH HEADER THÔNG TIN ADMIN (Tự co giãn/xuống dòng trên mobile và dàn ngang trên PC) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', background: '#161b26', padding: '15px', borderRadius: '8px' }}>
        <span>Xin chào Admin: <b>{currentAdmin?.ho_ten}</b></span>
        <button onClick={() => setIsEditAdminOpen(true)} style={{ background: '#232d3f', color: '#fff', padding: '6px 12px', border: '1px solid #1f293d', borderRadius: '4px', cursor: 'pointer' }}>
          ⚙️ Sửa tài khoản Admin
        </button>
      </div>

      {/* 🚀 2. KHU VỰC NÚT BẤM THÊM HỌC VIÊN MỚI */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        <button 
          onClick={() => setIsAddStudentOpen(true)} // 👈 Mở modal thêm học viên mới
          style={{ 
            background: '#5d6cfc', 
            color: '#fff', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '8px', 
            fontWeight: '640', 
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = '#4b5af2'}
          onMouseOut={(e) => e.target.style.background = '#5d6cfc'}
        >
          + Thêm học viên mới
        </button>
      </div>

      {/* 3. BẢNG DANH SÁCH HỌC VIÊN (Co giãn cuộn ngang trên điện thoại, vừa khít trên máy tính) */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr style={{ background: '#161b26', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>HỌ VÀ TÊN</th>
              <th style={{ padding: '12px' }}>LỚP</th>
              <th style={{ padding: '12px' }}>TÊN ĐĂNG NHẬP</th>
              <th style={{ padding: '12px' }}>MẬT KHẨU</th>
              <th style={{ padding: '12px' }}>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ borderBottom: '1px solid #1f293d' }}>
                <td style={{ padding: '12px' }}><strong>{student.ho_ten}</strong></td>
                <td style={{ padding: '12px' }}>
                  {student.lop ? (
                    <span className="class-tag">{student.lop}</span>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Chưa cập nhật</span>
                  )}
                </td>
                <td style={{ padding: '12px' }}><code>{student.ten_dang_nhap}</code></td>
                <td style={{ padding: '12px' }}><code>{student.mat_khau}</code></td>
                <td style={{ padding: '12px' }}>
                  <button 
                    className="btn btn-secondary btn-icon"
                    onClick={() => { setSelectedStudent(student); setIsEditStudentOpen(true); }} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
                    title="Chỉnh sửa"
                  >
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. ĐẢM BẢO KHAI BÁO MODAL THÊM MỚI Ở CUỐI FILE */}
      <AddStudentModal 
        isOpen={isAddStudentOpen} 
        onClose={() => setIsAddStudentOpen(false)} 
        onRefreshList={fetchStudents} 
      />

      <EditStudentModal isOpen={isEditStudentOpen} onClose={() => setIsEditStudentOpen(false)} studentData={selectedStudent} onRefreshList={fetchStudents} />
      <EditAdminProfileModal isOpen={isEditAdminOpen} onClose={() => setIsEditAdminOpen(false)} onAdminUpdated={onAdminUpdated} />
    </div>
  );
}
