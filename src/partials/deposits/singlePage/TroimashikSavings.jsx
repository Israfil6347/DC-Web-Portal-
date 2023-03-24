import { motion } from "framer-motion";
import { useEffect } from "react";

function TroimashikSavings() {
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
        x: window.innerWidth,
        transition: { duration: 0.3 },
      }}
      animate={{ x: 0, opacity: 1 }}
    >
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="animate-slideInUp text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-semibold">
                Troimashik Savings
              </h2>
              <div className="mb-4 p-1 text-justify">
                This is a special type of Fixed Deposit which provides quarterly
                Interest and transfers accrued Interest to the account holder’s
                Savings/STD account.
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                  Features
                </h4>
                <ul className="mt-5 list-disc">
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
                    Minimum Deposit: BDT 100,000; any amount more than that can
                    be placed as Deposit.
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
                    Interest Rate: 9% per annum.
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
                    Flexible Tenure: 4,5 or 8 Years
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Instant Loan is available, after completing 2 years, 90% of
                    total deposit can be received as Loan & can be used as
                    surety for self and family members.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Accrued Interest on deposit is disbursed quarterly.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Deposit may be withdrawn at any time, in case of emergency
                    as premature encashment.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Principal Amount and After 3 months payable interest list
                    are given below:
                  </motion.li>
                </ul>
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:100000</div>
                    <div className="">Interest:2,250</div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:200000</div>
                    <div className="">Interest:4,500</div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:300000</div>
                    <div className="">Interest:6,750</div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:400000</div>
                    <div className="">Interest:9,000</div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:500000</div>
                    <div className="">Interest:11,250</div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-md border p-3">
                    <div className="font-semibold">Amount:1000000</div>
                    <div className="">Interest:22,500</div>
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

export default TroimashikSavings;
