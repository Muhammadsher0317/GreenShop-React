import React, { useState } from 'react';
import { Chip, Stack, Box } from '@mui/material';

const SizeSelector = () => {
  // O'lchamlar ro'yxati (Massiv)
  const sizes = ['S', 'M', 'L', 'XL'];
  
  // Tanlangan o'lchamni saqlash (Default: 'S')
  const [selectedSize, setSelectedSize] = useState('S');

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={1.5}>
        {sizes.map((size) => (
          <Chip
            key={size}
            label={size}
            onClick={() => setSelectedSize(size)}
            // Tanlangan bo'lsa ko'k, bo'lmasa och kulrang
            variant={selectedSize === size ? "filled" : "outlined"}
            color={selectedSize === size ? "primary" : "default"}
            sx={{
              width: 45,
              height: 45,
              borderRadius: '50%', // Rasmdagidek dumaloq qilish
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              // Rasmdagi fokus effektini (ko'k ramka) berish uchun:
              border: selectedSize === size ? '2px solid #1976d2' : '1px solid #e0e0e0',
              '& .MuiChip-label': { padding: 0 } 
            }}
          />
        ))}
      </Stack>
      
      {/* Tanlanganini tekshirish uchun pastda matn */}
      <p>Tanlangan o'lcham: <b>{selectedSize}</b></p>
    </Box>
  );
};

export default SizeSelector;