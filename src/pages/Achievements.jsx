import { motion } from "framer-motion";
import { useEffect } from "react";

const Achievement = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="animate-slideInUp text-onBackground"
        >
          <h4 className="mb-4 text-2xl font-semibold">Achievements</h4>
          <p className="mb-4">
            Dhaka Credit has achieved a lot through its long journey of Credit
            Union in Bangladesh. Apart from institutional Achievements, various
            National recognition has been given at various times for making
            important contributions to the Country’s Economy. All the
            achievements provide new inspirations to move forward with the dream
            of becoming more successful. Below are some of the achievements that
            were achieved by Dhaka Credit over time.
          </p>

          <ul className="flex list-disc flex-col gap-2">
            <li className="flex items-center">
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
              The next big vision of Dhaka Credit is to build a Medical College
              & Hospital.
            </li>
            <li className="flex items-center">
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
              Dhaka Credit has a State of the Art & First-Class standard Resort
              & Training Center at Mothbari Kuchilabari.
            </li>
            <li className="flex items-center">
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
              Dhaka Credit is one of the first to provide World-Class Child Care
              & Education Center in Bangladesh.
            </li>
            <li className="flex items-center">
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
              Dhaka Credit’s Security Services is currently one of the leading
              Security Service provider in Bangladesh.
            </li>
            <li className="flex items-center">
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
              Dhaka Credit Union School, situated in Nadda is providing the best
              learning environment for the students.
            </li>
            <li className="flex items-center">
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
              Establishment of Head Office and 12 area offices (Luxmibazar,
              Sadhonpara, Monipuripara, Mirpur, Mohakhali, Nadda, Savar, Pagar,
              Tumilia, Hasnabad, Shulpur & Nagori).
            </li>
            <li className="flex items-center">
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
              The Credit Union was awarded the National Gold Medal for the year
              1990, 1994, 1995, 1997, 2009 and 2017 by the Government
              Co-Operative Department as the best Co-Operative Society.
            </li>
            <li className="flex items-center">
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
              Establishment of The Central Association of Christian
              Co-Operatives Limited (CACCO), a networking body for Christian
              Credit Unions, Multi-purpose Co-Operatives, Housing Societies and
              other financial institutions in Bangladesh. CACCO has been
              established on May 1st, 2007.
            </li>
            <li className="flex items-center">
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
              CCULB was Established in 1979 by using education fund of this
              Credit Union, which is now working in Bangladesh irrespective of
              Religion, Cast & Creed. CCULB is the umbrella organization that
              provides logistics, technical support & loans among the society
              members.
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Achievement;
