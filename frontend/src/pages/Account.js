import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';

const Account = () => {
  // 예시 사용자 데이터 (실제로는 백엔드에서 가져와야 함)
  const userData = {
    name: '홍길동',
    email: 'hong@example.com',
    gender: '남성',
    children: [
      {
        school: '서울초등학교',
        grade: '5학년',
        gender: '남성',
        level: '중',
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          계정 정보
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Typography><b>이름:</b> {userData.name}</Typography>
        <Typography><b>이메일:</b> {userData.email}</Typography>
        <Typography><b>성별:</b> {userData.gender}</Typography>
        <Divider sx={{ margin: '20px 0' }} />
        <Typography variant="h6" gutterBottom>
          자녀 정보
        </Typography>
        {userData.children.map((child, index) => (
          <Box key={index} sx={{ marginBottom: '15px' }}>
            <Typography><b>학교:</b> {child.school}</Typography>
            <Typography><b>학년:</b> {child.grade}</Typography>
            <Typography><b>성별:</b> {child.gender}</Typography>
            <Typography><b>수준:</b> {child.level}</Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Account;
