import CommonButton from "inputComponent/CommonButton";
import CommonTextInput from "inputComponent/CommonTextInput";
import DropdownInput from "inputComponent/DropdownInput";
import { useState, useContext } from "react";
import FeedbackEducationsContext from "context/FeedbackEducationsContext";

const data = [
  { id: 0, label: "RED" },
  { id: 1, label: "GREEN" },
  { id: 2, label: "YELLOW" },
];
const resultOutOf = [
  { id: 0, value: "4", label: "Out Of 4" },
  { id: 1, value: "5", label: "Out Of 5" },
];
const Board = [
  { id: 0, value: "Dhaka", label: "Dhaka" },
  { id: 1, value: "Rajshahi", label: "Rajshahi" },
  { id: 2, value: "Comilla", label: "Comilla" },
  { id: 3, value: "Jessore", label: "Jessore" },
  { id: 4, value: "Chittagong", label: "Chittagong" },
  { id: 5, value: "Barisal", label: "Barisal" },
  { id: 6, value: "Sylhet", label: "Sylhet" },
  {
    id: 7,
    value: "Bangladesh Madrasah Education Board",
    label: "Bangladesh Madrasah Education Board",
  },
  {
    id: 8,
    value: "Bangladesh Technical Education Board",
    label: "Bangladesh Technical Education Board",
  },
  { id: 6, value: "other", label: "other" },
];
function Educational({
  DegreeHandler,
  GroupHandler,
  EductionHandler,
  PassingYearHandler,
  ResultHandler,
  ResultOutOfHandler,
  InstituteHandler,
}) {
  const {
    addEducation,
    ButtonFeedBackHandler,
    EducationFeedback,
    removeLayoutHandler,
  } = useContext(FeedbackEducationsContext);

  const employmentStatusHandler = (status) => {
    console.log(status);
  };

  // const { addEducation } = useContext(FeedbackEducationContext);
  return (
    <div>
      <div className="my-10 text-onSurface">
        <h6 className="text-light mb-3 text-center text-xl font-semibold uppercase md:text-2xl">
          Education
        </h6>
        {addEducation.map((post, index) => (
          <>
            <div className="pt-4">
              <div className="border border-dashed p-2">
                <div className="flex justify-end" key={index}>
                  {addEducation.length !== 1 ? (
                    <button
                      className="cursor-pointer text-primary hover:text-onPrimary"
                      onClick={() => {
                        removeLayoutHandler(post, index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Name Of Degree"
                      dropDownData={data}
                      DropDownFeedBack={(name, value) => {
                        EducationFeedback(value, index, "nameOfDegree");
                      }}
                      required="*"
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="text"
                      label="Group/Major"
                      InputFeedBack={(name, value) => {
                        EducationFeedback(value, index, "groupManager");
                      }}
                      required="*"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Eduction Board"
                      dropDownData={Board}
                      DropDownFeedBack={(name, value) => {
                        EducationFeedback(value, index, "educationBoard");
                      }}
                      required="*"
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="date"
                      label="Passing Year"
                      InputFeedBack={(name, value) => {
                        EducationFeedback(value, index, "passingYear");
                      }}
                      required="*"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="number"
                      label="Result"
                      InputFeedBack={(name, value) => {
                        EducationFeedback(value, index, "result");
                      }}
                      required="*"
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Result Out Of"
                      dropDownData={resultOutOf}
                      DropDownFeedBack={(name, value) => {
                        EducationFeedback(value, index, "resultOutOf");
                      }}
                      required="*"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <CommonTextInput
                    inputType="text"
                    label="Institute Name"
                    InputFeedBack={(name, value) => {
                      EducationFeedback(value, index, "instituteName");
                    }}
                    required="*"
                  />
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="flex justify-end gap-4 p-4">
          <CommonButton
            text="Add Education"
            ButtonFeedBack={(status) => {
              ButtonFeedBackHandler(status);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Educational;
