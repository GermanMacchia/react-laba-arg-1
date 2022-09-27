import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import MUIButton from '@mui/material/Button';

const baseSize = '93.75px'; // most buttons are a baseSize*baseSize sqaure
// and only the  = button is a baseSize*baseSize*2 rectangle


const Button = styled(MUIButton)(({ theme }) => ({
  backgroundColor: theme.bgColor,
  color: theme.color,
  '&:hover': {
    backgroundColor: alpha(theme.bgColor, 0.75),
  },
  borderRadius: theme.borderRadius,
  height: theme.rows * baseSize,
  width: theme.cols * baseSize,
}));

export default Button;
