import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Projects from "partials/projects/Projects";
import ChildCare from "partials/projects/single/ChildCare";
import Hostel from "partials/projects/single/Hostel";
import School from "partials/projects/single/School";

function ProjectRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/projects">
            <Route path="" element={<Projects />}></Route>
            <Route path="child-care" element={<ChildCare />}></Route>
            <Route path="dc_hostel" element={<Hostel />}></Route>
            <Route path="dc-school" element={<School />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default ProjectRoutes;
