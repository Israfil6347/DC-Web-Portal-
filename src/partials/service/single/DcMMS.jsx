import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../../../assets/images/service/mms2.png";

function DcMMS() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.div
      //transition={{ type: "spring", stiffness: 100, damping: 20 }}
      exit={{
        opacity: 0,
        x: -window.innerWidth,
        transition: { duration: 0.3 },
      }}
      initial={{
        opacity: 0,
        x: -window.innerWidth,
        transition: { duration: 0.3 },
      }}
      animate={{ x: 0, opacity: 1 }}
    >
      <section className="text-onSurface ">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <h2 className="mb-2  p-1 text-2xl lg:text-3xl font-bold">
              {" "}
              Member Mobile Service (MMS) App
            </h2>

            <div className="mb-4 mt-2 p-1 text-justify ">
              Dhaka Credit members have entered a digitization era. On February
              6th 2021, Dhaka Credit launched its Members Mobile Service (MMS)
              at the CBCB center during a workshop. The App is designed to
              provide convenience to the members through digital services.
            </div>

            <div className="float-left w-full  lg:w-2/5">
              <img src={image} className="w-full pr-6 pb-5 " alt="" />
            </div>

            <div className="px-4">
              <h4 className="mt-2 text-xl lg:text-2xl font-semibold">
                Features
              </h4>

              <ul className="mt-2 list-disc">
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Transfer from one account to another
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Cash Withdrawal through ATM
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Information on Member’s Loan
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Surety status
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Savings & Products information
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Emergency Ambulance service
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  contact number of all branches
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Instant Loan (Starting from Tk. 5,000/- & upto Tk. 25,000/-)
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, stiffness: 10 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Deposit Request through Bank
                </motion.li>
                <motion.li
                  className="mt-2 flex items-start"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <svg
                    className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Mini Statement
                </motion.li>
              </ul>
            </div>

            <div class="mx-auto mt-20 w-full text-center md:text-left lg:w-3/4 xl:w-1/2">
              <button className="transition animate-duration-1000  hover:animate-heartBeat  rounded bg-primary py-2 px-4 text-onPrimary">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dhakacredit.cccul&amp;hl=en&amp;gl=US"
                  target="_blank"
                  aria-label="Google Play"
                  rel="noopener noreferrer"
                >
                  Click to Download the App
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default DcMMS;
