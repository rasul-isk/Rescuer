import React from 'react';
import { Typography, Box } from '@mui/material';
import { colors } from '../theme';

const DifficultyCard = ({ difficulty, description, onClick }) => {
  return (
    <Box className="container-item" onClick={() => onClick(difficulty)} bgcolor={colors.primary[500]} sx={{ display: 'block', padding: '30px 0', cursor: 'pointer' }}>
      <Box align-content="space-between">
        <Typography variant="h4" textAlign="left" color={colors.red[500]} mb="40px" p="15px">
          {description}
        </Typography>
        <Typography variant="h2" fontSize="26px" textAlign="center" color={colors.red[500]} p="0 15px">
          {difficulty}
        </Typography>
      </Box>
    </Box>
  );
};

export default DifficultyCard;
