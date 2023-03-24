import { motion } from "framer-motion";
import { useEffect } from "react";

const WomenActivity = () => {
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
          <h4 className="text-2xl font-semibold">
            DHAKA CREDIT’S WOMEN COMMITTEE
          </h4>
          <p className="my-4">
            The Women Committee of Dhaka Credit has played a significant role in
            promoting the progress of Dhaka Credit. Besides this, the committee
            has organized various programs such as reception of students,
            Pre-Christmas celebrations with Mothers and Children, Bee & Smart
            Savers program, International Women’s Day celebration, etc for the
            Empowerment of Women. The Women Committee consists of nearly 360
            Members.
          </p>
          <h4 className="my-5 text-2xl">Reasons of forming Women Committee:</h4>
          <ul className="flex list-disc flex-col">
            <li className="flex items-center animate-fadeInRight animate-delay-75">
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
              Women Empowerment.
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-100">
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
              Encouraging The Child & Women.
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-150">
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
              Small Entrepreneurship.
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-200">
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
              Reward The Women.
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-300">
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
              Relation Building.
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-500">
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
              Observe National & International Days .
            </li>
            <li className="flex items-center animate-fadeInRight animate-delay-700">
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
              Social Activities.
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default WomenActivity;
