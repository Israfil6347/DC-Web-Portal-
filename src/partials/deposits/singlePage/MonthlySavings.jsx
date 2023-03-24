import { motion } from "framer-motion";
import { useEffect } from "react";

function MonthlySavings() {
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
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="animate-slideInUp text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <h2 className="mb-2 p-1 text-3xl font-semibold">
                Monthly Saving Account
              </h2>
              <div className="mb-4 p-1 text-justify ">
                Monthly Savings is designed for building awareness among the
                people about forthcoming financial needs that may arise for any
                situation, inspiring the members to save regularly for future
                difficulties.
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
                    Monthly Deposits: BDT (200, 300, 500, 1000, and 1500) or any
                    multiple amounts from 1,000/- up to 25,000/-.
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
                    Interest Rate: (8.5% – 5 Years) and (9% – 10 Years)
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
                    Flexible tenure: 5 & 10 Years.
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
                    Instant Loan is available after 2 years, 90% of total
                    deposit can be received as Loan.
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
                    Any Savings Account holder can open one or multiple accounts
                    under this scheme.
                  </motion.li>
                </ul>
                <h4 className="mt-5 mb-6 text-2xl font-semibold">
                  Installment and Total Payable after Maturity:
                </h4>
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border p-4">
                    <div className="uppercase md:text-center">
                      Monthly Deposit: 200
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">5 Years: 14,869</li>
                      <li className="">Bonus: 200</li>
                      <li className="">Total: 15,069</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">10 Years: 38,220</li>
                      <li className="">Bonus: 200</li>
                      <li className="">Total: 38,420</li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border p-4">
                    <div className="uppercase md:text-center">
                      Monthly Deposit: 300
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">5 Years: 22,607</li>
                      <li className="">Bonus: 300</li>
                      <li className="">Total: 22,607</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">10 Years: 57,337</li>
                      <li className="">Bonus: 300</li>
                      <li className="">Total: 57,637</li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border p-4">
                    <div className="uppercase md:text-center">
                      Monthly Deposit: 500
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">5 Years: 37,677</li>
                      <li className="">Bonus: 500</li>
                      <li className="">Total: 37,677</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">10 Years: 95,566</li>
                      <li className="">Bonus: 500</li>
                      <li className="">Total: 96,066</li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border p-4">
                    <div className="uppercase md:text-center">
                      Monthly Deposit: 1000
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">5 Years: 74,357</li>
                      <li className="">Bonus: 1000</li>
                      <li className="">Total: 75,357</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">10 Years: 1,91,140</li>
                      <li className="">Bonus: 1000</li>
                      <li className="">Total: 1,92,140</li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border p-4">
                    <div className="uppercase md:text-center">
                      Monthly Deposit: 2000
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">5 Years: 1,48,720</li>
                      <li className="">Bonus: 2000</li>
                      <li className="">Total: 1,50,720</li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">10 Years: 3,82,286</li>
                      <li className="">Bonus: 2000</li>
                      <li className="">Total: 3,84,286</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default MonthlySavings;
