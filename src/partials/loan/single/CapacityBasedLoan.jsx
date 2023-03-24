import { motion } from "framer-motion";
import { useEffect } from "react";

function CapacityBasedLoan() {
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
      <section className="animate-fadeInUp">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold text-onSurface">
              Capacity Based Loan
            </h2>
            <div className="mb-4 p-1 text-justify text-onSurface">
              This Loan Scheme is based on the capacity of the applicants and
              how much & how many loans the applicants has taken and repaid
              before.
            </div>
            <h4 className="mt-5 text-xl lg:text-2xl font-semibold text-onSurface">
              Features
            </h4>

            <ul className="mt-5 list-disc">
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-75">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                Highest Loan: BDT 15,00,000 (Based on Net Income & Capacity of
                Return)
              </li>
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-100">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                Interest Rate: 13.5% Yearly (Continuous Reducing Manner)
              </li>
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-150">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                Loan Tenure: 5 years/ 60 Monthly Installments
              </li>
            </ul>

            <h4 className="mt-5 text-xl lg:text-2xl font-semibold text-onSurface">
              Requirements
            </h4>

            <ul className="mt-5 list-disc">
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-75">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                Application should be a regular member (Continuous 3 Years) by
                depositing in Share & Savings account.
              </li>
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-100">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                Member has to fulfill first 3 ceiling of Loan from the Union and
                Repaid regularly.
              </li>
              <li className="animate-fadeInRight mt-2 flex items-center text-onSurface animate-delay-150">
                <svg
                  className="mr-1.5 h-4 w-4 flex-shrink-0"
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
                BDT 3,00,000 of General Loan should be taken and repaid
                regularly to apply for BDT 10,00,000 (10 Lac).
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default CapacityBasedLoan;
