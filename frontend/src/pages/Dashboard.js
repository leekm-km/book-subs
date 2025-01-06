import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
  const subscriptionInfo = {
    totalMonths: 12,
    usedMonths: 3,
    currentLevel: '중',
    booksReceived: ['수학 교재 1', '영어 교재 2'],
    nextBook: '과학 교재 3',
    recommendedBooks: ['국어 교재 4', '사회 교재 5'],
  };

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '20px auto', // 기본 여백
        padding: { xs: '10px', sm: '20px', md: '30px' }, // 반응형 여백
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: { xs: 'center', md: 'left' }, // 모바일에서는 가운데 정렬
        }}
      >
        대시보드
      </Typography>
      <Typography><b>구독 기간:</b> {subscriptionInfo.usedMonths}개월 / {subscriptionInfo.totalMonths}개월</Typography>
      <Typography><b>현재 수준:</b> {subscriptionInfo.currentLevel}</Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>받아본 교재</Typography>
      <List>
        {subscriptionInfo.booksReceived.map((book, index) => (
          <ListItem key={index}>
            <ListItemText primary={book} />
          </ListItem>
        ))}
      </List>
      <Typography><b>다음 달 교재:</b> {subscriptionInfo.nextBook}</Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>추천 교재</Typography>
      <List>
        {subscriptionInfo.recommendedBooks.map((book, index) => (
          <ListItem key={index}>
            <ListItemText primary={book} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
