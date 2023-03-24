import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";

const NavAboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const location = useLocation();
  console.log(location);

  const [highlight, setHighlight] = useState({
    name: "",
  });

  const HighlightHandler = (name) => {
    setHighlight({ name: name });
  };

  useEffect(() => {
    if (location.state === "About") {
      HighlightHandler("About");
    }
  }, [location.state]);
  return (
    <>
      <div className="container mx-auto mb-20">
        <div className="flex  flex-col-reverse items-start text-justify gap-6 md:flex-row">
          {location.state === "About" ? <AboutUs /> : <Outlet></Outlet>}

          <div className="w-full  overflow-hidden rounded-md bg-surface shadow-sm md:w-3/12">
            <h2 className="bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200">
              <NavLink to="about" state="About">
                About Us
              </NavLink>
            </h2>
            <ul className="flex w-full flex-col divide-y p-6 text-onSurface">
              <li
                className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Founders Profile")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("founders-profile")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/founders-profile/" className="">
                  {" "}
                  Founder's Profile
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Our Story")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("our-story") ? "show" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/our-story/" className="">
                  Our Story
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Mission & Vision")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("mission-vision")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/mission-vision/" className="h-full w-full">
                  Mission & Vision
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Core Values")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("core-values")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/core-values/" className="">
                  Core Values
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("President Message")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("President-message")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/President-message/" className="">
                  President Message
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("C.U Movement")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("cu-movement")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/cu-movement/" className="">
                  C.U Movement
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Achievement")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("Achievement")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/Achievement/" className="">
                  Achievement
                </NavLink>
              </li>
              <li
                className="group flex items-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
                onClick={() => HighlightHandler("Women Activity")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    location.pathname.includes("women-activity")
                      ? "show"
                      : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/about/women-activity/" className="">
                  Women Activity
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAboutUs;
