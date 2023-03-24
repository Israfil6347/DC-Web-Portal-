import { motion } from "framer-motion";
import Loan from "./Single/Loan";

function FrequentlyAskedQuestions() {
  return (
    <motion.div transition={{ duration: 0.5 }} exit={{ opacity: 0, x: -1000 }}>
      <section className="animate-fadeInUp text-onSurface">
        <div className="container mx-auto mb-20 px-6 text-left md:text-justify lg:text-justify">
          <div className="flex w-full flex-col items-center bg-surface px-4 py-10 shadow-sm">
            <div className="flex w-full flex-col gap-4 px-6 md:px-10 lg:flex-row lg:px-20">
              <div className="w-full pl-6 md:pl-10  lg:pl-20">
                <div className="w-full">
                  <Loan></Loan>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default FrequentlyAskedQuestions;
