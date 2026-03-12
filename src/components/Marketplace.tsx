export default function Marketplace() {
    const rewards = [
        { title: "Voucher Food Court", points: "500 Eco-Points", img: "🎫", desc: "Voucher makan senilai Rp 50.000" },
        { title: "Pupuk Organik", points: "1500 Eco-Points", img: "🌱", desc: "1kg Pupuk hasil olahan limbah" },
        { title: "Tas Daur Ulang", points: "2000 Eco-Points", img: "👜", desc: "Tas belanja premium ramah lingkungan" },
        { title: "Saldo E-Wallet", points: "Varies", img: "💳", desc: "Tukarkan ke Dana, GoPay, atau OVO" }
    ];

    return (
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
                <div>
                    <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>Eco-Marketplace</h2>
                    <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem' }}>Dari Sampah Menjadi Sumber Daya Bersih.</p>
                </div>
                <button className="btn-secondary" style={{ padding: '12px 24px' }}>Lihat Semua Reward</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {rewards.map((r, i) => (
                    <div key={i} className="reward-card" style={{
                        background: '#F8F9FA',
                        borderRadius: '24px',
                        padding: '32px 24px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{r.img}</div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{r.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-grey)', marginBottom: '16px' }}>{r.desc}</p>
                        <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>{r.points}</div>
                    </div>
                ))}
            </div>

            <style>{`
        @media (max-width: 1024px) {
          div[style*="repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          div[style*="repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
        .reward-card:hover {
          background: white;
          box-shadow: var(--shadow-soft);
          transform: translateY(-5px);
        }
      `}</style>
        </section>
    );
}
