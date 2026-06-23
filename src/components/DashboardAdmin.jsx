import React, { useState } from 'react';
import { Icon } from './Icons';
import { supabase } from '../supabaseClient';

export default function DashboardAdmin({ 
  users, 
  onUpdateUsers, 
  exams, 
  onUpdateExams, 
  documents, 
  onUpdateDocuments 
}) {
  const [activeSubTab, setActiveSubTab] = useState('users'); // 'users', 'exams', 'docs'
  
  // States for CRUD Users
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // null if adding
  const [userFormData, setUserFormData] = useState({ name: '', className: '', username: '', password: '' });
  
  // States for CRUD Exams
  const [showExamForm, setShowExamForm] = useState(false);
  const [examFormData, setExamFormData] = useState({
    title: '',
    category: 'thpt',
    duration: 50,
    questions: []
  });
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: ''
  });

  // States for CRUD Documents
  const [showDocModal, setShowDocModal] = useState(false);
  const [docFormData, setDocFormData] = useState({ title: '', description: '', type: 'PDF', size: '', downloadUrl: '#' });

  /* --- USER CRUD HANDLERS --- */
  const handleOpenAddUser = () => {
    setEditingUser(null);
    setUserFormData({ name: '', className: '', username: '', password: '' });
    setShowUserModal(true);
  };

  const handleOpenEditUser = (user) => {
    setEditingUser(user);
    setUserFormData({ name: user.name, className: user.className || '', username: user.username, password: user.password });
    setShowUserModal(true);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    if (!userFormData.name.trim() || !userFormData.username.trim() || !userFormData.password) {
      alert('Vui lòng điền đầy đủ các thông tin!');
      return;
    }

    if (editingUser) {
      // Edit User - update in Supabase
      try {
        const { error } = await supabase
          .from('hoc_vien')
          .update({
            ho_ten: userFormData.name.trim(),
            lop: userFormData.className.trim(),
            mat_khau: userFormData.password
          })
          .eq('ten_dang_nhap', editingUser.username.toLowerCase());

        if (error) throw error;
      } catch (err) {
        alert("Lỗi cập nhật Supabase: " + err.message);
        return;
      }

      const updatedUsers = users.map(u => {
        if (u.id === editingUser.id) {
          return { 
            ...u, 
            name: userFormData.name.trim(), 
            className: userFormData.className.trim(),
            username: userFormData.username.trim().toLowerCase(), 
            password: userFormData.password 
          };
        }
        return u;
      });
      onUpdateUsers(updatedUsers);
    } else {
      // Add User - insert into Supabase
      const usernameExists = users.some(u => u.username.toLowerCase() === userFormData.username.trim().toLowerCase());
      if (usernameExists) {
        alert('Tên đăng nhập này đã tồn tại!');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('hoc_vien')
          .insert([
            {
              ho_ten: userFormData.name.trim(),
              lop: userFormData.className.trim(),
              ten_dang_nhap: userFormData.username.trim().toLowerCase(),
              mat_khau: userFormData.password
            }
          ]);

        if (error) throw error;
        alert("Đã lưu học viên vào Supabase thành công!");
      } catch (err) {
        alert("Lỗi rồi thầy ơi: " + err.message);
        return;
      }

      const newUser = {
        id: 'user_' + Date.now(),
        name: userFormData.name.trim(),
        className: userFormData.className.trim(),
        username: userFormData.username.trim().toLowerCase(),
        password: userFormData.password,
        role: 'user',
        loginCount: 0,
        history: []
      };
      onUpdateUsers([...users, newUser]);
    }
    setShowUserModal(false);
  };

  const handleDeleteUser = async (userId) => {
    const user = users.find(u => u.id === userId);
    if (user.username === 'admin') {
      alert('Không thể xóa tài khoản admin mặc định!');
      return;
    }
    if (window.confirm(`Bạn có chắc chắn muốn xóa tài khoản "${user.name}"?`)) {
      try {
        const { error } = await supabase
          .from('hoc_vien')
          .delete()
          .eq('ten_dang_nhap', user.username.toLowerCase());

        if (error) throw error;
      } catch (err) {
        alert("Lỗi xóa trên Supabase: " + err.message);
        return;
      }

      const updatedUsers = users.filter(u => u.id !== userId);
      onUpdateUsers(updatedUsers);
    }
  };

  /* --- EXAM CRUD HANDLERS --- */
  const handleAddQuestionToForm = () => {
    if (!newQuestion.question.trim() || newQuestion.options.some(opt => !opt.trim())) {
      alert('Vui lòng điền câu hỏi và đủ 4 đáp án!');
      return;
    }
    setExamFormData(prev => ({
      ...prev,
      questions: [...prev.questions, { ...newQuestion, id: Date.now() + Math.random() }]
    }));
    // Reset question inputs
    setNewQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });
  };

  const handleRemoveQuestionFromForm = (qIdx) => {
    setExamFormData(prev => ({
      ...prev,
      questions: prev.questions.filter((_, idx) => idx !== qIdx)
    }));
  };

  const handleSaveExam = (e) => {
    e.preventDefault();
    if (!examFormData.title.trim()) {
      alert('Vui lòng nhập tiêu đề đề thi!');
      return;
    }
    if (examFormData.questions.length === 0) {
      alert('Đề thi phải có ít nhất 1 câu hỏi! Hãy điền thông tin câu hỏi và bấm "Thêm câu hỏi".');
      return;
    }

    const newExam = {
      id: 'exam_' + Date.now(),
      title: examFormData.title.trim(),
      category: examFormData.category,
      duration: parseInt(examFormData.duration) || 50,
      questions: examFormData.questions
    };

    onUpdateExams([...exams, newExam]);
    setShowExamForm(false);
    // Reset form
    setExamFormData({ title: '', category: 'thpt', duration: 50, questions: [] });
    alert('Đã thêm đề thi mới thành công!');
  };

  const handleDeleteExam = (examId) => {
    const exam = exams.find(e => e.id === examId);
    if (window.confirm(`Bạn có chắc chắn muốn xóa đề thi "${exam.title}"?`)) {
      const updatedExams = exams.filter(e => e.id !== examId);
      onUpdateExams(updatedExams);
    }
  };

  /* --- DOCUMENT CRUD HANDLERS --- */
  const handleSaveDoc = (e) => {
    e.preventDefault();
    if (!docFormData.title.trim() || !docFormData.description.trim()) {
      alert('Vui lòng nhập tên tài liệu và mô tả!');
      return;
    }

    const newDoc = {
      id: 'doc_' + Date.now(),
      title: docFormData.title.trim(),
      description: docFormData.description.trim(),
      type: docFormData.type,
      size: docFormData.size.trim() || '1.0 MB',
      downloadUrl: docFormData.downloadUrl.trim() || '#'
    };

    onUpdateDocuments([...documents, newDoc]);
    setShowDocModal(false);
    setDocFormData({ title: '', description: '', type: 'PDF', size: '', downloadUrl: '#' });
  };

  const handleDeleteDoc = (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (window.confirm(`Bạn có chắc chắn muốn xóa tài liệu "${doc.title}"?`)) {
      const updatedDocs = documents.filter(d => d.id !== docId);
      onUpdateDocuments(updatedDocs);
    }
  };

  return (
    <div className="admin-layout">
      {/* Sidebar Navigation */}
      <div className="admin-sidebar">
        <div 
          className={`admin-nav-item ${activeSubTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('users')}
        >
          <Icon name="User" style={{ width: '18px', height: '18px' }} />
          Quản lý học viên
        </div>
        <div 
          className={`admin-nav-item ${activeSubTab === 'exams' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('exams')}
        >
          <Icon name="Award" style={{ width: '18px', height: '18px' }} />
          Quản lý đề thi
        </div>
        <div 
          className={`admin-nav-item ${activeSubTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('docs')}
        >
          <Icon name="FileText" style={{ width: '18px', height: '18px' }} />
          Quản lý tài liệu
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="admin-panel-content">
        
        {/* TAB 1: USER MANAGEMENT */}
        {activeSubTab === 'users' && (
          <div>
            <div className="panel-header">
              <h2 className="panel-title">Danh sách học viên và tài khoản</h2>
              <button className="btn btn-primary" onClick={handleOpenAddUser}>
                <Icon name="Plus" style={{ width: '16px', height: '16px' }} />
                Thêm học viên mới
              </button>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Họ và tên</th>
                    <th>Lớp</th>
                    <th>Tên đăng nhập</th>
                    <th>Mật khẩu</th>
                    <th>Vai trò</th>
                    <th>Số lần đăng nhập</th>
                    <th>Điểm thi cao nhất</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => {
                    // Calc max score
                    const maxScore = u.history && u.history.length > 0 
                      ? Math.max(...u.history.map(h => h.score)) 
                      : 'Chưa thi';

                    return (
                      <tr key={u.id}>
                        <td><strong>{u.name}</strong></td>
                        <td>
                          {u.className ? (
                            <span className="class-tag">{u.className}</span>
                          ) : (
                            <span style={{ color: 'var(--text-muted)' }}>Chưa cập nhật</span>
                          )}
                        </td>
                        <td><code>{u.username}</code></td>
                        <td><code>{u.password}</code></td>
                        <td>
                          {u.role === 'admin' ? (
                            <span className="status-badge status-badge-admin">Admin</span>
                          ) : (
                            <span className="status-badge status-badge-user">User</span>
                          )}
                        </td>
                        <td>
                          <span className="login-count-badge">
                            {u.loginCount || 0} lần
                          </span>
                        </td>
                        <td>
                          {maxScore !== 'Chưa thi' ? (
                            <span className="score-tag">{maxScore} / 10</span>
                          ) : (
                            <span style={{ color: 'var(--text-muted)' }}>Chưa làm bài</span>
                          )}
                        </td>
                        <td>
                          <div className="td-actions">
                            <button 
                              className="btn btn-secondary btn-icon" 
                              onClick={() => handleOpenEditUser(u)}
                              title="Sửa"
                            >
                              <Icon name="Edit" style={{ width: '14px', height: '14px' }} />
                            </button>
                            {u.username !== 'admin' && (
                              <button 
                                className="btn btn-danger btn-icon" 
                                onClick={() => handleDeleteUser(u.id)}
                                title="Xóa"
                              >
                                <Icon name="Trash" style={{ width: '14px', height: '14px' }} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: EXAM MANAGEMENT */}
        {activeSubTab === 'exams' && (
          <div>
            {!showExamForm ? (
              <div>
                <div className="panel-header">
                  <h2 className="panel-title">Quản lý Đề thi trắc nghiệm</h2>
                  <button className="btn btn-primary" onClick={() => setShowExamForm(true)}>
                    <Icon name="Plus" style={{ width: '16px', height: '16px' }} />
                    Thêm đề thi mới
                  </button>
                </div>

                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Tên đề thi</th>
                        <th>Phân loại</th>
                        <th>Thời lượng</th>
                        <th>Số câu hỏi</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exams.map(e => (
                        <tr key={e.id}>
                          <td><strong>{e.title}</strong></td>
                          <td>
                            {e.category === 'thpt' && <span className="badge badge-thpt">Đề THPT</span>}
                            {e.category === 'so-gd' && <span className="badge badge-so-gd">Đề Sở GD</span>}
                            {e.category === 'tham-khao' && <span className="badge badge-tham-khao">Đề tham khảo</span>}
                            {e.category === 'tot-nghiep' && <span className="badge badge-tot-nghiep">Đề tốt nghiệp</span>}
                          </td>
                          <td>{e.duration} phút</td>
                          <td>{e.questions?.length || 0} câu</td>
                          <td>
                            <button 
                              className="btn btn-danger btn-icon" 
                              onClick={() => handleDeleteExam(e.id)}
                              title="Xóa đề thi"
                            >
                              <Icon name="Trash" style={{ width: '14px', height: '14px' }} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="glass-card" style={{ padding: '32px' }}>
                <div className="back-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px' }}>
                  <button className="back-btn" onClick={() => setShowExamForm(false)}>
                    <Icon name="X" style={{ width: '16px', height: '16px' }} />
                  </button>
                  <h2 style={{ fontSize: '1.25rem' }}>Thêm đề thi trắc nghiệm mới</h2>
                </div>

                <form onSubmit={handleSaveExam}>
                  <div className="form-group">
                    <label className="form-label">Tên/Tiêu đề đề thi</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ví dụ: Đề thi thử THPT Chuyên Nguyễn Huệ - Lần 2..."
                      value={examFormData.title}
                      onChange={e => setExamFormData(prev => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Phân loại</label>
                      <select 
                        className="form-select"
                        value={examFormData.category}
                        onChange={e => setExamFormData(prev => ({ ...prev, category: e.target.value }))}
                      >
                        <option value="thpt">Đề thi các trường THPT</option>
                        <option value="so-gd">Đề thi các sở GD&ĐT</option>
                        <option value="tham-khao">Đề thi tham khảo</option>
                        <option value="tot-nghiep">Đề thi tốt nghiệp các năm</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Thời gian làm bài (phút)</label>
                      <input 
                        type="number" 
                        min="1" 
                        max="180" 
                        className="form-input"
                        value={examFormData.duration}
                        onChange={e => setExamFormData(prev => ({ ...prev, duration: parseInt(e.target.value) || 50 }))}
                        required
                      />
                    </div>
                  </div>

                  {/* Question addition panel */}
                  <div className="glass-card" style={{ marginTop: '24px', background: 'rgba(0,0,0,0.15)', border: '1px dashed var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '16px' }}>Thêm câu hỏi trắc nghiệm</h3>
                    
                    <div className="form-group">
                      <label className="form-label">Nội dung câu hỏi</label>
                      <textarea 
                        className="form-textarea" 
                        placeholder="Nhập câu hỏi..."
                        value={newQuestion.question}
                        onChange={e => setNewQuestion(prev => ({ ...prev, question: e.target.value }))}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      {newQuestion.options.map((opt, oIdx) => (
                        <div key={oIdx} className="form-group">
                          <label className="form-label">Đáp án {String.fromCharCode(65 + oIdx)}</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder={`Lựa chọn ${String.fromCharCode(65 + oIdx)}...`}
                            value={opt}
                            onChange={e => {
                              const opts = [...newQuestion.options];
                              opts[oIdx] = e.target.value;
                              setNewQuestion(prev => ({ ...prev, options: opts }));
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                      <div className="form-group">
                        <label className="form-label">Đáp án chính xác</label>
                        <select 
                          className="form-select"
                          value={newQuestion.correctAnswer}
                          onChange={e => setNewQuestion(prev => ({ ...prev, correctAnswer: parseInt(e.target.value) }))}
                        >
                          <option value={0}>A</option>
                          <option value={1}>B</option>
                          <option value={2}>C</option>
                          <option value={3}>D</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Giải thích chi tiết</label>
                        <input 
                          type="text" 
                          className="form-input"
                          placeholder="Tại sao đáp án này đúng..."
                          value={newQuestion.explanation}
                          onChange={e => setNewQuestion(prev => ({ ...prev, explanation: e.target.value }))}
                        />
                      </div>
                    </div>

                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      style={{ width: '100%', marginTop: '16px' }}
                      onClick={handleAddQuestionToForm}
                    >
                      <Icon name="Plus" style={{ width: '16px', height: '16px' }} />
                      Thêm câu hỏi vào đề thi
                    </button>
                  </div>

                  {/* Question list preview in current form */}
                  <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '12px' }}>Danh sách câu hỏi đã thêm ({examFormData.questions.length})</h3>
                    {examFormData.questions.length === 0 ? (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>Chưa có câu hỏi nào được thêm.</p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {examFormData.questions.map((q, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15,23,42,0.3)', padding: '10px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                            <span style={{ fontSize: '0.9rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '80%' }}>
                              <strong>Câu {idx + 1}:</strong> {q.question}
                            </span>
                            <button 
                              type="button" 
                              className="btn btn-danger btn-icon"
                              onClick={() => handleRemoveQuestionFromForm(idx)}
                              style={{ padding: '4px' }}
                            >
                              <Icon name="Trash" style={{ width: '14px', height: '14px' }} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '32px' }}
                  >
                    Tạo đề thi mới hoàn chỉnh
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: DOCUMENT MANAGEMENT */}
        {activeSubTab === 'docs' && (
          <div>
            <div className="panel-header">
              <h2 className="panel-title">Danh sách tài liệu ôn tập</h2>
              <button className="btn btn-primary" onClick={() => setShowDocModal(true)}>
                <Icon name="Plus" style={{ width: '16px', height: '16px' }} />
                Thêm tài liệu mới
              </button>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Tên tài liệu</th>
                    <th>Định dạng</th>
                    <th>Dung lượng</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map(d => (
                    <tr key={d.id}>
                      <td>
                        <strong>{d.title}</strong>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{d.description}</div>
                      </td>
                      <td><code style={{ color: 'var(--color-secondary)' }}>{d.type}</code></td>
                      <td>{d.size}</td>
                      <td>
                        <button 
                          className="btn btn-danger btn-icon" 
                          onClick={() => handleDeleteDoc(d.id)}
                          title="Xóa tài liệu"
                        >
                          <Icon name="Trash" style={{ width: '14px', height: '14px' }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* MODAL USER CRUD */}
      {showUserModal && (
        <div className="modal-overlay" onClick={() => setShowUserModal(false)}>
          <div className="glass-card modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowUserModal(false)}>
              <Icon name="X" style={{ width: '20px', height: '20px' }} />
            </button>
            
            <h2 className="modal-title">
              {editingUser ? 'Sửa thông tin học viên' : 'Thêm học viên mới'}
            </h2>
            <br />

            <form onSubmit={handleSaveUser}>
              <div className="form-group">
                <label className="form-label">Họ và tên</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={userFormData.name}
                  onChange={e => setUserFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Lớp</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Ví dụ: 12A1, 11A2..."
                  value={userFormData.className}
                  onChange={e => setUserFormData(prev => ({ ...prev, className: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tên đăng nhập</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={userFormData.username}
                  onChange={e => setUserFormData(prev => ({ ...prev, username: e.target.value }))}
                  disabled={!!editingUser} // Cannot change username on edit
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mật khẩu</label>
                <input 
                  type="password" 
                  className="form-input"
                  placeholder="Nhập mật khẩu..."
                  value={userFormData.password}
                  onChange={e => setUserFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Lưu thông tin
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DOC CRUD */}
      {showDocModal && (
        <div className="modal-overlay" onClick={() => setShowDocModal(false)}>
          <div className="glass-card modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDocModal(false)}>
              <Icon name="X" style={{ width: '20px', height: '20px' }} />
            </button>
            
            <h2 className="modal-title">Thêm tài liệu tham khảo mới</h2>
            <br />

            <form onSubmit={handleSaveDoc}>
              <div className="form-group">
                <label className="form-label">Tiêu đề tài liệu</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Ví dụ: Đề cương chi tiết học kỳ 2..."
                  value={docFormData.title}
                  onChange={e => setDocFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mô tả tóm tắt</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Mô tả nội dung tài liệu..."
                  value={docFormData.description}
                  onChange={e => setDocFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Định dạng file</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="PDF, ZIP, DOCX..."
                    value={docFormData.type}
                    onChange={e => setDocFormData(prev => ({ ...prev, type: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Dung lượng</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Ví dụ: 2.4 MB"
                    value={docFormData.size}
                    onChange={e => setDocFormData(prev => ({ ...prev, size: e.target.value }))}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Đường dẫn tải về/Xem (Link URL)</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={docFormData.downloadUrl}
                  onChange={e => setDocFormData(prev => ({ ...prev, downloadUrl: e.target.value }))}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Thêm tài liệu
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
