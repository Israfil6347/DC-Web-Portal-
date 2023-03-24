import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/unity1.jpg";
import about from "assets/images/hero/about.png";
import contact from "assets/images/hero/contact.png";
import service from "assets/images/hero/service.png";
import project from "assets/images/hero/project.png";
import loan from "assets/images/hero/loan.png";
import deposit from "assets/images/hero/deposit.png";
import faqs from "assets/images/hero/faqs.png";
import career from "assets/images/hero/career.png";
import board_members from "assets/images/hero/board_members.png";
import credit_committee from "assets/images/hero/credit_committee.png";
import office_bearers from "assets/images/hero/office_bearers.png";
import supervisory_committee from "assets/images/hero/supervisory_committee.png";
import notice from "assets/images/hero/notice.png";

function Banner({ Title }) {
  const [urlArray, setUrlArray] = useState([]);
  const [title, setTitle] = useState({
    heading: "",
    subheading: "",
    bannerImage: "",
  });

  const location = useLocation();
  const urlArrays = location.pathname.split("/");

  useEffect(() => {
    if (urlArrays[1] === "services") {
      setTitle({
        heading: "Our Services",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: service,
      });
    } else if (urlArrays[1] === "projects") {
      setTitle({
        heading: "Our Projects",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: project,
      });
    } else if (urlArrays[1] === "loans") {
      setTitle({
        heading: "Loans",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: loan,
      });
    } else if (urlArrays[1] === "deposits") {
      setTitle({
        heading: "Deposits",
        subheading: "Save and Secure Your Money With Us",
        bannerImage: deposit,
      });
    } else if (urlArrays[1] === "career") {
      setTitle({
        heading: "Career",
        subheading:
          "Dhaka Credit is the first & largest Credit Union of its kind currently in Bangladesh.",
        bannerImage: career,
      });
    } else if (urlArrays[1] === "about") {
      setTitle({
        heading: "About Us.",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: about,
      });
    } else if (urlArrays[1] === "contact") {
      setTitle({
        heading: "Contact Us.",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: contact,
      });
    } else if (urlArrays[1] === "Office-Bearers") {
      setTitle({
        heading: "Office Bearers",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: office_bearers,
      });
    } else if (urlArrays[1] === "Board-of-Directors") {
      setTitle({
        heading: "Board of Directors",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: board_members,
      });
    } else if (urlArrays[1] === "Credit-Committee") {
      setTitle({
        heading: "Credit Committee",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: credit_committee,
      });
    } else if (urlArrays[1] === "Supervisory-Committee") {
      setTitle({
        heading: "Supervisory Committee",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: supervisory_committee,
      });
    } else if (urlArrays[1] === "Notice") {
      setTitle({
        heading: "Important Notices",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: notice,
      });
    } else if (urlArrays[1] === "faq") {
      setTitle({
        heading: "Frequently Asked Questions",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: faqs,
      });
    } else {
      setTitle({
        heading: process.env.REACT_APP_COMPANY_NAME,
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        bannerImage: logo,
      });
    }
    console.log(title.bannerImage);
    setUrlArray(urlArrays);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        <section className="absolute right-0 top-0 w-full">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 5 }}
            animate={{ opacity: 1 }}
            className="relative h-96"
          >
            <div
              style={{ backgroundImage: `url(${title.bannerImage})` }}
              className="h-full bg-cover bg-center bg-no-repeat  "
            >
              <div className="absolute inset-0 h-full w-full overflow-hidden bg-gray-900 bg-opacity-80 bg-fixed">
                <div className="flex h-full flex-row items-end justify-center text-gray-300 ">
                  <div className="mb-24 px-6 text-center">
                    <motion.h2
                      className="mb-2  text-4xl font-bold leading-tight tracking-tight"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
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
                      {title.heading}
                    </motion.h2>
                    <motion.p
                      className="hover:typing-demo inline-block  text-sm"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
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
                      {title.subheading}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            {urlArray.length === 4 ? (
              <div className="container mx-auto text-onPrimary">
                <div className="relative">
                  <div className="absolute left-0 -bottom-5">
                    <div className="ml-4 flex">
                      <NavLink
                        to={`/${urlArray[1]}`}
                        state="About"
                        className="rounded-l-md bg-primaryVariant px-6 py-2 font-semibold "
                      >
                        {" "}
                        {urlArray[1] === "" ? "Home" : urlArray[1]}
                      </NavLink>
                      <NavLink
                        to=""
                        className="rounded-r-md bg-primary px-6 py-2 "
                      >
                        {" "}
                        {urlArray.length === 2
                          ? "page"
                          : urlArray.length === 4
                          ? urlArray[2]
                          : "page"}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
}

export default Banner;
