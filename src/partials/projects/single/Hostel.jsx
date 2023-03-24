import { motion } from "framer-motion";
import { useEffect } from "react";
import dcHostelImage from "../../../assets/images/project/hostel.jpg";

function Hostel() {
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
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="w-full float-left lg:w-2/5">
              <img
                src={dcHostelImage}
                className="w-full md:pr-6 pb-5 animate-slideInLeft"
                alt=""
              />
            </div>
            <div className="animate-slideInUp">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold">
                Dhaka Credit Girl's Hostel
              </h2>
              <div className="mb-4 p-1 text-justify">
                <p>
                  Dhaka Credit is operating three Girl’s Hostel for the female
                  students who are coming from villages for higher studies and
                  career in Dhaka City. These students often face problems due
                  to crisis of accommodation with reasonably low cost in the
                  city. To tackle this problems, Dhaka Credit is using its
                  buildings in Shadhonpara, Monipuripara & Nadda to provide
                  accommodation to these students. These hostels provide
                  comfortable accommodation, comparatively low cost, standard
                  meals, skilled management & 24hrs security with cc camera. The
                  Hostel is conveniently located near the main Public
                  transportation Hub of the city .
                </p>
                <div className="clear-both"></div>
                <h4 className="mt-10 text-2xl font-semibold ">Features</h4>

                <ul className="mt-5 list-disc">
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-75">
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
                    Excellent Environment.
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-100">
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
                    Plenty of Space
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-150">
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
                    Healthy and Standard Meal
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-200">
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
                    Comfortable Accommodation
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-300">
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
                    C.C Camera Security
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-500">
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
                    Safe & Secured
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-700">
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
                    Hostel Facilities
                  </li>
                </ul>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Hostel Facilities
                </h4>

                <ul className="mt-5 list-disc">
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-75">
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
                    Separate Study room.
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-100">
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
                    Separate Dining room.
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-150">
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
                    Daily Newspaper.
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-200">
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
                    Lift with Generator Support(Only in Monipuripara).
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-300">
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
                    Computer Room.
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-500">
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
                    Cable Connection
                  </li>
                  <li className="mt-2 flex items-start animate-fadeInRight animate-delay-700">
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
                    Always Water Availability
                  </li>
                </ul>

                <div className="container mx-auto  py-6 lg:py-10">
                  <h4 className="mb-0 lg:mb-7 text-center text-xl lg:text-2xl font-bold ">
                    Hostel Info
                  </h4>
                  <div className=" flex flex-wrap">
                    <div className=" lg:w-1/3">
                      <div className="relative h-full overflow-hidden rounded-lg  lg:p-4">
                        <h4 className="mt-5 text-xl font-normal ">
                          MonipuriPara Hostel
                        </h4>
                        <ul className="mt-5 list-disc">
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
                            Hostel Fee: BDT 4,630
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
                            Address: 88/5, MonipuriPara, Gate-4 Tejgaon,
                            Dhaka-1215
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
                            Call: 01718-477702
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
                            Email: info@cccul.com
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className=" lg:w-1/3">
                      <div className="relative h-full overflow-hidden rounded-lg lg:p-4">
                        <h4 className="mt-5 text-xl font-normal ">
                          SadhonPara Hostel
                        </h4>
                        <ul className="mt-5 list-disc">
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
                            Hostel Fee: BDT 3,770
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
                            Address: 8/Kha, ShadhonPara East Rajabazar, Dhaka-
                            1215
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
                            Call: 01715-440437
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
                            Email: info@cccul.com
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className=" lg:w-1/3">
                      <div className="relative h-full overflow-hidden rounded-lg  lg:p-4">
                        <h4 className="mt-5 text-xl font-normal ">
                          Nadda Hostel
                        </h4>
                        <ul className="mt-5 list-disc">
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
                            Hostel Fee: BDT 3,500
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
                            Ka-29/A, Nadda Sarkerbari Gulshan-2, Dhaka-1212
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
                            Call: 01674-110964
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
                            Email: info@cccul.com
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-5">
                      **All Fees are subject to changes according to decision by
                      the Management. For up-to-date rate, you are requested to
                      contact the listed number**
                    </p>
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

export default Hostel;
