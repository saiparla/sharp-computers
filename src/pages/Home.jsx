import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Modal, IconButton, Chip, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import VisualSolutionsSlider from '../components/VisualSolutionsSlider';

const orderedCategories = [
  "Laptops & Desktops",
  "Gaming Peripherals",
  "Office Solutions",
  "PC Components",
  "Networking / Switches",
  "Networking / Routers",
  "Networking / Adapters"
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const categorizedProducts = useMemo(() => {
    const categories = {};
    productsData.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });
    return categories;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            <span className="badge">25 Years of Excellence</span>
            <h1>Your Trusted Technology Partner</h1>
            <p>Sharp Computers is a leading multi-service IT solutions provider based in Vijayawada. Tally Certified 3-Star Partner empowering Corporates and SMBs.</p>
            <div className="hero-btns">
              <Link to="/services" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-secondary">Get a Quote</Link>
            </div>
          </div>
          <div className="hero-image fade-in-left">
            <img src={`${import.meta.env.BASE_URL}assets/images/hero.png`} alt="Modern Tech Office"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400/00A3E0/ffffff?text=Tech+Office'; }} />
          </div>
        </div>
      </section>

      {/* Highlights Section / Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2>Why Choose Sharp Computers?</h2>
            <p>We deliver quality, innovation, and reliability.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3>25+ Years</h3>
              <p>Proven Expertise</p>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3>Quality</h3>
              <p>Guaranteed Products</p>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3>92%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3>Future-Ready</h3>
              <p>Cloud & AI Solutions</p>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3>Tally</h3>
              <p>Certified 3-Star Partner</p>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3>Complete IT</h3>
              <p>Software, Hardware & Surveillance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Solutions Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center fade-in-up" style={{ marginBottom: '3rem' }}>
            <h2>Our Business Domains</h2>
            <p>Comprehensive solutions across multiple technology sectors</p>
          </div>
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <h3>The business operates across three primary domains:</h3>
              <p style={{ marginTop: '1rem', marginBottom: '2rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                As a comprehensive IT solutions provider, Sharp Computers delivers excellence in Tally Solutions,
                Computer Hardware & Peripherals, and Advanced Surveillance Systems. With over 25 years of expertise,
                we serve businesses across Vijayawada and beyond.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fa-solid fa-calculator"></i> Tally Solutions
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginLeft: '1rem' }}>
                  <div>
                    <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      <i className="fa-solid fa-box" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i> Offerings:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Tally Prime Silver</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Tally Prime Gold</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Tally Server 9</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Tally Prime Enterprise</li>
                    </ul>
                  </div>
                  <div>
                    <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      <i className="fa-solid fa-gear" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i> Services:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-arrow-right" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Sales</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-arrow-right" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Service</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-arrow-right" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Customization</li>
                      <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-arrow-right" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Support</li>
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link to="/tally" className="btn-secondary">Know More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}></i></Link>
                </div>
              </div>
            </div>
            <div className="hero-image fade-in-left">
              <img src={`${import.meta.env.BASE_URL}assets/images/tally/1.jpeg`} alt="Tally Solutions" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Solutions & Projectors Slider */}
      <section className="section-padding bg-light" id="visual-solutions-projectors">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2>Featured Visual Solutions</h2>
            <p>Enhance your workspace with our premium range of projectors, monitors, and business laptops.</p>
          </div>
          <VisualSolutionsSlider />
        </div>
      </section>

      {/* Dynamic Product Sections */}
      <Box sx={{ py: 6, bgcolor: '#f8f9fa' }}>
        <Container>
          {orderedCategories.map(categoryName => {
            const categoryProducts = categorizedProducts[categoryName] || [];
            if (categoryProducts.length === 0) return null;
            
            const displayedProducts = categoryProducts.slice(0, 4);
            const categoryId = categoryName.toLowerCase().replace(/[\s&/]+/g, '-');

            return (
              <Box key={categoryName} sx={{ mb: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    {categoryName}
                  </Typography>
                  <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', mx: 'auto' }} />
                </Box>
                
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                  gap: { xs: '10px', sm: '20px', md: '30px' }
                }}>
                  {displayedProducts.map((product, idx) => (
                    <Box key={idx}>
                      <ProductCard product={product} handleOpenModal={handleOpenModal} />
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Link to={`/products#${categoryId}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary" sx={{ 
                      borderRadius: '5px',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      borderWidth: 2,
                      '&:hover': { borderWidth: 2 }
                    }}>
                      View All {categoryName}
                    </Button>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2>What Our Clients Say</h2>
            <p>Trusted by over 500+ businesses in Vijayawada.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p>"Sharp Computers transformed our entire IT infrastructure. Their Tally support is unmatched in the region."</p>
              <h4>- Rajesh Kumar, CEO, TechFlow</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p>"Quick response time and professional service. Highly recommend them for CCTV and security installations."</p>
              <h4>- Priya Sharma, Director, EduSmart</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <p>"We have been buying hardware from them for 10 years. Excellent after-sales support and genuine products."</p>
              <h4>- V. Reddy, Vijayawada Traders</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2>Visit Us</h2>
            <p>Located in the heart of Gandhinagar.</p>
          </div>
          <div className="map-container fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4057865768856!2d80.6179477!3d16.5186061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff949e25d2b%3A0x6bba30a382e7534c!2sGandhi%20Nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689600000000!5m2!1sen!2sin"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      {/* Product Modal */}
      <Modal
        open={Boolean(selectedProduct)}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', md: 800 },
          maxHeight: '90vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 0,
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProduct && (
            <>
              <Box sx={{ width: { xs: '100%', md: '50%' }, p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fff' }}>
                <img
                  src={`${import.meta.env.BASE_URL}${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
                />
              </Box>
              <Box sx={{ width: { xs: '100%', md: '50%' }, p: 4, bgcolor: '#f8f9fa', overflowY: 'auto', maxHeight: '90vh' }}>
                <Chip label={selectedProduct.category} size="small" sx={{ mb: 2, bgcolor: '#e3f2fd', color: '#0056b3', fontWeight: 600 }} />
                <Typography id="modal-title" variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                  {selectedProduct.name}
                </Typography>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 3 }}>
                  {typeof selectedProduct.price_in_inr === 'number' ? '₹' + selectedProduct.price_in_inr.toLocaleString('en-IN') : selectedProduct.price_in_inr}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                  {selectedProduct.description ? selectedProduct.description.replace(/:contentReference\[oaicite:\d+\]\{index=\d+\}/g, '') : 'No description available.'}
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 3, color: '#2e7d32' }}>
                  {selectedProduct.availability || 'In Stock'}
                </Typography>
                <Button component={Link} to="/contact" variant="contained" color="primary" size="large" fullWidth>
                  Enquire Now
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Home;
