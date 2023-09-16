import React,{useState} from 'react';
import { Sidenav, Nav, Toggle ,Dropdown} from 'rsuite';
import { Icon } from '@rsuite/icons';


function Header() {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div className="site-wrapper-reveal">
      <div className="header-area">
        <div className="header-top-bar-info d-none d-lg-block bg-theme-default">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="top-bar-wrap">
                  <div className="top-bar-left">
                    <div className="top-bar-text"></div>
                  </div>
                  <div className="top-bar-right">
                    <ul className="top-bar-info">
                      <li className="info-item">
                        <a href="tel:+639922475203" className="info-link text-white">
                          <i className="info-icon fa fa-phone"></i>
                          <span className="info-text"><strong>+63992 247 5203</strong></span>
                        </a>
                      </li>
                      <li className="info-item text-white">
                        <i className="info-icon fa fa-map-marker-alt"></i>
                        <span className="info-text">info@metacoresystemsinc.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrap bg-white header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                <div className="header__logo">
                  <a href="/">
                    <img src="/images/brand/meta_core_rec_logo.svg" className="img-fluid" width="350" alt="Meta Core Systems Inc. Logo" />
                  </a>
                </div>
                <div className="header-right">
                  <div className="header__navigation menu-style-three d-none d-xl-block">
                    <nav className="navigation-menu">
                      <ul>
                        <li className="active">
                          <a href="/"><span>Home</span></a>
                        </li>
                        <li className="">
                          <a href="/Ourcompany"><span>Our Company</span></a>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href=""><span>Solutions</span></a>
                          <ul className="submenu">
                            <li><a href="/School_Management"><span>School Management</span></a></li>
                            <li><a href="/Hotel_Management"><span>Hotel Management</span></a></li>
                            <li><a href="/Sales_Inventory"><span>Sales and Inventory</span></a></li>
                          </ul>
                        </li>
                        <li className="">
                          <a href="/Contact"><span>Contact Us</span></a>
                        </li>
                      </ul>
                    </nav>
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

export default Header;
