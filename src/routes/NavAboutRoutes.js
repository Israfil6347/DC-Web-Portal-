import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AboutUs from "pages/AboutUs";
import CoreValues from "pages/CoreValues";
import CreditUnionMovement from "pages/CreditUnionMovement";
import FoundersProfile from "pages/FoundersProfile";
import MissionAndValues from "pages/MissionAndValues";
import NavAboutUs from "pages/NavAboutUs";
import OurStory from "pages/OurStory";
import PresidentMessage from "pages/PresidentMessage";

import Achievement from "pages/Achievements";
import AgmReports from "pages/AgmReports";
import WomenActivity from "pages/WomansActivity";

function NavAboutRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<NavAboutUs />}>
            <Route path=":about" element={<AboutUs />}></Route>
            <Route
              path="founders-profile"
              element={<FoundersProfile />}
            ></Route>
            <Route path=":our-story" element={<OurStory />}></Route>
            <Route
              path=":mission-vision"
              element={<MissionAndValues />}
            ></Route>
            <Route path=":core-values" element={<CoreValues />}></Route>
            <Route
              path=":President-message"
              element={<PresidentMessage />}
            ></Route>
            <Route
              path=":cu-movement"
              element={<CreditUnionMovement />}
            ></Route>
            <Route path=":Achievement/" element={<Achievement />}></Route>
            <Route path=":women-activity" element={<WomenActivity />}></Route>
            <Route path=":agm-reports/" element={<AgmReports />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default NavAboutRoutes;
