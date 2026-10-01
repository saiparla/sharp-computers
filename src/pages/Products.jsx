import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Modal,
  IconButton,
  Divider,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const orderedCategories = [
  "Laptops & Desktops",
  "Gaming Peripherals",
  "Office Solutions",
  "PC Components",
  "Networking / Switches",
  "Networking / Routers",
  "Networking / Adapters"
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return null; // null means we are categorizing
    const lowerTerm = searchTerm.toLowerCase();
    return productsData.filter(product =>
      product.name.toLowerCase().includes(lowerTerm) ||
      (product.description && product.description.toLowerCase().includes(lowerTerm)) ||
      (product.category && product.category.toLowerCase().includes(lowerTerm))
    );
  }, [searchTerm]);

  // Group products by category when not searching
  const categorizedProducts = useMemo(() => {
    if (filteredProducts !== null) return null;
    const categories = {};
    productsData.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });
    return categories;
  }, [filteredProducts]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const toggleCategoryExpanded = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <>
      {/* Page Header */}
      <Box sx={{ bgcolor: '#e3f2fd', py: 8, textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container>
          <Typography variant="h3" component="h2" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
            Our Products & Partners
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Quality Hardware and Software from Global Brands
          </Typography>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
              Product Range
            </Typography>
            <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', mx: 'auto', mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              We supply a wide range of IT and electronic products sourced from trusted brands.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '50px', bgcolor: '#fff' } }}
            />
          </Box>

          {/* Search Results */}
          {filteredProducts && (
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: { xs: '10px', sm: '20px', md: '30px' },
              mt: 4
            }}>
              {filteredProducts.length === 0 ? (
                <Box sx={{ gridColumn: '1 / -1' }}>
                  <Typography align="center">No products found matching your search.</Typography>
                </Box>
              ) : (
                filteredProducts.map((product, idx) => (
                  <Box key={idx}>
                    <ProductCard product={product} handleOpenModal={handleOpenModal} />
                  </Box>
                ))
              )}
            </Box>
          )}

          {/* Categorized Products */}
          {categorizedProducts && orderedCategories.map((categoryName) => {
            if (!categorizedProducts[categoryName]) return null;

            const categoryId = categoryName.toLowerCase().replace(/[\s&/]+/g, '-');
            const products = categorizedProducts[categoryName];
            const isExpanded = expandedCategories[categoryName];
            const initialLimit = 8;
            const displayedProducts = isExpanded ? products : products.slice(0, initialLimit);

            return (
              <Box key={categoryName} id={categoryId} sx={{ mb: 8, scrollMarginTop: '100px' }}>
                <Box sx={{ textAlign: 'center', pt: 2, mb: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    {categoryName}
                  </Typography>
                  <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', mx: 'auto' }} />
                </Box>

                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                  gap: { xs: '10px', sm: '20px', md: '30px' },
                  mt: 4
                }}>
                  {displayedProducts.map((product, idx) => (
                    <Box key={idx}>
                      <ProductCard product={product} handleOpenModal={handleOpenModal} />
                    </Box>
                  ))}
                </Box>

                {!isExpanded && products.length > initialLimit && (
                  <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button variant="outlined" color="primary" onClick={() => toggleCategoryExpanded(categoryName)}>
                      View All {categoryName}
                    </Button>
                  </Box>
                )}
              </Box>
            );
          })}
        </Container>
      </Box>

      {/* Brands Section */}
      <Box sx={{ py: 8, bgcolor: '#e3f2fd' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
              Our Technology Partners
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We work with industry-leading brands to ensure quality and reliability.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {['Dell', 'HP', 'Lenovo', 'Intel', 'Canon', 'BenQ', 'Tally', 'Hikvision'].map((brand, idx) => (
              <Grid item key={idx}>
                <Box sx={{
                  bgcolor: '#ffffff',
                  px: '15px',
                  py: '22px',
                  borderRadius: '14px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                  fontWeight: 600,
                  color: '#1f2933',
                  fontSize: '1.05rem',
                  textAlign: 'center',
                  minWidth: '120px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.35s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '3px',
                    width: '100%',
                    background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.35s ease'
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)'
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 18px 45px rgba(37, 99, 235, 0.18)',
                    color: '#2563eb'
                  }
                }}>
                  {brand}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
                  src={`/${selectedProduct.image}`}
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

export default Products;
