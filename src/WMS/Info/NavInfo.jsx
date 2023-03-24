import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import Me from "./Me";

const NavInfo = ({ popUpHandler }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const location = useLocation();

  const [highlight, setHighlight] = useState({
    name: "",
  });

  const HighlightHandler = (name) => {
    setHighlight({ name: name });
  };

  useEffect(() => {
    if (location.pathname === "/me") {
      HighlightHandler("Me");
    }
  }, [location.state]);

  return (
    <>
      <div className="container mx-auto mb-20 cursor-pointer">
        <div className="flex  flex-col-reverse items-start text-justify gap-6 md:flex-row">
          {location.pathname === "/me" ? <Me /> : <Outlet></Outlet>}

          <div className="w-full animate-slideInRight overflow-hidden rounded-md bg-surface shadow-sm md:w-3/12">
            <h2 className="bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200">
              <NavLink to="">info</NavLink>
            </h2>
            <ul className="flex w-full flex-col divide-y p-6 text-onSurface">
              <li className="group flex overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block group-hover:text-onSurface ${
                    highlight.name === "Me" ? "show" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="/me" className="">
                  {" "}
                  Me
                </NavLink>
              </li>
              <li
                onClick={() => {
                  popUpHandler(true);
                }}
                className="group flex overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-hover:block group-hover:text-onSurface"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <div className="">Family and Relatives</div>
              </li>
              <li
                onClick={() => {
                  popUpHandler(true);
                }}
                className="group flex overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-hover:block group-hover:text-onSurface"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <div className="h-full w-full">Surety Given To</div>
              </li>
              <li
                onClick={() => {
                  popUpHandler(true);
                }}
                className="group flex overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-hover:block group-hover:text-onSurface"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <div className="">Card</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavInfo;
