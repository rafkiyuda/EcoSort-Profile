export default function USP() {
    const points = [
        {
            title: "Mandatory Food Sorting",
            desc: "Pemisahan sisa makanan wajib secara terpisah dari kemasan untuk mencegah kontaminasi.",
            icon: "🥗"
        },
        {
            title: "AI Vision Validation",
            desc: "Sensor CNN (Convolutional Neural Network) yang mengenali jenis sampah secara akurat.",
            icon: "👁️"
        },
        {
            title: "Customizable Input",
            desc: "Fleksibilitas memilah antara plastik atau kertas langsung di titik pembuangan.",
            icon: "♻️"
        }
    ];

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>Kenapa Pilih EcoSort?</h2>
                <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem' }}>Solusi hibrida pertama di Indonesia untuk pengelolaan limbah cerdas.</p>
            </div>

            <div className="grid-3">
                {points.map((p, i) => (
                    <div key={i} className="glass-card" style={{
                        padding: '40px 30px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            marginBottom: '24px',
                            display: 'inline-block',
                            background: 'rgba(46, 204, 113, 0.05)',
                            width: '100px',
                            height: '100px',
                            lineHeight: '100px',
                            borderRadius: '50%'
                        }}>
                            {p.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{p.title}</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-grey)', lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                ))}
            </div>

            <style>{`
        .glass-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
        </section>
    );
}
