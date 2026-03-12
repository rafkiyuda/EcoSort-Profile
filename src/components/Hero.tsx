export default function Hero() {
    return (
        <section style={{ background: 'linear-gradient(180deg, #F8FDF9 0%, #FFFFFF 100%)', padding: '100px 0' }}>
            <div className="container grid-2">
                <div>
                    <div className="badge">Pionir RVM Hibrida di Indonesia</div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        background: 'linear-gradient(135deg, #2C3E50 0%, #2ECC71 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Ubah Sisa Makanan & Sampahmu Menjadi Poin Berharga.
                    </h1>
                    <p style={{ color: 'var(--text-grey)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '500px' }}>
                        Infrastruktur pintar berbasis AI Vision (CNN) untuk memilah sisa makanan, plastik, dan kertas langsung di sumbernya. Bersih kotanya, untung dompetnya.
                    </p>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <button className="btn-primary" style={{ padding: '16px 32px' }}>Cari Mesin Terdekat</button>
                        <button className="btn-secondary" style={{ padding: '16px 32px' }}>Pelajari Caranya</button>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100%',
                        height: '100%',
                        background: 'var(--primary)',
                        borderRadius: '40px',
                        opacity: 0.05,
                        zIndex: 0
                    }}></div>
                    <div className="glass-card" style={{ padding: '16px', position: 'relative', zIndex: 1 }}>
                        <img
                            src="/rvm.png"
                            alt="EcoSort RVM"
                            style={{
                                width: '100%',
                                borderRadius: '24px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          h1 { fontSize: 2.5rem !important; }
        }
      `}</style>
        </section>
    );
}
