import { motion } from "framer-motion";
import { useEffect } from "react";

function DoctorsChamberService() {
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
            <h2 className="mt-3 text-2xl lg:text-3xl font-bold">
              Doctor's Chamber
            </h2>
            <p className="mt-2 text-justify">
              Dhaka Credit has launched Doctor’s Chamber for everyone to use.
              Expert Doctors are ready to take care of you and your family’s
              health with utmost Professionalism.
            </p>
            <h4 className=" pb-4 mt-3 text-xl lg:text-2xl font-semibold">
              Doctor’s Profile
            </h4>

            <ul className="mt-2 list-disc">
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
                Dr. Hemanto I. Gomes, MBBS (DU), D. Card. (NICVD), Ibrahim
                Cardiac Hospital & Research Institute.
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
                Lt. Col. Dr. Marlina Roy, MBBS, DGO, MCPS, FCPS (Gynae), Navy
                Hospital, Patenga, Chattogram
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
                Dr. Md. Al-Amin MBBS, M.S (Urology) Kidney & Urology Specialist.
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
                Dr. Francisca Rinic Gomes, MBBS, General Physician, St. John
                Vianney Hospital.
              </motion.li>
            </ul>
            <div className=" py-4">
              <h4 className="mb-7 text-xl lg:text-2xl font-bold">
                Service Day
              </h4>
              <div className="-my-8 divide-y divide-gray-100">
                <div className="flex flex-wrap py-8 md:flex-nowrap">
                  <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <span className="title-font font-semibold">
                      Head Office Service Day
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="list-disc">
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
                        Satday,Sunday,Wednesday.
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
                        Time: 1 pm to 4 pm.
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
                        Address:173/1/A, East Tejturi Bazar, Tejgaon,
                        Dhaka-1215.
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
                        Served By: Dr. Md. Al-Amin.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap py-8 md:py-8 md:flex-nowrap">
                  <div className="mb-2  flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <span className="title-font font-semibold">
                      Monipuripara Service Day
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="mt-5 list-disc">
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
                        Thursday
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
                        Time: 4 pm to 6 pm.
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
                        Address: 88/5, Monipuri Para, Tejgaon, Dhaka.
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
                        Served by: Dr. Francisca Rinic Gomes
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap py-8 md:flex-nowrap">
                  <div className=" flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <span className="title-font font-semibold">
                      Sadhonpara Service Day
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="mt-5 list-disc">
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
                        Monday,Wednesday
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
                        Time: 4 pm to 6 pm.
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
                        Address: 8/KA, East-Raza Bazar, Dhaka.
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
                        Served by: Dr. Francisca Rinic Gomes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                Online Telemedicine
              </h4>
              <div className="-m-4 mt-2 flex flex-wrap">
                <div className="p-1 lg:w-1/2">
                  <div className="relative h-full overflow-hidden rounded-lg px-4">
                    <h4 className="mt-5 text-lg font-semibold">
                      Served by, Dr. Hemanto I.Gomes
                    </h4>
                    <ul className="mt-5 list-disc">
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
                        Monday, Tuesday, Wednesday
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
                        Time: 6 pm to 7 pm.
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
                        Phone: 01715-863878
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-1 lg:w-1/2">
                  <div className="relative h-full overflow-hidden rounded-lg px-4">
                    <h4 className="mt-5 text-lg font-semibold">
                      Served by: Lt. Col. Dr. Marlina Roy
                    </h4>
                    <ul className="mt-5 list-disc">
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
                        Monday, Tuesday, Wednesday
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
                        Time: 6 pm to 7 pm.
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
                        Phone: 01708-919537
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-1 lg:w-1/2">
                  <div className="relative h-full overflow-hidden rounded-lg px-4">
                    <h4 className="mt-5 text-lg font-semibold">
                      Served by: Dr. Francisca Rinic Gomes
                    </h4>
                    <ul className="mt-5 list-disc">
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
                        Saturday & Sunday
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
                        Time: 11 am to 1 pm
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
                        Monday, Wednesday and Thursday
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
                        Time:6 pm to 8 pm.
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
                        Phone: 01646-314416
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-1 lg:w-1/2">
                  <div className="relative h-full overflow-hidden rounded-lg px-4">
                    <h4 className="mt-5 text-lg font-semibold">
                      Served by: Dr. Mohammad Al-Amin
                    </h4>
                    <ul className="mt-5 list-disc">
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
                        Everyday
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
                        Time: Not Specific
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
                        Phone: 01819-118009
                      </li>
                    </ul>
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

export default DoctorsChamberService;
