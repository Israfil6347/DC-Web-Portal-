import { useEffect } from "react";

import { motion } from "framer-motion";
import office_bearers18 from "../../assets/images/Supervisory_Committee/18. Sumon James D' Costa.jpg";
import office_bearers19 from "../../assets/images/Supervisory_Committee/19. Surit Gomes.jpg";
import office_bearers20 from "../../assets/images/Supervisory_Committee/20. Pankaj Lawrence Costa.jpeg";
import office_bearers21 from "../../assets/images/Supervisory_Committee/21. Maria D Cunha.jpg";
import office_bearers22 from "../../assets/images/Supervisory_Committee/22. Molay Nath.jpeg";

function SupervisoryCommittee() {
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
                        src={office_bearers18}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Sumon James D' Costa{/* Mr. John Gomes */}
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
                        src={office_bearers19}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Surit Gomes</h5>
                      <p className="">Secretary</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={office_bearers20}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Pankaj Lawrence Costa{/* Ms. Stella Hazra */}
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
                        src={office_bearers21}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mrs Maria D Cunha{/* Mr. Barnard Pankaj D’ Rozario */}
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
                        src={office_bearers22}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Molay Nath{/* Ms. Madhabi Anita Gomes */}
                      </h5>
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

export default SupervisoryCommittee;
