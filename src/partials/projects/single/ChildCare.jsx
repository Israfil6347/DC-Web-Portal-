import { motion } from "framer-motion";
import { useEffect } from "react";
import ChildCareImage from "../../../assets/images/project/dc_child.jpg";

function ChildCare() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
      }}
      initial={{
        opacity: 0,
        x: window.innerWidth,
      }}
      animate={{ x: 0, opacity: 1 }}
      className="group cursor-pointer"
    >
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="float-left w-full animate-fadeInLeft lg:w-2/5">
              <img
                src={ChildCareImage}
                className="w-full animate-fadeInLeft pb-5 lg:pr-6"
                alt=""
              />
            </div>
            <div className="animate-fadeInUp">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold">
                Dhaka Credit’s Child Care & Education Center
              </h2>
              <div className="mb-4 p-1 text-justify">
                <p>
                  Dhaka Credit’s Child Care & Education Center is a unique
                  addition to Dhaka Credit as it promotes quality education &
                  Child-Friendly Environment for the children and make life
                  easier for the working women and young couples. Dhaka credit
                  is the 1st World Class Child Care & Education Center in
                  Bangladesh & it is open for all. So visit the Campus,
                  experience the Professional Services and decide your child’s
                  future towards a brighter future
                </p>
                <div className="-m-2 mt-5 flex flex-wrap lg:mt-52">
                  <div className="p-4 md:w-1/2">
                    <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Features
                    </h4>

                    <ul className="mt-5 list-disc">
                      <li className="mt-2 flex animate-fadeInRight animate-delay-75">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        A relief for New Couple and Working Women.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-100">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Provide children with world-Class Education standard.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-150">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Create a Safe & Sustainable Educational Environment for
                        the children.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-200">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Providing the children with the right education that
                        they require.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-300">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Providing the service at a very competitive cos.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-500">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        And above all, Developing future generations of our
                        nation.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 md:w-1/2">
                    <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Education
                    </h4>

                    <ul className="mt-5 list-disc">
                      <li className="mt-2 flex animate-fadeInRight animate-delay-75">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Language inside the center is English.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-100">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Curriculum based on Cambridge Pre-School.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-150">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Air-Conditioned Class Room.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-200">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Child-Friendly Toys for the children.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-300">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        24hrs C.C Camera Monitoring.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-500">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Fully Secured for the children.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="-m-2 flex flex-wrap">
                  <div className="p-4 md:w-1/2">
                    <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Privilege
                    </h4>

                    <ul className="mt-5 list-disc">
                      <li className="mt-2 flex animate-fadeInRight animate-delay-75">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Very Competitive Price.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-100">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Indoor & Outdoor Activities.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-150">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Nutritious & Healthy Food
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-200">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Food item is prepared by Expert Nutritionists.
                      </li>
                      <li className="mt-2 flex animate-fadeInRight animate-delay-300">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Proper Dinning and Sleeping arrangements specially
                        designed for children.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 md:w-1/2">
                    <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Teacher
                    </h4>

                    <ul className="mt-5 list-disc">
                      <li className="mt-2 flex animate-fadeInRight animate-delay-75">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Our teachers are specially trained from Singapore.
                      </li>

                      <li className="mt-2 flex animate-fadeInRight animate-delay-100">
                        <svg
                          className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0 items-start"
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
                        Guidance under expert adviser from Singapore.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-3 border-t">
                  <ul>
                    <h2 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Address & Contact Info
                    </h2>
                    <li>88/5, MonipuriPara, Gate No: 4, Tejgaon,</li>
                    <li>Dhaka-1215</li>
                    <li>Fax: 88-02-9143079.</li>
                    <li>Dial:01709-815484</li>
                    <li>Extension No: 967877-2231</li>
                    <li>Email: dc_childcare@cccul.com,</li>
                    <li>info@cccul.com,</li>
                    <li>Facebook: www.facebook.com/dhakacreditchildcare/</li>
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

export default ChildCare;
