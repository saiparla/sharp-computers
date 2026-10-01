import React from 'react';
import { Link } from 'react-router-dom';

const Tally = () => {
  return (
    <main>
      {/* Tally Hero */}
      <section className="tally-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <img src="/assets/images/tally/Tally_-_Logo.png" alt="Tally Solutions Logo" className="tally-logo-large" />
              <h1>Powering Smarter Business Management</h1>
              <p>At Sharp Computers, we don’t just sell Tally — we transform the way you manage your business.
                With over 25 years of proven expertise, we deliver reliable, scalable, and fully supported
                Tally Solutions.</p>
              <div className="hero-btns">
                <a href="#contact-cta" className="btn-primary">Consult with Expert</a>
                <a href="#product-range" className="btn-secondary">Explore Products</a>
              </div>
            </div>
            <div className="hero-image fade-in-left">
              <img src="/assets/images/tally/1.jpeg" alt="Tally Business Management" style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding" id="product-range">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="badge">Sales & Licensing</span>
            <h2>Our Tally Product Range</h2>
            <p>Simplified accounting solutions for every business scale.</p>
          </div>

          <div className="grid-3">
            <div className="product-card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="product-icon"><i className="fa-solid fa-user"></i></div>
              <h3>Tally Prime Silver</h3>
              <p>Perfect for small businesses and individual users looking for fast, easy, and accurate
                accounting. Manage GST, inventory, banking, and compliance effortlessly.</p>
            </div>
            <div className="product-card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="product-icon"><i className="fa-solid fa-users"></i></div>
              <h3>Tally Prime Gold</h3>
              <p>Built for growing businesses that need multi-user access. Enable your team to work
                simultaneously with shared data — securely and efficiently.</p>
            </div>
            <div className="product-card fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="product-icon"><i className="fa-solid fa-server"></i></div>
              <h3>Tally Server 9</h3>
              <p>A high-performance solution for heavy data usage. Experience faster processing, better data
                security, and uninterrupted performance.</p>
            </div>
          </div>

          <div style={{ marginTop: '30px' }} className="fade-in-up">
            <div className="product-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div className="product-icon" style={{ margin: '0 auto 1.5rem' }}><i className="fa-solid fa-building"></i></div>
              <h3>Tally Prime Enterprise</h3>
              <p>An advanced, enterprise-grade solution tailored for complex business environments. Scalable,
                powerful, and customizable to match your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="fade-in-up">
              <span className="badge">End-to-End Support</span>
              <h2>Complete Tally Services Under One Roof</h2>
              <p style={{ marginBottom: '2rem' }}>We provide comprehensive support to ensure you get maximum value
                from your Tally investment.</p>

              <div className="service-item">
                <div className="service-icon"><i className="fa-solid fa-certificate"></i></div>
                <div>
                  <h4>Authorized Sales & Licensing</h4>
                  <p>Get genuine Tally software with expert guidance to choose the right edition.</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><i className="fa-solid fa-download"></i></div>
                <div>
                  <h4>Installation & Setup</h4>
                  <p>Seamless implementation with correct configuration to ensure zero downtime.</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                <div>
                  <h4>Customization & Integration</h4>
                  <p>Customized invoices, reports, and workflows that match your business processes.</p>
                </div>
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="service-item">
                <div className="service-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
                <div>
                  <h4>Training & Support</h4>
                  <p>Hands-on training and dependable support for smooth operations.</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><i className="fa-solid fa-rotate"></i></div>
                <div>
                  <h4>Upgrades & Compliance</h4>
                  <p>Stay updated with the latest versions, GST changes, and statutory requirements.</p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '30px', background: 'var(--white)', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                <h3>Why Trust Sharp Computers?</h3>
                <div className="trust-badge"><i className="fa-solid fa-circle-check"></i> 25+ years of industry experience</div>
                <div className="trust-badge"><i className="fa-solid fa-circle-check"></i> Proven Tally expertise across sectors</div>
                <div className="trust-badge"><i className="fa-solid fa-circle-check"></i> customer-first service approach</div>
                <div className="trust-badge"><i className="fa-solid fa-circle-check"></i> Trusted by businesses across Vijayawada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding" id="contact-cta">
        <div className="container">
          <div className="cta-box fade-in-up">
            <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Ready to Simplify Your Accounting?</span>
            <h2>Take Control of Your Business Finances</h2>
            <p>Empower your business with smart, reliable, and future-ready Tally Solutions from Sharp Computers.</p>
            <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary-color)' }}>Contact Us Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tally;
