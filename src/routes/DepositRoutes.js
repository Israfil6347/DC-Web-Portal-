import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Deposits from "partials/deposits/Deposits";
import AgedSavings from "partials/deposits/singlePage/AgedSavings";
import BeeSavers from "partials/deposits/singlePage/BeeSavers";
import Credit from "partials/deposits/singlePage/Credit";
import DCHealthCareScheme from "partials/deposits/singlePage/DCHealthCareScheme";
import DoubleDeposit from "partials/deposits/singlePage/DoubleDeposit";
import EducationSavings from "partials/deposits/singlePage/EducationSavings";
import FestivalSavings from "partials/deposits/singlePage/FestivalSavings";
import HospitalBond from "partials/deposits/singlePage/HospitalBond";
import KotiPotiDeposit from "partials/deposits/singlePage/KotiPotiDeposit";
import Ltsd from "partials/deposits/singlePage/Ltsd";
import MarriageDeposit from "partials/deposits/singlePage/MarriageDeposit";
import MillionaireDeposit from "partials/deposits/singlePage/MillionaireDeposit";
import MonthlySavings from "partials/deposits/singlePage/MonthlySavings";
import PensionBenefitScheme from "partials/deposits/singlePage/PensionBenefitScheme";
import Savings from "partials/deposits/singlePage/Savings";
import SmartSavers from "partials/deposits/singlePage/SmartSavers";
import STD from "partials/deposits/singlePage/STD";
import TroimashikSavings from "partials/deposits/singlePage/TroimashikSavings";
import HouseBuildingLoan from "partials/deposits/singlePage/HousingDeposit";

function DepositRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="deposits/">
            <Route path="" element={<Deposits />}></Route>

            <Route path="savings/" element={<Savings />}></Route>
            <Route path="credit/" element={<Credit />}></Route>
            <Route path="std/" element={<STD />}></Route>
            <Route path="bee-savers/" element={<BeeSavers />}></Route>
            <Route path="smart-savers/" element={<SmartSavers />}></Route>
            <Route path="ltsd/" element={<Ltsd />}></Route>
            <Route path="aged-savings/" element={<AgedSavings />}></Route>
            <Route
              path="pension-benefit/"
              element={<PensionBenefitScheme />}
            ></Route>
            <Route path="health-care/" element={<DCHealthCareScheme />}></Route>
            <Route path="hospital-bond/" element={<HospitalBond />}></Route>
            <Route
              path="kotipoti-deposit/"
              element={<KotiPotiDeposit />}
            ></Route>
            <Route
              path="marriage-deposit/"
              element={<MarriageDeposit />}
            ></Route>
            <Route
              path="housing-deposit/"
              element={<HouseBuildingLoan />}
            ></Route>
            <Route
              path="millionaire-deposit/"
              element={<MillionaireDeposit />}
            ></Route>
            <Route path="double-deposit/" element={<DoubleDeposit />}></Route>
            <Route
              path="troimashik-savings/"
              element={<TroimashikSavings />}
            ></Route>
            <Route
              path="festival-savings/"
              element={<FestivalSavings />}
            ></Route>
            <Route path="monthly-savings/" element={<MonthlySavings />}></Route>
            <Route
              path="education-savings/"
              element={<EducationSavings />}
            ></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default DepositRoutes;
