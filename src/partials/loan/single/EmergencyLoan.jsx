import { motion } from "framer-motion";
import { useEffect } from "react";

function EmergencyLoan() {
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
          <div className="animate-slideInUp text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold text-onSurface">
                Emergency Loan
              </h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                Dhaka Credit’s special Emergency Loan (Mother & Child) provides
                urgent treatment and ensure security during the mother’s
                pregnancy and child birth.
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
                    Highest Loan: BDT 200,000.
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
                    Interest Rate: 12% yearly, (Continuous Reducing Method).
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
                    Loan Tenure: 3 Yearly/ 36 Equal Monthly installments.
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
                    Loan Processing Fee: BDT 500 (With Loan Application).
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
                    Failing to pay Monthly installment, results in fines similar
                    to General Loan.
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
                    This Loan’s LPS is similar to General Loan.
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
                    Rebate will not be provided on the Interest of this Loan.
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
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    With existing General Loan, an applicant can apply for this
                    Emergency Loan.
                  </motion.li>
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
                    An Applicant can apply for this Loan 3 month after the time
                    of opening Savings & Credit Account.
                  </motion.li>
                </ul>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Requirements
                </h4>
                <ul className="mt-5 list-disc">
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
                    Applicant must submit copy of Union’s Digital ID card, Loan
                    Application & recent photo.
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
                    This Loan will be provided for children = (0-18 month).
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
                    Applicant must have a Health Care Scheme Account.
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
                    Applicant has to issue 3 MICR blank cheques with Signature
                    before receiving the Loan.
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
                    Applicant has to deposit Savings & Share accounts regularly.
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default EmergencyLoan;
