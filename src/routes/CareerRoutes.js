import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Carrier from "partials/carrier/Carrier";
import ApplyPerson from "partials/carrier/single/ApplyPerson";
import SinglePage from "partials/carrier/single/SinglePage";

function CareerRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="career">
            <Route path="" element={<Carrier />}></Route>
            <Route path="singlePage" element={<SinglePage />}></Route>
            <Route path="job-application" element={<ApplyPerson />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default CareerRoutes;
