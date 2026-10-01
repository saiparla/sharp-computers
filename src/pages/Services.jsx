import React from 'react';
import { Box, Container, Typography, Grid, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import MemoryIcon from '@mui/icons-material/Memory';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';

const ServiceRow = ({ reverse, img, alt, title, icon: Icon, desc, features }) => {
  return (
    <Box sx={{ py: 5, animation: 'fadeInUp 0.8s ease-out' }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: { xs: '30px', md: '50px' }, 
        alignItems: 'center' 
      }}>
        <Box sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
          <Box 
            component="img" 
            src={img} 
            alt={alt} 
            sx={{ 
              width: '100%', 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }} 
          />
        </Box>
        <Box sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '12px' }}>
            <Box sx={{ 
              width: '40px',
              height: '40px',
              bgcolor: '#e3f2fd', 
              borderRadius: '8px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0
            }}>
              <Icon sx={{ fontSize: '1.2rem', color: 'primary.main' }} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#0056b3', m: 0 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontSize: '0.9rem', lineHeight: 1.5 }}>
            {desc}
          </Typography>
          <List disablePadding>
            {features.map((feature, idx) => (
              <ListItem key={idx} sx={{ px: 0, py: '2px' }}>
                <ListItemIcon sx={{ minWidth: '28px', color: 'primary.main' }}>
                  <CheckCircleIcon sx={{ fontSize: '1rem' }} />
                </ListItemIcon>
                <ListItemText primary={feature} sx={{ m: 0, '& .MuiListItemText-primary': { color: 'text.secondary', fontSize: '0.85rem' } }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

const Services = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f8f9fa' }}>
      {/* Page Header */}
      <Box sx={{ 
        bgcolor: '#e3f2fd', 
        py: '30px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontWeight: 700, mb: '6px', fontSize: '1.5rem', color: '#333333' }}>
            Our Services
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            Comprehensive IT Solutions for Every Need.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: '60px' }}>
        <Container maxWidth="lg">
          {/* Tally */}
          <ServiceRow
            img="/assets/images/tally.png"
            alt="Tally Solutions"
            title="Tally Solutions"
            icon={PieChartIcon}
            desc="As a Tally Certified 3-Star Partner, we provide complete Tally software solutions to streamline accounting, GST compliance, inventory, and reporting."
            features={[
              "Tally Prime (Silver, Gold, Server 9)",
              "Installation & Configuration",
              "TDL Customization",
              "Data Migration & Integration",
              "AMC & Technical Support"
            ]}
          />

          <Divider sx={{ my: 4 }} />

          {/* Hardware */}
          <ServiceRow
            reverse
            img="/assets/images/hardware.png"
            alt="Hardware & IT Infrastructure"
            title="Hardware & IT Infrastructure"
            icon={MemoryIcon}
            desc="We deliver high-performance hardware and scalable IT infrastructure solutions for offices, enterprises, and individuals."
            features={[
              "Desktops & Laptops (Dell, HP, Lenovo)",
              "Chip-Level Repair & Upgrades",
              "Structured Networking & Racks",
              "Custom Gaming PCs"
            ]}
          />

          <Divider sx={{ my: 4 }} />

          {/* Security */}
          <ServiceRow
            img="/assets/images/surveillance.png"
            alt="Surveillance Systems"
            title="Surveillance Systems (CCTV)"
            icon={SecurityIcon}
            desc="Enhance security with our reliable CCTV surveillance solutions for homes, offices, shops, and warehouses."
            features={[
              "HD & IP Cameras",
              "DVR / NVR Solutions",
              "Professional Installation",
              "Mobile & Cloud Monitoring",
              "Maintenance & Support"
            ]}
          />

          <Divider sx={{ my: 4 }} />

          {/* Maintenance */}
          <ServiceRow
            reverse
            img="/assets/images/support.png"
            alt="IT Support"
            title="Maintenance & Networking"
            icon={BuildIcon}
            desc="Our expert team ensures your systems are always up and running. We offer reliable hardware repair and robust networking solutions."
            features={[
              "Hardware Repair",
              "Networking Setup",
              "Annual Maintenance"
            ]}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
