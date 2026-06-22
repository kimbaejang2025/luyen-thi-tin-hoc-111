import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { TopicCard, TopicDetail } from './components/TopicCard';
import ExamCard from './components/ExamCard';
import ExamSession from './components/ExamSession';
import DashboardAdmin from './components/DashboardAdmin';
import AuthModal from './components/AuthModal';
import RelaxSection from './components/RelaxSection';
import { Icon } from './components/Icons';

import { 
  seedTopics, 
  seedExams, 
  seedDocuments, 
  seedUsers 
} from './data/seedData';

export default function App() {
  // --- State Initialization from localStorage or Seed Data ---
  const [topics, setTopics] = useState([]);
  const [exams, setExams] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'topics', 'exams', 'docs', 'admin'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [viewOriginalHtml, setViewOriginalHtml] = useState(false);
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [examCategoryFilter, setExamCategoryFilter] = useState('all');
  const [subYearFilter, setSubYearFilter] = useState('all');
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load initial data
  useEffect(() => {
    // Seeding LocalStorage
    const storedTopics = localStorage.getItem('thpt_tin_topics');
    const storedExams = localStorage.getItem('thpt_tin_exams');
    const storedDocs = localStorage.getItem('thpt_tin_docs');
    const storedUsers = localStorage.getItem('thpt_tin_users');
    const storedTheme = localStorage.getItem('thpt_tin_theme') || 'dark';

    if (storedTopics) {
      const loaded = JSON.parse(storedTopics);
      const seedIds = seedTopics.map(t => t.id);
      const loadedIds = loaded.map(t => t.id);
      const missing = seedTopics.filter(t => !loadedIds.includes(t.id));
      if (missing.length > 0) {
        const merged = [...loaded, ...missing];
        localStorage.setItem('thpt_tin_topics', JSON.stringify(merged));
        setTopics(merged);
      } else {
        setTopics(loaded);
      }
    } else {
      localStorage.setItem('thpt_tin_topics', JSON.stringify(seedTopics));
      setTopics(seedTopics);
    }

    if (storedExams) {
      const loaded = JSON.parse(storedExams);
      const loadedMap = new Map(loaded.map(e => [e.id, e]));
      let changed = false;
      
      seedExams.forEach(se => {
        const existing = loadedMap.get(se.id);
        if (!existing || JSON.stringify(existing.questions) !== JSON.stringify(se.questions)) {
          loadedMap.set(se.id, se);
          changed = true;
        }
      });
      
      if (changed) {
        const merged = Array.from(loadedMap.values());
        localStorage.setItem('thpt_tin_exams', JSON.stringify(merged));
        setExams(merged);
      } else {
        setExams(loaded);
      }
    } else {
      localStorage.setItem('thpt_tin_exams', JSON.stringify(seedExams));
      setExams(seedExams);
    }

    if (storedDocs) {
      const loaded = JSON.parse(storedDocs);
      const seedIds = seedDocuments.map(d => d.id);
      const loadedIds = loaded.map(d => d.id);
      const missing = seedDocuments.filter(d => !loadedIds.includes(d.id));
      if (missing.length > 0) {
        const merged = [...loaded, ...missing];
        localStorage.setItem('thpt_tin_docs', JSON.stringify(merged));
        setDocuments(merged);
      } else {
        setDocuments(loaded);
      }
    } else {
      localStorage.setItem('thpt_tin_docs', JSON.stringify(seedDocuments));
      setDocuments(seedDocuments);
    }

    if (storedUsers) {
      const loaded = JSON.parse(storedUsers);
      const seedIds = seedUsers.map(u => u.id);
      const loadedIds = loaded.map(u => u.id);
      const missing = seedUsers.filter(u => !loadedIds.includes(u.id));
      if (missing.length > 0) {
        const merged = [...loaded, ...missing];
        localStorage.setItem('thpt_tin_users', JSON.stringify(merged));
        setUsers(merged);
      } else {
        setUsers(loaded);
      }
    } else {
      localStorage.setItem('thpt_tin_users', JSON.stringify(seedUsers));
      setUsers(seedUsers);
    }

    // Set theme
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);

    // Auto-login active user session if exists
    const sessionUser = sessionStorage.getItem('thpt_tin_session_user');
    if (sessionUser) {
      setCurrentUser(JSON.parse(sessionUser));
    }

    // Set data loaded flag
    setDataLoaded(true);
  }, []);

  // --- Auth Handlers ---
  const handleLogin = (user) => {
    setCurrentUser(user);
    sessionStorage.setItem('thpt_tin_session_user', JSON.stringify(user));
  };

  const handleRegister = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('thpt_tin_users', JSON.stringify(updatedUsers));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('thpt_tin_session_user');
    if (activeTab === 'admin') {
      navigateTo('home', null, null, false);
    }
  };

  // --- Update Databases via Admin Panel ---
  const handleUpdateUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('thpt_tin_users', JSON.stringify(updatedUsers));
    
    // Sync current session if details changed
    if (currentUser && currentUser.role !== 'admin') {
      const freshUser = updatedUsers.find(u => u.id === currentUser.id);
      if (freshUser) {
        setCurrentUser(freshUser);
        sessionStorage.setItem('thpt_tin_session_user', JSON.stringify(freshUser));
      } else {
        // User deleted
        handleLogout();
      }
    }
  };

  const handleUpdateExams = (updatedExams) => {
    setExams(updatedExams);
    localStorage.setItem('thpt_tin_exams', JSON.stringify(updatedExams));
  };

  const handleUpdateDocuments = (updatedDocs) => {
    setDocuments(updatedDocs);
    localStorage.setItem('thpt_tin_docs', JSON.stringify(updatedDocs));
  };

  // --- Exam Finishing (Record scores) ---
  const handleFinishExam = (scoreDetails) => {
    if (!currentUser) return;

    const updatedUsers = users.map(u => {
      if (u.id === currentUser.id) {
        const history = u.history ? [...u.history] : [];
        return {
          ...u,
          history: [...history, scoreDetails]
        };
      }
      return u;
    });

    handleUpdateUsers(updatedUsers);
  };

  // --- Theme Toggle ---
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('thpt_tin_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // --- Navigation Router with History Support ---
  const navigateTo = (tab, topic = null, exam = null, html = false) => {
    // Check if the state is actually different to avoid pushing duplicate history entries
    const currentHistoryState = window.history.state;
    const isSameState = currentHistoryState &&
      currentHistoryState.activeTab === tab &&
      currentHistoryState.selectedTopicId === (topic ? topic.id : null) &&
      currentHistoryState.selectedExamId === (exam ? exam.id : null) &&
      currentHistoryState.viewOriginalHtml === html;

    if (isSameState) {
      return;
    }

    setActiveTab(tab);
    setSelectedTopic(topic);
    setSelectedExam(exam);
    setViewOriginalHtml(html);

    window.history.pushState({
      activeTab: tab,
      selectedTopicId: topic ? topic.id : null,
      selectedExamId: exam ? exam.id : null,
      viewOriginalHtml: html
    }, '');
  };

  useEffect(() => {
    if (!dataLoaded) return;

    // Set initial history state if it doesn't exist
    const defaultState = {
      activeTab: 'home',
      selectedTopicId: null,
      selectedExamId: null,
      viewOriginalHtml: false
    };

    const curState = window.history.state;
    if (!curState || typeof curState !== 'object' || !('activeTab' in curState)) {
      window.history.replaceState(defaultState, '');
    } else {
      // If there is already a state on load (e.g. page refresh), restore it
      const savedState = window.history.state;
      const topic = savedState.selectedTopicId ? topics.find(t => t.id === savedState.selectedTopicId) : null;
      const exam = savedState.selectedExamId ? exams.find(e => e.id === savedState.selectedExamId) : null;
      
      setActiveTab(savedState.activeTab || 'home');
      setSelectedTopic(topic || null);
      setSelectedExam(exam || null);
      setViewOriginalHtml(!!savedState.viewOriginalHtml);
    }

    const handlePopState = (event) => {
      const state = event.state;
      if (state && typeof state === 'object' && 'activeTab' in state) {
        const topic = state.selectedTopicId ? topics.find(t => t.id === state.selectedTopicId) : null;
        const exam = state.selectedExamId ? exams.find(e => e.id === state.selectedExamId) : null;
        
        setActiveTab(state.activeTab || 'home');
        setSelectedTopic(topic || null);
        setSelectedExam(exam || null);
        setViewOriginalHtml(!!state.viewOriginalHtml);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dataLoaded, topics, exams]);

  // --- Navigation Wrappers ---
  const handleSelectTopic = (topic) => {
    navigateTo('topics', topic, null, false);
  };

  const handleStartExam = (exam, useHtml = false) => {
    if (!currentUser) {
      alert('Vui lòng đăng nhập để lưu kết quả thi thử!');
      setIsAuthModalOpen(true);
      return;
    }
    navigateTo(activeTab, selectedTopic, exam, !!useHtml);
  };

  // --- Filter and Search ---
  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExams = exams.filter(e => {
    const matchesCategory = examCategoryFilter === 'all' || e.category === examCategoryFilter;
    let matchesSubYear = true;
    if (examCategoryFilter === 'tot-nghiep' && subYearFilter !== 'all') {
      if (subYearFilter === '2025') {
        matchesSubYear = e.id === 'exam_totnghiep_2025' || e.title.includes('2025');
      } else if (subYearFilter === '2026') {
        matchesSubYear = e.id === 'exam_totnghiep_2026' || e.title.includes('2026');
      } else if (subYearFilter === '2027') {
        matchesSubYear = e.id === 'exam_totnghiep_2027' || e.title.includes('2027');
      }
    }
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubYear && matchesSearch;
  });

  const stats = {
    topicsCount: topics.length,
    examsCount: exams.length,
    docsCount: documents.length
  };

  const getIframeUrl = (exam) => {
    const url = exam.htmlUrl || "/dethi_2026.html";
    const base = import.meta.env.BASE_URL || "/";
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${cleanBase}${cleanUrl}`;
  };

  return (
    <div className="app-container">
      {/* Decorative background glows */}
      <div className="glow-bg" />
      <div className="glow-bg-2" />

      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          navigateTo(tab, null, null, false);
          setSubYearFilter('all');
        }} 
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Container */}
      <main className="main-content">
        
        {/* --- IN EXAM MODE --- */}
        {selectedExam ? (
          viewOriginalHtml ? null : (
            <ExamSession 
              exam={selectedExam}
              currentUser={currentUser}
              onFinish={handleFinishExam}
              onBack={() => navigateTo(activeTab, selectedTopic, null, false)}
            />
          )
        ) : (
          <>
            {/* --- HOME VIEW --- */}
            {activeTab === 'home' && (
              <div>
                <Hero 
                  onStartStudy={() => navigateTo('topics', null, null, false)} 
                  onStartExam={() => navigateTo('exams', null, null, false)}
                  stats={stats}
                />
                
                {/* Compact Topics Section on Home */}
                <div className="section-header">
                  <h2 className="section-title">Chủ đề kiến thức trọng tâm</h2>
                  <button className="btn btn-secondary" onClick={() => navigateTo('topics', null, null, false)}>
                    Xem tất cả
                  </button>
                </div>
                
                <div className="topics-grid">
                  {topics.slice(0, 3).map(topic => (
                    <TopicCard 
                      key={topic.id} 
                      topic={topic} 
                      onSelect={handleSelectTopic} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* --- TOPICS VIEW --- */}
            {activeTab === 'topics' && (
              <div>
                {selectedTopic ? (
                  <TopicDetail 
                    topic={selectedTopic} 
                    onBack={() => navigateTo('topics', null, null, false)} 
                  />
                ) : (
                  <div>
                    <div className="section-header">
                      <h2 className="section-title">Kiến thức tổng hợp Tin học 12</h2>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ position: 'relative' }}>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Tìm chủ đề học tập..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ paddingLeft: '36px', minWidth: '240px' }}
                          />
                          <Icon name="Search" style={{ position: 'absolute', left: '12px', top: '11px', width: '16px', height: '16px', color: 'var(--text-muted)' }} />
                        </div>
                      </div>
                    </div>

                    <div className="topics-grid">
                      {filteredTopics.map(topic => (
                        <TopicCard 
                          key={topic.id} 
                          topic={topic} 
                          onSelect={handleSelectTopic} 
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* --- EXAMS VIEW --- */}
            {activeTab === 'exams' && (
              <div>
                <div className="section-header">
                  <h2 className="section-title">Luyện đề thi thử trực tuyến</h2>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Tìm kiếm đề thi..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ paddingLeft: '36px', minWidth: '240px' }}
                      />
                      <Icon name="Search" style={{ position: 'absolute', left: '12px', top: '11px', width: '16px', height: '16px', color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                </div>

                {/* Categories filtering tabs */}
                <div className="exams-filter">
                  <button 
                    className={`filter-btn ${examCategoryFilter === 'all' ? 'active' : ''}`}
                    onClick={() => { setExamCategoryFilter('all'); setSubYearFilter('all'); }}
                  >
                    Tất cả đề thi
                  </button>
                  <button 
                    className={`filter-btn ${examCategoryFilter === 'thpt' ? 'active' : ''}`}
                    onClick={() => { setExamCategoryFilter('thpt'); setSubYearFilter('all'); }}
                  >
                    Đề thi các trường THPT
                  </button>
                  <button 
                    className={`filter-btn ${examCategoryFilter === 'so-gd' ? 'active' : ''}`}
                    onClick={() => { setExamCategoryFilter('so-gd'); setSubYearFilter('all'); }}
                  >
                    Đề thi các Sở GD&ĐT
                  </button>
                  <button 
                    className={`filter-btn ${examCategoryFilter === 'tham-khao' ? 'active' : ''}`}
                    onClick={() => { setExamCategoryFilter('tham-khao'); setSubYearFilter('all'); }}
                  >
                    Đề thi tham khảo
                  </button>
                  <button 
                    className={`filter-btn ${examCategoryFilter === 'tot-nghiep' ? 'active' : ''}`}
                    onClick={() => { setExamCategoryFilter('tot-nghiep'); setSubYearFilter('all'); }}
                  >
                    Đề thi tốt nghiệp các năm
                  </button>
                </div>

                {examCategoryFilter === 'tot-nghiep' && (
                  <div className="exams-filter sub-filter" style={{ display: 'flex', gap: '8px', marginTop: '0', marginBottom: '24px', paddingLeft: '0', borderBottom: 'none' }}>
                    <button 
                      className={`filter-btn ${subYearFilter === 'all' ? 'active' : ''}`}
                      onClick={() => setSubYearFilter('all')}
                      style={{ fontSize: '0.9rem', padding: '6px 12px' }}
                    >
                      Tất cả các năm
                    </button>
                    <button 
                      className={`filter-btn ${subYearFilter === '2025' ? 'active' : ''}`}
                      onClick={() => setSubYearFilter('2025')}
                      style={{ fontSize: '0.9rem', padding: '6px 12px' }}
                    >
                      Đề thi tốt nghiệp năm 2025
                    </button>
                    <button 
                      className={`filter-btn ${subYearFilter === '2026' ? 'active' : ''}`}
                      onClick={() => setSubYearFilter('2026')}
                      style={{ fontSize: '0.9rem', padding: '6px 12px' }}
                    >
                      Đề thi tốt nghiệp năm 2026
                    </button>
                    <button 
                      className={`filter-btn ${subYearFilter === '2027' ? 'active' : ''}`}
                      onClick={() => setSubYearFilter('2027')}
                      style={{ fontSize: '0.9rem', padding: '6px 12px' }}
                    >
                      Đề thi tốt nghiệp năm 2027
                    </button>
                  </div>
                )}

                {filteredExams.length > 0 ? (
                  <div className="exams-grid">
                    {filteredExams.map(exam => (
                      <ExamCard 
                        key={exam.id} 
                        exam={exam} 
                        onStart={handleStartExam} 
                      />
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0' }}>Không tìm thấy đề thi phù hợp.</p>
                )}
              </div>
            )}

            {/* --- REFERENCE DOCUMENTS VIEW --- */}
            {activeTab === 'docs' && (
              <div>
                <div className="section-header">
                  <h2 className="section-title">Tài liệu tham khảo ôn tập</h2>
                </div>

                <div className="glass-card docs-list">
                  {documents.map(doc => (
                    <div key={doc.id} className="doc-item" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                      <div className="doc-info">
                        <div className="doc-icon-wrapper">
                          <Icon name="FileText" style={{ width: '28px', height: '28px' }} />
                        </div>
                        <div>
                          <h4 className="doc-title">{doc.title}</h4>
                          <p className="doc-desc">{doc.description}</p>
                          <div className="doc-meta">
                            <span className="doc-type">{doc.type}</span>
                            <span className="doc-size">{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      
                      <a 
                        href={doc.downloadUrl} 
                        className="btn btn-secondary"
                        onClick={(e) => {
                          if (doc.downloadUrl === '#') {
                            e.preventDefault();
                            alert('Tài liệu demo: File PDF chưa được tải lên máy chủ.');
                          }
                        }}
                      >
                        Tải về
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- RELAX SECTION --- */}
            {activeTab === 'relax' && (
              <RelaxSection />
            )}

            {/* --- ADMIN DASHBOARD --- */}
            {activeTab === 'admin' && currentUser && currentUser.role === 'admin' && (
              <DashboardAdmin 
                users={users}
                onUpdateUsers={handleUpdateUsers}
                exams={exams}
                onUpdateExams={handleUpdateExams}
                documents={documents}
                onUpdateDocuments={handleUpdateDocuments}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="footer" style={{
        marginTop: 'auto',
        padding: '32px 24px',
        borderTop: '1px solid var(--border-color)',
        backdropFilter: 'blur(var(--blur-amount))',
        background: 'var(--bg-nav)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
            Hệ thống Luyện thi tốt nghiệp THPT Quốc gia - Môn Tin học
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '0.85rem'
          }}>
            <span>
              <strong>Designed by:</strong> <span style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}>L-Tiger</span>
            </span>
            <span>
              <strong>Contact:</strong> <a href="tel:0879221186" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>0879.22.11.86</a>
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} L-Tiger. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </footer>

      {/* Global Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        registeredUsers={users}
      />

      {/* Fullscreen HTML Exam overlay */}
      {selectedExam && viewOriginalHtml && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999,
          backgroundColor: '#f3f4f6',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Close button X in top-left */}
          <button 
            onClick={() => navigateTo(activeTab, selectedTopic, null, false)} 
            title="Thoát và quay lại"
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 1000000,
              backgroundColor: 'rgba(239, 68, 68, 0.95)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              fontSize: '22px',
              fontWeight: 'bold',
              outline: 'none'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = 'scale(1.1)'; 
              e.currentTarget.style.backgroundColor = '#dc2626'; 
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.4)';
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.transform = 'scale(1)'; 
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.95)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            }}
          >
            ✕
          </button>
          
          <iframe 
            src={getIframeUrl(selectedExam)} 
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none', 
              background: '#ffffff'
            }}
            title={selectedExam.title}
          />
        </div>
      )}
    </div>
  );
}
