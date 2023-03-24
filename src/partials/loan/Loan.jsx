import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Loan(props) {
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
      <section>
        <div className="container mx-auto mb-20 gap-6 px-4 grid grid-cols-1 md:grid-cols-3">
          <NavLink to="/loans/general-Loan/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              onClick={() => {
                props.handler({ main: "Loan", sub: "General" });
              }}
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">General Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Any Member can take loan for various purposes ...
                  <NavLink
                    to="/loans/general-Loan/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/business/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              onClick={() => {
                props.handler({ main: "Loan", sub: "Business Loan" });
              }}
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Business Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Business Loan provides financial assistance to Businesses. ...
                  <NavLink
                    to="/loans/business/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/smd/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">SMB Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Small &amp; Medium Size business requires this Loan the most.
                  ...
                  <NavLink
                    to="/loans/smd/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/car/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Car Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Own the car of your dream with DC’s Car Loan. ...
                  <NavLink
                    to="/loans/car/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/metro-house-building/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Metro H.Building</p>
                <p className=" group-hover:cursor-pointer">
                  Build a House with DC’s Metropolitan House Building Loan. ...
                  <NavLink
                    to="/loans/metro-house-building/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/flat-purchase/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Flat Purchase</p>
                <p className=" group-hover:cursor-pointer">
                  Owning a dream flat DC’s Flat Purchase Loan. ...
                  <NavLink
                    to="/loans/flat-purchase/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/house-building/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">House Building Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Own a High Rise Building with DC’s House Building Loan. ...
                  <NavLink
                    to="/loans/house-building/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/credit-ceiling/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Credit Ceiling Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Business CC Loan is taken to overcome different financial
                  crisis. ...
                  <NavLink
                    to="/loans/credit-ceiling/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/industrial/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Industrial Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Industrial loan supports Current and Future Entrepreneurs. ...
                  <NavLink
                    to="/loans/industrial/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/competency-based/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Capacity Based Loan</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan is for financially solvent members of the Union. ...
                  <NavLink
                    to="/loans/capacity-based/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/general-cc/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">General CC Loan</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan is designed to improve the Members standard of
                  living. ...
                  <NavLink
                    to="/loans/general-cc/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/going-abroad/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">For Going Abroad</p>
                <p className=" group-hover:cursor-pointer">
                  Provide Members with Financial support for going Abroad. ...
                  <NavLink
                    to="/loans/going-abroad/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/solvency-higher-edu/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Solvency For H.Edu</p>
                <p className=" group-hover:cursor-pointer">
                  Students can utilize this Loan for studying abroad. ...
                  <NavLink
                    to="/loans/solvency-higher-edu/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/top-up/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Top Up</p>
                <p className=" group-hover:cursor-pointer">
                  Extra Financial Boost on Top of other Loans. ...
                  <NavLink
                    to="/loans/top-up/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/bill-pay/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Bill Pay Loan</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan will help members overcome Bill Expenses. ...
                  <NavLink
                    to="/loans/bill-pay/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/higher-education/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Higher Education</p>
                <p className=" group-hover:cursor-pointer">
                  Provides Financial Support for Educational Purpose. ...
                  <NavLink
                    to="/loans/higher-education/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/higher-edu-supp/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Higher.Edu Support</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan Provides the Maximum Loan of BDT 15 Lac. ...
                  <NavLink
                    to="/loans/higher-edu-supp/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/prof-training/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Prof. Training</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan is taken to cover Professional Training Cost. ...
                  <NavLink
                    to="/loans/prof-training/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/consumer/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Consumer Loan</p>
                <p className=" group-hover:cursor-pointer">
                  This Loan helps improve members Standard of Living. ...
                  <NavLink
                    to="/loans/consumer/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/gym/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">D.C Gym Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Lead a Healthy Lifestyle with Dhaka Credit’s Gym Loan. ...
                  <NavLink
                    to="/loans/gym/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/against-ltsd/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Loan Against LTSD</p>
                <p className=" group-hover:cursor-pointer">
                  Any member can take Loan against their LTSD. ...
                  <NavLink
                    to="/loans/against-ltsd/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/open-installment/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Open Installment</p>
                <p className=" group-hover:cursor-pointer">
                  Depositors can take Loan against their LTSD. ...
                  <NavLink
                    to="/loans/open-installment/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/own-share/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Own Share Loan</p>
                <p className=" group-hover:cursor-pointer">
                  The Members can take against their own share. ...
                  <NavLink
                    to="/loans/own-share/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/secured-over-draft/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Secured Over Draft</p>
                <p className=" group-hover:cursor-pointer">
                  A Savings Depositor can make Loan against Long Term Savings.
                  ...
                  <NavLink
                    to="/loans/secured-over-draft/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/dc-flat-pur/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">D.C Flat Purchase Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Own a D.C built Flat with D.C Flat Purchase Loan. ...
                  <NavLink
                    to="/loans/dc-flat-pur/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/emergency/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Emergency Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Emergency Loan is for Urgent treatment that may arise. ...
                  <NavLink
                    to="/loans/emergency/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/competency-based/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Competency Based Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Based on the Financial Condition &amp; ability to repay. ...
                  <NavLink
                    to="/loans/competency-based/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/instant/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Instant Loan</p>
                <p className=" group-hover:cursor-pointer">
                  Instant loan to meet the urgent financial needs. ...
                  <NavLink
                    to="/loans/instant/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/entrepreneur/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Entrepreneur Loan</p>
                <p className=" group-hover:cursor-pointer">
                  This loan is for financial needs of businessmen. ...
                  <NavLink
                    to="/loans/entrepreneur/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/double-on-fdr/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Double Loan on FDR</p>
                <p className=" group-hover:cursor-pointer">
                  Double Loan against the member’s Fixed Deposit ...
                  <NavLink
                    to="/loans/double-on-fdr/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/loans/various-other/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-money fa-2xl text-center leading-3 "></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Various Other Loans</p>
                <p className=" group-hover:cursor-pointer">
                  Rest of the Loan Facilities are mentioned here ...
                  <NavLink
                    to="/loans/various-other/"
                    className="underline group-hover:cursor-pointer"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}

export default Loan;
