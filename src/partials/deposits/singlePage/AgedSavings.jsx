import { motion } from "framer-motion";
import { useEffect } from "react";

function AgedSavings() {
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
              <h2 className="mb-2 p-1  text-2xl lg:text-3xl font-semibold">
                Aged Savings
              </h2>
              <div className="mb-4 p-1 text-justify">
                Aged Savings scheme is specially designed to ensure financial
                security at the time of retirement.
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
                    Monthly Deposit: BDT (200, 300, 500, 700, 1000, 1500 &
                    2000).
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
                    Interest Rate: 9% per annum
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
                    Flexible Tenure: (10, 15, 20, 25 or 30 Years)
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
                    After Completing 2 Years, 90% of the deposit amount can be
                    received as Loan; in case of Emergency, deposit can be
                    withdrawn at anytime as premature encashment.
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
                <h4 className="mt-5 mb-4 text-xl lg:text-2xl font-semibold">
                  Total Payable amount in Maturity
                </h4>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">3,000</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">3,82,286</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">7,38,774</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">12,87,275</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">21,31,212</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">34,29,713</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">2,000</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">3,82,286</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">7,38,774</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">12,87,275</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">21,31,212</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">34,29,713</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">1,500</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">2,86,711</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">5,54,074</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">9,65,444</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">15,98,390</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">25,72,255</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">1,000</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">1,91,140</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">3,69,381</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">6,43,625</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">10,65,586</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">17,14,825</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">700</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">1,33,794</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">2,58,560</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">4,50,528</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">7,45,893</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">12,00,349</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">500</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">95,566</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">1,84,693</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">3,21,801</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">5,32,774</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">8,57,382</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">300</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">57,337</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">1,10,805</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">1,93,072</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">3,19,650</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">5,14,406</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md   md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">200</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">38,220</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">73,862</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">1,28,702</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">2,13,077</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">3,42,900</div>
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

export default AgedSavings;
