import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$9.99 / month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Get Started',
    },
    {
      title: 'Pro Plan',
      price: '$19.99 / month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonText: 'Subscribe',
    },
    {
      title: 'Premium Plan',
      price: '$29.99 / month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      buttonText: 'Go Premium',
    },
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Choose Your Plan</h1>
      <Row gutter={[16, 16]} justify="center">
        {plans.map((plan, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              title={plan.title}
              bordered={true}
              style={{ borderRadius: '8px', textAlign: 'center', padding: '20px' }}
            >
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{plan.price}</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
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
