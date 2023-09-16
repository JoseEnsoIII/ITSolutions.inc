import React from 'react';

function Home() {
  return (
<div>
    <div className="processing-hero processing-hero-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="processing-hero-text">
              <h6 className="text-black">IT Software and Solution design</h6>
              <h1 className="font-weight--reguler mb-15 text-black">We Provide Solutions</h1>
              <p className="text-black">Set the trends for desktop &amp; server virtualization technology</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="processing-hero-images-wrap">
              <div className="processing-hero-images">
                <img className="img-fluid" src="./src/assets/images/bg/slider-processing-slide-01-image-01.png" alt="" />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
   

    <div className="accordion-wrapper section-space--ptb_100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-wrapper faq-custom-col">
              <div className="section-title section-space--mb_40">
                <h6 className="section-sub-title mb-20">Our company</h6>
                <h3 className="heading">
                  Share the joy of achieving
                  <span className="text-color-primary"> glorious moments</span> & climbed up the top.
                </h3>
              </div>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How can we help your business?
                        <span>
                          <i className="fas fa-chevron-down"></i>
                          <i className="fas fa-chevron-up"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Through the collaboration with customers in discussing needs and demand,
                        we're able to attain mutual understanding, gain customer trust to offer
                        appropriate advice, and bring about suggestions on suitable technology to
                        transform your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are the advantages of Meta Core?
                        <span>
                          <i className="fas fa-chevron-down"></i>
                          <i className="fas fa-chevron-up"></i>
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Mitech takes into consideration every little detail to make sure the
                        system runs smoothly and responsively. Mitech employs a new technique
                        called Minified Technology for securing customers' databases & building up
                        highly confidential firewalls.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How is the working process simplified?
                        <span>
                          <i className="fas fa-chevron-down"></i>
                          <i className="fas fa-chevron-up"></i>
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        We reduce redundant complex calculations and lengthy erroneous code texts
                        with simpler ones to ensure Mitech runs seamlessly, and the design is
                        preserved in its best form when viewed from a wide range of mobile devices
                        & browsers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rv-video-section">
              <div className="ht-banner-01">
                <img
                  className="img-fluid border-radus-5 animation_images one wow fadeInDown animated"
                  src="./src/assets/images/about_us/home-processing-video-intro-slider-slide-01-image-02.jpg"
                  alt=""
                  style={{ visibility: 'visible', animationName: 'animateUpDown' }}
                />
              </div>

              <div className="ht-banner-02">
                <img
                  className="img-fluid border-radus-5 animation_images two wow fadeInDown animated"
                  src="./src/assets/images/about_us/home-processing-video-intro-slider-slide-01-image-03.jpg"
                  alt=""
                  style={{ visibility: 'visible', animationName: 'animateUpDown' }}
                />
              </div>

              <div className="main-video-box video-popup">
                <a href="https://www.youtube.com" className="video-link mt-30">
                  <div className="single-popup-wrap">
                    <img
                      className="img-fluid border-radus-5"
                      src="./src/assets/images/about_us/home-processing-video-intro-slider-slide-01-image-01.jpg"
                      alt=""
                    />
                    <div className="ht-popup-video video-button">
                      <div className="video-mark">
                        <div className="wave-pulse wave-pulse-1"></div>
                        <div className="wave-pulse wave-pulse-2"></div>
                      </div>
                      <div className="video-button__two">
                        <div className="video-play">
                          <span className="video-play-icon"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="ht-banner-03">
                <img
                  className="img-fluid border-radus-5 animation_images three wow fadeInDown animated"
                  src="./src/assets/images/about_us/home-processing-video-intro-slider-slide-01-image-04.jpg"
                  alt=""
                  style={{ visibility: 'visible', animationName: 'animateUpDown' }}
                />
              </div>

              <div className="ht-banner-04">
                <img
                  className="img-fluid border-radus-5 animation_images four wow fadeInDown animated"
                  src="./src/assets/images/about_us/home-processing-video-intro-slider-slide-01-image-05.jpg"
                  alt=""
                  style={{ visibility: 'visible', animationName: 'animateUpDown' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="feature-images-wrapper bg-gray section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_10">
              <h6 className="section-sub-title mb-20">Our services</h6>
              <h3 className="heading">
                For your very specific industry,
                <br />
                we have <span className="text-color-primary">highly-tailored IT solutions.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="feature-images__two small-mt__10">
              <div className="modern-grid-image-box row row--30">
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60 small-mt__40">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/home_icons/cloud_backup.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">Backup and Recovery</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/home_icons/cloud_management.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">Cloud Computing and Management</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/home_icons/security_compliance.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">IT Security & Compliance</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/home_icons/software_dev.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">Software Development</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/home_icons/networking.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">Network Infrastructure</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                  <a href="" className="ht-box-images style-02">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img className="img-fulid" src="./src/assets/images/services/consultations.svg" alt="" width="80" />
                      </div>
                      <div className="content">
                        <h6 className="heading">IT Consultancy</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-title section-space--mb_50">
            <h3 className="mb-20">Need a hand?</h3>
            <p className="sub-title">Reach out to the world’s most reliable IT services.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-form-wrap">
            <form id="contact-form" action="https://hasthemes.com/file/mail.php" method="post">
              <div className="contact-form__two">
                <div className="contact-input">
                  <div className="contact-inner">
                    <input name="con_name" type="text" placeholder="Name *" />
                  </div>
                  <div className="contact-inner">
                    <input name="con_email" type="email" placeholder="Email *" />
                  </div>
                </div>
                <div className="contact-select">
                  <div className="form-item contact-inner">
                    <span className="inquiry">
                      <select name="inquiry" className="select-item">
                        <option value="Your inquiry about">Your inquiry about</option>
                        <option value="General Information Request">General Information Request</option>
                        <option value="Partner Relations">Partner Relations</option>
                        <option value="Careers">Careers</option>
                        <option value="Software Licencing">Software Licencing</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className="contact-inner contact-message">
                  <textarea name="con_message" placeholder="Please describe what you need."></textarea>
                </div>
                <div className="submit-btn">
                  <button className="ht-btn ht-btn-md" type="submit">Get a free consultation</button>
                  <p className="form-messege"></p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 ml-auto">
          <div className="contact-info-three text-left">
            <h6 className="heading font-weight--reguler">Reach out now!</h6>
            <h3 className="call-us"><a href="">(+63)992 247 5203</a></h3>
            <div className="text">Start the collaboration with us while figuring out the best solution based on your needs.</div>
          </div>
        </div>
      </div>
    </div>


</div>
  );
}

export default Home;
