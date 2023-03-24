import { motion } from "framer-motion";
import { useEffect } from "react";

const CreditUnionMovement = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="clear-both"></div>

      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="animate-slideInUp text-onBackground"
        >
          <h4 className="text-2xl font-semibold">Credit Union Movement</h4>
          <div className="text-justify">
            <p className="my-4">
              Credit Union is a financial institution which is owned and
              controlled by its members. The members of the Credit Union deposit
              money and get loans and other financial services. Credit Union is
              a Member owned financial cooperative, democratically controlled by
              its members and operated for the purpose of promoting thrift,
              providing Credit at competitive rates and other financial services
              to its members. Worldwide, Credit Union systems is very
              significant in terms of total system assets and average
              institutional asset size, ranging from volunteer operations with a
              handful of members to institutions with assets worth several
              billion US dollars and hundreds of thousands of members. Credit
              unions operate alongside other mutual and cooperatives engaging in
              cooperative banking, such as building societies. Natural-person
              credit unions” (also called “retail credit unions” or “consumer
              credit unions”) serve individual people, as distinguished from
              “corporate credit unions,” which serve other credit union.
            </p>

            <div className="grid-col-1 mt-10 grid gap-4 md:grid-cols-3">
              <div className="">
                <div className="flex h-full items-start">
                  <div className="">
                    <h4 className="text-2xl">Vision</h4>
                    <p className="my-4">
                      To improve the lives of members through Credit Unions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex h-full items-start">
                  <div className="">
                    <h4 className="text-2xl">Mision</h4>
                    <p className="my-4 leading-relaxed">
                      To expand financial inclusion worldwide through the global
                      Credit union community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex h-full items-start">
                  <div className="">
                    <h4 className="text-2xl">Belief</h4>
                    <p className="my-4 leading-relaxed">
                      All people should have access to affordable, reliable and
                      sustainable financial services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-2xl">Core Values</h4>

            <div className="-m-4 mt-2 flex flex-wrap">
              <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
                <div className="-mb-1 flex flex-col items-start space-y-2.5 text-center sm:items-start sm:text-left">
                  <li className="mt-2 flex items-start">
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
                    Integrity.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Teamwork.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Excellence.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Community.
                  </li>
                </div>
              </div>
              <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
                <div className="-mb-1 flex flex-col items-start space-y-2.5 text-center sm:items-start sm:text-left">
                  <li className="mt-2 flex items-start">
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
                    Honesty.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Respect.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Service.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Loyalty.
                  </li>
                </div>
              </div>
              <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
                <div className="-mb-1 flex flex-col items-start space-y-2.5 text-center sm:items-start sm:text-left">
                  <li className="mt-2 flex items-start">
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
                    Professionalism.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Customers.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Trust.
                  </li>
                  <li className="mt-2 flex items-start">
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
                    Innovation.
                  </li>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mt-5 mb-2 text-2xl">Number of Credit Union</h4>
              <p className="my-4">
                In cooperation with its member organizations in nearly 60
                countries, World Council champions the credit union model
                worldwide to continue growing the international movement of
                57,000 Credit Unions in 103 countries that serve 208 million
                members.
              </p>
            </div>
            <div>
              <h4 className="text-2xl">Credit Union Structure (Internal)</h4>
              <p className="my-4">
                CU committee to be formed by 5-15 supervisory members who are
                elected by all members and serve a term of 3 years, reelected
                supervisory members may serve unlimited terms. The elected
                supervisory members should call the supervisory meeting within a
                week after the general meeting to elect 1 supervisory member as
                the chairman of this committee. The supervisory meeting should
                be called at least once a month to supervise the financial
                report and businesses implementation to make minutes with the
                suggestions for the board of directors.
              </p>
            </div>
            <div>
              <h4 className="mt-5 mb-2 text-2xl">Benefits of Credit Union</h4>
              <p className="my-4">
                With a bank you are simply a customer. Banks are for-profit
                institutions and their goal is to make money for the
                stockholders of the company. A Credit Union is not-for-profit
                entity and their goal is passing through the profits to the
                members. This comes in the form of added member benefits such as
                low fees and low rates. Credit unions offer many benefits over
                banks. Some of the reasons are stated below:
              </p>

              <ul className="my-4 mb-8 space-y-4 text-left">
                <li className="flex items-start">
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
                  With a credit union you are a member, or a stakeholder. With a
                  bank you are simply a customer. Banks are for-profit
                  institutions and their goal is to make money for the
                  stockholders of the company. A credit union is not-for-profit
                  entity and their goal is passing through the profits to the
                  members. This comes in the form of added member benefits such
                  as low fees and low rates.
                </li>
                <li className="flex items-start">
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
                  It’s a misconstrued opinion that credit unions have limited
                  branch and ATM locations. However, many credit unions belong
                  to larger networks, such as the Credit Union Service Centers.
                </li>
                <li className="flex items-start">
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
                  Most credit unions offer credit cards just like a typical
                  bank.
                </li>
                <li className="flex items-start">
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
                  Credit unions have many available ATMs, but they are also fee
                  free! The average fee for an ATM is $2.33 and is on the rise.
                  Now if you use your bank issued ATM card at a third party ATM,
                  then you just doubled your fees.
                </li>
                <li className="flex items-start">
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
                  At credit union, a member can enjoy credit cards, home equity
                  loans, mortgages, auto loans and personal loans at lower rates
                  than bank.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CreditUnionMovement;
