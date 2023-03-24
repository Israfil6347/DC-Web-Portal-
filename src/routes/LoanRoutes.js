import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Loan from "partials/loan/Loan";
import AgainstLtsd from "partials/loan/single/AgainstLtsd";
import BillPayLoan from "partials/loan/single/BillPayLoan";
import Business from "partials/loan/single/Business";
import CapacityBasedLoan from "partials/loan/single/CapacityBasedLoan";
import CarLoan from "partials/loan/single/CarLoan";

import CompetencyBaseLoanContent from "partials/loan/single/CompetencyBaseLoanContent";
import ConsumerLoan from "partials/loan/single/ConsumerLoan";
import CreditCellingLoan from "partials/loan/single/CreditCellingLoan";
import DcFlatPurchaseLoan from "partials/loan/single/DcFlatPurchaseLoan";
import DcGymLoan from "partials/loan/single/DcGymLoan";
import DoubleLoanFDR from "partials/loan/single/DoubleLoanFDR";
import EmergencyLoan from "partials/loan/single/EmergencyLoan";
import Entrepreneur from "partials/loan/single/Entrepreneur";
import FlatPurchaseLoan from "partials/loan/single/FlatPurchaseLoan";
import GeneralCCLoan from "partials/loan/single/GeneralCCLoan";
import GeneralLoan from "partials/loan/single/GeneralLoan";
import GoingAbroadLoan from "partials/loan/single/GoingAbroadLoan";
import HigherEducationLoan from "partials/loan/single/HigherEducationLoan";
import HigherEducationSupportLoan from "partials/loan/single/HigherEducationSupportLoan";
import HouseBuildingLoan from "partials/loan/single/HouseBuildingLoan";
import IndustrialLoan from "partials/loan/single/IndustrialLoan";
import InstantLoan from "partials/loan/single/InstantLoan";
import MetroHouseBuilding from "partials/loan/single/MetroHouseBuilding";
import OpenInstallmentLoan from "partials/loan/single/OpenInstallmentLoan";
import OwnShareLoan from "partials/loan/single/OwnShareLoan";
import ProfessionalTrainingLoan from "partials/loan/single/ProfessionalTrainingLoan";
import SecureOverDraftLoan from "partials/loan/single/SecureOverDraftLoan";
import SmbLoan from "partials/loan/single/SmbLoan";
import SolvencyHigherEducationLoan from "partials/loan/single/SolvencyHigherEducationLoan";
import TopUpLoan from "partials/loan/single/TopUpLoan";
import VariousOtherLoan from "partials/loan/single/VariousOtherLoan";

function LoanRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="loans">
            <Route path="" element={<Loan />}></Route>

            <Route path="business/" element={<Business />}></Route>
            <Route path="against-ltsd/" element={<AgainstLtsd />}></Route>
            <Route path="general-Loan/" element={<GeneralLoan />}></Route>
            <Route path="smd/" element={<SmbLoan />}></Route>
            <Route path="car/" element={<CarLoan />}></Route>
            <Route
              path="competency-based/"
              element={<CompetencyBaseLoanContent />}
            ></Route>
            <Route
              path="metro-house-building/"
              element={<MetroHouseBuilding />}
            ></Route>
            <Route path="flat-purchase/" element={<FlatPurchaseLoan />}></Route>
            <Route
              path="house-building/"
              element={<HouseBuildingLoan />}
            ></Route>
            <Route
              path="credit-ceiling/"
              element={<CreditCellingLoan />}
            ></Route>
            <Route path="industrial/" element={<IndustrialLoan />}></Route>
            <Route path="general-cc/" element={<GeneralCCLoan />}></Route>
            <Route path="going-abroad/" element={<GoingAbroadLoan />}></Route>
            <Route
              path="solvency-higher-edu/"
              element={<SolvencyHigherEducationLoan />}
            ></Route>
            <Route path="top-up/" element={<TopUpLoan />}></Route>
            <Route path="bill-pay/" element={<BillPayLoan />}></Route>
            <Route
              path="higher-education/"
              element={<HigherEducationLoan />}
            ></Route>
            <Route
              path="higher-edu-supp/"
              element={<HigherEducationSupportLoan />}
            ></Route>
            <Route
              path="prof-training/"
              element={<ProfessionalTrainingLoan />}
            ></Route>
            <Route path="consumer/" element={<ConsumerLoan />}></Route>
            <Route path="gym/" element={<DcGymLoan />}></Route>
            <Route
              path="open-installment/"
              element={<OpenInstallmentLoan />}
            ></Route>
            <Route path="own-share/" element={<OwnShareLoan />}></Route>
            <Route
              path="secured-over-draft/"
              element={<SecureOverDraftLoan />}
            ></Route>
            <Route path="dc-flat-pur/" element={<DcFlatPurchaseLoan />}></Route>
            <Route path="emergency/" element={<EmergencyLoan />}></Route>
            <Route path="instant/" element={<InstantLoan />}></Route>
            <Route path="entrepreneur/" element={<Entrepreneur />}></Route>
            <Route path="double-on-fdr/" element={<DoubleLoanFDR />}></Route>
            <Route
              path="capacity-based/"
              element={<CapacityBasedLoan />}
            ></Route>
            <Route path="various-other/" element={<VariousOtherLoan />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default LoanRoutes;
