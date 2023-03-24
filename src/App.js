import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Error from "partials/404/Error";
import Banner from "partials/Banner";
import ContactMap from "partials/contact/ContactMap";
import AccountDetailsDialogue from "partials/dialogue/AccountDetailsDialogue";
import ErrorMessageDialogue from "partials/dialogue/ErrorMessageDialogue";
import LoaderDialogue from "partials/dialogue/LoaderDialogue";
import LoginDialogue from "partials/dialogue/LoginDialogue";
import UpComingDialogue from "partials/dialogue/UpComingDialogue";
import FloatingCarrier from "partials/FloatingCarrier";
import FloatingTransaction from "partials/FloatingTransaction";
import Footer from "partials/Footer";
import Header from "partials/Header";
import Home from "partials/home/Home";
import Notice from "partials/notice/Notice";
import CareerRoutes from "routes/CareerRoutes";
import DepositRoutes from "routes/DepositRoutes";
import LoanRoutes from "routes/LoanRoutes";
import NavAboutRoutes from "routes/NavAboutRoutes";
import ProjectRoutes from "routes/ProjectRoutes";
import ServiceRoutes from "routes/ServiceRoutes";
import TopHeaderRoutes from "routes/TopHeaderRoutes";
import TestContext from "store/test-context";
import NavAccount from "WMS/Info/account/NavAccount";
import NavInfo from "WMS/Info/NavInfo";
import { FeedbackComputerProvider } from "context/FeedbackComputerContext.js";
import { FeedbackApplicationProvider } from "context/FeedbackApplicationContext";
import { LanguageApplicationProvider } from "context/LanguageApplicationContext";
import { FeedbackEmployProvider } from "context/FeedbackEmployContext";
import { FeedbackEducationProvider } from "context/FeedbackEducationsContext";
import { FeedbackTrainingProvider } from "context/FeedbackTrainningContext";
import { FeedbackReferenceProvider } from "context/FeedbackReferenceContext";

const routeNames = {
  links: [
    "/Office-Bearers/",
    "/Board-of-Directors/",
    "/Credit-Committee/",
    "/Supervisory-Committee/",
    "/faq/",
    "/",
    "/me",
    "/services",
    "/projects",
    "/loans",
    "/deposits",
    "/career",
    "/about",
    "/Notice/",
    "/contact",
    "/services/atm/",
    "/services/beauty-parlor/",
    "/services/cultural-academy/",
    "/services/doctors/",
    "/services/ambulance/",
    "/services/gym/",
    "/services/dc-tv/",
    "/services/dc-news/",
    "/services/mms/",
    "/services/other/",
    "/projects/child-care/",
    "/projects/dc-school/",
    "/projects/dc_hostel/",
    "/loans/general-Loan/",
    "/loans/business/",
    "/loans/smd/",
    "/loans/car/",
    "/loans/metro-house-building/",
    "/loans/flat-purchase/",
    "/loans/house-building/",
    "/loans/industrial/",
    "/loans/general-cc/",
    "/loans/competency-based/",
    "/loans/bill-pay/",
    "/loans/solvency-higher-edu/",
    "/loans/higher-education/",
    "/loans/prof-training/",
    "/loans/consumer/",
    "/loans/secured-over-draft/",
    "/loans/own-share/",
    "/loans/open-installment/",
    "/loans/dc-flat-pur/",
    "/loans/competency-based/",
    "/loans/double-on-fdr/",
    "/loans/instant/",
    "/loans/various-other/",
    "/deposits/savings/",
    "/deposits/credit/",
    "/deposits/std/",
    "/deposits/bee-savers/",
    "/deposits/smart-savers/",
    "/deposits/education-savings/",
    "/deposits/monthly-savings/",
    "/deposits/ltsd/",
    "/deposits/troimashik-savings/",
    "/deposits/aged-savings/",
    "/deposits/double-deposit/",
    "/deposits/marriage-deposit/",
    "/deposits/housing-deposit/",
    "/deposits/millionaire-deposit/",
    "/deposits/kotipoti-deposit/",
    "/deposits/hospital-bond/",
    "/deposits/pension-benefit/",
    "/services/samabay-bazar/",
    "/loans/entrepreneur/",
    "/services/security/",
    "/loans/credit-ceiling/",
    "/loans/going-abroad/",
    "/loans/top-up/",
    "/loans/higher-edu-supp/",
    "/loans/gym/",
    "loans/against-ltsd/",
    "/loans/capacity-based/",
    "/deposits/festival-savings/",
    "/loans/against-ltsd/",
    "/loans/emergency/",
    "/deposits/health-care/",
    "/about/our-story/",
    "/about/mission-vision/",
    "/about/core-values/",
    "/about/President-message/",
    "/about/cu-movement/",
    "/about/Achievement/",
    "/about/women-activity/",
    "/about/founders-profile/",
    "/about/founders-profile",
    "/about/about",
    "/career/",
    "/career/job-application/",
    "/career/singlePage/",
  ],
};

function App() {
  const [scrollFromTop, setScrollFromTop] = useState(false);
  const [title, setTitle] = useState({});
  const [isOpen, setIsOPen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [IsAccountDetails, setIsAccountDetails] = useState(false);
  const [IsRouteNotError, setIsRouteNotError] = useState(false);
  const [accDetails, setAccDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    var matched;
    var IsFound = false;
    routeNames.links.forEach((element) => {
      matched = element === location.pathname;
      if (matched) {
        IsFound = true;
      }
    });

    if (IsFound) {
      setIsRouteNotError(true);
    } else {
      setIsRouteNotError(false);
    }
  }, [location.pathname]);

  window.addEventListener("scroll", (event) => {
    window.pageYOffset > 60 ? setScrollFromTop(true) : setScrollFromTop(false);
  });

  const navigationHandler = (setScroll) => {
    setScrollFromTop(setScroll);
  };

  const TitleHandler = (obj) => {
    setTitle(obj);
  };

  const overLayHandler = (isPopOpen) => {
    setIsOPen(isPopOpen);
  };

  const ErrorOverLayHandler = (isPopOpen, errorText) => {
    setErrorMessage(errorText);
    setIsErrorOpen(isPopOpen);
  };

  const LoginOverLayHandler = (isPopOpen) => {
    setLoginIsOpen(isPopOpen);
  };

  const userInfoHandler = (userInfoObject) => {
    setUserInfo({
      userInfoObject: userInfoObject,
    });
  };

  const loginSuccessHandler = (isSuccess) => {
    setIsSuccess(isSuccess);
  };

  var obj = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    !!obj ? setIsSuccess(true) : setIsSuccess(false);
  });

  const loginContextHandler = () => {
    setUserInfo({
      userInfoObject: null,
    });
    setIsSuccess(false);
  };

  const isLoadingHandler = (isLoading) => {
    setIsLoading(isLoading);
  };

  const accDetailsPopHandler = (accDetails, isOpen) => {
    setIsAccountDetails(isOpen);
    setAccDetails(accDetails);
  };

  return (
    // theme-dark
    <div>
      <div className="relative bg-background min-h-screen flex flex-col font-sans-serif ">
        <TestContext.Provider
          value={{ userInfo: !!obj ? obj : userInfo.userInfoObject }}
        >
          <Header
            scroll={scrollFromTop}
            navMethod={navigationHandler}
            titleHandler={TitleHandler}
            clearLoginContext={loginContextHandler}
            popUpHandler={LoginOverLayHandler}
          />
          <Banner Title={title} />

          {ReactDOM.createPortal(
            <UpComingDialogue
              popUpHandler={overLayHandler}
              isOpen={isOpen}
            ></UpComingDialogue>,
            document.getElementById("upcomingDialogue")
          )}
          {ReactDOM.createPortal(
            <ErrorMessageDialogue
              popUpHandler={ErrorOverLayHandler}
              isOpen={isErrorOpen}
              errorMessage={ErrorMessage}
              clearLoginContext={loginContextHandler}
            ></ErrorMessageDialogue>,
            document.getElementById("upcomingDialogue")
          )}

          {ReactDOM.createPortal(
            <LoginDialogue
              popUpHandler={LoginOverLayHandler}
              loginIsOpen={loginIsOpen}
              userInfo={userInfoHandler}
              isSuccess={loginSuccessHandler}
              isLoading={isLoadingHandler}
            ></LoginDialogue>,
            document.getElementById("upcomingDialogue")
          )}
          {ReactDOM.createPortal(
            <AccountDetailsDialogue
              IsOpen={IsAccountDetails}
              popUpHandler={accDetailsPopHandler}
              isLoading={isLoadingHandler}
              accDetails={accDetails}
            ></AccountDetailsDialogue>,
            document.getElementById("upcomingDialogue")
          )}

          {ReactDOM.createPortal(
            <LoaderDialogue isLoading={isLoading}></LoaderDialogue>,
            document.getElementById("LoaderDialogue")
          )}
          <FeedbackApplicationProvider>
            <FeedbackComputerProvider>
              <FeedbackEmployProvider>
                <LanguageApplicationProvider>
                  <FeedbackEducationProvider>
                    <FeedbackTrainingProvider>
                      <FeedbackReferenceProvider>
                        <CareerRoutes></CareerRoutes>
                      </FeedbackReferenceProvider>
                    </FeedbackTrainingProvider>
                  </FeedbackEducationProvider>
                </LanguageApplicationProvider>
              </FeedbackEmployProvider>
            </FeedbackComputerProvider>
          </FeedbackApplicationProvider>

          <ServiceRoutes></ServiceRoutes>
          <NavAboutRoutes></NavAboutRoutes>
          <ProjectRoutes></ProjectRoutes>
          <LoanRoutes></LoanRoutes>
          <DepositRoutes></DepositRoutes>
          <TopHeaderRoutes></TopHeaderRoutes>

          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}></Route>

              <Route path="contact/" element={<ContactMap />}></Route>
              <Route path="Notice" element={<Notice />}></Route>

              <Route
                path="/me"
                element={<NavInfo popUpHandler={overLayHandler} />}
              ></Route>

              <Route
                path="/accounts"
                element={
                  <NavAccount
                    popUpErrorHandler={ErrorOverLayHandler}
                    popUpHandler={overLayHandler}
                    accDetailsPopup={accDetailsPopHandler}
                    isLoading={isLoadingHandler}
                  />
                }
              ></Route>
              {IsRouteNotError ? (
                ""
              ) : (
                <Route path="*" element={<Error />}></Route>
              )}
            </Routes>
          </AnimatePresence>
          <Footer />

          <FloatingCarrier />

          {isSuccess ? (
            <FloatingTransaction
              popUpHandler={overLayHandler}
            ></FloatingTransaction>
          ) : (
            ""
          )}
        </TestContext.Provider>
      </div>
      <LoaderDialogue isLoading={true}></LoaderDialogue>
    </div>
  );
}

export default App;
