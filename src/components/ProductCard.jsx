import React from 'react';
import { Card, Box, CardMedia, CardContent, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductCard = ({ product, handleOpenModal }) => (
  <Card sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    }
  }}>
    <Box sx={{
      height: 220,
      bgcolor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      p: '20px',
      borderBottom: '1px solid rgba(0,0,0,0.04)'
    }}>
      <CardMedia
        component="img"
        image={`/${product.image}`}
        alt={product.name}
        sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
      />
    </Box>
    <CardContent sx={{ flexGrow: 1, p: '24px', display: 'flex', flexDirection: 'column' }}>
      
      <Typography variant="h6" component="h3" sx={{
        fontSize: '1.15rem',
        fontWeight: 600,
        mb: '15px',
        color: '#333',
        lineHeight: 1.4,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        flexGrow: 1
      }}>
        {product.name}
      </Typography>
      
      <Typography sx={{
        fontSize: '1.35rem',
        fontWeight: 700,
        color: '#333',
        mb: '12px'
      }}>
        {typeof product.price_in_inr === 'number' ? '₹' + product.price_in_inr.toLocaleString('en-IN') : product.price_in_inr}
      </Typography>
      
      {product.discount && (
        <Typography sx={{
          fontSize: '0.85rem',
          color: '#28a745',
          fontWeight: 500,
          mb: '12px'
        }}>
          {product.discount}
        </Typography>
      )}

      {handleOpenModal && (
        <Box 
          onClick={() => handleOpenModal(product)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#00a2ed',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'color 0.2s',
            mt: 'auto',
            '&:hover': {
              color: '#008bcf'
            }
          }}
        >
          View Details <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1.2rem', strokeWidth: 2 }} />
        </Box>
      )}
    </CardContent>
  </Card>
);

export default ProductCard;
