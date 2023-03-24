import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AmbulanceService from "../../assets/images/service/ambulance.jpg";
import ATM from "../../assets/images/service/atm.jpg";
import BeautyParlor from "../../assets/images/service/beauty_parlor.jpg";
import CulturalAcademy from "../../assets/images/service/cultural_academy.jpg";
import DCTV from "../../assets/images/service/dc_tv.jpg";
import DoctorChamber from "../../assets/images/service/doctor.jpg";
import Gym from "../../assets/images/service/gym.jpg";
import MMS from "../../assets/images/service/mms.jpg";
import SamayBazar from "../../assets/images/service/samabayBazar.jpg";
import SecurityService from "../../assets/images/service/security.jpg";
import NewsService from "../../assets/images/service/news.jpg";
import OtherServices from "../../assets/images/service/others.jpg";

function Services() {
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
      <section className="text-onSurface">
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/atm/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
                  src={ATM}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">24×7 ATM Service</h2>
                  <p className="">
                    State-of-the-art 24×7 ATM Services for its members.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/samabay-bazar/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full  object-cover object-center"
                  src={SamayBazar}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium">Samabay Bazaar</h2>
                  <p className="">
                    Buy Daily essential High Quality Products with Competitive
                    Pricing.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/beauty-parlor/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={BeautyParlor}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Beauty Parlor</h2>
                  <p className="">
                    Various Housing Projects are built for the betterment of the
                    members
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/cultural-academy/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={CulturalAcademy}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Cultural Academy</h2>
                  <p className="">
                    D.C started its cultural academy for Cultural Development of
                    Young.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/security/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={SecurityService}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium">Security Services</h2>
                  <p className="">
                    D.C Provides Security Services to all types of Companies.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/doctors/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={DoctorChamber}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Doctor’s Chamber</h2>
                  <p className="">
                    Expert Doctors are ready to take care of you & your family’s
                    health.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/ambulance/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={AmbulanceService}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Ambulance Service</h2>
                  <p className="">
                    Ambulance service for our members and their family
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/gym/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={Gym}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Gym</h2>
                  <p className="">
                    Well-equipped gym with flexible timing and various
                    facilities.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/dc-tv/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full  object-cover object-center"
                  src={DCTV}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">D.C Online TV</h2>
                  <p className="">
                    Internet-based Online television Channel network.
                  </p>
                </div>
              </NavLink>
            </motion.div>

            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/dc-news/"
                className="flex h-full items-center overflow-hidden rounded-lg border  bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full  object-cover object-center"
                  src={NewsService}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">D.C Online News</h2>
                  <p className="">
                    ‘dcnewsbd.com’ provides up-to-date information to its
                    members.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/mms/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={MMS}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">D.C App M.M.S</h2>
                  <p className="">
                    New Dimension to the Digitization of Dhaka Credit.
                  </p>
                </div>
              </NavLink>
            </motion.div>
            <motion.div
              className="w-full"
              animate={{ rotate: 360, transition: { duration: 0.7 } }}
            >
              <NavLink
                to="/services/other/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={OtherServices}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Other Services</h2>
                  <p className="">
                    Various other services that is being offered.
                  </p>
                </div>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Services;
