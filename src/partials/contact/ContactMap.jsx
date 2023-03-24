import { motion } from "framer-motion";
import { useEffect } from "react";
import Contact from "./Contact";

function ContactMap() {
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
      <section className="text-onSurface animate-fadeInRight">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <h2 className="mb-6 text-2xl font-semibold">Our Service Areas</h2>
            <Contact />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactMap;
