import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import MyAccounts from "./MyAccounts";

const NavAccount = ({
  popUpHandler,
  popUpErrorHandler,
  accDetailsPopup,
  isLoading,
}) => {
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

  const loadingHandler = (isLoadings) => {
    isLoading(isLoadings);
  };

  const HighlightHandler = (name) => {
    setHighlight({ name: name });
  };

  useEffect(() => {
    if (location.pathname === "/accounts") {
      HighlightHandler("Account");
    }
  }, [location.state]);

  const accDetailsPopHandler = (accDetails) => {
    accDetailsPopup(accDetails, true);
  };

  const popUpHandlers = (isError) => {
    popUpHandler(isError);
  };

  const ErrorMessageHandlers = (errorObj) => {
    if (errorObj !== null) {
      popUpErrorHandler(true, errorObj);
    } else {
      popUpErrorHandler(false, errorObj);
    }
  };

  return (
    <>
      <div className="container mx-auto mb-20 cursor-pointer">
        <div className="flex  flex-col-reverse items-start text-justify gap-6 md:flex-row">
          {location.pathname === "/accounts" ? (
            <MyAccounts
              popError={ErrorMessageHandlers}
              IsLoading={loadingHandler}
              accDetailsPopup={accDetailsPopHandler}
            />
          ) : (
            <Outlet></Outlet>
          )}

          <div className="w-full animate-slideInRight overflow-hidden rounded-md bg-surface shadow-sm md:w-3/12">
            <h2 className="bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200">
              <NavLink href="">Accounts</NavLink>
            </h2>
            <ul className="flex w-full flex-col divide-y p-6 text-onSurface">
              <li className="group flex overflow-hidden rounded-sm p-2 font-semibold hover:bg-backgroundVariant hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    highlight.name === "Account" ? "show" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <NavLink to="" className="">
                  {" "}
                  My Accounts
                </NavLink>
              </li>
              <li className="group flex overflow-hidden rounded-sm p-2 font-semibold hover:bg-backgroundVariant hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={` h-5 w-5 group-hover:block  ${
                    highlight.name === "Create an Account" ? "show" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <div
                  onClick={() => {
                    popUpHandlers(true);
                  }}
                  className=""
                >
                  Open an Account
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAccount;
