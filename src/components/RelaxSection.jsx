import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';

// Danh sách 11 game từ thư mục public/Game
const GAMES = [
  {
    id: 'banvit',
    title: 'Bắn Vịt Cổ Điển',
    desc: 'Trò chơi bắn vịt cổ điển, thử thách tài thiện xạ và phản xạ nhanh nhạy của bạn.',
    path: '/Game/banvit_new.html',
    tag: 'Phản xạ • Bắn súng',
    color: 'var(--color-warning)',
    icon: 'Award',
    bg: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'bida',
    title: 'Bi-a Thể Thao',
    desc: 'Trò chơi bi-a hấp dẫn, rèn luyện kỹ năng ngắm bắn chuẩn xác và tính toán góc bóng.',
    path: '/Game/Bida.html',
    tag: 'Trí tuệ • Khéo léo',
    color: 'var(--color-primary)',
    icon: 'Network',
    bg: 'rgba(99, 102, 241, 0.15)',
  },
  {
    id: 'ca_be',
    title: 'Cá Lớn Nuốt Cá Bé',
    desc: 'Điều khiển chú cá nhỏ ăn các loài cá bé hơn để sinh tồn và phát triển đại dương.',
    path: '/Game/ca_be.html',
    tag: 'Kịch tính • Sinh tồn',
    color: 'var(--color-secondary)',
    icon: 'Globe',
    bg: 'rgba(14, 165, 233, 0.15)',
  },
  {
    id: 'caro',
    title: 'Cờ Caro Trí Tuệ',
    desc: 'Trò chơi cờ caro kinh điển đòi hỏi tư duy chiến thuật đỉnh cao để chiến thắng đối thủ.',
    path: '/Game/Caro.html',
    tag: 'Trí tuệ • Chiến thuật',
    color: 'var(--color-warning)',
    icon: 'Plus',
    bg: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'contra',
    title: 'Huyền Thoại Contra',
    desc: 'Game đi ải hành động Retro siêu kinh điển gắn liền với ký ức tuổi thơ dữ dội.',
    path: '/Game/Contra.html',
    tag: 'Hành động • Retro',
    color: 'var(--color-primary)',
    icon: 'Terminal',
    bg: 'rgba(99, 102, 241, 0.15)',
  },
  {
    id: 'covua',
    title: 'Cờ Vua Đối Kháng',
    desc: 'Thử thách trí tuệ đỉnh cao với bộ môn cờ vua quốc tế, đấu trí căng thẳng.',
    path: '/Game/Covua.html',
    tag: 'Trí tuệ • Đấu trí',
    color: 'var(--color-secondary)',
    icon: 'Cpu',
    bg: 'rgba(14, 165, 233, 0.15)',
  },
  {
    id: 'daovang',
    title: 'Đào Vàng Cổ Điển',
    desc: 'Kéo vàng, kim cương và vượt qua mục tiêu điểm số trong khoảng thời gian giới hạn.',
    path: '/Game/Daovang.html',
    tag: 'Kinh điển • Khéo léo',
    color: 'var(--color-warning)',
    icon: 'Database',
    bg: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'duaxe',
    title: 'Đua Xe Tốc Độ',
    desc: 'Lái siêu xe vượt qua mọi chướng ngại vật trên đường đua nghẹt thở kịch tính.',
    path: '/Game/Duaxe.html',
    tag: 'Tốc độ • Phản xạ',
    color: 'var(--color-primary)',
    icon: 'ChevronRight',
    bg: 'rgba(99, 102, 241, 0.15)',
  },
  {
    id: 'flappybird',
    title: 'Flappy Bird',
    desc: 'Điều khiển chú chim Flappy vượt qua các chướng ngại vật đường ống đầy thách thức.',
    path: '/Game/FlappyBird.html',
    tag: 'Kiên nhẫn • Giải trí',
    color: 'var(--color-secondary)',
    icon: 'Globe',
    bg: 'rgba(14, 165, 233, 0.15)',
  },
  {
    id: 'khunglong',
    title: 'Khủng Long T-Rex',
    desc: 'Trò chơi khủng long chạy bộ nhảy qua xương rồng và tránh rồng bay kinh điển.',
    path: '/Game/Khunglong.html',
    tag: 'Kinh điển • Vô tận',
    color: 'var(--color-warning)',
    icon: 'Terminal',
    bg: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'lathinh',
    title: 'Lật Hình Trí Nhớ',
    desc: 'Rèn luyện trí nhớ bằng cách lật tìm các hình ảnh cặp đôi giống nhau trong thời gian ngắn.',
    path: '/Game/Lathinh.html',
    tag: 'Trí tuệ • Trí nhớ',
    color: 'var(--color-primary)',
    icon: 'BookOpenCheck',
    bg: 'rgba(99, 102, 241, 0.15)',
  }
];

export default function RelaxSection() {
  const [subTab, setSubTab] = useState('game'); // 'game', 'clips'
  const [activeGame, setActiveGame] = useState(null); // null, game_id

  return (
    <div className="relax-section">
      <div className="section-header">
        <h2 className="section-title">Góc thư giãn & Giải trí</h2>
        <div className="exams-filter" style={{ marginBottom: 0 }}>
          <button 
            className={`filter-btn ${subTab === 'game' ? 'active' : ''}`}
            onClick={() => { setSubTab('game'); setActiveGame(null); }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="Cpu" style={{ width: '16px', height: '16px' }} />
              Game giải trí
            </span>
          </button>
          <button 
            className={`filter-btn ${subTab === 'clips' ? 'active' : ''}`}
            onClick={() => setSubTab('clips')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="MessageSquare" style={{ width: '16px', height: '16px' }} />
              Clip hài tổng hợp
            </span>
          </button>
        </div>
      </div>

      {subTab === 'game' && (
        <div style={{ marginTop: '24px' }}>
          {!activeGame ? (
            <div className="topics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {GAMES.map(game => (
                <div 
                  key={game.id}
                  className="glass-card interactive" 
                  onClick={() => setActiveGame(game.id)}
                  style={{ borderTop: `4px solid ${game.color}`, display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div className="topic-icon-wrapper" style={{ backgroundColor: game.bg }}>
                    <Icon name={game.icon} style={{ width: '28px', height: '28px', color: game.color }} />
                  </div>
                  <h3 className="topic-title">{game.title}</h3>
                  <p className="topic-desc" style={{ flexGrow: 1 }}>{game.desc}</p>
                  <div className="topic-footer" style={{ marginTop: 'auto', paddingTop: '12px' }}>
                    <span>{game.tag}</span>
                    <button 
                      className="btn btn-primary btn-sm" 
                      style={{ backgroundColor: game.color, color: '#fff', borderColor: game.color }}
                    >
                      Chơi ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <button 
                className="back-btn" 
                onClick={() => setActiveGame(null)} 
                style={{ marginBottom: '20px', gap: '8px', display: 'inline-flex', alignItems: 'center' }}
              >
                <Icon name="X" style={{ width: '16px', height: '16px' }} />
                <span>Quay lại kho game</span>
              </button>

              <GamePlayer 
                game={GAMES.find(g => g.id === activeGame)} 
              />
            </div>
          )}
        </div>
      )}

      {subTab === 'clips' && <FunnyClipsSection />}
    </div>
  );
}

/* ==================== GAME PLAYER COMPONENT ==================== */
const getGameUrl = (path) => {
  if (!path) return '';
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanUrl = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanUrl}`;
};

function GamePlayer({ game }) {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const gameUrl = getGameUrl(game.path);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      } else {
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else {
        setIsFullscreen(false);
      }
    }
  };

  const containerStyle = isFullscreen ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--bg-main, #0f172a)',
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
    border: 'none',
    maxWidth: 'none',
    margin: 0,
    padding: 0
  } : {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative'
  };

  return (
    <div 
      ref={containerRef}
      className={isFullscreen ? "" : "glass-card"} 
      style={containerStyle}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isFullscreen ? '16px 24px' : '0 0 16px 0',
        borderBottom: isFullscreen ? '1px solid var(--border-color)' : 'none',
        backgroundColor: isFullscreen ? 'var(--bg-nav, #1e293b)' : 'transparent',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ textAlign: 'left', flex: '1 1 300px' }}>
          <h3 style={{ fontSize: isFullscreen ? '1.25rem' : '1.5rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icon name={game.icon} style={{ color: game.color, width: '24px', height: '24px' }} />
            {game.title}
          </h3>
          {!isFullscreen && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px', textAlign: 'left', margin: '4px 0 0 0' }}>
              {game.desc}
            </p>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>

          <button 
            className="btn btn-primary btn-sm"
            onClick={toggleFullscreen}
            style={{ 
              padding: '8px 16px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {isFullscreen ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/></svg>
                Thoát toàn màn hình
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3M10 21V10H21M14 3v7H3"/></svg>
                Toàn màn hình
              </>
            )}
          </button>
        </div>
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: isFullscreen ? 'calc(100vh - 72px)' : '600px', 
        backgroundColor: '#000', 
        borderRadius: isFullscreen ? '0' : '12px', 
        overflow: 'hidden',
        border: isFullscreen ? 'none' : '1px solid var(--border-color)'
      }}>
        {loading && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0f172a',
            color: 'var(--text-muted)',
            zIndex: 10
          }}>
            <div className="pulse-button" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: game.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', marginBottom: '16px' }}>
              🎮
            </div>
            <span>Đang tải game {game.title}...</span>
          </div>
        )}
        <iframe
          src={gameUrl}
          title={game.title}
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}

/* ==================== FUNNY CLIPS SECTION ==================== */
function FunnyClipsSection() {
  const clips = [
    {
      id: 'clip_1',
      title: 'Những thánh lầy nghiện rượu sợ vợ - Tập 1',
      description: 'Tổng hợp những tình huống dở khóc dở cười khi các ông chồng sợ vợ.',
      embedId: '-f13MV7lpmY',
      duration: '05:26'
    },
    {
      id: 'clip_2',
      title: 'Hai anh em tinh nghịch - Thử thách nhịn cười',
      description: 'Video hài hước vui nhộn về hai anh em với những trò đùa tinh quái.',
      embedId: 'S32XPKaK7yI',
      duration: '11:12'
    },
    {
      id: 'clip_3',
      title: 'Hài hước Trung Quốc: Siêu nhân lầy lội',
      description: 'Những pha tấu hài cười ra nước mắt của các diễn viên hài Trung Quốc.',
      embedId: 'bzmXOctJsi0',
      duration: '14:42'
    },
    {
      id: 'clip_4',
      title: 'Lý Phi: Khi thông minh hóa ngốc nghếch',
      description: 'Những thất bại bất ngờ và hài hước nhất của Lý Phi.',
      embedId: 'B2qmm3KP0oc',
      duration: '11:49'
    },
    {
      id: 'clip_5',
      title: 'Kung Fu giật trái cây thất bại',
      description: 'Pha biểu diễn Kung Fu hài hước và cái kết ê chề khi trộm hoa quả.',
      embedId: 'o0qRDZrUmvA',
      duration: '15:49'
    },
    {
      id: 'clip_6',
      title: 'Hài Trung Quốc tuyển chọn siêu hài hước',
      description: 'Tổng hợp những clip hài hước ngắn đang làm mưa làm gió trên mạng xã hội.',
      embedId: 'ClJxMuVqS6s',
      duration: '11:16'
    },
    {
      id: 'clip_7',
      title: 'Lý Phi: Vừa uống một ngụm đã bị bắt quả tang',
      description: 'Câu chuyện hài hước không đỡ nổi khi Lý Phi cố gắng giấu vợ uống rượu.',
      embedId: 'FHKA2duwGlc',
      duration: '33:26'
    },
    {
      id: 'clip_8',
      title: 'Lý Phi: Uống rượu bị vợ bắt và cái kết',
      description: 'Hậu quả dở khóc dở cười khi bị vợ phát hiện uống rượu lén.',
      embedId: 'uUJDpofgcS8',
      duration: '22:01'
    },
    {
      id: 'clip_9',
      title: 'Lý Phi: Đồ ăn ngon thế này phải giành thôi',
      description: 'Pha tấu hài giành đồ ăn cực kỳ hài hước trong gia đình Lý Phi.',
      embedId: 'qY4r1P3aRIo',
      duration: '12:09'
    },
    {
      id: 'clip_10',
      title: 'Tuyển tập hài kịch ngắn cười vỡ bụng',
      description: 'Những tình huống tấu hài đời thường vui nhộn và vô cùng giải trí.',
      embedId: 'tqSia7VJiK0',
      duration: '15:16'
    },
    {
      id: 'clip_11',
      title: 'Nấu bún mắm ở quê ngon bổ rẻ | Lê Tuấn Khang',
      description: 'Cách nấu bún mắm mang đậm hương vị miền Tây dân dã và vô cùng hài hước.',
      embedId: 'c213-6A98lw',
      duration: '13:23'
    },
    {
      id: 'clip_12',
      title: 'Ở bên cồn miền quê sông nước | Lê Tuấn Khang',
      description: 'Hành trình khám phá cuộc sống đầy thú vị và những câu chuyện cười ra nước mắt.',
      embedId: 'yzB5LaPPK_M',
      duration: '04:25'
    },
    {
      id: 'clip_13',
      title: 'Vườn ông Tám, ông Tám trong vườn | Lê Tuấn Khang',
      description: 'Chuyện kể hài hước xung quanh khu vườn nhà ông Tám miền Tây.',
      embedId: 'ys3_ai99DRw',
      duration: '04:32'
    },
    {
      id: 'clip_14',
      title: 'Ẩm thực sinh tồn: Nướng cánh gà trên đá nung',
      description: 'Cách chế biến món cánh gà nướng độc đáo bằng đá tự nhiên cực kỳ hấp dẫn.',
      embedId: 'nYEnbF7ROWA',
      duration: '10:02'
    }
  ];

  return (
    <div style={{ marginTop: '24px' }}>
      <div className="topics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
        {clips.map(clip => (
          <div key={clip.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${clip.embedId}`}
                title={clip.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>
            <div style={{ padding: '16px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>{clip.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{clip.description}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="Clock" style={{ width: '12px', height: '12px' }} />
                  {clip.duration}
                </span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Giải trí</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
