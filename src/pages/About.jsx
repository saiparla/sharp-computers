import React from 'react';

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container text-center">
          <h2>About Us</h2>
          <p>25+ Years of Trust & Technology Leadership in Vijayawada.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid-page">
            <div className="about-text fade-in-up">
              <h2>Who We Are</h2>
              <p>Founded over two decades ago, <strong>Sharp Computers</strong> has grown into a trusted name in
                the regional IT ecosystem. Our journey began with a clear vision: to make technology accessible,
                understandable, and effective for businesses and individuals alike.</p>
              <p>Over the years, we have adapted to rapid technological changes—from traditional desktop systems
                to cloud computing and intelligent hardware—while maintaining our core values of integrity,
                service quality, and customer satisfaction.</p>
              <p>Today, Sharp Computers stands as a one-stop IT solutions provider, combining software expertise
                with strong hardware and infrastructure capabilities.</p>

              <h3>Our Strength</h3>
              <ul className="check-list">
                <li><i className="fa-solid fa-star"></i> <strong>25+ Years</strong> in IT Industry</li>
                <li><i className="fa-solid fa-users"></i> <strong>Trusted</strong> by Corporates, SMBs & Individuals</li>
                <li><i className="fa-solid fa-certificate"></i> <strong>Authorized</strong> & Certified Software Partner</li>
                <li><i className="fa-solid fa-headset"></i> <strong>Dedicated</strong> Post-Sales Support</li>
              </ul>
            </div>
            <div className="about-img fade-in-left">
              <img src={`${import.meta.env.BASE_URL}assets/images/hero.png`} alt="Office Team"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600/00A3E0/ffffff?text=Our+Team'; }} />
            </div>
          </div>

          {/* Timeline / Process (New Section) */}
          <div className="timeline-section" style={{ marginTop: '80px' }}>
            <h2 className="text-center mb-50">Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2001</span>
                <h4>Inception</h4>
                <p>Started operations in Gandhinagar with focus on PC Assembly.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2008</span>
                <h4>Tally Partnership</h4>
                <p>Became authorized Tally Partners, expanding into software solutions.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2015</span>
                <h4>Expansion</h4>
                <p>Added Surveillance & Security division to our portfolio.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2026</span>
                <h4>One-Stop Solution</h4>
                <p>Celebrating 25 years as a premier IT provider in Andhra Pradesh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="mb-50">Our Brand Partnerships</h2>
          <div className="partners-grid-page fade-in-up">
            <div className="partner-card"><i className="fa-brands fa-dell"></i> <span>Dell</span></div>
            <div className="partner-card"><span>Lenovo</span></div>
            <div className="partner-card"><span>Intel</span></div>
            <div className="partner-card"><span>HP</span></div>
            <div className="partner-card"><span>Canon</span></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
