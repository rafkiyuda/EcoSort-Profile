export default function Locator() {
    return (
        <section>
            <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                <div>
                    <h2 style={{ fontSize: '2.4rem', marginBottom: '24px' }}>Temukan EcoSort RVM</h2>
                    <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '40px' }}>
                        Kami hadir di pusat keramaian, food court, dan resto favorit Anda. Cek lokasi mesin terdekat untuk mulai menukarkan sampahmu.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { loc: "PIM 3, Jakarta Selatan", sub: "Lantai 2, Dekat Food Court" },
                            { loc: "Senayan City, Jakarta", sub: "LGF, Area West Lobby" },
                            { loc: "Paris Van Java, Bandung", sub: "Area Sky Level" }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: i === 0 ? 'rgba(46, 204, 113, 0.05)' : 'white',
                                padding: '20px',
                                borderRadius: '16px',
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'center',
                                border: i === 0 ? '1px solid var(--primary)' : '1px solid #eee'
                            }}>
                                <div style={{ background: 'var(--primary)', color: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                                <div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700 }}>{item.loc}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-grey)' }}>{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-secondary" style={{ marginTop: '32px', width: '100%' }}>Lihat Semua Lokasi</button>
                </div>

                <div style={{
                    height: '500px',
                    background: '#f0f0f0',
                    borderRadius: '30px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.05)'
                }}>
                    <img
                        src="/map.png"
                        alt="EcoSort RVM Map"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.9
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        background: 'white',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        Displaying 12 active RVMs in Jakarta
                    </div>
                </div>
            </div>
        </section>
    );
}
