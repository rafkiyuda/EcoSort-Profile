export default function Technology() {
    return (
        <section>
            <div className="grid-2" style={{ background: 'var(--text-dark)', color: 'white', borderRadius: '40px', overflow: 'hidden' }}>
                <div style={{ padding: '80px 60px' }}>
                    <div className="badge" style={{ background: 'rgba(46, 204, 113, 0.2)', color: '#2ECC71' }}>The Machine Brain</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', marginTop: '16px' }}>Teknologi Terdepan Vision & IoT</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.7 }}>
                        EcoSort tidak sekadar mengumpulkan sampah, tetapi mengubah setiap gram sisa pembuangan menjadi data keberlanjutan (ESG) yang transparan. Didukung oleh <strong>AI Vision (CNN)</strong> dan dataset <strong>WasteNet</strong>.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div className="tech-item">
                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Computer Vision</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Identifikasi material presisi tinggi menggunakan CNN.</p>
                        </div>
                        <div className="tech-item">
                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>IoT Integration</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Sinkronisasi data real-time untuk laporan dampak ESG.</p>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '40px', background: '#1a252f', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '400px', border: '2px solid #2ECC71', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, transparent, #2ECC71, transparent)', animation: 'scan 2s linear infinite' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#2ECC71' }}>ANALYZING...</span>
                            <span style={{ fontSize: '0.75rem', color: '#2ECC71' }}>LIVE FEED</span>
                        </div>
                        <div style={{ height: '220px', background: '#000', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <div style={{ fontSize: '3rem' }}>🧴</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>PET Plastic</div>
                            <div style={{ fontSize: '0.9rem', color: '#2ECC71', fontFamily: 'monospace' }}>Confidence: 99.4%</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
        </section>
    );
}
