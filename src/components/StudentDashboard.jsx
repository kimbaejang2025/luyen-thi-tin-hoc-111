import React from 'react';
import { Icon } from './Icons';

export default function StudentDashboard({ studentInfo, onStartStudy, onStartExam, onViewDocs }) {
  const history = studentInfo.history || [];
  
  // Calculate statistics
  const examsCompleted = history.length;
  const maxScore = history.length > 0 
    ? Math.max(...history.map(h => h.score || 0)) 
    : 0;
  
  const avgScore = history.length > 0 
    ? (history.reduce((sum, h) => sum + (h.score || 0), 0) / history.length).toFixed(1)
    : 0;

  return (
    <div className="student-dashboard" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Welcome Card */}
      <div className="glass-card" style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(14, 165, 233, 0.1) 100%)',
        borderColor: 'var(--border-hover)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '1.85rem', marginBottom: '8px' }}>
            Chào mừng học viên, <span style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800'
            }}>{studentInfo.name}</span>!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', marginBottom: '20px' }}>
            Lớp học: <span className="class-tag" style={{ background: 'var(--bg-active)', border: '1px solid var(--border-hover)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', color: 'var(--color-secondary)', fontWeight: 'bold' }}>{studentInfo.className || 'Chưa cập nhật'}</span>
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={onStartExam}>
              <Icon name="Award" style={{ width: '18px', height: '18px' }} />
              Luyện đề thi trực tuyến
            </button>
            <button className="btn btn-secondary" onClick={onStartStudy}>
              <Icon name="BookOpen" style={{ width: '18px', height: '18px' }} />
              Ôn tập kiến thức
            </button>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          right: '5%',
          bottom: '-20%',
          opacity: 0.08,
          fontSize: '12rem',
          fontWeight: 900,
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
          🎓
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {/* Stat 1: Exams count */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            background: 'var(--bg-active)',
            color: 'var(--color-primary)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="BookOpen" style={{ width: '28px', height: '28px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Đề thi đã hoàn thành</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
              {examsCompleted} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>bài</span>
            </div>
          </div>
        </div>

        {/* Stat 2: Max score */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--color-success)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="Award" style={{ width: '28px', height: '28px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Điểm thi cao nhất</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-success)', marginTop: '4px' }}>
              {maxScore} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ 10</span>
            </div>
          </div>
        </div>

        {/* Stat 3: Average score */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            background: 'rgba(14, 165, 233, 0.15)',
            color: 'var(--color-secondary)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="TrendingUp" style={{ width: '28px', height: '28px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Điểm trung bình</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '4px' }}>
              {avgScore} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ 10</span>
            </div>
          </div>
        </div>

        {/* Stat 4: Login counts */}
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            background: 'rgba(245, 158, 11, 0.15)',
            color: 'var(--color-warning)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="Activity" style={{ width: '28px', height: '28px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Số lần học tập</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-warning)', marginTop: '4px' }}>
              {studentInfo.loginCount || 1} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>lần</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exam History Section */}
      <div className="glass-card">
        <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="Activity" style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
          Lịch sử thi thử trắc nghiệm
        </h3>

        {history.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 0',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📝</div>
            Bạn chưa tham gia đợt thi thử nào. Hãy bấm "Luyện đề thi trực tuyến" để bắt đầu!
          </div>
        ) : (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tên đề thi</th>
                  <th>Phân loại</th>
                  <th>Thời gian làm bài</th>
                  <th>Số câu đúng</th>
                  <th>Điểm số</th>
                  <th>Xếp loại</th>
                </tr>
              </thead>
              <tbody>
                {[...history].reverse().map((attempt, index) => {
                  const score = attempt.score || 0;
                  let classification = 'Chưa đạt';
                  let classColor = 'var(--color-danger)';
                  if (score >= 8.5) {
                    classification = 'Xuất sắc';
                    classColor = 'var(--color-success)';
                  } else if (score >= 7.0) {
                    classification = 'Khá';
                    classColor = 'var(--color-secondary)';
                  } else if (score >= 5.0) {
                    classification = 'Trung bình';
                    classColor = 'var(--color-warning)';
                  }

                  return (
                    <tr key={index}>
                      <td><strong>{attempt.examTitle || 'Đề thi trắc nghiệm'}</strong></td>
                      <td>
                        <span className="badge badge-thpt" style={{ textTransform: 'capitalize' }}>
                          {attempt.category || 'THPT'}
                        </span>
                      </td>
                      <td>
                        {attempt.timeSpent ? `${attempt.timeSpent} phút` : 'Không có'}
                      </td>
                      <td>
                        <span style={{ fontWeight: '500' }}>
                          {attempt.correctCount || 0} / {attempt.totalQuestions || 40}
                        </span>
                      </td>
                      <td>
                        <span style={{
                          fontWeight: 'bold',
                          color: score >= 5 ? 'var(--color-success)' : 'var(--color-danger)',
                          fontSize: '1.1rem'
                        }}>
                          {score} / 10
                        </span>
                      </td>
                      <td>
                        <span className="status-badge" style={{
                          backgroundColor: `${classColor}20`,
                          color: classColor,
                          border: `1px solid ${classColor}40`,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          {classification}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
