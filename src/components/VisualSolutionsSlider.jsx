import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import visualSolutionsData from '../data/visual_solutions.json';

const VisualSolutionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeImageIndexes, setActiveImageIndexes] = useState(
    new Array(visualSolutionsData.length).fill(0)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === visualSolutionsData.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === visualSolutionsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? visualSolutionsData.length - 1 : prev - 1));
  };

  const changeProductImage = (slideIndex, imageIndex) => {
    const newIndexes = [...activeImageIndexes];
    newIndexes[slideIndex] = imageIndex;
    setActiveImageIndexes(newIndexes);
  };

  if (!visualSolutionsData || visualSolutionsData.length === 0) return null;

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      margin: '40px 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <Box sx={{
        display: 'flex',
        transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
        transform: `translateX(-${currentSlide * 100}%)`,
        height: { xs: 'auto', md: '600px' }
      }}>
        {visualSolutionsData.map((product, index) => {
          const isActive = index === currentSlide;
          const currentImage = product.images[activeImageIndexes[index]];
          
          return (
            <Box key={product.id} sx={{
              minWidth: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              padding: { xs: '40px 20px 100px', md: '60px' },
              gap: { xs: '20px', md: '40px' }
            }}>
              
              <Box sx={{ flex: 1, zIndex: 2, order: { xs: 2, md: 1 }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography sx={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'primary.main',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: '10px',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.2s'
                }}>
                  {product.category}
                </Typography>
                
                <Typography variant="h2" sx={{
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#333333',
                  mb: '15px',
                  lineHeight: 1.1,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.3s'
                }}>
                  {product.name}
                </Typography>
                
                <Typography sx={{
                  fontSize: '1.1rem',
                  color: '#666666',
                  mb: '25px',
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 },
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.4s'
                }}>
                  {product.description}
                </Typography>
                
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: '15px',
                  mb: '30px',
                  maxWidth: { xs: '400px', md: 'none' },
                  mx: { xs: 'auto', md: 0 },
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.5s'
                }}>
                  {product.features.map((feature, fIdx) => (
                    <Box key={fIdx} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 163, 224, 0.1)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                      transition: 'transform 0.3s ease, background 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.9)'
                      }
                    }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                      <span>{feature}</span>
                    </Box>
                  ))}
                </Box>
                
                <Typography sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: '25px',
                  display: 'block',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.6s'
                }}>
                  {product.price}
                </Typography>
                
                <Box sx={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease 0.7s'
                }}>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" sx={{ py: 1.5, px: 3.5, borderRadius: '5px', textTransform: 'none', fontWeight: 500 }}>
                      Get Quote
                    </Button>
                  </Link>
                  <Link to="/products" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary" sx={{ py: 1.5, px: 3.5, borderRadius: '5px', textTransform: 'none', fontWeight: 500, borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
              
              <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: '15px',
                width: '100%',
                position: 'relative',
                order: { xs: 1, md: 2 }
              }}>
                <Box sx={{
                  flex: 1,
                  height: { xs: '300px', md: '400px' },
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.4)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  mb: { xs: '20px', md: 0 }
                }}>
                  <Box
                    component="img"
                    src={`/${currentImage}`}
                    alt={product.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      transition: 'opacity 0.3s ease, transform 0.5s ease',
                      transform: isActive ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(-10deg)',
                      boxShadow: '0 30px 60px rgba(0, 163, 224, 0.15)'
                    }}
                    onError={(e) => { e.target.src = `https://via.placeholder.com/600x450/00A3E0/ffffff?text=${product.name.replace(/\s+/g, '+')}` }}
                  />
                </Box>
                
                {product.images.length > 1 && (
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', md: 'column' },
                    gap: '12px',
                    padding: '15px 10px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                    zIndex: 5,
                    border: '1px solid rgba(0, 163, 224, 0.15)',
                    mt: { xs: '10px', md: 0 }
                  }}>
                    {product.images.map((img, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={`/${img}`}
                        onClick={() => changeProductImage(index, i)}
                        sx={{
                          width: { xs: '35px', md: '45px' },
                          height: { xs: '35px', md: '45px' },
                          objectFit: 'cover',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          border: '2px solid',
                          borderColor: activeImageIndexes[index] === i ? 'primary.main' : 'transparent',
                          transition: 'all 0.3s ease',
                          opacity: activeImageIndexes[index] === i ? 1 : 0.6,
                          boxShadow: activeImageIndexes[index] === i ? '0 0 10px rgba(0, 163, 224, 0.3)' : 'none',
                          '&:hover': {
                            opacity: 1,
                            transform: 'scale(1.1)'
                          }
                        }}
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Navigation Buttons (Desktop Only) */}
      <Box sx={{
        position: 'absolute',
        bottom: '30px',
        right: '60px',
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: '20px',
        zIndex: 10
      }}>
        <IconButton onClick={prevSlide} sx={{
          width: '50px',
          height: '50px',
          bgcolor: '#fff',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          color: '#333',
          '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'scale(1.1)' },
          transition: 'all 0.3s ease'
        }}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={nextSlide} sx={{
          width: '50px',
          height: '50px',
          bgcolor: '#fff',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          color: '#333',
          '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'scale(1.1)' },
          transition: 'all 0.3s ease'
        }}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Dots */}
      <Box sx={{
        position: 'absolute',
        bottom: '43px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10
      }}>
        {visualSolutionsData.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            sx={{
              width: currentSlide === idx ? '30px' : '12px',
              height: '12px',
              borderRadius: currentSlide === idx ? '10px' : '50%',
              bgcolor: currentSlide === idx ? 'primary.main' : 'rgba(0, 163, 224, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default VisualSolutionsSlider;
