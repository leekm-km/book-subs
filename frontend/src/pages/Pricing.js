import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '연 10만원으로 문제집 10권 받아보기',
      buttonText: '구독하기'
    },
    {
      title: 'Pro Plan',
      price: '연 20만원으로 문제집 20권 받아보기',
      buttonText: '구독하기'
    },
    {
      title: 'Premium Plan',
      price: '연 30만원으로 문제집 30권 받아보기',
      buttonText: '구독하기'
    },
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>구독 요금제를 선택하세요!</h1>
      <p style={{ fontSize: '1rem', whiteSpace: 'pre-wrap' }}> 도서정가제에 따라 정가의 10% 이상 할인이 불가능하여, 선택하신 교재의 가격에 따라 추가금이 일부 발생할 수 있습니다. </p>
      <Row gutter={[16, 16]} justify="center">
        {plans.map((plan, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              bordered={true}
              style={{ borderRadius: '8px', textAlign: 'center', padding: '20px' }}
            >
              {/* 제목 렌더링 */}
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
                {plan.title}
              </h2>
              {/* 가격 */}
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{plan.price}</p>
              {/* 특징 리스트 */}
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* 버튼 */}
              <Button type="primary" size="large">
                {plan.buttonText}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pricing;