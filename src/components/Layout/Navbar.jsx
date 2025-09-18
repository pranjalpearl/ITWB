
const Navbar = () => {
  return (
    <>
      <header className="rt-site-header  rt-fixed-top white-menu">
        <div className="top-header d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="text-center text-md-left top-message">
                  <li>
                    <i className="icofont-headphone-alt"></i>Support
                  </li>
                  <li>
                    <a href="mailto:info@emigrar.com">
                      <i className="icofont-email"></i>info@emigrar.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="text-center text-md-right top-social">
                  <li>
                    <a
                      href="#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-globe-americas"></i>Englishs
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                      <a className="dropdown-item" href="#">
                        French
                      </a>
                      <a className="dropdown-item" href="#">
                        Trukis
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-briefcase"></i>My Trips
                    </a>
                  </li>
                  <li>
                    <a href="#" data-target="#rtmodal-1" data-toggle="modal">
                      <i className="far fa-user-circle"></i>Sign in | Join
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header rt-sticky">
          <nav className="navbar">
            <div className="container">
              <a href="index.html" className="brand-logo">
                <img src="/images/logo/logo.png" alt="" />
              </a>
              <a href="index.html" className="sticky-logo">
                <img src="/images/logo/logo.png" alt="" />
              </a>
              <div className="ml-auto d-flex align-items-center">
                <div className="main-menu">
                  <ul>
                    <li className="current-menu-item">
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="trip-1.html">Trip package</a>
                    </li>
                    <li>
                      <a href="service-1.html">Services</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Home Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li>
                              <a href="index-02.html">Home Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Hotel Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="hotel-1.html">Hotel One</a>
                            </li>
                            <li>
                              <a href="hotel-2.html">Hotel Two</a>
                            </li>
                            <li>
                              <a href="hotel-3.html">Hotel Three</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Flight Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="flight-1.html">Flight One</a>
                            </li>
                            <li>
                              <a href="flight-details.html">Flight Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">train Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="train-1.html">train One</a>
                            </li>
                            <li>
                              <a href="train-2.html">train Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">trip Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="trip-1.html">trip One</a>
                            </li>
                            <li>
                              <a href="trip-2.html">trip Two</a>
                            </li>
                            <li>
                              <a href="trip-3.html">trip Three</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">car Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="car-1.html">car One</a>
                            </li>
                            <li>
                              <a href="car-2.html">car Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">blog Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">blog-grid</a>
                            </li>
                            <li>
                              <a href="single-blog.html">blog-single 1</a>
                            </li>
                            <li>
                              <a href="singleblog-lsidebar.html">
                                blog-single 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Others Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="service-1.html">service</a>
                            </li>
                            <li>
                              <a href="afflite.html">afflite</a>
                            </li>
                            <li>
                              <a href="help.html">help</a>
                            </li>
                            <li>
                              <a href="how-work.html">how-work</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                  </ul>
                  <div className="mobile-menu">
                    <div className="menu-click">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="rt-nav-tolls d-flex align-items-center">
                  <span className="d-md-inline d-none">
                    <a
                      href="contact.html"
                      className="rt-btn rt-gradient2 rt-rounded text-uppercase rt-Bshadow-1"
                    >
                      Contact Us
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
