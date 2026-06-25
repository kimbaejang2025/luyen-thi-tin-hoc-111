import React from 'react';
import { Icon } from './Icons';

export default function Navbar({ activeTab, setActiveTab, currentUser, onLogout, onOpenLogin, theme, toggleTheme, student, isNavbarVisible }) {
  const user = student || currentUser;
  return (
    <div className={`navbar-wrapper ${isNavbarVisible !== false ? '' : 'navbar-hidden'}`}>
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => setActiveTab('home')}>
          <Icon name="Cpu" style={{ width: '28px', height: '28px' }} />
          <span>Luyện Thi Tin Học THPT</span>
        </div>
        
        <div className="navbar-links">
          <div 
            className={`nav-link ${activeTab === 'topics' ? 'active' : ''}`}
            onClick={() => setActiveTab('topics')}
          >
            Kiến thức tổng hợp
          </div>
          <div 
            className={`nav-link ${activeTab === 'exams' ? 'active' : ''}`}
            onClick={() => setActiveTab('exams')}
          >
            Đề thi thử
          </div>
          <div 
            className={`nav-link ${activeTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Tài liệu tham khảo
          </div>
          <div 
            className={`nav-link ${activeTab === 'relax' ? 'active' : ''}`}
            onClick={() => setActiveTab('relax')}
          >
            Thư giãn
          </div>
          {user && user.role === 'admin' && (
            <div 
              className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
              style={{ color: 'var(--color-danger)', fontWeight: '600' }}
            >
              Quản trị viên
            </div>
          )}
        </div>
        
        <div className="navbar-actions">
          <button className="btn-theme" onClick={toggleTheme} title="Đổi giao diện Sáng/Tối">
            {theme === 'dark' ? <Icon name="Sun" /> : <Icon name="Moon" />}
          </button>
          
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="user-badge">
                <Icon name="User" style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                <span>{user.name || user.ho_ten}</span>
                {user.role === 'admin' ? (
                  <span className="status-badge status-badge-admin">Admin</span>
                ) : (
                  <span className="status-badge status-badge-user">Học viên</span>
                )}
              </div>
              <button 
                className="btn btn-secondary btn-icon" 
                onClick={onLogout}
                title="Đăng xuất"
              >
                <Icon name="LogOut" style={{ width: '18px', height: '18px' }} />
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={onOpenLogin}>
              <Icon name="User" style={{ width: '18px', height: '18px' }} />
              Đăng nhập
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
