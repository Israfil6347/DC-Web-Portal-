import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Deposits() {
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
        <div className="container mx-auto mb-20 animate-backInRight grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
          <NavLink to="/deposits/savings/" className="block">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Saving</p>
                <p className=" group-hover:cursor-pointer">
                  Savings Account is Mandatory for all other Products in Dhaka
                  Credit. ...
                  <NavLink
                    to="/deposits/savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/credit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Credit Account</p>
                <p className=" group-hover:cursor-pointer">
                  This account is for Self-Reliant Members of the Union. ...
                  <NavLink
                    to="/deposits/credit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/std/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">STD Account</p>
                <p className=" group-hover:cursor-pointer">
                  SThis account provides interest to the depositors twice a
                  year. ...
                  <NavLink
                    to="/deposits/std/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/bee-savers/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Bee-Savers</p>
                <p className=" group-hover:cursor-pointer">
                  Children from 1 day to 12-year-old can become a “Bee Savers”.
                  ...
                  <NavLink
                    to="/deposits/bee-savers/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/smart-savers/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Smart Savers</p>
                <p className=" group-hover:cursor-pointer">
                  This account promotes savings habit among teenagers. ...
                  <NavLink
                    to="/deposits/smart-savers/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/education-savings/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Education Savings</p>
                <p className=" group-hover:cursor-pointer">
                  Helps member meet the Educational Expenses. ...
                  <NavLink
                    to="/deposits/education-savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/ltsd/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">LTSD Account</p>
                <p className=" group-hover:cursor-pointer">
                  LTSD helps depositors earn high interest rate for a Fixed
                  Rate. ...
                  <NavLink
                    to="/deposits/ltsd/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/monthly-savings/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Monthly Savings</p>
                <p className=" group-hover:cursor-pointer">
                  Monthly savings prepares for any future requirements. ...
                  <NavLink
                    to="/deposits/monthly-savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/festival-savings/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Festival Savings</p>
                <p className=" group-hover:cursor-pointer">
                  Enjoy the festive season without worrying about the expenses.
                  ...
                  <NavLink
                    to="/deposits/festival-savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/troimashik-savings/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Troimashik Savings</p>
                <p className=" group-hover:cursor-pointer">
                  This accounts provides quarterly interest with min deposit of
                  1 Lac. ...
                  <NavLink
                    to="/deposits/troimashik-savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/aged-savings/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Aged Savings</p>
                <p className=" group-hover:cursor-pointer">
                  This Savings scheme ensures financial security after
                  retirement. ...
                  <NavLink
                    to="/deposits/aged-savings/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/double-deposit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Double Deposit</p>
                <p className=" group-hover:cursor-pointer">
                  Provides double benefits for the depositors with certain
                  period. ...
                  <NavLink
                    to="/deposits/double-deposit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/millionaire-deposit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Millionaire Deposit</p>
                <p className=" group-hover:cursor-pointer">
                  Become a Millionaire within a certain period with this scheme.
                  ...
                  <NavLink
                    to="/deposits/millionaire-deposit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/housing-deposit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Housing Deposit</p>
                <p className=" group-hover:cursor-pointer">
                  This scheme can make your dream of owning a House come true.
                  ...
                  <NavLink
                    to="/deposits/housing-deposit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/marriage-deposit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Marriage Deposit</p>
                <p className=" group-hover:cursor-pointer">
                  Perfect for dealing with Marriage Cost for young couple &amp;
                  Parents. ...
                  <NavLink
                    to="/deposits/marriage-deposit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/kotipoti-deposit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">KotiPoti Deposit</p>
                <p className=" group-hover:cursor-pointer">
                  Premium Deposit Scheme for Members to become KotiPoti. ...
                  <NavLink
                    to="/deposits/kotipoti-deposit/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/hospital-bond/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Hospital Bond</p>
                <p className=" group-hover:cursor-pointer">
                  Become a part of Divine Mercy General Hospital Bond. ...
                  <NavLink
                    to="/deposits/hospital-bond/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/health-care/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">D.C. H.C.S</p>
                <p className=" group-hover:cursor-pointer">
                  Dhaka Credit Health Care Scheme is for everyone. ...
                  <NavLink
                    to="/deposits/health-care/"
                    className="group-hover:cursor-pointer group-hover:underline"
                  >
                    READ MORE
                  </NavLink>
                </p>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/deposits/pension-benefit/">
            <motion.div
              className="group flex animate-twSpin rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <div className="shrink-0 animate-delay-1s group-hover:animate-[shakeY_3s]">
                <div className="rounded-md bg-primary p-4 text-onPrimary">
                  <i className="fa fa-usd fa-2xl text-center leading-3"></i>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold ">Pension Benefit</p>
                <p className=" group-hover:cursor-pointer">
                  Pension Benefit Scheme for future retirement. ...
                  <NavLink
                    to="/deposits/pension-benefit/"
                    className="group-hover:cursor-pointer group-hover:underline"
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

export default Deposits;
