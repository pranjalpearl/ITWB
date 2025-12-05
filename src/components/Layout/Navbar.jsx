"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import { useSelector, useDispatch } from "react-redux";
import authService from "@/Redux/feature/auth/authService";
import { useMutation } from "@tanstack/react-query";
import { clearUser } from "@/Redux/feature/auth/authSlice";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
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
  const [dropdownOpen, setDropdownOpen] = useState(false); // For user profile dropdown

  const [menus, setMenus] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which mega menu is open

  const fetchMenus = async () => {
    try {
      const res = await axiosInstance.get("/website-mega-menu");
      setMenus(res.data.data || []);
    } catch (error) {
      console.log("Menu fetch error", error);
      toast.error("Failed to load menus");
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  // Helper function to create URL slug: lowercase, hyphenated, no special chars
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric/hyphen characters
  };

  return (
    <>
      <header className="rt-site-header rt-fixed-top white-menu ">
        {/* ---------------- TOP HEADER ---------------- (Kept same) */}
        <div className="top-header d-none d-md-block ">
          <div className="container">
            <div className="flex justify-between items-center -mt-4">
              {/* LEFT COLUMN: Support/Email + Search (from previous) */}
              <div className="col-md-6  flex gap-50  w-full">
                {/* Support & Email */}
                <ul className="text-center text-md-left top-message text-white cursor-pointer">
                  <li style={!isHome ? { color: "white" } : {}}>
                    <i className={`icofont-headphone-alt  ${!isHome ? "text-white" : ""} `}></i>
                    Support
                  </li>
                  <li>
                    <a href="mailto:mail@inditoir.com" style={!isHome ? { color: "white" } : {}}>
                      <i className={`icofont-email ${!isHome ? "text-white" : ""} `}></i>
                      mail@inditoir.com
                    </a>
                  </li>
                </ul>
                {/* Search Form */}
                <form className=" flex flex-row">
                  <input
                    className="form-control mr-sm-2 header_search d-none d-md-inline-block !rounded-2xl"
                    style={{
                      height: "35px",
                      width: "300px",
                      fontSize: "16px",
                    }}
                    placeholder="Search..."
                    aria-label="Search"
                    type="search"
                  />
                  <button
                    style={{
                      height: "35px",
                      width: "80px",
                      fontSize: "14px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    className="btn rt-btn rt-gradient2 rt-rounded text-uppercase rt-Bshadow-1 searchBtn_desk d-md-inline-block d-none"
                    type="submit"
                  >
                    Search
                  </button>
                  <button type="button" id="toggleSearch" className="mobile_searchBtn d-md-none">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              {/* RIGHT COLUMN: Language, Auth, Contact Us (from previous with current Auth content) */}
              <div className="col-md-6">
                <ul className="text-center text-md-right top-social">
                  {/* Language Dropdown */}
                  <li>
                    <a href="#" className="dropdown-toggle">
                      <i className="fas fa-globe-americas"></i>English
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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

                  {/* Auth / Login Dropdown */}
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
                              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
                            }}
                          >
                            <div className="py-2">
                              {/* Profile Item */}
                              <div
                                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                style={{ fontSize: "16px" }}
                              >
                                <svg className="w-5 h-5 mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>Profile</span>
                              </div>

                              <div className="border-t border-gray-100 my-1"></div>

                              {/* Sign Out Item */}
                              <button
                                className={`flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 
                                  ${logOutMutation.isPending
                                     ? "opacity-70 cursor-not-allowed hover:bg-red-50" : "cursor-pointer"}`}
                                onClick={() => logOutMutation.mutate()}
                                style={{ fontSize: "16px" }}
                                disabled={logOutMutation.isPending}
                              >
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{logOutMutation.isPending ? "Signing Out..." : "Sign Out"}</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a href="#" data-toggle="modal" onClick={() => setIsModalOpen(true)}>
                        <i className="far fa-user-circle"></i> Log in | Join
                      </a>
                    )}
                  </li>

                  {/* Contact Us Button */}
                  <span className="d-lg-inline">
                    <li>
                      <a
                        href="/contact-us"
                        className="rt-gradient2 inline-block px-6 py-3 !rounded-full text-white font-bold uppercase shadow-lg  hover:scale-105 transition-transform duration-300"
                      >
                        Contact Us
                      </a>
                    </li>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- MAIN HEADER ---------------- */}
        <div className="main-header rt-sticky">
          <nav className="navbar">
            <div className="container">
              {/* Logo (from previous for better logic) */}
              <a className="brand-logo cursor-pointer" onClick={() => router.push("/")}>
                {isHome ? (
                  <img src="/images/logo/logo.png" className="h-[86px] w-[125px]" alt="" />
                ) : (
                  <img src="/images/logo/darklogo.png" className="h-[86px] w-[125px]" alt="" />
                )}
              </a>
              {/* Sticky Logo (from previous) */}
              <a className="sticky-logo cursor-pointer" onClick={() => router.push("/")}>
                <img src="/images/logo/logo.png" alt="" className="h-[86px] w-[125px]" />
              </a>

              <div className="ml-auto d-flex align-items-center">
                <div className="main-menu">
                  <ul>
                    {/* Home (from previous for current-menu-item class) */}
                    <li className="current-menu-item" onClick={() => router.push("/")}>
                      <a className="cursor-pointer">Home</a>
                    </li>

                    {/* ---------- DYNAMIC MENUS FROM API (MODIFIED FOR MEGA-MENU) ---------- */}
                    {menus.map((menu) => (
                      <li
                        key={menu.id}
                        className="relative"
                        onClick={() =>
                          router.push(`/${createSlug(menu.title)}`) // Main menu click: /tour, /dubai
                        }
                        onMouseEnter={() => setActiveDropdown(menu.id)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <a
                           // ADDED: Conditional class to make text blue when dropdown is active.
                          className={`cursor-pointer ${
                            activeDropdown === menu.id ? 'text-blue-600' : '' 
                          }`}
                        >
                          {menu.title}
                          {/* ADDED: Up-caret (^) next to the text when the dropdown is open */}
                          {activeDropdown === menu.id && (
                              <span className="ml-1 inline-block text-blue-600 transform">
                                  &#9650;
                              </span>
                          )}
                        </a>

                        {activeDropdown === menu.id && menu.categories?.length > 0 && (
                          <div
                            // MODIFIED: Changed mt-3 to mt-0.5 to bridge the gap between menu item and dropdown for seamless hover (Fixes the 'disappear' issue).
                            // The dropdown box (bg-white, shadow-2xl) provides the color and border look.
                            className="absolute right-1 top-full mt-0.5 w-[1000px] bg-white rounded-xl shadow-2xl p-8 z-50 pointer-events-auto transition-opacity duration-300"
                          >
                            <div className="flex">
                              {/* LEFT SIDE: Categories and Items - 2 columns, scrollable */}
                              <div className="flex-grow grid grid-cols-2 gap-x-8 gap-y-6 pr-6 border-r border-gray-200 max-h-[400px] overflow-y-auto custom-scrollbar">
                                {menu.categories.map((cat) => (
                                  <div key={cat.id} className="min-w-0">
                                    <h4
                                      className="text-blue-600 font-bold mb-3 uppercase hover:text-blue-800 cursor-pointer transition-colors"
                                      // Category Click Navigation: /menu-title/category-title (e.g., /dubai/domestic)
                                      onClick={(e) => {
                                        e.stopPropagation(); // Prevent the parent li's click handler from running
                                        router.push(
                                          `/${createSlug(menu.title)}/${createSlug(cat.title)}`
                                        );
                                        setActiveDropdown(null); // Close dropdown on click
                                      }}
                                    >
                                      {cat.title}
                                    </h4>
                                    <div className="space-y-3">
                                      {/* Category Items */}
                                      {cat.items?.map((item) => (
                                        <div
                                          key={item.id}
                                          className="flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                          // Item Click Navigation: /menu-title/category-title/item-title (e.g., /dubai/domestic/ladakh)
                                          onClick={(e) => {
                                            e.stopPropagation(); // Prevent the parent li's click handler from running
                                            router.push(
                                              `/${createSlug(menu.title)}/${createSlug(cat.title)}/${createSlug(item.title)}`
                                            );
                                            setActiveDropdown(null); // Close dropdown on click
                                          }}
                                        >
                                          {/* UI from previous version: Image and description */}
                                          <img
                                            src={item.image?.secure_url}
                                            className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                                            alt={item.title}
                                          />
                                          <div className="min-w-0">
                                            <p className="font-semibold text-gray-800 truncate">{item.title}</p>
                                            <p className="text-gray-500 text-xs truncate">{item.description}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* RIGHT SIDE: Main Menu Image */}
                              <div className="w-[300px] flex-shrink-0 ml-6">
                                <h4 className="text-gray-700 font-semibold mb-3 uppercase pb-2">{menu.title}</h4>
                                <img
                                  src={menu.image?.secure_url}
                                  className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-md"
                                  alt={`Featured image for ${menu.title}`}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}

                    {/* STATIC MENU ITEMS (from previous) */}
                    {/* <li onClick={() => router.push("/trip")}>...</li> */}
                    <li></li> {/* Empty li from previous */}
                  </ul>
                  {/* Mobile menu logic (from previous) */}
                  <div className="mobile-menu">
                    <div className="menu-click">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
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