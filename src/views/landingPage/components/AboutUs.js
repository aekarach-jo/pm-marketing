import React from 'react';
import '../css/about-us.css';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Navigation } from 'swiper';

const AboutUs = () => {
  return (
    <div className="about-us d-flex flex-column justify-content-between">
      <div className="head-title text-center">
        <h2>What people say about us</h2>
        <p>
          With lots of unique blocks, you can easily build a page without <br /> coding. Build your next landing page.
        </p>
      </div>

      <div className="contents container d-none d-lg-flex justify-content-between">
        <Card className="bg-white" style={{ width: '32%', height: '352px' }}>
          <Card.Body>
            <Card.Title>
              <img src="/img/logo/user-1.png" alt="" />
            </Card.Title>
            <Card.Text>“You made it so simple. My new site is so much faster and easier to work with than my old site.”</Card.Text>
            <div className="text-autor">
              Isabella Chavez <span>Graphic Designer</span>
            </div>
          </Card.Body>
        </Card>

        <Card className="bg-white" style={{ width: '32%', height: '352px' }}>
          <Card.Body>
            <Card.Title>
              <img src="/img/logo/user-2.png" alt="" />
            </Card.Title>
            <Card.Text>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</Card.Text>
            <div className="text-autor">
              Isabella Chavez <span>Graphic Designer</span>
            </div>
          </Card.Body>
        </Card>

        <Card className="bg-white" style={{ width: '32%', height: '352px' }}>
          <Card.Body>
            <Card.Title>
              <img src="/img/logo/user-3.png" alt="" />
            </Card.Title>
            <Card.Text>“Must have book for all, who want to be Product Designer or Interaction Designer.”</Card.Text>
            <div className="text-autor">
              Isabella Chavez <span>Graphic Designer</span>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="contents container d-lg-none">
        <Swiper slidesPerView={2} centeredSlides grabCursor spaceBetween={20} slidesPerGroup={1} loop>
          <SwiperSlide>
            <Card className="bg-white w-100 h-100">
              <Card.Body>
                <Card.Title>
                  <img src="/img/logo/user-1.png" alt="" />
                </Card.Title>
                <Card.Text>“You made it so simple. My new site is so much faster and easier to work with than my old site.”</Card.Text>
                <div className="text-autor">
                  Isabella Chavez <span>Graphic Designer</span>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide className="h-100">
            <Card className="bg-white w-100">
              <Card.Body>
                <Card.Title>
                  <img src="/img/logo/user-2.png" alt="" />
                </Card.Title>
                <Card.Text>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</Card.Text>
                <div className="text-autor">
                  Isabella Chavez <span>Graphic Designer</span>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide className="h-100">
            <Card className="bg-white w-100">
              <Card.Body>
                <Card.Title>
                  <img src="/img/logo/user-3.png" alt="" />
                </Card.Title>
                <Card.Text>“Must have book for all, who want to be Product Designer or Interaction Designer.”</Card.Text>
                <div className="text-autor">
                  Isabella Chavez <span>Graphic Designer</span>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;
