import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Privacy = () => {
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
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            Your privacy is important to us. Learn how we handle your data.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: '60px' }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>1. Information We Collect</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            We collect information that you provide directly to us, such as when you create an account, make a
            purchase, or contact us for support. This may include your name, email address, phone number, and
            billing information.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>2. How We Use Your Information</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            We use the information we collect to provide, maintain, and improve our services, to process
            transactions, and to communicate with you about products, services, and events.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>3. Data Security</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            We implement reasonable security measures to protect the security of your personal information and to
            ensure that your data is handled securely and in accordance with this Privacy Policy.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>4. Sharing of Information</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            We do not share your personal information with third parties except as necessary to provide our
            services, comply with the law, or protect our rights.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>5. Your Choices</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            You may update or correct your personal information at any time by contacting us. You may also opt
            out of receiving promotional communications from us by following the instructions in those
            communications.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>6. Changes to This Policy</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            We may update this Privacy Policy from time to time. If we make changes, we will notify you by
            revising the date at the top of the policy and, in some cases, providing you with additional notice.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>7. Contact Us</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sales@sharpcomputersvja.com" style={{ color: '#00a2ed', textDecoration: 'none' }}>sales@sharpcomputersvja.com</a>.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Privacy;
