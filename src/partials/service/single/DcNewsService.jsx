import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "../../../assets/images/service/news.jpg";

function DcNewsService() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.div
      //transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <div className="w-full float-left lg:w-2/5">
              <img src={image} className="w-full md:pr-6 pb-5" alt="" />
            </div>
            <div className="">
              <h2 className="mb-2 text-2xl lg:text-3xl font-bold">DC News</h2>
              <div className="mb-4 p-1 text-justify">
                Dhaka Credit has introduced an online portal named
                ‘dcnewsbd.com’ in Bangla. Its main goal & objective is to keep
                people & members informed of the day to day events and
                activities taking place in all of its operational areas as well
                as divisional towns & cities around the country. News of other
                Co-Operatives, Churches & Social issues in the Christian
                Community or Secular news at national level are covered in this
                online portal. The members of Dhaka Credit living in other parts
                of the world can get instant information about the Credit Union
                & get connected instantly. Currently it is one of the leading
                online news portal in Bangladesh.
              </div>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default DcNewsService;
