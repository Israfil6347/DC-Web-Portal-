import { motion } from "framer-motion";
import { useEffect } from "react";
import TestContext from "../store/test-context";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <TestContext.Consumer>
        {(ctx) => {
          return (
            <>
              <div className="clear-both"></div>

              <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
                <motion.div
                  transition={{ type: "spring", stiffness: 100 }}
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
                  <h4 className="mb-4 text-2xl font-semibold">
                    History of Dhaka Credit
                  </h4>
                  <div class="">
                    <p class="mb-4">
                      An American Father named, Charles J. Young CSC founded The
                      Christian Co-Operative Credit Union on July 3rd, 1955,
                      which is also famously known as ‘Dhaka Credit’. According
                      to the 1940 Co-Operative Act, Dhaka Credit was registered
                      in 1958 with registration number “42/1958”. Dhaka Credit’s
                      Head Office is located in Tejgaon, East Tejturibazar,
                      Dhaka. It is a trustworthy financial institution providing
                      various services to the Christian community in Bangladesh.
                    </p>
                    <p class="mb-4">
                      Dhaka Credit is committed in providing the best services
                      to its member with different schemes and activities to
                      promote Thrifts & Savings to upgrade the members’ standard
                      of living. Dhaka Credit is the first & largest Credit
                      Union of its kind currently in Bangladesh. The operational
                      area of Dhaka Credit includes Dhaka, Gazipur, Narayanganj
                      & Munshiganj Districts with over 43,000 members currently
                      active in Dhaka Credit. Dhaka Credit is currently
                      providing various services through its 12 Service Centers
                      and 20 Collection Booths. As of June 2022, there are
                      nearly 600 professional staffs along with Part time and
                      Students are currently employed in Dhaka Credit.
                    </p>
                    <p class="mb-4">
                      Dhaka Credit is providing around 86 products with the
                      policies being constantly updated to make the products
                      more Member-Friendly and provide maximum benefits to the
                      members. The Construction of the Divine Mercy Hospital at
                      Kuchilabari in the District of Gazipur is under process
                      and are looking to commence its operation in 2022. It is a
                      300-bed hospital situated in Gazipur, adjacent to Dhaka
                      city. The vast infrastructure having most of the health
                      service departments will be completed by 2022 and will
                      start its operation by the end of the year. This mega
                      project will follow a Medical College and a Nursing
                      College in the hospital’s vast campus.
                    </p>
                  </div>
                </motion.div>
              </div>
            </>
          );
        }}
      </TestContext.Consumer>
    </>
  );
};

export default AboutUs;
