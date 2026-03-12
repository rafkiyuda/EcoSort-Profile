export default function Footer() {
    return (
        <footer style={{ background: '#F8F9FA', padding: '100px 0 40px', borderTop: '1px solid #eee' }}>
            <div className="container">
                <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr 1fr', gap: '80px', marginBottom: '80px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                            <img src="/logo.png" alt="EcoSort Logo" style={{ height: '32px' }} />
                            <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary-dark)' }}>EcoSort</span>
                        </div>
                        <p style={{ color: 'var(--text-grey)', lineHeight: 1.8, maxWidth: '350px' }}>
                            Solusi infrastruktur pengelolaan limbah cerdas pertama di Indonesia dengan sistem pemilahan hibrida berbasis AI & IoT.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Menu</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={{ color: 'var(--text-grey)', textDecoration: 'none' }}>Tentang Kami</a></li>
                            <li><a href="#" style={{ color: 'var(--text-grey)', textDecoration: 'none' }}>Cara Kerja</a></li>
                            <li><a href="#" style={{ color: 'var(--text-grey)', textDecoration: 'none' }}>Teknologi</a></li>
                            <li><a href="#" style={{ color: 'var(--text-grey)', textDecoration: 'none' }}>Eco-Marketplace</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Hubungi Kami</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li style={{ color: 'var(--text-grey)' }}>info@ecosort.id</li>
                            <li style={{ color: 'var(--text-grey)' }}>+62 21 1234 5678</li>
                            <li style={{ color: 'var(--text-grey)' }}>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#999' }}>
                    <span>© 2026 EcoSort Indonesia. All Rights Reserved.</span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
