import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "../../../assets/images/service/ambulance.jpg";

function AmbulanceService() {
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
            <div className="float-left w-full lg:w-2/5">
              <img src={image} className="w-full pb-5 lg:pr-6" alt="" />
            </div>

            <h2 className="p-1 text-3xl font-bold">Ambulance Service</h2>
            <div className="mt-3 p-1 text-justify">
              <p>
                Dhaka Credit has its own Ambulance Service for Members & their
                families’ emergency needs. This service has been able to ensure
                the Members health care at a very fast and affordable cost. Dial
                us for your urgent need.
              </p>

              <h4 className="mt-3 text-2xl font-semibold">Features</h4>

              <ul className="mt-2 list-disc">
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, stiffness: 10 }}
                >
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
                  24/7 hrs. & Comparatively Low Cost Service
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, stiffness: 10 }}
                >
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
                  Safe, Comfortable & Experienced Service
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, stiffness: 10 }}
                >
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
                  Oxygen On Board
                </motion.li>
                <motion.li
                  className="mt-2 flex"
                  initial={{ opacity: 0, x: window.innerWidth }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, stiffness: 10 }}
                >
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
                  Portable Power & Climate Controlled Storage
                </motion.li>
              </ul>

              <h4 className="mt-3 text-2xl font-semibold lg:mt-28">
                Service Charge
              </h4>

              <ul className="mt-2 list-disc">
                <li className="mt-2 flex  items-center">
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
                  Inside Dhaka City: BDT 1,500/-
                </li>
                <li className="mt-2 flex  items-center">
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
                  Up-Down: BDT (1500+1500)= 3,000.
                </li>

                <li className="mt-2 flex  items-center">
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
                  Outside Dhaka: Extra BDT 15/- per Kilometer.
                </li>
                <li className="mt-2 flex  items-center">
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
                  Waiting Charge: No Charge for 1st Hour, Next Hour BDT 100 per
                  hour
                </li>
              </ul>
            </div>
            <div className="mt-20 border-t">
              <ul>
                <h2 className="mt-5 p-1 text-2xl font-bold">Address</h2>
                <li>Rev. Fr Charles J. Young Bhaban</li>
                <li>173/1/A, East Tejturi Bazar,</li>
                <li>Tejgaon, Dhaka-1215.</li>
                <li>For Emergency Call: 01716-399949, 01709-815466.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AmbulanceService;
