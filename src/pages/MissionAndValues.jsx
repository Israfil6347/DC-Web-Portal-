import { motion } from "framer-motion";
import { useEffect } from "react";

const MissionAndValues = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="clear-both"></div>

      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="animate-slideInUp text-onBackground"
        >
          <div className="mb-6">
            <h4 className="mb-4 text-2xl font-semibold">Vision</h4>
            <p>
              A <strong>SMART</strong> &amp; Leading Co-Operative Credit Union
              In Bangladesh &amp; South Asia To Attain Self-Reliant &amp;
              Dignified Community.
            </p>
            <h6 className="my-2 font-semibold">S.M.A.R.T</h6>

            <ul>
              <li className="">
                <strong>S</strong> = Sound and Safe
              </li>
              <li>
                <strong>M</strong> = Market oriented
              </li>
              <li>
                <strong>A</strong> = A Grade
              </li>
              <li>
                <strong>R</strong> = Responsive to Members financial needs
              </li>
              <li>
                <strong>T</strong> = Trusted wealth advisor of members
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="mb-4 text-2xl font-semibold">Mission</h4>
            <p>
              Improving The Standard of Living Of Our Members By Providing
              Affordable &amp; Competitive Services to Achieve Financial
              Viability, Operational Efficiency, Competitive Advantage Position,
              Member’s Satisfaction, Employee’s Satisfaction&amp; Good
              Co-Operative Governance.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MissionAndValues;
