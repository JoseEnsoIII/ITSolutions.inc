import React from 'react';

function OurCompany() {
  const OurCompany = () => {
    useEffect(() => {
      document.title = "MetaCore Systems Inc. / Our Company";
    }, []);}
  return (
    <div className="breadcrumb-area" style={{ backgroundImage: "url('images/solutions/school_management.png')" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_box text-center">
              <h5 className="font-weight--normal text-white">Meta Core Systems Inc.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
