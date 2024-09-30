import React from 'react';
import '../css/section-words.css';
import { Button, Table } from 'react-bootstrap';

const SectionWords = () => {
  return (
    <div id="services" className="section-words" style={{ background: 'url(/img/background/section-words.png) center no-repeat', backgroundSize: 'cover' }}>
      <div className="contents">
        <div className="left w-50">
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 500, lineHeight: '48px' }}>Examples of words that are prohibited but can be changed</h2>
            <p style={{ fontSize: '16px', lineHeight: '32px' }}>
              Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt
              neque ut accumsan.
            </p>
          </div>
          <Button
            className="text-black bg-white font-weight-bold py-2 d-flex justify-content-center align-items-center"
            style={{
              borderRadius: '8px',
              width: '300px',
              height: '59px',
            }}
            type="submit"
          >
            Get Started
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.93335 2L14 7.63333L7.93335 13.2667" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
              <path d="M1 7.40123H13.1333" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
            </svg>
          </Button>
        </div>
        <div className="right w-50">
          <div className="w-100 text-center d-flex">
            <div className="w-50" style={{ backgroundColor: '#D73433', padding: '7px 10px', fontSize: '24px', fontWeight: '500', borderTopLeftRadius: '1rem' }}>
              คำห้ามใช้
            </div>
            <div
              className="w-50"
              style={{ backgroundColor: '#17AD37', padding: '7px 10px', fontSize: '24px', fontWeight: '500', borderTopRightRadius: '1rem' }}
            >
              คำที่ใช้ได้
            </div>
          </div>
          <div className="word-detail d-flex w-100 bg-white text-blakc flex-wrap">
            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">ปลอดภัย</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">ดูแลให้ปลอดภัยได้</span>
            </div>

            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">เหมือนดาราเกาหลี</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">คล้าย</span>
            </div>

            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">ถึง 99.9%</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">รักษาสิวได้ 99.9%</span>
            </div>

            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">แบบเกาหลี/แบบ</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">สไตล์เกาหลี</span>
            </div>

            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">ฆ่าเชื้อสิว</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">รักษาสิว</span>
            </div>

            <div className="w-50 sub-left">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.15 2 1.5 6.65 1.5 12.5C1.5 18.35 6.15 23 12 23C17.85 23 22.5 18.35 22.5 12.5C22.5 6.65 17.85 2 12 2ZM16.05 17.75L12 13.7L7.95 17.75L6.75 16.55L10.8 12.5L6.75 8.45L7.95 7.25L12 11.3L16.05 7.25L17.25 8.45L13.2 12.5L17.25 16.55L16.05 17.75Z"
                  fill="#F5222D"
                />
              </svg>
              <span className="ms-2">เริ่มต้น (ราคาเริ่มต้น)</span>
            </div>
            <div className="w-50 sub-right">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.243 16.814L6 12.57L7.414 11.156L10.243 13.984L15.899 8.32703L17.314 9.74203L10.243 16.814Z" fill="#17AD37" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12.5C1 6.425 5.925 1.5 12 1.5C18.075 1.5 23 6.425 23 12.5C23 18.575 18.075 23.5 12 23.5C5.925 23.5 1 18.575 1 12.5ZM12 21.5C10.8181 21.5 9.64778 21.2672 8.55585 20.8149C7.46392 20.3626 6.47177 19.6997 5.63604 18.864C4.80031 18.0282 4.13738 17.0361 3.68508 15.9442C3.23279 14.8522 3 13.6819 3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C14.3869 3.5 16.6761 4.44821 18.364 6.13604C20.0518 7.82387 21 10.1131 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5Z"
                  fill="#17AD37"
                />
              </svg>
              <span className="ms-2">เพียง</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWords;
