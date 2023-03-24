import { useEffect } from "react";

import { motion } from "framer-motion";
import office_bearers1 from "../../assets/images/office_bearers/Ignatious_Corraya.JPG";
import office_bearers2 from "../../assets/images/office_bearers/Papri-Arengh.jpg";
import office_bearers3 from "../../assets/images/office_bearers/3. Michael John Gomes.jpg";
import office_bearers4 from "../../assets/images/office_bearers/4. Sukumar Lenus Cruze.jpg";

function OfficeBearerContent() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div transition={{ duration: 0.5 }} exit={{ opacity: 0, x: -1000 }}>
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="">
            <div className="text-center">
              <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li className="group animate-fadeInLeft">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center  group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={office_bearers1}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Ignatious Hemanta Corraya
                      </h5>
                      <p className="">President</p>
                    </div>
                  </div>
                </li>
                <li className="group animate-fadeInDown">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center  group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={office_bearers2}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mrs. Papri Devi Areng
                      </h5>
                      <p className="">Vice President</p>
                    </div>
                  </div>
                </li>
                <li className="group animate-fadeInRight">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center  group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={office_bearers3}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Michael John Gomes
                      </h5>
                      <p className="">Secretary</p>
                    </div>
                  </div>
                </li>
                <li className="group animate-fadeInLeft">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center  group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={office_bearers4}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Sukumar Lenus Cruze{" "}
                      </h5>
                      <p className="">Treasurer</p>
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

export default OfficeBearerContent;
