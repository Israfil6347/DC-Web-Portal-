import { useState, useContext } from "react";

import InputText from "./career design component/InputText.jsx";
import Application from "./carrierForm/Application.jsx";
import Dependents from "./carrierForm/Dependents.jsx";
import Employment from "./carrierForm/Employment.jsx";
import Personal from "./carrierForm/Personal.jsx";
import Educational from "./carrierForm/Educational.jsx";
import Trainings from "./carrierForm/Trainings";
import OtherInformation from "./carrierForm/OtherInformation.jsx";
import References from "./carrierForm/References";
import Language from "./carrierForm/Language.jsx";
import Computer from "./carrierForm/Computer.jsx";

import FeedbackComputerContext from "context/FeedbackComputerContext.js";
import FeedbackApplicationContext from "context/FeedbackApplicationContext.js";
import FeedbackEmployContext from "context/FeedbackEmployContext.js";
import FeedbackEducationsContext from "context/FeedbackEducationsContext.js";
import FeedbackReferenceContext from "context/FeedbackReferenceContext.js";

import LanguageApplicationContext from "context/LanguageApplicationContext";
import { Form } from "react-router-dom";

const menu = [
  { title: "Personal" },
  { title: "Dependents" },
  { title: "Educational" },
  { title: "Trainings" },
  { title: "ComputerProficiency" },
  { title: "Employment" },
  { title: "Language" },
  { title: " Other Info" },
  { title: "References" },
  { title: "Application" },
];

function ApplyPerson() {
  const { addForm } = useContext(FeedbackComputerContext);
  const { addEmployeeJobHistory } = useContext(FeedbackEmployContext);
  const { addEducation } = useContext(FeedbackEducationsContext);
  const { appData } = useContext(FeedbackApplicationContext);
  const { addReference } = useContext(FeedbackReferenceContext);

  const { addFormLanguageFeedback } = useContext(LanguageApplicationContext);
  console.log(addFormLanguageFeedback);
  console.log(addEducation);
  // console.log(appData);
  console.log(appData);
  const [title, setTitle] = useState("Personal");
  const [menuIndex, setmenuIndex] = useState(0);
  // const [applicationData, setApplicationData] = useState({
  //   application: {
  //     // employmentStatus: "",
  //     // noticePeriod: "",
  //     // expectedSalary: "",
  //     // Resume: "",
  //   },
  //   personal: {
  //     // fullName: "",
  //     // photo: "",
  //     // fatherName: "",
  //     // motherName: "",
  //     // dateOfBirth: "",
  //     // nationalIDNumber: "",
  //     // eTinNumber: "",
  //     // passportNumber: "",
  //     // contactNumber: "",
  //     // gender: "",
  //     // bloodGroup: "",
  //     // religion: "",
  //     // maritalStatus: "",
  //     // nationality: "",
  //     // emergencyContact: "",
  //     // expectedSalary: "",
  //     // emergencyContact2: "",
  //     // spouse: "",
  //     // Spouse2: "",
  //     // presentHouse: "",
  //     // presentDivision: "",
  //     // presentDistrict: "",
  //     // presentPoliceStation: "",
  //     // presentVillage: "",
  //     // permanentHouse: "",
  //     // permanentDivision: "",
  //     // permanentDistrict: "",
  //     // permanentPoliceStation: "",
  //     // permanentVillage: "",
  //     // ContactWork: "",
  //     // contactHome: "",
  //     // contactCellphone: "",
  //     // contactEmailOfficial: "",
  //     // contactEmailPersonal: "",
  //   },
  //   dependents: {
  //     // dependent: "",
  //   },
  //   educational: {
  //     degree: "",
  //     group: "",
  //     eduction: "",
  //     passingYear: "",
  //     result: "",
  //     resultOutOf: "",
  //     institute: "",
  //   },
  //   trainings: {},
  //   computer: [{}],
  //   otherInfo: {},
  // });
  console.log(title);

  console.log(addForm);

  const activeHandler = (menuIndex) => {
    setmenuIndex(menuIndex);
  };

  const forwardHandler = () => {
    if (menuIndex < menu.length) {
      setmenuIndex(menuIndex + 1);
    }
  };
  console.log(menu[menuIndex]);

  const backwardHandler = () => {
    if (menuIndex != 0) {
      setmenuIndex(menuIndex - 1);
    }
  };

  const onSubmitHandler = () => {};

  console.log(addForm);

  return (
    <div>
      <div className="container mx-auto mb-20 flex items-center justify-center px-6 text-onBackground">
        <div className="w-full ">
          <ul className="my-4 flex flex-col items-center justify-center md:flex-row">
            {/* <div className="flex"> */}
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Personal"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(0);
              }}
            >
              Personal
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Dependents"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(1);
              }}
            >
              {" "}
              Dependents
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Educational"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(2);
              }}
            >
              {" "}
              Educational
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Trainings"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(3);
              }}
            >
              {" "}
              Trainings
            </li>

            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "ComputerProficiency"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(4);
              }}
            >
              {" "}
              Computer Proficiency
            </li>

            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Employment"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(5);
              }}
            >
              {" "}
              Employment
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Language"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(6);
              }}
            >
              {" "}
              Language
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === " Other Info"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(7);
              }}
            >
              {" "}
              Other Info
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "References"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(8);
              }}
            >
              {" "}
              References
            </li>
            <li
              className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                menu[menuIndex].title === "Application"
                  ? "text-primary border-primary"
                  : ""
              } `}
              onClick={() => {
                activeHandler(9);
              }}
            >
              Application
            </li>
            {/* </div> */}
          </ul>
          <form onSubmit={onSubmitHandler}>
            <div className="border bg-surface p-16 px-4 py-10 shadow-sm md:px-6 lg:px-6 lg:py-20">
              <div
                className={` ${
                  menu[menuIndex].title === "Application" ? "block" : "hidden"
                } `}
              >
                <Application></Application>
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "Personal" ? "block" : "hidden"
                } `}
              >
                <Personal />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "Dependents" ? "block" : "hidden"
                } `}
              >
                <Dependents />
              </div>

              <div
                className={` ${
                  menu[menuIndex].title === "Educational" ? "block" : "hidden"
                } `}
              >
                <Educational />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "Trainings" ? "block" : "hidden"
                } `}
              >
                <Trainings />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "ComputerProficiency"
                    ? "block"
                    : "hidden"
                } `}
              >
                {}
                <Computer />
                {}
              </div>

              <div
                className={` ${
                  menu[menuIndex].title === "Employment" ? "block" : "hidden"
                } `}
              >
                <Employment />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "Language" ? "block" : "hidden"
                } `}
              >
                <Language />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === " Other Info" ? "block" : "hidden"
                } `}
              >
                <OtherInformation />
              </div>
              <div
                className={` ${
                  menu[menuIndex].title === "References" ? "block" : "hidden"
                } `}
              >
                <References />
              </div>
            </div>

            <div className="flex justify-center gap-4 p-4">
              {menuIndex == 0 ? (
                ""
              ) : (
                <button
                  className="cursor-pointer rounded-md border border-primary py-2 px-4 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-onPrimary hover:shadow"
                  onClick={backwardHandler}
                >
                  Back
                </button>
              )}
              {menuIndex == menu.length - 1 ? (
                ""
              ) : (
                <button
                  className="cursor-pointer rounded-md border border-primary py-2 px-4 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-onPrimary hover:shadow"
                  // onClick={nextButtonHandler}
                  onClick={forwardHandler}
                >
                  Next
                </button>
              )}

              {menuIndex == menu.length - 1 ? (
                <button
                  type="submit"
                  className="cursor-pointer rounded-md border border-primary py-2 px-4 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-onPrimary hover:shadow"
                >
                  Submit
                </button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ApplyPerson;
