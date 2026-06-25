import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import AddStudentModal from './AddStudentModal';
import EditStudentModal from './EditStudentModal';
import EditAdminProfileModal from './EditAdminProfileModal';
import { Icon } from './Icons';

export default function DashboardAdmin({ 
  currentAdmin, 
  onAdminUpdated,
  topics = [],
  onUpdateTopics,
  exams = [],
  onUpdateExams
}) {
  // Main admin panel tab selection
  const [adminTab, setAdminTab] = useState('students'); // 'students', 'topics', 'exams'

  // --- Student Management State ---
  const [students, setStudents] = useState([]);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isEditStudentOpen, setIsEditStudentOpen] = useState(false);
  const [isEditAdminOpen, setIsEditAdminOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // --- Topic Management State ---
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);

  // --- Exam Management State ---
  const [selectedExam, setSelectedExam] = useState(null);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [examFilter, setExamFilter] = useState('all'); // 'all', 'thpt', 'so-gd', 'tham-khao', 'tot-nghiep'

  // Fetch student list from Supabase
  const fetchStudents = async () => {
    const { data } = await supabase.from('hoc_vien').select('*').order('created_at', { ascending: false });
    if (data) setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // --- Topic CRUD handlers ---
  const handleSaveTopic = (topicData) => {
    const exists = topics.some(t => t.id === topicData.id);
    let updatedTopics;
    if (exists) {
      updatedTopics = topics.map(t => t.id === topicData.id ? { ...t, ...topicData } : t);
    } else {
      updatedTopics = [...topics, topicData];
    }
    if (onUpdateTopics) onUpdateTopics(updatedTopics);
    alert(exists ? "Cập nhật chủ đề thành công!" : "Thêm chủ đề mới thành công!");
  };

  const handleDeleteTopic = (topicId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa chủ đề này không?")) {
      const updatedTopics = topics.filter(t => t.id !== topicId);
      if (onUpdateTopics) onUpdateTopics(updatedTopics);
      alert("Đã xóa chủ đề thành công!");
    }
  };

  // --- Exam CRUD handlers ---
  const handleSaveExam = (examData) => {
    const exists = exams.some(e => e.id === examData.id);
    let updatedExams;
    if (exists) {
      updatedExams = exams.map(e => e.id === examData.id ? { ...e, ...examData } : e);
    } else {
      updatedExams = [...exams, examData];
    }
    if (onUpdateExams) onUpdateExams(updatedExams);
    alert(exists ? "Cập nhật đề thi thành công!" : "Thêm đề thi mới thành công!");
  };

  const handleDeleteExam = (examId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đề thi này không?")) {
      const updatedExams = exams.filter(e => e.id !== examId);
      if (onUpdateExams) onUpdateExams(updatedExams);
      alert("Đã xóa đề thi thành công!");
    }
  };

  return (
    <div className="admin-container" style={{ padding: '20px', color: '#fff' }}>
      
      {/* 1. THANH HEADER THÔNG TIN ADMIN */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', background: '#161b26', padding: '15px', borderRadius: '8px' }}>
        <span>Xin chào Admin: <b>{currentAdmin?.ho_ten}</b></span>
        <button onClick={() => setIsEditAdminOpen(true)} style={{ background: '#232d3f', color: '#fff', padding: '6px 12px', border: '1px solid #1f293d', borderRadius: '4px', cursor: 'pointer' }}>
          ⚙️ Sửa tài khoản Admin
        </button>
      </div>

      {/* 🚀 TAB NAVIGATION */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', overflowX: 'auto' }}>
        <button 
          onClick={() => setAdminTab('students')}
          className={`filter-btn ${adminTab === 'students' ? 'active' : ''}`}
          style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Icon name="Users" style={{ width: '16px', height: '16px' }} />
          Học viên
        </button>
        <button 
          onClick={() => setAdminTab('topics')}
          className={`filter-btn ${adminTab === 'topics' ? 'active' : ''}`}
          style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Icon name="BookOpen" style={{ width: '16px', height: '16px' }} />
          Lý thuyết (Chủ đề)
        </button>
        <button 
          onClick={() => setAdminTab('exams')}
          className={`filter-btn ${adminTab === 'exams' ? 'active' : ''}`}
          style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Icon name="Award" style={{ width: '16px', height: '16px' }} />
          Đề thi thử
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: QUẢN LÝ HỌC VIÊN */}
      {/* ============================================================== */}
      {adminTab === 'students' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ margin: 0 }}>Quản lý học viên đăng nhập</h3>
            <button 
              onClick={() => setIsAddStudentOpen(true)}
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
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: QUẢN LÝ LÝ THUYẾT / CHỦ ĐỀ */}
      {/* ============================================================== */}
      {adminTab === 'topics' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ margin: 0 }}>Quản lý Kiến thức tổng hợp</h3>
            <button 
              onClick={() => { setSelectedTopic(null); setIsTopicModalOpen(true); }}
              className="btn btn-primary"
            >
              + Thêm chủ đề mới
            </button>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr style={{ background: '#161b26', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>ICON</th>
                  <th style={{ padding: '12px' }}>MÃ/ID</th>
                  <th style={{ padding: '12px' }}>TIÊU ĐỀ</th>
                  <th style={{ padding: '12px' }}>MÔ TẢ NGẮN</th>
                  <th style={{ padding: '12px' }}>ĐƯỜNG DẪN HTML (PUBLIC)</th>
                  <th style={{ padding: '12px' }}>HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((t) => (
                  <tr key={t.id} style={{ borderBottom: '1px solid #1f293d' }}>
                    <td style={{ padding: '12px' }}>
                      <span style={{ display: 'inline-flex', padding: '6px', background: 'var(--bg-active)', borderRadius: '4px', color: 'var(--color-primary)' }}>
                        <Icon name={t.icon || 'Cpu'} style={{ width: '20px', height: '20px' }} />
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}><code>{t.id}</code></td>
                    <td style={{ padding: '12px' }}><strong>{t.title}</strong></td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {t.description}
                    </td>
                    <td style={{ padding: '12px' }}>
                      {t.htmlUrl ? (
                        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>✓ {t.htmlUrl}</span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Mặc định</span>
                      )}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button 
                        className="btn btn-secondary btn-icon"
                        onClick={() => { setSelectedTopic(t); setIsTopicModalOpen(true); }} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
                        title="Chỉnh sửa"
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn btn-secondary btn-icon"
                        onClick={() => handleDeleteTopic(t.id)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', marginLeft: '6px' }}
                        title="Xóa"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: QUẢN LÝ ĐỀ THI THỬ */}
      {/* ============================================================== */}
      {adminTab === 'exams' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ margin: 0 }}>Quản lý Đề thi thử</h3>
            <button 
              onClick={() => { setSelectedExam(null); setIsExamModalOpen(true); }}
              className="btn btn-primary"
            >
              + Thêm đề thi mới
            </button>
          </div>

          {/* Sub category tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px', overflowX: 'auto', paddingBottom: '4px' }}>
            <button
              onClick={() => setExamFilter('all')}
              className={`filter-btn ${examFilter === 'all' ? 'active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              Tất cả
            </button>
            <button
              onClick={() => setExamFilter('thpt')}
              className={`filter-btn ${examFilter === 'thpt' ? 'active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              Trường THPT
            </button>
            <button
              onClick={() => setExamFilter('so-gd')}
              className={`filter-btn ${examFilter === 'so-gd' ? 'active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              Sở GD&ĐT
            </button>
            <button
              onClick={() => setExamFilter('tham-khao')}
              className={`filter-btn ${examFilter === 'tham-khao' ? 'active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              Đề tham khảo
            </button>
            <button
              onClick={() => setExamFilter('tot-nghiep')}
              className={`filter-btn ${examFilter === 'tot-nghiep' ? 'active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              Tốt nghiệp các năm
            </button>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr style={{ background: '#161b26', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>MÃ/ID</th>
                  <th style={{ padding: '12px' }}>TIÊU ĐỀ</th>
                  <th style={{ padding: '12px' }}>DANH MỤC</th>
                  <th style={{ padding: '12px' }}>THỜI GIAN</th>
                  <th style={{ padding: '12px' }}>ĐƯỜNG DẪN HTML (PUBLIC)</th>
                  <th style={{ padding: '12px' }}>HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                {exams.filter(e => examFilter === 'all' || e.category === examFilter).map((e) => (
                  <tr key={e.id} style={{ borderBottom: '1px solid #1f293d' }}>
                    <td style={{ padding: '12px' }}><code>{e.id}</code></td>
                    <td style={{ padding: '12px' }}><strong>{e.title}</strong></td>
                    <td style={{ padding: '12px' }}>
                      <span className={`badge badge-${e.category || 'tham-khao'}`}>
                        {e.category === 'thpt' ? 'Trường THPT' : 
                         e.category === 'so-gd' ? 'Sở GD&ĐT' : 
                         e.category === 'tot-nghiep' ? 'Tốt nghiệp' : 'Tham khảo'}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>{e.duration || 50} phút</td>
                    <td style={{ padding: '12px' }}>
                      {e.htmlUrl ? (
                        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>✓ {e.htmlUrl}</span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Trắc nghiệm ({e.questions?.length || 0} câu)</span>
                      )}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button 
                        className="btn btn-secondary btn-icon"
                        onClick={() => { setSelectedExam(e); setIsExamModalOpen(true); }} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
                        title="Chỉnh sửa"
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn btn-secondary btn-icon"
                        onClick={() => handleDeleteExam(e.id)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', marginLeft: '6px' }}
                        title="Xóa"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. MODALS FOR CRUD ACTIONS */}
      <AddStudentModal 
        isOpen={isAddStudentOpen} 
        onClose={() => setIsAddStudentOpen(false)} 
        onRefreshList={fetchStudents} 
      />

      <EditStudentModal 
        isOpen={isEditStudentOpen} 
        onClose={() => setIsEditStudentOpen(false)} 
        studentData={selectedStudent} 
        onRefreshList={fetchStudents} 
      />
      
      <EditAdminProfileModal 
        isOpen={isEditAdminOpen} 
        onClose={() => setIsEditAdminOpen(false)} 
        onAdminUpdated={onAdminUpdated} 
      />

      <TopicModal 
        isOpen={isTopicModalOpen} 
        onClose={() => setIsTopicModalOpen(false)} 
        topicData={selectedTopic} 
        onSave={handleSaveTopic} 
      />

      <ExamModal 
        isOpen={isExamModalOpen} 
        onClose={() => setIsExamModalOpen(false)} 
        examData={selectedExam} 
        onSave={handleSaveExam} 
      />
    </div>
  );
}

// ==============================================================
// SUB-MODAL COMPONENT: TOPIC CRUD
// ==============================================================
function TopicModal({ isOpen, onClose, topicData, onSave }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('Cpu');
  const [content, setContent] = useState('');
  const [htmlUrl, setHtmlUrl] = useState('');
  
  useEffect(() => {
    if (topicData) {
      setId(topicData.id);
      setTitle(topicData.title);
      setDescription(topicData.description || '');
      setIcon(topicData.icon || 'Cpu');
      setContent(topicData.content || '');
      setHtmlUrl(topicData.htmlUrl || '');
    } else {
      setId('topic_' + Date.now());
      setTitle('');
      setDescription('');
      setIcon('Cpu');
      setContent('');
      setHtmlUrl('');
    }
  }, [topicData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !title) {
      alert("Vui lòng điền đầy đủ Mã ID và Tiêu đề!");
      return;
    }
    onSave({
      id,
      title,
      description,
      icon,
      content,
      htmlUrl,
      quiz: topicData?.quiz || []
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card modal-card" style={{ maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">{topicData ? 'Chỉnh Sửa Chủ Đề' : 'Thêm Chủ Đề Mới'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Mã ID (Duy nhất)</label>
            <input 
              type="text" 
              className="form-input"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={!!topicData}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tiêu đề chủ đề</label>
            <input 
              type="text" 
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mô tả ngắn</label>
            <textarea 
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Biểu tượng (Icon)</label>
            <select 
              className="form-input"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            >
              <option value="Cpu">Cpu (Trí tuệ nhân tạo)</option>
              <option value="Network">Network (Mạng máy tính)</option>
              <option value="MessageSquare">MessageSquare (Giao tiếp mạng)</option>
              <option value="Briefcase">Briefcase (Hướng nghiệp)</option>
              <option value="Globe">Globe (Web HTML+CSS)</option>
              <option value="Terminal">Terminal (Lập trình Python)</option>
              <option value="Database">Database (Cơ sở dữ liệu)</option>
            </select>
          </div>

          <div className="form-group" style={{ border: '1px dashed var(--border-color)', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)' }}>
            <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>Đường dẫn file HTML (nằm trong thư mục public)</label>
            <input 
              type="text" 
              className="form-input"
              value={htmlUrl}
              onChange={(e) => setHtmlUrl(e.target.value)}
              placeholder="Ví dụ: /1.kienthuc/ai_nang_cao.html hoặc /dethi_2026.html"
            />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              Hãy copy file HTML tài liệu vào thư mục <code>public</code> của dự án (hoặc thư mục con) rồi gõ đường dẫn tương đối vào đây để hiển thị.
            </p>
          </div>

          <div className="form-group" style={{ marginTop: '15px' }}>
            <label className="form-label">Nội dung lý thuyết dự phòng (HTML thô - Dùng nếu không có file HTML)</label>
            <textarea 
              className="form-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Nhập mã HTML lý thuyết thô..."
              style={{ minHeight: '120px', fontFamily: 'monospace', fontSize: '0.85rem', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Lưu chủ đề
          </button>
        </form>
      </div>
    </div>
  );
}

// ==============================================================
// SUB-MODAL COMPONENT: EXAM CRUD
// ==============================================================
function ExamModal({ isOpen, onClose, examData, onSave }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(50);
  const [category, setCategory] = useState('thpt');
  const [year, setYear] = useState('2026');
  const [htmlUrl, setHtmlUrl] = useState('');

  useEffect(() => {
    if (examData) {
      setId(examData.id);
      setTitle(examData.title);
      setDuration(examData.duration || 50);
      setCategory(examData.category || 'thpt');
      setYear(examData.year || (examData.title.includes('2025') ? '2025' : examData.title.includes('2027') ? '2027' : '2026'));
      setHtmlUrl(examData.htmlUrl || '');
    } else {
      setId('exam_' + Date.now());
      setTitle('');
      setDuration(50);
      setCategory('thpt');
      setYear('2026');
      setHtmlUrl('');
    }
  }, [examData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !title) {
      alert("Vui lòng điền đầy đủ Mã ID và Tiêu đề!");
      return;
    }
    
    // Auto-align year with the title for 'tot-nghiep' category to work with App.jsx subYearFilter
    let finalTitle = title;
    if (category === 'tot-nghiep' && !title.includes(year)) {
      finalTitle = `Đề thi tốt nghiệp THPT ${year} - ${title}`;
    }

    onSave({
      id,
      title: finalTitle,
      duration: Number(duration),
      category,
      year: category === 'tot-nghiep' ? year : undefined,
      htmlUrl,
      questions: examData?.questions || []
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card modal-card" style={{ maxWidth: '550px', width: '90%' }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">{examData ? 'Chỉnh Sửa Đề Thi' : 'Thêm Đề Thi Mới'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Mã ID (Duy nhất)</label>
            <input 
              type="text" 
              className="form-input"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={!!examData}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tiêu đề đề thi</label>
            <input 
              type="text" 
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ví dụ: Chuyên Hùng Vương - Lần 1"
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="form-group">
              <label className="form-label">Thời gian (Phút)</label>
              <input 
                type="number" 
                className="form-input"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                min="1"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Danh mục đề</label>
              <select 
                className="form-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="thpt">Đề thi các trường THPT</option>
                <option value="so-gd">Đề thi các Sở GD&ĐT</option>
                <option value="tham-khao">Đề thi tham khảo</option>
                <option value="tot-nghiep">Đề tốt nghiệp các năm</option>
              </select>
            </div>
          </div>

          {category === 'tot-nghiep' && (
            <div className="form-group">
              <label className="form-label">Năm tốt nghiệp</label>
              <select 
                className="form-input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2025">Năm 2025</option>
                <option value="2026">Năm 2026</option>
                <option value="2027">Năm 2027</option>
                <option value="2028">Năm 2028</option>
              </select>
            </div>
          )}

          <div className="form-group" style={{ border: '1px dashed var(--border-color)', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', marginTop: '10px' }}>
            <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>Đường dẫn file HTML (nằm trong thư mục public)</label>
            <input 
              type="text" 
              className="form-input"
              value={htmlUrl}
              onChange={(e) => setHtmlUrl(e.target.value)}
              placeholder="Ví dụ: /dethi_2026.html hoặc /2.dethithpt/de_so_1.html"
            />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              Hãy copy file HTML đề thi vào thư mục <code>public</code> của dự án (hoặc thư mục con) rồi gõ đường dẫn tương đối vào đây để hiển thị.
            </p>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Lưu đề thi
          </button>
        </form>
      </div>
    </div>
  );
}
