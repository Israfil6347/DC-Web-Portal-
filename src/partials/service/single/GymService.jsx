import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "../../../assets/images/service/gym.jpg";

function GymService() {
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
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <h2 className="text-2xl lg:text-3xl font-bold">Dhaka Credit Gym</h2>
            <p className="mt-3 text-justify">
              Sound mind depends on sound body. There is no alternative of
              regular Gym to keep body & mind healthy. For conscious health
              awareness Dhaka Credit bring a new Gym for Members. Members are
              getting Gym benefits at affordable rates from here. We have
              separate schedules for both men & women’s.
            </p>
            <div className="float-left mt-8 w-full  lg:w-2/5">
              <img src={image} className="w-full  pb-5 lg:pr-6" alt="" />
            </div>

            <h4 className="mt-3 text-xl lg:text-2xl font-semibold">Features</h4>

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
                Modern Equipment.
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
                Non-Smoking Environment
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
                Experienced Trainer.
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
                Separate timing for Women
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, stiffness: 10 }}
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
                Competitive Cost
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, stiffness: 10 }}
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
                Spacious
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, stiffness: 10 }}
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
                Dressing Room
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, stiffness: 10 }}
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
                Car Parking
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, stiffness: 10 }}
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
                Air-Conditioned
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, stiffness: 10 }}
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
                CC Camera.
              </motion.li>
              <motion.li
                className="mt-2 flex"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, stiffness: 10 }}
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
                VIP Security
              </motion.li>
            </ul>

            <h4 className="my-5 text-xl lg:text-2xl font-semibold">Gym Fees</h4>

            <div className="mt-2 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="my-4 font-bold">Monthy fee</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Service holder/Business person</div>
                <div className="">1,200 taka</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Students</div>
                <div className="">800 taka</div>
              </div>
            </div>
            <div className="mt-5 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="my-4 font-bold">For 3 Month</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Service holder/Business person</div>
                <div className="">3,000 taka</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Students</div>
                <div className="">2,285 taka</div>
              </div>
            </div>
            <div className="mt-5 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="my-4 font-bold">For 6 Month</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Service holder/Business person</div>
                <div className="">6,000 taka</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Students</div>
                <div className="">4,000 taka</div>
              </div>
            </div>
            <div className="mt-5 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="my-4 font-bold">For per year</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Service holder/Business person</div>
                <div className="">12000 taka</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Students</div>
                <div className="">6,850 taka</div>
              </div>
            </div>
            <h4 className="my-5 text-xl lg:text-2xl font-semibold">
              Gym Timing
            </h4>

            <div className="mt-2 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Group</div>
                <div className="">A</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Gender</div>
                <div className="">Male</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Time</div>
                <div className="">6:00am - 2:00pm</div>
              </div>
            </div>
            <div className="mt-5 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Group</div>
                <div className="">B</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Gender</div>
                <div className="">Female</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Time</div>
                <div className="">3:00pm - 6:30pm</div>
              </div>
            </div>
            <div className="mt-5 grid grid-rows-1 rounded-md border-y border-x lg:grid-flow-col">
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Group</div>
                <div className="">A</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Gender</div>
                <div className="">Male</div>
              </div>
              <div className="flex gap-3 border-1 p-3 lg:flex-col">
                <div className="font-bold">Time</div>
                <div className="">6:45pm - 10:00pm</div>
              </div>
            </div>

            <p className="mt-5">
              **All Fees are subject to changes according to decision by the
              Management. For up-to-date rate, you are requested to contact the
              listed number**
            </p>

            <div className="mt-20 border-t">
              <ul>
                <h2 className="mt-5 text-xl lg:text-2xl font-semibold">
                  Address & Contact info:
                </h2>
                <li>Sadhonpara Service Center Building (Ground Floor)</li>
                <li>8/Kha, Sadhonpara,</li>
                <li>East Rajabazar, Dhaka-1215..</li>
                <li>Call: 9139517, 01715-81-66-71 and 01711-52-38-33.</li>
                <li>Email: info@cccul.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default GymService;
