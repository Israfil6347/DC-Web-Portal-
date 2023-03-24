import { motion } from "framer-motion";
import { useEffect } from "react";

const AgmReports = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="animate-slideInUp"
        >
          <h2 className="p-1 text-2xl font-semibold">AGM Reports</h2>

          <ul className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
            <li className="group group flex items-center rounded-md border p-3 hover:cursor-pointer hover:shadow-md">
              <i
                className="fa fa-file-pdf-o fa-3x group-hover:text-red-500"
                aria-hidden="true"
              ></i>
              <div className="flex-grow pl-4">
                <h2 className="font-medium">62th AGM Report</h2>
                <p className="text-xs">Fiscal Year - 2020-21</p>
                <p className="text-xs">Part 1</p>
              </div>
            </li>
            <li className="group flex items-center rounded-md border p-3 hover:cursor-pointer hover:shadow-md">
              <i
                className="fa fa-file-pdf-o fa-3x group-hover:text-red-500"
                aria-hidden="true"
              ></i>
              <div className="flex-grow pl-4">
                <h2 className="font-medium">62th AGM Report</h2>
                <p className="text-xs">Fiscal Year - 2020-21</p>
                <p className="text-xs">Part 2</p>
              </div>
            </li>
            <li className="group flex items-center rounded-md border p-3 hover:cursor-pointer hover:shadow-md">
              <i
                className="fa fa-file-pdf-o fa-3x group-hover:text-red-500"
                aria-hidden="true"
              ></i>
              <div className="flex-grow pl-4">
                <h2 className="font-medium">61th AGM Report</h2>
                <p className="text-xs">Fiscal Year - 2019-20</p>
                <p className="text-xs">Part 1</p>
              </div>
            </li>
            <li className="group flex items-center rounded-md border p-3 hover:cursor-pointer hover:shadow-md">
              <i
                className="fa fa-file-pdf-o fa-3x group-hover:text-red-500"
                aria-hidden="true"
              ></i>
              <div className="flex-grow pl-4">
                <h2 className="font-medium">62th AGM Report</h2>
                <p className="text-xs">Fiscal Year - 2019-20</p>
                <p className="text-xs">Part 2</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default AgmReports;
