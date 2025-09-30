"use client";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";
import authService from "@/Redux/feature/auth/authService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { clearUser } from "@/Redux/feature/auth/authSlice";

import toast from "react-hot-toast";
const Navbar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logOutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      dispatch(clearUser());
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Logout failed!");
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="rt-site-header  rt-fixed-top white-menu ">
        <div className="top-header d-none d-md-block ">
          <div className="container">
            <div className="row align-items-cente">
              <div className="col-md-6">
                <ul className="text-center text-md-left top-message text-white cursor-pointer">
                  <li style={!isHome ? { color: "white" } : {}}>
                    <i
                      className={`icofont-headphone-alt  ${
                        !isHome ? "text-white" : ""
                      } `}
                    ></i>
                    Support
                  </li>
                  <li>
                    <a
                      href="mailto:info@inditour.com"
                      style={!isHome ? { color: "white" } : {}}
                    >
                      <i
                        className={`icofont-email ${
                          !isHome ? "text-white" : ""
                        } `}
                      ></i>
                      info@inditour.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="text-center text-md-right top-social">
                  <li>
                    <a href="#" className="dropdown-toggle">
                      <i className="fas fa-globe-americas"></i>English
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
                    {isAuthenticated ? (
                      <div className="relative">
                        <a
                          href="#"
                          className="dropdown-toggle flex items-center gap-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setDropdownOpen((prev) => !prev);
                          }}
                        >
                          <i className="far fa-user-circle text-3xl"></i>
                        </a>
                        {dropdownOpen && (
                          <div
                            className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition ease-out duration-100 transform opacity-100 scale-100"
                            style={{
                              transition:
                                "transform 0.2s ease-out, opacity 0.2s ease-out",
                            }}
                          >
                            <div className="py-2">
                              {/* Profile Item */}
                              <div
                                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                style={{ fontSize: "16px" }}
                              >
                                <svg
                                  className="w-5 h-5 mr-3 text-gray-400"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>Profile</span>
                              </div>

                              <div className="border-t border-gray-100 my-1"></div>

                              {/* Sign Out Item */}
                              <button
                                className={`flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 
          ${
            logOutMutation.isPending
              ? "opacity-70 cursor-not-allowed hover:bg-red-50"
              : "cursor-pointer"
          }`}
                                onClick={() => logOutMutation.mutate()}
                                style={{ fontSize: "16px" }}
                                disabled={logOutMutation.isPending}
                              >
                                <svg
                                  className="w-5 h-5 mr-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>
                                  {logOutMutation.isPending
                                    ? "Signing Out..."
                                    : "Sign Out"}
                                </span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href="#"
                        data-toggle="modal"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <i className="far fa-user-circle"></i> Log in | Join
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header rt-sticky">
          <nav className="navbar">
            <div className="container">
              <a
                className="brand-logo cursor-pointer"
                onClick={() => router.push("/")}
              >
                {isHome ? (
                  <img
                    src="/images/logo/logo.png"
                    className="h-[86px] w-[125px]"
                    alt=""
                  />
                ) : (
                  <img
                    src="/images/logo/darklogo.png"
                    className="h-[86px] w-[125px]"
                    alt=""
                  />
                )}
              </a>
              <a
                className="sticky-logo cursor-pointer"
                onClick={() => router.push("/")}
              >
                <img
                  src="/images/logo/logo.png"
                  alt=""
                  className="h-[86px] w-[125px]"
                />
              </a>
              <div className="ml-auto d-flex align-items-center">
                <div className="main-menu">
                  <ul>
                    <li
                      className="current-menu-item"
                      onClick={() => router.push("/")}
                    >
                      <a className="cursor-pointer">Home</a>
                    </li>
                    <li onClick={() => router.push("/trip")}>
                      <a className="cursor-pointer">Trip package</a>
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
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDropdownOpen(false);
        }}
      />
    </>
  );
};

export default Navbar;
