import React ,{useEffect} from 'react';

const Hotel_Management = () => {
  useEffect(() => {
    document.title = "MetaCore Systems Inc. / Hotel Management";
  }, []);
  return (
    <div>
      <div className="breadcrumb-area" style={{backgroundImage: "url('images/solutions/school_management.png')"}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h2 className="breadcrumb-titl text-white">Hotel Management Solutions</h2>
                <h5 className="font-weight--normal text-white">Designed to help educational institutions streamline their administrative and academic processes.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-images-wrapper bg-gray section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center">
                <h4 className="heading">Reliable Solution For your Hotel</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="feature-images__four">
                <div className="row">
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/reservations.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">Reservations</h5>
                          <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/hotel-bell.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">Front Desk</h5>
                          <div className="text">It’s possible to simultaneously manage and transform information from one server to another.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/cashier.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">Cashiering</h5>
                          <div className="text">Back up your database, store in a safe and secure place while still maintaining its accessibility.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/room-key.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">Room Management</h5>
                          <div className="text">Suspe ndisse suscipit sagittis leo sit met condime ntum esti laiolainx bulum iscipit sagittis leo sit met con ndisse suscipit sagittis leo sit met cone su</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/calculator.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">Accounting</h5>
                          <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <a href="#" className="ht-box-images style-04">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <img className="img-fluid" src="images/services/icons/barcode.svg" alt="" width="60" />
                        </div>
                        <div className="content">
                          <h5 className="heading">End of Day</h5>
                          <div className="text">Back up your database, store in a safe and secure place while still maintaining its accessibility.</div>
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
    </div>
  );
}

export default Hotel_Management;
