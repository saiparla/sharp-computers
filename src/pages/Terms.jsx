import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Terms = () => {
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
            Terms & Conditions
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            Please read these terms carefully before using our services.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: '60px' }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>1. Introduction</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            Welcome to Sharp Computers. By accessing our website and using our services, you agree to comply with
            and be bound by the following terms and conditions. If you disagree with any part of these terms,
            please do not use our services.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>2. Use of Services</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            Sharp Computers provides IT solutions, Tally software, and hardware services. You agree to use these
            services only for lawful purposes and in a manner that does not infringe the rights of others or
            restrict their use and enjoyment of the services.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>3. Intellectual Property</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            All content on this website, including text, graphics, logos, and software, is the property of Sharp
            Computers or its content suppliers and is protected by international copyright laws. Unauthorized
            use of any materials may violate copyright and trademark laws.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>4. Limitation of Liability</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            Sharp Computers will not be liable for any direct, indirect, incidental, or consequential damages
            resulting from the use or inability to use our services or for the cost of procurement of substitute
            goods and services.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>5. Privacy Policy</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            Your use of our website is also governed by our Privacy Policy. Please review our policy to
            understand our practices regarding the collection and use of your personal information.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>6. Modifications</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            Sharp Computers reserves the right to modify these terms and conditions at any time without prior
            notice. Your continued use of the website following any changes constitutes your acceptance of the
            new terms.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>7. Contact Us</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:sales@sharpcomputersvja.com" style={{ color: '#00a2ed', textDecoration: 'none' }}>sales@sharpcomputersvja.com</a>.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Terms;
