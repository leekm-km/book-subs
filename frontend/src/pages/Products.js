import React, { useState } from 'react';
import { Select, Input, Button, Card, List, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const products = [
  {
    image: 'https://via.placeholder.com/150',
    publisher: '천재교육',
    subject: '영어',
    grade: '고등',
    title: '적중 영어 기출',
    price: '10,000원',
  },
  {
    image: 'https://via.placeholder.com/150',
    publisher: '메가스터디',
    subject: '수학',
    grade: '고2',
    title: '수학 N제',
    price: '15,000원',
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const [inputTitle, setInputTitle] = useState('');

  const handleSearch = () => {
    const filtered = products.filter((product) => {
      return (
        (selectedGrade ? product.grade === selectedGrade : true) &&
        (selectedSubject ? product.subject === selectedSubject : true) &&
        (selectedPublisher ? product.publisher === selectedPublisher : true) &&
        (inputTitle ? product.title.includes(inputTitle) : true)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 안내 문구 */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: 'clamp(20px, 2rem, 30px)', fontWeight: 'bold', margin: 0 }}>
          서비스를 구독하면 받아볼 수 있는 교재들을 소개합니다.
        </p>
        <p style={{ fontSize: 'clamp(15px, 1.5rem, 25px)', margin: '5px 0 20px' }}>
          책구독 서비스를 이용하시면, 수준 체크를 통한 추천도서를 한 달에 한 권씩! 집으로 무료 배송해드립니다.
        </p>
        <div>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/Pricing')}
            style={{
              width: '200px',
              marginTop: '20px',
            }}
          >
            구독하러 가기
          </Button>
        </div>
      </div>
      <Divider />

      {/* 검색 영역 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Select
          placeholder="학년 선택"
          style={{ width: '200px' }}
          onChange={(value) => setSelectedGrade(value)}
        >
          {['초1', '초2', '초3', '초4', '초5', '초6', '중1', '중2', '중3', '고1', '고2', '고3'].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="과목 선택"
          style={{ width: '200px' }}
          onChange={(value) => setSelectedSubject(value)}
        >
          {['국어', '영어', '수학', '과학', '사회'].map((subject) => (
            <Option key={subject} value={subject}>
              {subject}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="출판사 선택"
          style={{ width: '200px' }}
          onChange={(value) => setSelectedPublisher(value)}
        >
          {['천재교육', '메가스터디'].map((publisher) => (
            <Option key={publisher} value={publisher}>
              {publisher}
            </Option>
          ))}
        </Select>
        <Input
          placeholder="책 이름 입력"
          style={{ width: '250px' }}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <Button type="primary" onClick={handleSearch}>
          검색
        </Button>
      </div>
      <Divider />

      {/* 리스트 영역 */}
      <List
        itemLayout="horizontal"
        dataSource={filteredProducts}
        renderItem={(product) => (
          <List.Item style={{ padding: '20px 0', borderBottom: 'none' }}> {/* 구분선 제거 */}
            <Card
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center', // 이미지와 정보 모두 세로 중앙 정렬
                padding: '20px',
                border: '1px solid #f0f0f0',
              }}
              bodyStyle={{ display: 'flex', flex: 1 }}
            >
              {/* 이미지 영역 */}
              <img
                src={product.image}
                alt="book"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                }}
              />
              {/* 이미지와 정보 사이 Divider */}
              <Divider
                type="vertical"
                style={{
                  height: '150px',
                  margin: '0 20px',
                }}
              />
              {/* 정보 영역 */}
              <div style={{ flex: 1 }}>
                <p>
                  <b>출판사:</b> {product.publisher}
                </p>
                <p>
                  <b>과목:</b> {product.subject}
                </p>
                <p>
                  <b>학년:</b> {product.grade}
                </p>
                <p>
                  <b>교재 이름:</b> {product.title}
                </p>
                <p>
                  <b>가격:</b> <span style={{ textDecoration: 'line-through' }}>{product.price}</span>
                </p>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
