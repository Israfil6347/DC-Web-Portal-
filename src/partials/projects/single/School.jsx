import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import dcSchoolImage from "../../../assets/images/project/dcschool.JPG";

function School() {
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
                src={dcSchoolImage}
                className="w-full animate-fadeInLeft pb-5 lg:pr-6"
                alt=""
              />
            </div>
            <div className="animate-fadeInUp">
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold">
                Dhaka Credit Union School
              </h2>
              <div className="mb-4 p-1 text-justify">
                <p>
                  School is one of the most important aspects of any society as
                  they nurture and develop the poimport {useEffect} from
                  'react'; tential bright futures of our society. Dhaka Credit
                  Union School was established in 2009 along with 16 students
                  the school started its journey. Currently the number of
                  students is more than 300. The school is spreading the light
                  of knowledge in the surrounding areas of Nadda & Bashundhara
                  of Dhaka. On 26th Feb, 2017, the school has moved to a new
                  building. With the passage of time, the school is becoming
                  more popular among the people of the community.
                </p>

                <div className="my-4 flex flex-wrap p-1 lg:mt-40">
                  <div className="p-4 shadow-sm md:w-1/2">
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
                        Dhaka Credit Union School was established in 2009 for
                        students irrespective of their religion, with the
                        mission to maintain a standard of education.
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
                        Monthly tuition fees for the students are fixed at a
                        reasonable cost.
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
                        Presently the school provides classes from Nursery to
                        className VIII (8).
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
                        Currently the total number of students is nearly 300
                        plus.
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
                        There is a future plan to upgrade the school to college
                        and consecutively university as well.
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
                        Professional Teaching Method & Well Experienced Teachers
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 shadow-sm md:w-1/2">
                    <h4 className="mt-5 text-xl lg:text-2xl font-semibold">
                      Extra-Curriculum Activities
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
                        Cultural Practice.
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
                        Club Activities.
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
                        Student Counseling.
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
                        Game & Sports.
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
                        Primary Medical Education.
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
                        Academic Tour
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t">
                <ul>
                  <h2 className="mt-5 text-xl lg:text-2xl font-semibold">
                    Address & Contact Info
                  </h2>
                  <li>Ka-30/A/2, Joar Sahara, Nadda, Dhaka.</li>
                  <li>Dhaka-1212</li>
                  <li>Call: 01709-815485</li>
                  <li>Email: dcschoolinfo@cccul.com</li>

                  <li>
                    <a
                      href="
              https://dcuschool.cccul.com//"
                    >
                      Website:https://dcuschool.cccul.com//
                    </a>
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

export default School;
