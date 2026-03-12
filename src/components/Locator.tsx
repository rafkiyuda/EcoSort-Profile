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
        { city: "Depok", x: "48%", y: "55%", units: ["active", "active"] },
        { city: "Bekasi", x: "60%", y: "45%", units: ["offline", "active"] },
        { city: "Bogor", x: "50%", y: "65%", units: ["warning", "active"] },
    ];

    return (
        <section>
            <div style={{ background: '#1a252f', borderRadius: '40px', padding: '60px', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ fontSize: '1.5rem', color: '#2ECC71' }}>📍</div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Peta Unit EcoSort</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: '#fff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '12px', height: '12px', background: '#2ECC71', borderRadius: '50%' }}></span> Aktif
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '12px', height: '12px', background: '#f1c40f', borderRadius: '50%' }}></span> Peringatan
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '12px', height: '12px', background: '#e74c3c', borderRadius: '50%' }}></span> Offline
                        </div>
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '24px',
                    height: '600px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    overflow: 'hidden'
                }}>
                    {/* Grid Background */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        opacity: 0.5
                    }}></div>

                    {/* Jabodetabek Summary Card */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '40px',
                        background: 'rgba(44, 62, 80, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '24px',
                        borderRadius: '20px',
                        width: '240px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        zIndex: 10
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <span style={{ background: '#3498db', padding: '5px', borderRadius: '5px', fontSize: '1rem' }}>ⓘ</span>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Jabodetabek</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.7 }}>Total Unit:</span> <span>{mapData.total}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.7 }}>Aktif:</span> <span>{mapData.active}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.7 }}>Peringatan:</span> <span>{mapData.warning}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ opacity: 0.7 }}>Offline:</span> <span>{mapData.offline}</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Pins */}
                    {locations.map((loc, idx) => (
                        <div key={idx} style={{ position: 'absolute', left: loc.x, top: loc.y, textAlign: 'center' }}>
                            <div style={{
                                background: 'rgba(0,0,0,0.8)',
                                padding: '4px 12px',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                marginBottom: '8px',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>{loc.city}</div>
                            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                                {loc.units.map((status, sIdx) => {
                                    const colors: Record<string, string> = {
                                        active: '#2ECC71',
                                        warning: '#f1c40f',
                                        offline: '#e74c3c'
                                    };
                                    return (
                                        <div key={sIdx} style={{
                                            width: '18px',
                                            height: '18px',
                                            background: colors[status],
                                            borderRadius: '50%',
                                            boxShadow: `0 0 15px ${colors[status]}44`,
                                            border: '2px solid rgba(255,255,255,0.2)'
                                        }}></div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
