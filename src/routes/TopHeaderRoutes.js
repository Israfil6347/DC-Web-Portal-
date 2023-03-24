import { AnimatePresence } from "framer-motion";
import BoardOfDirector from "partials/board_members/BoardOfDirector";
import CreditCommittee from "partials/board_members/CreditCommittee";
import OfficeBearerContent from "partials/board_members/OfficeBearerContent";
import SupervisoryCommittee from "partials/board_members/SupervisoryCommittee";
import FrequentlyAskedQuestions from "partials/FAQ/FrequentlyAskedQuestions";
import { Route, Routes, useLocation } from "react-router-dom";

function TopHeaderRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="Office-Bearers"
            element={<OfficeBearerContent />}
          ></Route>
          <Route
            path="Board-of-Directors"
            element={<BoardOfDirector />}
          ></Route>
          <Route path="Credit-Committee" element={<CreditCommittee />}></Route>
          <Route
            path="Supervisory-Committee"
            element={<SupervisoryCommittee />}
          ></Route>
          <Route path="faq" element={<FrequentlyAskedQuestions />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default TopHeaderRoutes;
