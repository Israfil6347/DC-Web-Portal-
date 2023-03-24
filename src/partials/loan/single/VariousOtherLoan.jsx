import { motion } from "framer-motion";
import { useEffect } from "react";

function VariousOtherLoan() {
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
                Various other Loans
              </h2>
              <div className="mb-4 divide-y-2 divide-gray-100 p-1 text-justify text-onSurface">
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Dhaka Credit Monthly Savings
                  </h4>

                  <p className="mt-5">
                    This Loan provides Financial Support during the time of need
                    against the applicant’s Monthly Savings Account.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan facilities will be given up to 95% of the deposit
                      after completing 2 years.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest rate is 11% for 5 years and 11.5% for 10 years
                      duration of the deposit.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Dhaka Credit Education Savings
                  </h4>

                  <p className="mt-5">
                    This Loan is taken against the applicant’s Educational
                    Savings Account to support further education.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan facilities up to 2 times the amount of the Deposited
                      amount.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 11.5%
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Applicant completing study up to Higher Secondary Level
                      and 5 years of opening the account.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Dhaka Credit Troimashik Savings
                  </h4>

                  <p className="mt-5">
                    This Loan is provided to the applicant against the
                    Troimashik Savings.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan Facilities will be given up to 95% of the Deposit.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 11.5%.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Dhaka Credit Double Deposit Savings
                  </h4>

                  <p className="mt-5">
                    This Loan is provided to applicant against the applicant’s
                    Double Deposit Savings.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Under this scheme, applicant get Loan on instant facility
                      up to 95% of the total deposit.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 15.83%.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Dhaka Credit Aged Savings
                  </h4>

                  <p className="mt-5">
                    Retired Applicants can take this Loan against their Aged
                    Savings a/c to get the necessary financial support in their
                    time of need.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan facilities up to 95% of the deposit after completing
                      2 years.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 11.5%.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Marriage Deposit Scheme (DCMDS)
                  </h4>

                  <p className="mt-5">
                    This Loan is taken against the Deposit made by the members
                    in Marriage Deposit Scheme.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan facilities up to 95% of the deposit after completing
                      2 years.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 11.5%.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                    Loan Against Divine Mercy Hospital Ltd. Bond
                  </h4>

                  <p className="mt-5">
                    This Loan is taken against the Hospital Bond taken by the
                    member.
                  </p>

                  <h5 className="mt-5 text-xl font-medium ">Features</h5>
                  <ul className="my-5">
                    <li className="mt-2 flex items-start">
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
                      Loan facilities up to 95% can be given against the
                      Hospital Bond.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Interest Rate: 15%.
                    </li>
                    <li className="mt-2 flex items-start">
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
                      Surety of 100% can be given to self/ 1 member of the
                      family.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default VariousOtherLoan;
