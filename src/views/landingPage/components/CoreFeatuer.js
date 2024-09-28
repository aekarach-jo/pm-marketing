import React from 'react';
import '../css/coreFeatuer.css';
import { Button, Card, Col } from 'react-bootstrap';

const CoreFeatuer = () => {
  return (
    <section className="coreFeatuer-section">
      <img className="cover img-fluid" src="/img/assets/cors_cover.png" alt="cover" />
      <div className="group-card">
        <div className="card-content">1</div>
        <Card className="card-content">
          <Col>Check for prohibited words and can be used for advertising in real time.</Col>
          <Col>
            ในการทำธุรกิจคลินิก หรือ ทางการแพทย์ แน่นอนว่าการทำสื่อโฆษณา ย่อมมีความสำคัญ แต่คำโฆษณาไหนบ้างล่ะ ที่สามารถนใช้ได้และใช้ไม่ได้ PM Marketing
            เรามีระบบตรวจ สอบคำต้องห้าม และคำที่สามารถ นำไปใช้โฆษณาได้แบบเรียลไทม์
          </Col>
          <Col>
            <Button
              className="btn text-white font-weight-bold py-2 d-flex justify-content-center align-items-center"
              style={{
                background: 'rgba(203, 12, 159, 1)',
                borderRadius: '10px',
                width: '299px',
                height: '59px',
              }}
              size="lg"
              type="submit"
            >
              Get Started
              <img src="/img/icons/arrow.png" alt="arrow" />
            </Button>
          </Col>
        </Card>
      </div>
    </section>
  );
};

export default CoreFeatuer;
