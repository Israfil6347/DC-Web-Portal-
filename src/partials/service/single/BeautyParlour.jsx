import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "../../../assets/images/service/beauty_parlor.jpg";

function BeautyParlour() {
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
      <section className=" text-onSurface">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="float-left w-full  lg:w-2/5">
              <img src={image} className="w-full  pb-5 lg:pr-6" alt="" />
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold">Beauty Parlor</h2>
            <div className="mt-3 p-1 text-justify">
              <p>
                With Wedding season fast approaching, the demand for High
                Quality Service and Expert Beautician will be huge. To take the
                advantage of this situation, Dhaka Credit has recently launched
                its very own Beauty Parlor for its valuable members. The Beauty
                parlor has all the necessary products and equipment required to
                rival the best of beauty parlors in Dhaka city.
              </p>
              <h4 className="mt-3 text-xl lg:text-2xl font-semibold">
                Features
              </h4>

              <ul className="mt-3 list-disc">
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, stiffness: 10 }}
                >
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
                  Beautician with World Class Expertise
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, stiffness: 10 }}
                >
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
                  Branded and High Quality Make up products and sophisticated
                  equipment that will suit every needs of our valuable
                  customers.
                </motion.li>
              </ul>
            </div>

            <div className="mt-20 border-t">
              <ul>
                <h2 className="mt-5 text-xl lg:text-2xl font-semibold">
                  Address & Contact Info
                </h2>
                <li>Ka-29/A,</li>
                <li>Nadda Sarkerbari (Near Sarkerbari Mosque)</li>
                <li>Gulshan-2, Dhaka-1212</li>
                <li>Call: 01709993097</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default BeautyParlour;
