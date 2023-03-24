import React from "react";
import founderImage from "../../assets/images/founder/index_founder copy.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function FounderProfile() {
  return (
    <>
      <div className="container mx-auto mb-20 px-4">
        <section className="flex flex-col-reverse items-center gap-6 text-justify md:flex-row lg:text-left group">
          <motion.div
            className="z-10  bg-surface text-onSurface p-6 shadow-sm md:w-3/5 hover:shadow-md"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
            <NavLink
              to="about/founders-profile"
              className="group-hover:cursor-pointer"
            >
              <h2 className="mb-2 p-1 text-3xl font-bold group-hover:cursor-pointer">
                Fr. Charles J. Young
              </h2>
              <p className="mb-4 p-1 font-semibold group-hover:cursor-pointer">
                Founder of Dhaka Credit
              </p>
              <p className="mb-2 p-1 group-hover:cursor-pointer">
                The pioneer of the Credit Union Movement in Bangladesh, Fr.
                Charles J. Young CSC was born in May 3rd 1904, in New York, USA.
                His full name is Fr. Charles Joseph Young CSC. He was the
                founder of The Christian Co-Operative Credit Union Ltd. Dhaka,
                the largest Credit Union in Bangladesh and South Asia. Fr.
                Charles joined the seminary of the Holy Cross on September in
                1923, and joined in the first verse in 1925 & accepted his
                blessing in 1928. In 1929
              </p>
              <p className="p-1 mb-2  group-hover:underline">READ MORE</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="lg:w-2/5"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            exit={{
              opacity: 0,
              x: -window.innerWidth,
              transition: { duration: 0.3 },
            }}
            initial={{
              opacity: 0,
              x: window.innerWidth,
              transition: { duration: 0.3 },
            }}
            animate={{ x: 0, opacity: 1 }}
          >
            <img src={founderImage} className="w-full" alt="" />
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default FounderProfile;
