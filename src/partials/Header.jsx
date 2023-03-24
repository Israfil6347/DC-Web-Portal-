import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logocccul.png";
import white_logo from "../assets/images/logo/white_logo.png";
import TestContext from "../store/test-context";

function Header({
  scroll,
  navMethod,
  titleHandler,
  clearLoginContext,
  popUpHandler,
}) {
  const [navClick, setNavClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [width,setWidth] = useState(window.innerWidth)
  
  
  
  window.addEventListener("resize", (event) => {
    
    if(window.innerWidth>836){
      document.body.style.overflow = "auto";
      setNavClick(false);
      
    }
    
    console.log(window.innerWidth);
  });
  
  
  
  
  const location = useLocation();
  console.log(location.pathname);
  
  const navigationHandler = (event) => {
    navMethod(true);
    if (navClick) {
      setNavClick(false);
      document.body.style.overflow = "auto";
    } else {
      setNavClick(true);
      document.body.style.overflow = "hidden";
    }
  };
  
  const ClickHandler = () => {
    localStorage.clear();
    clearLoginContext();
    
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };
  
  const activeHandler = (menu) => {
    document.body.style.overflow = "auto";
    titleHandler({ title: menu });
    setActiveMenu(menu);
    if (navClick) {
      setNavClick(false);
      
    } 
    console.log("working");
  };
  
  const loginModalHandler = () => {
    popUpHandler(true);
  };
  
  return (
    <TestContext.Consumer>
    {(ctx) => {
      return (
        <>
        <section
        className={`sticky top-0 z-20 w-full bg-transparent transition-all duration-300 ${
          scroll ? "mb-[394px] lg:mb-96" : "mb-[394px] lg:mb-80"
        }`}
        >
        <div
        className={`hidden h-12 bg-background text-onBackground   ${
          scroll ? "'lg:hidden'" : "lg:block"
        }`}
        >
        <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center justify-between">
        <ul className="flex gap-4 text-sm font-bold">
        <li>
        <NavLink
        to="/Office-Bearers/"
        className={`block border-b-2 border-transparent hover:scale-110 ${
          location.pathname.includes("Office-Bearers")
          ? "border-primary"
          : ""
        } `}
        onClick={() => {
          activeHandler("Office Bearers");
        }}
        >
        Office Bearers
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/Board-of-Directors/"
        className={`block border-b-2 border-transparent hover:scale-110 ${
          location.pathname.includes("Board-of-Directors")
          ? "border-primary"
          : ""
        } `}
        onClick={() => {
          activeHandler("Board of Directors");
        }}
        >
        Board of Directors
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/Credit-Committee/"
        className={`block border-b-2 border-transparent hover:scale-110 ${
          location.pathname.includes("Credit-Committee")
          ? "border-primary"
          : ""
        } `}
        onClick={() => {
          activeHandler("Credit Committee");
        }}
        >
        Credit Committee
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/Supervisory-Committee/"
        className={`block border-b-2 border-transparent hover:scale-110 ${
          location.pathname.includes("Supervisory-Committee")
          ? "border-primary"
          : ""
        } `}
        onClick={() => {
          activeHandler("Supervisory Committee");
        }}
        >
        Supervisory Committee
        </NavLink>
        </li>
        
        <li>
        <NavLink
        to="/faq/"
        className={`block border-b-2 border-transparent hover:scale-110 ${
          activeMenu === "FAQs" ? "border-primary" : ""
        } `}
        onClick={() => {
          activeHandler("FAQs");
        }}
        >
        FAQs
        </NavLink>
        </li>
        </ul>
        <ul className="flex gap-2">
        <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
        <a
        className="h-full w-full"
        href="https://www.facebook.com/"
        >
        <i className="fa fa-facebook mt-2 h-full w-full text-center leading-3"></i>
        </a>
        </li>
        <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
        <a
        className="h-full w-full text-center"
        href="tel:+8809678771270"
        data-url="tel:+8809678771270"
        >
        <i className="fa fa-phone mt-2 h-full w-full text-center leading-3"></i>
        </a>
        </li>
        <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
        <a
        className="h-full w-full text-center"
        href="mailto: info@cccul.com"
        >
        <i className="fa fa-envelope mt-2 h-full w-full text-center leading-3"></i>
        </a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        
        <div
        className={`relative  ${
          scroll
          ? "text-onSurface bg-surface shadow-sm"
          : "text-onPrimary bg-transparent"
        }`}
        >
        <div className="container mx-auto flex flex-wrap items-center justify-between p-3">
        <NavLink to="/" className="flex">
        {scroll ? (
          <img
          className="mr-3 h-10 md:h-12 lg:h-16"
          src={logo}
          alt="header logo"
          />
          ) : (
            <img
            className="mr-3 h-10 md:h-12 lg:h-16"
            src={white_logo}
            alt="header logo"
            />
            )}
            
            <span
            className={`self-center text-xl font-semibold antialiased${
              scroll ? "lg:text-2xl " : "lg:text-2xl text-white"
            }`}
            >
            Dhaka Credit
            </span>
            </NavLink>
            
            <button
            onClick={navigationHandler}
            className={`ml-3 inline-flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900   lg:hidden ${
              navClick
              ? "focus:outline-none focus:ring-2 focus:ring-blue-300"
              : ""
            }`}
            >
            <span className="sr-only">Open main menu</span>
            <svg
            className={`h-6 w-6 ${
              scroll ? "text-black" : "text-white"
            }`}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            ></path>
            </svg>
            </button>
            
            <div
            className={`h-full md:h-auto  w-full md:w-auto lg:block ${
              navClick
              ? "block bg-surface h-screen w-screen"
              : "hidden h-auto w-full"
            }`}
            >
            <ul
            className={`mt-4 flex flex-col gap-2 p-4 md:mt-0 md:flex-row md:items-center md:border-0 md:text-sm md:font-bold lg:gap-6 ${
              scroll
              ? "text-onSurface"
              : "lg:text-white text-onSurface "
            }`}
            >
            <li>
            <NavLink
            to="/"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname === "/"
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Home");
            }}
            >
            Home
            {/* */}
            </NavLink>
            </li>
            
            <li>
            <NavLink
            to="/services"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("services")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Service");
            }}
            >
            Services
            </NavLink>
            </li>
            <li>
            <NavLink
            to="projects"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("projects")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Projects");
            }}
            >
            Projects
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/loans"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("loans")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Loans");
            }}
            >
            Loans
            </NavLink>
            </li>
            <li>
            <NavLink
            to="deposits"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("deposits")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Deposits");
            }}
            >
            Deposits
            </NavLink>
            </li>
            
            <li className="group relative inline-block">
            <NavLink
            to="career"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("career")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Career");
            }}
            >
            Career
            </NavLink>
            </li>
            <li className="group relative inline-block">
            <NavLink
            to="about"
            state="About"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("about")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("About");
            }}
            >
            About
            </NavLink>
            </li>
            
            <li className="group relative inline-block">
            <NavLink
            to="/Notice/"
            state="/Notice/"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("Notice")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("/Notice/");
            }}
            >
            Notice
            </NavLink>
            </li>
            <li className="group relative inline-block">
            <NavLink
            to="contact"
            className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
              location.pathname.includes("contact")
              ? scroll
              ? "border-primary"
              : "border-onPrimary"
              : ""
            } ${
              scroll
              ? "hover:border-primary"
              : "hover:border-onPrimary"
            }`}
            onClick={() => {
              activeHandler("Contact");
            }}
            >
            Contact
            </NavLink>
            </li>
            
            {!!ctx.userInfo ? (
              <li
              className="transition duration-150 ease-out hover:scale-110 hover:ease-in"
              onClick={ClickHandler}
              >
              <NavLink to="/">
              <button className="rounded bg-primary py-2 px-4 text-onPrimary">
              <span>Logout</span>
              </button>
              </NavLink>
              </li>
              ) : (
                <li className="transition duration-150 ease-out hover:scale-110 hover:ease-in">
                <div>
                <button
                className="rounded bg-primary py-2 px-4 text-onPrimary"
                onClick={loginModalHandler}
                >
                <span> Member Login</span>
                </button>
                </div>
                </li>
                )}
                </ul>
                </div>
                </div>
                </div>
                </section>
                </>
                );
              }}
              </TestContext.Consumer>
              );
            }
            
            export default Header;
            