import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Services from "partials/service/Service";
import AmbulanceService from "partials/service/single/AmbulanceService";
import AtmService from "partials/service/single/AtmService";
import BeautyParlour from "partials/service/single/BeautyParlour";
import CulturalAcademy from "partials/service/single/CulturalAcademy";
import DcMMS from "partials/service/single/DcMMS";
import DcNewsService from "partials/service/single/DcNewsService";
import DcOnlineTvService from "partials/service/single/DcOnlineTvService";
import DoctorsChamberService from "partials/service/single/DoctorsChamberService";
import GymService from "partials/service/single/GymService";
import OtherServices from "partials/service/single/OtherServices";
import SamabayBazar from "partials/service/single/SamabayBazar";
import SecurityService from "partials/service/single/SecurityService";

function ServiceRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="services">
            <Route path="" element={<Services />}></Route>
            <Route path="atm/" element={<AtmService />}></Route>
            <Route path="samabay-bazar/" element={<SamabayBazar />}></Route>
            <Route path="beauty-parlor/" element={<BeautyParlour />}></Route>
            <Route
              path="cultural-academy/"
              element={<CulturalAcademy />}
            ></Route>
            <Route path="security/" element={<SecurityService />}></Route>
            <Route path="doctors/" element={<DoctorsChamberService />}></Route>
            <Route path="ambulance/" element={<AmbulanceService />}></Route>
            <Route path="dc-tv/" element={<DcOnlineTvService />}></Route>
            <Route path="gym/" element={<GymService />}></Route>
            <Route path="dc-news/" element={<DcNewsService />}></Route>
            <Route path="mms/" element={<DcMMS />}></Route>
            <Route path="other/" element={<OtherServices />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default ServiceRoutes;
