import React from 'react';

const Contact= () => {
  return (
    <div>
      <div className="breadcrumb-area" style={{backgroundImage: "url('images/bg/contact-us-bg.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h2 className="breadcrumb-title">Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-lg-6">
              <div className="conact-us-wrap-one mb-30">
                <h3 className="heading">To make requests for <br />further information, <br /><span className="text-color-primary">contact us</span> via our social channels. </h3>
                <div className="sub-heading">We just need a couple of hours! <br />No more than 2 working days since receiving your issue ticket.</div>
              </div>
            </div>

            <div className="col-lg-6 col-lg-6">
              <div className="contact-form-wrap">
                <form id="contact-form" action="" method="post">
                  <div className="contact-form">
                    <div className="contact-input">
                      <div className="contact-inner">
                        <input name="con_name" type="text" placeholder="Name *" />
                      </div>
                      <div className="contact-inner">
                        <input name="con_email" type="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="contact-inner">
                      <input name="con_subject" type="text" placeholder="Subject *" />
                    </div>
                    <div className="contact-inner contact-message">
                      <textarea name="con_message" placeholder="Please describe what you need."></textarea>
                    </div>
                    <div className="submit-btn mt-20">
                      <button className="ht-btn ht-btn-md" type="submit">Send message</button>
                      <p className="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-info-wrappaer section-space--pb_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading">Administration</h5>
                <ul className="conact-info__list">
                  <li><a href="#" className="hover-style-link text-color-primary">support@metacoresystemsinc</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+63)977 805 6369</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading">Sales and Marketing</h5>
                <ul className="conact-info__list">
                  <li><a href="#" className="hover-style-link text-color-primary">support@metacoresystemsinc</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+63)926 054 4204</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="conact-info-wrap mt-30">
                <h5 className="heading">Technical Support</h5>
                <ul className="conact-info__list">
                  <li><a href="#" className="hover-style-link text-color-primary">support@metacoresystemsinc</a></li>
                  <li><a href="#" className="hover-style-link text-black font-weight--bold">(+63)992 247 5203</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
