import React, { useState } from 'react';
import { Icon } from './Icons';

export function TopicCard({ topic, onSelect }) {
  return (
    <div className="glass-card interactive" onClick={() => onSelect(topic)}>
      <div className="topic-icon-wrapper">
        <Icon name={topic.icon} style={{ width: '28px', height: '28px' }} />
      </div>
      <h3 className="topic-title">{topic.title}</h3>
      <p className="topic-desc">{topic.description}</p>
      <div className="topic-footer">
        <span>Xem khung sườn ôn tập</span>
        <Icon name="ChevronRight" style={{ width: '16px', height: '16px' }} />
      </div>
    </div>
  );
}

export function TopicDetail({ topic, onBack }) {
  const [answers, setAnswers] = useState({});
  const [checkedQuestions, setCheckedQuestions] = useState({});

  const handleSelectOption = (qId, optionIdx) => {
    if (checkedQuestions[qId]) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleCheckAnswer = (qId) => {
    if (answers[qId] === undefined) {
      alert('Vui lòng chọn một đáp án trước khi kiểm tra!');
      return;
    }
    setCheckedQuestions(prev => ({ ...prev, [qId]: true }));
  };

  // Mock quiz questions for the topic skeleton
  const skeletonQuiz = [
    {
      id: `${topic.id}_sq1`,
      question: `[Câu hỏi trắc nghiệm số 1 ôn tập về ${topic.title} đang biên soạn]`,
      options: ['[Đáp án mẫu A]', '[Đáp án mẫu B]', '[Đáp án mẫu C]', '[Đáp án mẫu D]'],
      correctAnswer: 0,
      explanation: `[Nội dung giải thích chi tiết cho câu hỏi 1 về ${topic.title} đang được bổ sung].`
    },
    {
      id: `${topic.id}_sq2`,
      question: `[Câu hỏi trắc nghiệm số 2 ôn tập về ${topic.title} đang biên soạn]`,
      options: ['[Đáp án mẫu A]', '[Đáp án mẫu B]', '[Đáp án mẫu C]', '[Đáp án mẫu D]'],
      correctAnswer: 1,
      explanation: `[Nội dung giải thích chi tiết cho câu hỏi 2 về ${topic.title} đang được bổ sung].`
    }
  ];

  const getTopicIframeUrl = (topic) => {
    const url = topic.htmlUrl;
    if (!url) return undefined;
    const base = import.meta.env.BASE_URL || "/";
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${cleanBase}${cleanUrl}`;
  };

  if (topic.htmlContent || topic.htmlUrl) {
    return (
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
          onClick={onBack}
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
          srcDoc={topic.htmlContent || undefined}
          src={!topic.htmlContent && topic.htmlUrl ? getTopicIframeUrl(topic) : undefined}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: '#ffffff'
          }}
          title={topic.title}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="back-header">
        <button className="back-btn" onClick={onBack} title="Quay lại">
          <Icon name="X" style={{ width: '18px', height: '18px' }} />
        </button>
        <div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Khung sườn kiến thức</span>
          <h1 style={{ fontSize: '1.75rem', marginTop: '2px' }}>{topic.title}</h1>
        </div>
      </div>

      <div className="topic-detail-layout">
          {/* Left: Lecture Content */}
          <div className="glass-card lecture-content">
            <div className="lecture-text" dangerouslySetInnerHTML={{ __html: topic.content || '<h2>Tóm tắt lý thuyết</h2><p>Nội dung lý thuyết đang được cập nhật...</p>' }}>
            </div>
          </div>

          {/* Right: Quick Quiz Sidebar */}
          <div className="topic-quiz-sidebar">
            <div className="glass-card" style={{ position: 'sticky', top: '100px' }}>
              <div className="quick-quiz-header">
                <Icon name="BookOpenCheck" style={{ width: '22px', height: '22px', color: 'var(--color-primary)' }} />
                <span>Trắc nghiệm ôn tập nhanh</span>
              </div>

              <div>
                {(topic.quiz && topic.quiz.length > 0 ? topic.quiz : skeletonQuiz).map((q, idx) => {
                  const isChecked = checkedQuestions[q.id];
                  const selectedIdx = answers[q.id];
                  const isCorrect = selectedIdx === q.correctAnswer;

                  return (
                    <div key={q.id} className="quiz-question-card">
                      <div className="quiz-question-text" style={{ fontSize: '0.9rem' }}>
                        Câu {idx + 1}: {q.question}
                      </div>
                      
                      <div className="quiz-options-list">
                        {q.options.map((opt, optIdx) => {
                          let className = 'quiz-option-btn';
                          if (selectedIdx === optIdx) {
                            className += ' selected';
                          }
                          if (isChecked) {
                            if (optIdx === q.correctAnswer) {
                              className = 'quiz-option-btn correct';
                            } else if (selectedIdx === optIdx) {
                              className = 'quiz-option-btn incorrect';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              className={className}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={isChecked}
                              style={{ fontSize: '0.85rem', padding: '8px 12px' }}
                            >
                              {String.fromCharCode(65 + optIdx)}. {opt}
                            </button>
                          );
                        })}
                      </div>

                      {!isChecked ? (
                        <button
                          className="btn btn-secondary"
                          style={{ width: '100%', marginTop: '12px', fontSize: '0.8rem', padding: '8px' }}
                          onClick={() => handleCheckAnswer(q.id)}
                        >
                          Kiểm tra kết quả
                        </button>
                      ) : (
                        <div className="quiz-explanation" style={{ fontSize: '0.8rem', padding: '8px' }}>
                          <strong>{isCorrect ? 'Chính xác! ' : 'Chưa đúng! '}</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
