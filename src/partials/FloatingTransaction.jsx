import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TestContext from "../store/test-context";

function FloatingTransaction({ popUpHandler }) {
  const [rightSideNav, setRightSideNav] = useState(true);

  const location = useLocation();
  console.log(location);

  const rightNavHandler = () => {
    if (rightSideNav) {
      setRightSideNav(false);
    } else {
      setRightSideNav(true);
    }
    console.log(rightSideNav);
  };

  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <>
            <>
              <div className="absolute flex flex-col justify-center h-screen z-50 right-0">
                <div
                  className={`fixed flex flex-row items-center group w-80 transform duration-300 cursor-pointer${
                    !!ctx.userInfo
                      ? ""
                      : rightSideNav
                      ? "-translate-x-80"
                      : "-translate-x-10"
                  } ${rightSideNav ? "-translate-x-80" : "-translate-x-10"}`}
                >
                  <p
                    className="rounded-l-md text-sideways  text-center capitalize shadow-md px-2 py-6 text-onPrimaryVariant bg-primary"
                    onClick={rightNavHandler}
                  >
                    Online Transaction
                  </p>
                  <div className="bg-surface h-full w-full p-4 rounded-l-md text-onSurface shadow-md flex flex-col items-center justify-evenly">
                    <div className="flex justify-start w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 transition-all duration-300 hover:text-error hover:scale-150 "
                        onClick={rightNavHandler}
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="flex min-h-96 flex-col gap-1 text-center items-center mb-2">
                      <img
                        className="h-16 w-16  bg-white p-2 rounded-full shadow mb-2"
                        src={`data:image/png;base64, ${ctx.userInfo.UserPicture}`}
                        alt="user"
                      ></img>
                      <p className="font-semibold">{ctx.userInfo.UserName}</p>
                    </div>
                    <ul className="flex flex-col w-full text-left divide-y">
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <NavLink to="me">
                          <p
                            className={`font-semibold  hover:text-right ${
                              location.pathname.includes("me")
                                ? "text-right"
                                : ""
                            } duration-300 transition-all p-2`}
                          >
                            Info
                          </p>
                        </NavLink>
                      </li>
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <NavLink to="accounts">
                          <p
                            className={`font-semibold hover:text-right  ${
                              location.pathname.includes("accounts")
                                ? "text-right"
                                : ""
                            } duration-300 transition-all p-2`}
                          >
                            Accounts
                          </p>
                        </NavLink>
                      </li>
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <div
                          onClick={() => {
                            popUpHandler(true);
                          }}
                        >
                          <p className="font-semibold hover:text-right duration-300 transition-all p-2">
                            Loans
                          </p>
                        </div>
                      </li>
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <div
                          onClick={() => {
                            popUpHandler(true);
                          }}
                        >
                          <p className="font-semibold hover:text-right duration-300 transition-all p-2">
                            Deposits
                          </p>
                        </div>
                      </li>
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <div
                          onClick={() => {
                            popUpHandler(true);
                          }}
                        >
                          <p className="font-semibold hover:text-right duration-300 transition-all p-2">
                            Transfer
                          </p>
                        </div>
                      </li>
                      <li className="hover:shadow-sm hover:bg-backgroundVariant overflow-hidden p-1 rounded-sm">
                        <div
                          onClick={() => {
                            popUpHandler(true);
                          }}
                        >
                          <p className="font-semibold hover:text-right duration-300 transition-all p-2">
                            Security
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          </>
        );
      }}
    </TestContext.Consumer>
  );
}

export default FloatingTransaction;
