import React from 'react';
import { Icon } from './Icons';

export default function ExamCard({ exam, onStart }) {
  const getCategoryLabel = (category) => {
    switch (category) {
      case 'thpt':
        return 'Đề thi THPT';
      case 'so-gd':
        return 'Đề thi Sở GD&ĐT';
      case 'tham-khao':
        return 'Đề thi tham khảo';
      case 'tot-nghiep':
        return 'Đề tốt nghiệp';
      default:
        return 'Khác';
    }
  };

  const getBadgeClass = (category) => {
    return `badge badge-${category}`;
  };

  const handleStartExam = (e, useHtml) => {
    e.stopPropagation();
    onStart(exam, useHtml);
  };

  return (
    <div className="glass-card interactive" onClick={(e) => handleStartExam(e, !!(exam.htmlUrl || exam.htmlContent))}>
      <span className={getBadgeClass(exam.category)}>
        {getCategoryLabel(exam.category)}
      </span>
      
      <h3 className="topic-title" style={{ marginTop: '12px', minHeight: '54px', fontSize: '1.1rem' }}>
        {exam.title}
      </h3>
      
      <div className="exam-meta">
        <div className="exam-meta-item">
          <Icon name="Clock" style={{ width: '16px', height: '16px' }} />
          <span>{exam.duration} phút</span>
        </div>
        <div className="exam-meta-item">
          <Icon name="FileText" style={{ width: '16px', height: '16px' }} />
          <span>{(exam.htmlUrl || exam.htmlContent) ? `${exam.questions?.length || 48} câu hỏi` : `${exam.questions?.length || 0} câu hỏi`}</span>
        </div>
      </div>
      
      {(exam.htmlUrl || exam.htmlContent) ? (
        <button 
          className="btn btn-primary" 
          onClick={(e) => handleStartExam(e, true)} 
          style={{ width: '100%', gap: '6px' }}
        >
          <Icon name="Globe" style={{ width: '16px', height: '16px' }} />
          Xem đề thi gốc (HTML)
        </button>
      ) : (
        <button 
          className="btn btn-primary" 
          onClick={(e) => handleStartExam(e, false)} 
          style={{ width: '100%', gap: '6px' }}
        >
          <Icon name="Award" style={{ width: '16px', height: '16px' }} />
          Bắt đầu làm bài
        </button>
      )}
    </div>
  );
}

