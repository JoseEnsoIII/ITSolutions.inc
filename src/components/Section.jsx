import React from 'react';

function Section() {
  return (
    <div className="footer-area-wrapper bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
              <div className="footer-widget__logo mb-30">
                <img
                  src="./src/assets/images/brand/meta_core_rec_logo.svg"
                  className="img-fluid"
                  alt=""
                  width="230"
                />
              </div>
              <ul className="footer-widget__list">
                <li>
                  Blk 25 Lot 16 Ironwood st., Ph 3, <br />
                  Rainbow Village V, Bagumbong, <br />
                  Caloocan City
                </li>
                <li>
                  <a href="" className="hover-style-link">
                    info@metacoresystemsinc.com
                  </a>
                </li>
                <li>
                  <a href="" className="hover-style-link text-black font-weight--bold">
                    (+63)992 247 5203
                  </a>
                </li>
                <li>
                  <a href="" className="hover-style-link text-color-primary">
                    www.metacoresystemsinc.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">IT Services</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link">
                    Cloud Computing and Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    IT Security &amp; Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Network Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    IT consultancy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">IT Solutions</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link">
                    School Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Hotel Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Sales and Inventory
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <span className="copyright-text">
                &copy; 2023 <a href="https://hasthemes.com/">All Rights Reserved.</a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list ht-social-networks solid-rounded-icon">
                <li className="item">
                  <a href="https://twitter.com/" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-twitter link-icon"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="https://facebook.com/" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-facebook-f link-icon"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="https://instagram.com/" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-instagram link-icon"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="https://linkedin.com/" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                    <i className="fab fa-linkedin link-icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
