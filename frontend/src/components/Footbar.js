import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6"> 학림도서 / 대웅교육 </Typography>
          <Typography variant="body2">대표 : 이용수 </Typography>
          <Typography variant="body2">주소 : 부산 사상구 학감대로177번길 56 </Typography>
          <Typography variant="body2">연락처 : 051-316-3070 </Typography>
          <Typography variant="body3">© All Rights Reserved.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Links</Typography>
          <Box display="flex" flexDirection="row" gap={1}>
            <Link href="/" color="inherit" underline="none">Home</Link>
            <Link href="/products" color="inherit" underline="none">Products</Link>
            <Link href="/contact" color="inherit" underline="none">Contact</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">Email: leekm.inc@gmail.com</Typography>
          <Typography variant="body2">Phone: +82 10 2128 2238</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;