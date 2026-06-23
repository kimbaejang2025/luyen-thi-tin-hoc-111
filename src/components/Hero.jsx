import React from 'react';
import { Icon } from './Icons';

export default function Hero({ onStartStudy, onStartExam, stats, onStartClick }) {
  const handleStartStudy = onStartStudy || onStartClick;
  const handleStartExam = onStartExam || onStartClick;
  return (
    <div className="hero">
      <div className="hero-tag">Chương trình Tin học THPT mới nhất</div>
      <h1 className="hero-title">
        Luyện Thi Tốt Nghiệp THPT <br />
        <span>Môn Tin Học</span>
      </h1>
      <p className="hero-desc">
        Hệ thống học tập lý thuyết thông minh, ngân hàng đề thi bám sát định hướng kiểm tra đánh giá mới của Bộ Giáo dục & Đào tạo. Học sâu - Luyện kỹ - Đạt điểm tối đa.
      </p>
      
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
        <button className="btn btn-primary pulse-button" onClick={handleStartStudy}>
          <Icon name="BookOpen" style={{ width: '18px', height: '18px' }} />
          Bắt đầu ôn tập lý thuyết
        </button>
        <button className="btn btn-secondary" onClick={handleStartExam}>
          <Icon name="Award" style={{ width: '18px', height: '18px' }} />
          Luyện đề thi thử
        </button>
      </div>


      <div className="hero-stats">
        <div className="stat-item glass-card" style={{ padding: '16px 32px', minWidth: '150px' }}>
          <div className="stat-val">{stats.topicsCount}</div>
          <div className="stat-lbl">Chủ đề lý thuyết</div>
        </div>
        <div className="stat-item glass-card" style={{ padding: '16px 32px', minWidth: '150px' }}>
          <div className="stat-val">{stats.examsCount}</div>
          <div className="stat-lbl">Đề thi phong phú</div>
        </div>
        <div className="stat-item glass-card" style={{ padding: '16px 32px', minWidth: '150px' }}>
          <div className="stat-val">{stats.docsCount}</div>
          <div className="stat-lbl">Tài liệu tham khảo</div>
        </div>
      </div>
    </div>
  );
}
