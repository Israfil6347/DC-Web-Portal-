import CommonButton from "inputComponent/CommonButton";
import CommonTextInput from "inputComponent/CommonTextInput";
import TextArea from "inputComponent/Textarea";
import { useState, useContext } from "react";
import FeedbackEmployContext from "context/FeedbackEmployContext";

function Employment({
  organizationNameHandler,
  organizationAddressHandler,
  positionEmploymentHandler,
  salaryEmploymentHandler,
  DurationFromEmploymentHandler,
  durationToEmploymentToHandler,
  responsibilitiesHandler,
  reasonForLeavingHandler,
  employeeSupervisedHandler,
}) {
  const {
    addEmployeeJobHistory,
    EmploymentFeedbackHandler,
    removeLayoutHandler,
    ButtonFeedBackHandler,
  } = useContext(FeedbackEmployContext);

  return (
    <div>
      <div className="my-10 text-onSurface">
        <h6 class="text-light mb-3 text-center text-xl font-semibold uppercase md:text-2xl">
          Employment
        </h6>
        {addEmployeeJobHistory.map((post, index) => (
          <>
            <div className="pt-4">
              <div className="border border-dashed p-2">
                <div class="flex justify-end" key={index}>
                  {addEmployeeJobHistory.length !== 1 ? (
                    <button
                      class="cursor-pointer text-primary hover:text-onPrimary"
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
                        class="h-6 w-6"
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
                <div className="grid grid-cols-1">
                  <CommonTextInput
                    inputType="text"
                    label="Organization Name"
                    name="organizationName"
                    InputFeedBack={(name, value) => {
                      EmploymentFeedbackHandler(value, index, name);
                    }}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <CommonTextInput
                    inputType="text"
                    label="Organization Address"
                    name="organizationAddress"
                    InputFeedBack={(name, value) => {
                      EmploymentFeedbackHandler(value, index, name);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="text"
                      label="Position"
                      name="position"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="number"
                      label="Salary"
                      name="salary"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="date"
                      label="Duration From"
                      name="durationFrom"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="date"
                      label="Duration To"
                      name="durationTo"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                </div>

                <div className="">
                  <div className="mb-3">
                    <TextArea
                      label="RESPONSIBILITIES & ACHIEVEMENTS"
                      name="responsibilities"
                      placeholder="write shorty about your Responsibilities and what you have Achieved."
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="text"
                      label="Reason For Leaving"
                      name="reasonForLeaving"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="number"
                      label="No Of Employee Supervised By You"
                      name="NoOfEmployeeSupervisedByYou"
                      InputFeedBack={(name, value) => {
                        EmploymentFeedbackHandler(value, index, name);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="flex justify-end gap-4 p-4">
          {/* <button className="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow">
            Add Employment
          </button> */}
          <CommonButton
            text="Add Employment"
            ButtonFeedBack={ButtonFeedBackHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Employment;
