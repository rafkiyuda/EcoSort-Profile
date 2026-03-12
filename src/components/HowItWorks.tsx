export default function HowItWorks() {
    const steps = [
        { num: "01", title: "SCAN", desc: "Buka aplikasi Ecosort dan pindai QR Code di mesin RVM.", icon: "📱" },
        { num: "02", title: "SORT & DROP", desc: "Pilih jenis sampah (Kertas/Plastik) dan masukkan sisa makananmu.", icon: "🗑️" },
        { num: "03", title: "EARN", desc: "Eco-Points instan! Tukarkan dengan voucher atau saldo e-wallet.", icon: "💰" }
    ];

    return (
        <section style={{ background: 'var(--bg-light)', borderRadius: '40px', padding: '80px 40px', margin: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>Cara Kerja</h2>
                <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem' }}>Mulai kontribusi Anda hanya dalam hitungan detik.</p>
            </div>

            <div className="grid-3">
                {steps.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                        <div style={{
                            fontSize: '6rem',
                            fontWeight: 900,
                            color: 'rgba(46, 204, 113, 0.05)',
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            userSelect: 'none'
                        }}>{s.num}</div>

                        <div style={{ fontSize: '4rem', marginBottom: '24px', position: 'relative' }}>{s.icon}</div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--primary-dark)' }}>{s.title}</h3>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-grey)', padding: '0 20px' }}>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
