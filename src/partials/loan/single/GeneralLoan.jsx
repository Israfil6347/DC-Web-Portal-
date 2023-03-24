import { motion } from "framer-motion";
import { useEffect } from "react";

function GeneralLoan() {
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
      <section className="">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold text-onSurface">
                General Loan
              </h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                Any member can take this loan to serve various purposes with
                variety of Loan ceilings and various Installments in general.
                <h4 className="text-onSurfaceVariant mt-5 text-xl lg:text-2xl font-semibold">
                  Features
                </h4>
                <p className="mt-5 text-onBackground">
                  According to the Loan Ceiling Policy, the following amounts
                  are allowed to take Loan by the regular Members of the Union:
                </p>
                <ul className="mt-5">
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Highest Loan: BDT 35 Lac.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Interest Rate: 12% (yearly).
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Installment: (36/60/72/96/120) Equal & Fixed Installments.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    According to Loan Ceiling, following amounts are allowed to
                    be taken as Loan by the regular members of the Union:
                  </motion.li>
                </ul>
              </div>

              <div className="container mx-auto px-2 border">
                <div className="flex flex-wrap">
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font mb-2 text-lg font-medium text-onSurface sm:text-xl">
                      1st Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        4th month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 100,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      2nd Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        3rd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 200,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      3rd Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        3rd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 400,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      4th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        3rd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 600,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      5th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 900,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      6thLoan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 1200,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      7th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 150,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      8th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        10 times of the share of 3 months
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 1800,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      9th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 2500,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      10th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 3000,000
                      </li>
                    </ul>
                  </div>
                  <div className=" py-4 lg:py-6 md:w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="title-font text-onSurface mb-2 text-lg font-medium sm:text-xl">
                      11th Loan
                    </h2>

                    <ul className="text-onSurface">
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        2nd month's share amount
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        BDT 3500,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default GeneralLoan;
