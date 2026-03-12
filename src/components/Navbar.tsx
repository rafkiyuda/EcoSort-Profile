export default function Navbar() {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '20px 0',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/logo.png" alt="EcoSort Logo" style={{ height: '36px' }} />
                    <span style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        color: 'var(--primary-dark)',
                        letterSpacing: '-0.5px'
                    }}>EcoSort</span>
                </div>

                <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.95rem' }}>Home</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-grey)', fontWeight: 500, fontSize: '0.95rem' }}>How It Works</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-grey)', fontWeight: 500, fontSize: '0.95rem' }}>Technology</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-grey)', fontWeight: 500, fontSize: '0.95rem' }}>Eco-Points</a>
                    <button className="btn-primary" style={{ padding: '10px 24px' }}>Unduh Aplikasi</button>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-links a { display: none; }
        }
      `}</style>
        </nav>
    );
}
