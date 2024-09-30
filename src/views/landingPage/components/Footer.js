import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer-landing">
      <div className="footer-content">
        <div className="container mx-auto px-3">
          <div className="content-top">
            <div className="footer-brand">
              <div className="title-application mb-0 d-flex align-items-center gap-2">
                <img className="mb-2" width="49px" height="49px" style={{ borderRadius: '99rem' }} src="/img/logo/pm-logo.jpeg" alt="" />
                <p className="mb-0">PM Marketing</p>
              </div>
              <div className="title-desc mt-2 text-start">
                Tempus congue tellus semper sapien <br /> urna. Tellus posuere ut.
              </div>
            </div>
            <div className="footer-menu  mt-3 mt-lg-0">
              <div className="mt-2">
                <div className="title text-uppercase">Services</div>
                <ul>
                  <li>
                    <a href="/news">Digital Strategy</a>
                  </li>
                  <li>
                    <a href="/concert">Content Planing</a>
                  </li>
                  <li>
                    <a href="/gallery">Graphic Design</a>
                  </li>
                  <li>
                    <a href="/gallery">Website Design</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-menu  mt-3 mt-lg-0">
              <div className="contact-footer mt-2">
                <div className="title text-uppercase text-[#fca4a7] text-md md:text-lg lg:text-xl">Company</div>
                <ul>
                  <li>
                    <a href="/page/about" target="_blank">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/page/term-and-conditions" target="_blank">
                      Contact Info
                    </a>
                  </li>
                  <li>
                    <a href="/page/privacy" target="_blank">
                      Our Service
                    </a>
                  </li>
                  <li>
                    <a href="/page/privacy" target="_blank">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-menu  mt-3 mt-lg-0">
              <div className="contact-footer mt-2">
                <div className="title text-uppercase text-[#fca4a7] text-md md:text-lg lg:text-xl">Follow us</div>
                <div className="follow-us d-flex gap-3 mt-3">
                  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.6427 10.2668C25.6427 4.59661 19.9024 0 12.8213 0C5.74023 0 -0.000185014 4.59661 4.47233e-09 10.2668C4.47233e-09 15.321 4.5609 19.522 10.5668 20.3752V20.3754L10.5695 20.3756C10.7106 20.3956 10.8529 20.4132 10.9955 20.4295C12.2721 20.6954 12.061 21.7928 11.885 22.7072C11.7791 23.2575 11.686 23.7414 11.9376 23.938C12.7078 24.54 18.5438 20.6382 22.0894 17.361C22.6025 16.9313 23.0693 16.4658 23.4837 15.9699L23.4912 15.9618C23.5901 15.8528 23.6685 15.7542 23.7286 15.6649C24.9419 14.0966 25.6427 12.2474 25.6427 10.2668ZM7.9686 13.541H5.38272C5.0149 13.541 4.71405 13.24 4.71405 12.8721V7.91269C4.71405 7.54487 5.0149 7.24402 5.38272 7.24402H5.43851C5.80633 7.24402 6.10718 7.54487 6.10718 7.91269V12.1478H7.9686C8.33642 12.1478 8.63727 12.4486 8.63727 12.8164V12.8722C8.63727 13.24 8.33642 13.541 7.9686 13.541ZM21.4061 10.3765V10.4323C21.4061 10.8001 21.1052 11.101 20.7374 11.1008H18.876V12.1596H20.7374C21.1052 12.1596 21.4061 12.4605 21.4061 12.8283V12.8841C21.4061 13.2519 21.1052 13.5528 20.7374 13.5528H18.1515C17.7837 13.5528 17.4828 13.2519 17.4828 12.8841V7.92462C17.4828 7.5568 17.7837 7.25595 18.1515 7.25595H20.7374C21.1052 7.25595 21.4061 7.5568 21.4061 7.92462V7.98041C21.4061 8.34823 21.1052 8.64908 20.7374 8.64908H18.876V9.70787H20.7374C21.1052 9.70787 21.4061 10.0087 21.4061 10.3765ZM16.4334 13.3413L16.4332 13.3416C16.3935 13.39 16.3372 13.4311 16.2703 13.4629C16.1741 13.5142 16.0668 13.541 15.9579 13.541H15.9021C15.8124 13.541 15.7268 13.523 15.6484 13.4907C15.5465 13.4524 15.455 13.3899 15.3881 13.2987L15.388 13.2985C15.3703 13.2772 15.354 13.2548 15.339 13.2315L12.9046 9.90659V12.8723C12.9046 13.2401 12.6038 13.5411 12.236 13.5411H12.1802C11.8123 13.5411 11.5114 13.2401 11.5114 12.8723V7.91288C11.5114 7.54505 11.8123 7.2442 12.1802 7.2442H12.236C12.4837 7.2442 12.7011 7.38075 12.8166 7.58233L15.2335 10.8241V7.91288C15.2335 7.54505 15.5344 7.2442 15.9022 7.2442H15.958C16.3259 7.2442 16.6267 7.54505 16.6267 7.91288V12.8723C16.6266 13.048 16.5571 13.2166 16.4334 13.3413ZM9.90143 13.541H9.84565C9.47783 13.541 9.17689 13.24 9.17689 12.8722V7.91278C9.17689 7.54496 9.47783 7.24411 9.84565 7.24411H9.90143C10.2693 7.24411 10.5701 7.54496 10.5701 7.91278V12.8722C10.5701 13.24 10.2693 13.541 9.90143 13.541Z"
                      fill="#EE46BC"
                    />
                  </svg>

                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.7307 12.0441C24.7307 5.39238 19.3384 0 12.6867 0C6.03495 0 0.642578 5.39238 0.642578 12.0441C0.642578 17.6923 4.53137 22.4319 9.77729 23.7336V15.7248H7.2938V12.0441H9.77729V10.4581C9.77729 6.35879 11.6326 4.45872 15.6572 4.45872C16.4203 4.45872 17.737 4.60855 18.2756 4.75789V8.0941C17.9914 8.06423 17.4975 8.0493 16.8843 8.0493C14.9095 8.0493 14.1464 8.79748 14.1464 10.7424V12.0441H18.0805L17.4046 15.7248H14.1464V24C20.1092 23.2798 24.7307 18.202 24.7307 12.0441Z"
                      fill="#EE46BC"
                    />
                  </svg>

                  <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.1934 0.71455C32.6678 1.11273 33.8267 2.27456 34.2184 3.74729C34.9312 6.42004 34.9312 12.0001 34.9312 12.0001C34.9312 12.0001 34.9312 17.5801 34.2184 20.2528C33.8213 21.731 32.6624 22.8929 31.1934 23.2856C28.5275 24.0001 17.8311 24.0001 17.8311 24.0001C17.8311 24.0001 7.14009 24.0001 4.46871 23.2856C2.99429 22.8874 1.83542 21.7256 1.44369 20.2528C0.730957 17.5801 0.730957 12.0001 0.730957 12.0001C0.730957 12.0001 0.730957 6.42004 1.44369 3.74729C1.84086 2.2691 2.99973 1.10728 4.46871 0.71455C7.14009 0 17.8311 0 17.8311 0C17.8311 0 28.5275 0 31.1934 0.71455ZM23.3768 11.6964L14.4922 16.8401V6.55273L23.3768 11.6964Z"
                      fill="#EE46BC"
                    />
                  </svg>
                </div>
                <ul className="mt-5">
                  <li>
                    <a href="#" target="_blank">
                      Tel : 090-000-0000
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Email : info@pmmarketing.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright container py-5 d-flex justify-content-between">
        <span className="">Copyright © 2024 PM Marketing. All rights reserved</span>
        <span className="term-of-service">
          <a href="#" className="text-uppercase px-3 border-right">
            Term of use
          </a>
          <hr />
          <a href="#" className="text-uppercase px-3 border-right">
            Privacy Policy
          </a>
          <hr />
          <a href="#" className="text-uppercase ps-3">
            Cookie Policy
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
