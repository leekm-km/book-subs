import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Alert } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    childSchool: '',
    childGrade: '',
    childGender: '',
    childLevel: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 실제 API 호출 로직 추가
    console.log('회원가입 데이터:', formData);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h5" textAlign="center" marginBottom="20px">
        회원가입
      </Typography>
      {error && <Alert severity="error" sx={{ marginBottom: '20px' }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="이름" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="이메일" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="비밀번호" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="비밀번호 확인" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} margin="normal" required />
        <TextField fullWidth select label="성별" name="gender" value={formData.gender} onChange={handleChange} margin="normal" required>
          <MenuItem value="남성">남성</MenuItem>
          <MenuItem value="여성">여성</MenuItem>
        </TextField>
        <TextField fullWidth label="자녀 학교" name="childSchool" value={formData.childSchool} onChange={handleChange} margin="normal" required />
        <TextField fullWidth select label="자녀 학년" name="childGrade" value={formData.childGrade} onChange={handleChange} margin="normal" required>
          {['1학년', '2학년', '3학년', '4학년', '5학년', '6학년', '중1', '중2', '중3', '고1', '고2', '고3'].map((grade) => (
            <MenuItem key={grade} value={grade}>{grade}</MenuItem>
          ))}
        </TextField>
        <TextField fullWidth select label="자녀 성별" name="childGender" value={formData.childGender} onChange={handleChange} margin="normal" required>
          <MenuItem value="남성">남성</MenuItem>
          <MenuItem value="여성">여성</MenuItem>
        </TextField>
        <TextField fullWidth select label="자녀 수준" name="childLevel" value={formData.childLevel} onChange={handleChange} margin="normal" required>
          <MenuItem value="상">상</MenuItem>
          <MenuItem value="중">중</MenuItem>
          <MenuItem value="하">하</MenuItem>
        </TextField>
        <Button fullWidth type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          회원가입
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
