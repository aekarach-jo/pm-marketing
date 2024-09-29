import React from 'react';
import '../css/timelines.css';

const Timelines = () => {
  return (
    <div className="timelines d-flex flex-column justify-content-between">
      <div className="head-title">
        <h2>How does it work?</h2>
        <p>
          With lots of unique blocks, you can easily build a <br /> page easily without any coding.{' '}
        </p>
      </div>
      <div className="row w-100">
        <div className="col">
          <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
            <div className="timeline-step step1">
              <div
                className="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div className="inner-circle" />
                <div className="step-num">1</div>
                <h2 className="h6 mt-3 mb-1">ลงทะเบียนสมาชิกง่ายๆ </h2>
                <p className="h6 text-muted mb-0 mb-lg-0">With lots of unique blocks, you can easily build a page easily without any coding.</p>
              </div>
            </div>
            <div className="timeline-step step2">
              <div
                className="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2004"
              >
                <div className="inner-circle" />
                <div className="step-num">2</div>
                <h2 className="h6 mt-3 mb-1">นำคำโฆษณาที่ถูกต้องไปใช้งาน</h2>
                <p className="h6 text-muted mb-0 mb-lg-0">With lots of unique blocks, you can easily build a page easily without any coding.</p>
              </div>
            </div>
            <div className="timeline-step step3">
              <div
                className="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2005"
              >
                <div className="inner-circle" />
                <div className="step-num">3</div>
                <h2 className="h6 mt-3 mb-1">นำคำโฆษณาที่ถูกต้องไปใช้งาน</h2>
                <p className="h6 text-muted mb-0 mb-lg-0">With lots of unique blocks, you can easily build a page easily without any coding. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelines;
