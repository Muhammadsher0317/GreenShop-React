import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Mana shu yerda kutubxona kerak
import RemoveIcon from '@mui/icons-material/Remove';

const NumberSpinner = ({ label, min = 0, max = 100, defaultValue = 1 }) => {
  const [value, setValue] = useState(defaultValue);

  const handleAdd = () => value < max && setValue(value + 1);
  const handleRemove = () => value > min && setValue(value - 1);

  return (
    <Box>
      <Typography variant="body2">{label}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={handleRemove} color="success" sx={{ border: '1px solid' }}>
          <RemoveIcon />
        </IconButton>
        
        <Typography sx={{ minWidth: '30px', textAlign: 'center' }}>{value}</Typography>
        
        <IconButton onClick={handleAdd} color="success" sx={{ border: '1px solid' }}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NumberSpinner;