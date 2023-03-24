import React from "react";
import { motion } from "framer-motion";

function Notice() {
  return (
    <motion.div
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
      <section className="text-onSurface animate-fadeInRight">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="animate-backInRight text-center">
              <h1 className="animate-twSpin text-5xl font-extrabold">
                No notices to show
              </h1>
              <p>Stay connected for getting updated notices.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="text-onSurface">
            <div className="container mx-auto  px-4 pb-20">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md animate-fadeInLeft"
                >
                  <span
                    className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
                    href="#"
                  >
                    <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
                    <span className="-mt-1 text-3xl font-extrabold">27</span>
                  </span>
                  <div className="flex-grow">
                    <h5 className="font-semibold">
                      <NavLink to="/notices/single-item/">COVID-19</Navlink>
                    </h5>
                    <p className="">
                      Coronavirus disease (COVID-19) is an infectious disease caused…
                      <NavLink to="/notices/single-item/" className="nu gray">View Details</Navlink>
                    </p>
                  </div>
                </div>
                <div
                  className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md animate-fadeInDown"
                >
                  <span
                    className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
                    href="#"
                  >
                    <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
                    <span className="-mt-1 text-3xl font-extrabold">27</span>
                  </span>
                  <div className="flex-grow">
                    <h5 className="font-semibold">
                      <NavLink to="/notices/single-item/">COVID-19</Navlink>
                    </h5>
                    <p>
                      Coronavirus disease (COVID-19) is an infectious disease caused…
                      <NavLink to="/notices/single-item/" className="nu gray">View Details</Navlink>
                    </p>
                  </div>
                </div>

                <div
                  className="group flex items-center gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md animate-fadeInRight"
                >
                  <span
                    className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary"
                  >
                    <span className="-mb-1 text-2xl font-semibold uppercase">Mar</span>
                    <span className="-mt-1 text-3xl font-extrabold">27</span>
                  </span>
                  <div className="flex-grow">
                    <h5 className="font-semibold">
                      <NavLink to="/notices/single-item/">COVID-19</Navlink>
                    </h5>
                    <p>
                      Coronavirus disease (COVID-19) is an infectious disease caused…
                      <NavLink to="/notices/single-item/" className="nu gray">View Details</Navlink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
    </motion.div>
  );
}

export default Notice;
