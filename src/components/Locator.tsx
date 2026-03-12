export default function Locator() {
    const mapData = {
        total: 12,
        active: 9,
        warning: 2,
        offline: 1
    };

    const locations = [
        { city: "Jakarta", x: "48%", y: "45%", units: ["active", "active", "active"] },
        { city: "Tangerang", x: "38%", y: "48%", units: ["active", "warning"] },
        { city: "Depok", x: "50%", y: "58%", units: ["active", "active"] },
        { city: "Bekasi", x: "65%", y: "45%", units: ["offline", "active"] },
        { city: "Bogor", x: "52%", y: "75%", units: ["warning", "active"] },
    ];

    const locationList = [
        { loc: "PIM 3, Jakarta Selatan", sub: "Lantai 2, Dekat Food Court" },
        { loc: "Senayan City, Jakarta", sub: "LGF, Area West Lobby" },
        { loc: "Paris Van Java, Bandung", sub: "Area Sky Level" }
    ];

    return (
        <section>
            <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                {/* Left Side: Info and List */}
                <div>
                    <h2 style={{ fontSize: '2.4rem', marginBottom: '24px' }}>Temukan EcoSort RVM</h2>
                    <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '40px' }}>
                        Kami hadir di pusat keramaian, food court, dan resto favorit Anda. Cek lokasi mesin terdekat untuk mulai menukarkan sampahmu.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {locationList.map((item, i) => (
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

                {/* Right Side: BioBox Style Tech Map */}
                <div style={{
                    background: '#1a252f',
                    borderRadius: '40px',
                    padding: '30px',
                    color: 'white',
                    height: '600px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Peta Unit BioBox</h3>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '8px', height: '8px', background: '#2ECC71', borderRadius: '50%' }}></span> Aktif
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '8px', height: '8px', background: '#f1c40f', borderRadius: '50%' }}></span> Warning
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '8px', height: '8px', background: '#e74c3c', borderRadius: '50%' }}></span> Offline
                            </div>
                        </div>
                    </div>

                    <div style={{
                        position: 'relative',
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '20px',
                        flexGrow: 1,
                        border: '1px solid rgba(255,255,255,0.05)',
                        overflow: 'hidden'
                    }}>
                        {/* Grid Background */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}></div>

                        {/* Jabodetabek Summary Card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                            background: 'rgba(44, 62, 80, 0.9)',
                            backdropFilter: 'blur(5px)',
                            padding: '16px',
                            borderRadius: '16px',
                            width: '180px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            zIndex: 10
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem' }}>
                                <span style={{ background: '#3498db', padding: '2px 6px', borderRadius: '4px' }}>i</span>
                                <span style={{ fontWeight: 700 }}>Jabodetabek</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ opacity: 0.6 }}>Total:</span> <span>{mapData.total}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ opacity: 0.6 }}>Aktif:</span> <span style={{ color: '#2ECC71' }}>{mapData.active}</span>
                                </div>
                            </div>
                        </div>

                        {/* Map Pins */}
                        {locations.map((loc, idx) => (
                            <div key={idx} style={{ position: 'absolute', left: loc.x, top: loc.y, textAlign: 'center' }}>
                                <div style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    padding: '2px 8px',
                                    borderRadius: '6px',
                                    fontSize: '0.7rem',
                                    marginBottom: '4px',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>{loc.city}</div>
                                <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                    {loc.units.map((status, sIdx) => {
                                        const colors: Record<string, string> = {
                                            active: '#2ECC71',
                                            warning: '#f1c40f',
                                            offline: '#e74c3c'
                                        };
                                        return (
                                            <div key={sIdx} style={{
                                                width: '14px',
                                                height: '14px',
                                                background: colors[status],
                                                borderRadius: '50%',
                                                boxShadow: `0 0 10px ${colors[status]}44`,
                                                border: '1.5px solid rgba(255,255,255,0.2)'
                                            }}></div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
