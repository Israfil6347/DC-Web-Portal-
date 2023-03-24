import { useEffect } from "react";

import { motion } from "framer-motion";
import board_of_directors5 from "../../assets/images/board_of_directors/5. Prottesh Rangsa.jpg";
import board_of_directors6 from "../../assets/images/board_of_directors/6. Monica Gomes.jpg";
import board_of_directors7 from "../../assets/images/board_of_directors/7. Subrata Richard Rozario.jpg";
import board_of_directors8 from "../../assets/images/board_of_directors/8. Stella Hazra.jpg";
import board_of_directors9 from "../../assets/images/board_of_directors/9. Nirapada Halder.jpg";
import board_of_directors10 from "../../assets/images/board_of_directors/10. Don A Adhikary.jpg";
import board_of_directors11 from "../../assets/images/board_of_directors/11. Manoj Clement Gomes.jpg";
import board_of_directors12 from "../../assets/images/board_of_directors/12. Shipon Rozario.jpg";

function BoardOfDirector() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div transition={{ duration: 0.5 }} exit={{ opacity: 0, x: -1000 }}>
      <section className="text-onSurface animate-fadeInUp">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="">
            <div className="text-center">
              <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors5}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Prottesh Rangsa</h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors6}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mrs. Monica Gomes</h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors7}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Subrata Richard Rozario
                      </h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors8}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mrs. Stella Hazra</h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors9}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Nirapada Halder
                        {/* Ms. Papri Patricia Areng */}
                      </h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors10}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Mr. Don A Adhikary </h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors11}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Mr. Manoj Clement Gomes
                      </h5>
                      <p className="">Director</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                    <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                      <img
                        className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                        src={board_of_directors12}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Shipon Rozario</h5>
                      <p className="">Director</p>
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

export default BoardOfDirector;
