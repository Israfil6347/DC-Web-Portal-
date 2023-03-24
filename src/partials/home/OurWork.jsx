import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function OurWork() {
  return (
    <>
      <div className="">
        <section className="container my-20 mx-auto px-4 text-center text-onSurface">
          <h2 className="mb-20 text-3xl font-bold">What we do?</h2>

          <div className="grid grid-cols-1 gap-12 gap-x-6 md:grid-cols-3 ">
            <motion.div
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              exit={{
                opacity: 0,
                x: -window.innerWidth,
              }}
              initial={{
                opacity: 0,
                x: -window.innerWidth,
              }}
              animate={{ x: 0, opacity: 1 }}
              className="group cursor-pointer"
            >
              <div className="block h-full rounded-lg bg-surface shadow-sm group-hover:shadow-md">
                <div className="flex justify-center ">
                  <div className="-mt-8 inline-block rounded-full bg-primary p-4 shadow-sm group-hover:animate-[shakeX_3s]">
                    <svg
                      className="h-8 w-8 text-onPrimary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 ">
                  <h5 className="mb-4 text-lg font-semibold">
                    Deposit Accounts
                  </h5>
                  <p className="">
                    Dhaka Credit’s Various Deposit Products are specially
                    designed for the betterment of the members. These deposits
                    are designed for meeting the current and future requirements
                    that may arise due to any situation.
                    <NavLink
                      to="deposits"
                      className="block hover:cursor-pointer group-hover:underline p-2"
                    >
                      View All
                    </NavLink>
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="group cursor-pointer">
              <div className="block h-full rounded-lg bg-surface shadow-sm group-hover:shadow-md">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary p-4 shadow-sm group-hover:animate-[shakeX_3s]">
                    <svg
                      className="h-8 w-8 text-onPrimary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Loan Accounts</h5>
                  <p className="">
                    Dhaka Credit has introduced various Loan Products for its
                    Members with the lowest interest rates. These Loan are
                    designed in such a way that Members can take Loan easily
                    according to their need.
                    <NavLink
                      to="loans"
                      className="block hover:cursor-pointer group-hover:underline p-2"
                    >
                      View All
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>

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
              <div className="block h-full rounded-lg bg-surface shadow-sm group-hover:shadow-md">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary p-4 shadow-sm group-hover:animate-[shakeX_3s]">
                    <svg
                      className="h-8 w-8 text-onPrimary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Services</h5>
                  <p className="">
                    Dhaka Credit has become much more then just a financial
                    institution, it has began providing services for different
                    sector to the members.
                    <NavLink
                      to="services"
                      className="block hover:cursor-pointer group-hover:underline p-2"
                    >
                      View All
                    </NavLink>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurWork;
