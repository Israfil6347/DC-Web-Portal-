import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import DCSchool from "../../assets/images/project/dcschool.JPG";
import ChildCare from "../../assets/images/project/dc_child.jpg";
import GirlHostel from "../../assets/images/project/hostel.jpg";

function Projects() {
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
            <div className="w-full">
              <NavLink
                to="/projects/child-care/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={ChildCare}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">D.C Child Care</h2>
                  <p className="">
                    World Class Standard Child Care facility is provided to the
                    members.
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="w-full">
              <NavLink
                to="/projects/dc-school/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={DCSchool}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">D.C School</h2>
                  <p className="">
                    Education is the first step towards a brighter future for
                    child.
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="w-full">
              <NavLink
                to="/projects/dc_hostel/"
                className="flex h-full items-center overflow-hidden rounded-lg border border-gray-200 bg-surface p-4 hover:shadow-md"
              >
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={GirlHostel}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium ">Girl’s Hostel</h2>
                  <p className="">
                    Perfect for working women and students with in Dhaka City
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
