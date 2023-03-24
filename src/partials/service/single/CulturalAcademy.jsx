import { useEffect } from "react";

import { motion } from "framer-motion";
import Samay from "../../../assets/images/service/cultural_academy.jpg";

function CulturalAcademy() {
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
      <section className="">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="float-left w-full  lg:w-2/5">
              <img src={Samay} className="w-full  pb-5 lg:pr-6" alt="" />
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold">Cultural Academy</h2>
            <div className="mt-3 p-1 text-justify">
              <p>
                On 17th January, 2009, Dhaka Credit introduced a cultural
                academy for the growth & development of the growing Generation
                of Christian Community. At present there are 2 academies, one in
                Tejgaon Catholic Primary School and the other one is Nadda in
                Dhaka Metropolitan area.
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
                  Develop Cultural attributes for New Generations
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
                  Preservation of Tradition, Culture & History
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, stiffness: 10 }}
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
                  Creating opportunity to perform in National & International
                  Arena.
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, stiffness: 10 }}
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
                  Create equal opportunity for everyone.
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, stiffness: 10 }}
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
                  Admission fee BDT 500 taka and Monthly fee BDT 300 taka
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, stiffness: 10 }}
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
                  We Teach: Guitar,Tabla,Music & Dance Art
                </motion.li>
              </ul>

              <h4 className="mt-3 text-xl lg:text-2xl font-semibold">
                Our Teachers
              </h4>

              <ul className="mt-3 list-disc">
                <li className="mt-2 flex">
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
                  Principal: Anima Mukti Gomes, a renowned Music Artist of
                  Bangladesh.
                </li>
                <li className="mt-2 flex">
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
                  Other Teachers: Jhoton Silvester Serao, Dimple Rodrigues, Anup
                  D’Costa, Anisur Rahman, Aditi Tumpa, Abhi Rodrigues, Kenedy
                  D’Costa, Collinces Barnard Gomes, Manik Sen, Sankar Kumar Paul
                  & Swapon Kumar Acharjo.
                </li>
              </ul>
              <h4 className="mt-3 text-xl lg:text-2xl font-semibold">
                Specialty
              </h4>

              <ul className="mt-3 list-disc">
                <li className="mt-2 flex ">
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
                  Excellent Environment
                </li>
                <li className="mt-2 flex">
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
                  Quality is Ensured
                </li>
                <li className="mt-2 flex">
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
                  Modern Cultural Instrument
                </li>
                <li className="mt-2 flex">
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
                  Cultural Tours
                </li>
                <li className="mt-2 flex">
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
                  Certificate
                </li>
              </ul>
              <h4 className="mt-3 text-xl lg:text-2xl font-semibold">
                Class Schedule
              </h4>
              <ul className="mt-3 list-disc">
                <li className="mt-2 flex">
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
                  Tejgaon Catholic Primary School: Thursday, (3 PM-7 PM)
                </li>
              </ul>

              <div className="mt-10 border-t">
                <ul>
                  <h2 className="mt-5 text-xl lg:text-2xl font-semibold">
                    Address & Contact Info
                  </h2>

                  <li>Tejgaon</li>
                  <li>Call: 01709-993085</li>
                  <li>Email: info@cccul.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default CulturalAcademy;
