import React from 'react';
import { Box, Container, Typography, TextField, Button, MenuItem, Paper, Select } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f8f9fa' }}>
      {/* Page Header */}
      <Box sx={{ 
        bgcolor: '#e3f2fd', 
        py: '40px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontWeight: 700, mb: '8px', fontSize: '2rem', color: '#00a2ed' }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            We're here to help with all your IT needs.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: '60px' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: { xs: '40px', md: '80px' },
            alignItems: 'start'
          }}>
            
            {/* Contact Info (Left Column) */}
            <Box sx={{ animation: 'fadeInLeft 0.8s ease-out' }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: '15px', color: '#333333', fontSize: '1.8rem' }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: '40px', lineHeight: 1.6, fontSize: '0.9rem' }}>
                Ready to upgrade your IT infrastructure? Reach out to us for a consultation or quote.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
                <Box sx={{ 
                  bgcolor: '#e3f2fd', 
                  color: '#00a2ed',
                  width: '40px',
                  height: '40px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: '20px',
                  flexShrink: 0
                }}>
                  <PhoneIcon sx={{ fontSize: '1.2rem' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>Call Us</Typography>
                  <Typography component="a" href="tel:+919849348485" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#00a2ed' } }}>
                    Sales: +91 98493 48485
                  </Typography>
                  <Typography component="a" href="https://wa.me/919246268485" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#25D366' }, mt: 0.5 }}>
                    Business: +91 92462 68485
                  </Typography>
                  <Typography component="a" href="tel:+917416103522" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#00a2ed' }, mt: 0.5 }}>
                    Tally Support: +91 74161 03522
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
                <Box sx={{ 
                  bgcolor: '#e3f2fd', 
                  color: '#00a2ed',
                  width: '40px',
                  height: '40px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: '20px',
                  flexShrink: 0
                }}>
                  <EmailIcon sx={{ fontSize: '1.2rem' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>Email Us</Typography>
                  <Typography component="a" href="mailto:sales@sharpcomputersvja.com" sx={{ color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#00a2ed' } }}>
                    sales@sharpcomputersvja.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: '40px' }}>
                <Box sx={{ 
                  bgcolor: '#e3f2fd', 
                  color: '#00a2ed',
                  width: '40px',
                  height: '40px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: '20px',
                  flexShrink: 0,
                  mt: '2px'
                }}>
                  <LocationOnIcon sx={{ fontSize: '1.2rem' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#333', mb: '2px' }}>Visit Us</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    #26-16-29 Vuyyuru Jamindar Street,<br />Gandhinagar, Vijayawada - 520003
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ 
                height: '220px', 
                width: '100%', 
                borderRadius: '12px', 
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4057865768856!2d80.6179477!3d16.5186061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff949e25d2b%3A0x6bba30a382e7534c!2sGandhi%20Nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689600000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen=""
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Box>
            </Box>

            {/* Contact Form (Right Column) */}
            <Paper elevation={0} sx={{ 
              p: '40px', 
              borderRadius: '16px', 
              animation: 'fadeInUp 0.8s ease-out',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              bgcolor: '#ffffff'
            }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: '30px', color: '#333333', fontSize: '1.2rem' }}>
                Send a Message
              </Typography>

              <Box component="form" id="contactForm" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Name */}
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: '#555', mb: '6px', fontWeight: 500 }}>
                    Your Name <span style={{ color: '#d32f2f' }}>*</span>
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    hiddenLabel
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' }, '& input': { fontSize: '0.85rem', p: '10px 14px' } }}
                  />
                </Box>

                {/* Email */}
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: '#555', mb: '6px', fontWeight: 500 }}>
                    Your Email <span style={{ color: '#d32f2f' }}>*</span>
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    hiddenLabel
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' }, '& input': { fontSize: '0.85rem', p: '10px 14px' } }}
                  />
                </Box>

                {/* Service */}
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: '#555', mb: '6px', fontWeight: 500 }}>
                    Service Interested In
                  </Typography>
                  <Select
                    fullWidth
                    id="service"
                    name="service"
                    defaultValue="General Inquiry"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: '6px', fontSize: '0.85rem' }}
                  >
                    <MenuItem value="General Inquiry" sx={{ fontSize: '0.85rem' }}>General Inquiry</MenuItem>
                    <MenuItem value="Tally Solutions" sx={{ fontSize: '0.85rem' }}>Tally Solutions</MenuItem>
                    <MenuItem value="Hardware Purchase" sx={{ fontSize: '0.85rem' }}>Hardware Purchase</MenuItem>
                    <MenuItem value="Maintenance" sx={{ fontSize: '0.85rem' }}>Maintenance & Support</MenuItem>
                    <MenuItem value="Surveillance" sx={{ fontSize: '0.85rem' }}>Surveillance Systems</MenuItem>
                    <MenuItem value="Networking" sx={{ fontSize: '0.85rem' }}>Networking Solutions</MenuItem>
                    <MenuItem value="Custom Build" sx={{ fontSize: '0.85rem' }}>Custom PC Build</MenuItem>
                  </Select>
                </Box>

                {/* Message */}
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: '#555', mb: '6px', fontWeight: 500 }}>
                    Your Message <span style={{ color: '#d32f2f' }}>*</span>
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    hiddenLabel
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' }, '& textarea': { fontSize: '0.85rem' } }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  startIcon={<SendIcon sx={{ fontSize: '1.1rem !important' }} />}
                  sx={{ 
                    py: '10px', 
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    mt: '5px',
                    borderRadius: '6px',
                    textTransform: 'none',
                    bgcolor: '#00a2ed',
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#008bcf', boxShadow: 'none' }
                  }}
                  id="submitBtn"
                >
                  Send Message
                </Button>
              </Box>
            </Paper>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
