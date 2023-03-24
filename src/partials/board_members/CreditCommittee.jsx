import { useEffect } from "react";

import { motion } from "framer-motion";
import CreditCommittee13 from "../../assets/images/credit_committee/13. Barnard Pankaj D Rozario.jpg";
import CreditCommittee14 from "../../assets/images/credit_committee/14. Moshi Mondol.jpg";
import CreditCommittee15 from "../../assets/images/credit_committee/15. Uma GOmes.jpg";
import CreditCommittee16 from "../../assets/images/credit_committee/16. Bokul Rozario.jpg";
import CreditCommittee17 from "../../assets/images/credit_committee/17. Sushanto Kubi.jpg";

function CreditCommittee() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div transition={{ duration: 0.5 }} exit={{ opacity: 0, x: -1000 }}>
      <section className="text-onSurface animate-fadeInUp">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="">
            <div className="text-center">
              <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={CreditCommittee13}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Barnard Pankaj D Rozario
                      </h5>
                      <p className="">Chairman</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={CreditCommittee14}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Moshi Mondol</h5>
                      <p className="">Secretary</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={CreditCommittee15}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mrs Uma Magdaline Gomes
                      </h5>
                      <p className="">Member</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={CreditCommittee16}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Bokul Rozario</h5>
                      <p className="">Member</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={CreditCommittee17}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Sushanto Kubi</h5>
                      <p className="">Member</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default CreditCommittee;
