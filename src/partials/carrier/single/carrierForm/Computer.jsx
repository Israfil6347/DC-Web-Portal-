import DropdownInput from "inputComponent/DropdownInput";
import CommonButton from "inputComponent/CommonButton";
import React from "react";
import { useState, useContext } from "react";
import FeedbackComputerContext from "context/FeedbackComputerContext";
const data = [
  { id: 0, label: "Professional", value: "Professional" },
  { id: 1, label: "Average", value: "Average" },
  { id: 2, label: "Beginner", value: "Beginner" },
];
function Computer() {
  const {
    addForm,
    computerFeedback,
    removeLayoutHandler,
    ButtonFeedBackHandler,
  } = useContext(FeedbackComputerContext);

  return (
    <div class="text-onSurface">
      <h6 class="text-light mb-3 text-center text-xl font-semibold uppercase md:text-2xl">
        Computer Skill
      </h6>

      <div class="w-full rounded-lg  p-2 text-onSurface">
        {addForm.map((post, index) => (
          <>
            {" "}
            <div className="border border-dashed mt-4">
              <div class="flex justify-end" key={index}>
                {addForm.length !== 1 ? (
                  <button
                    class="cursor-pointer text-primary hover:text-onPrimary p-2"
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
              <div className=" grid w-full grid-cols-1 gap-5 rounded-lg  p-2 md:grid-cols-2 md:gap-8">
                <div className="grid grid-cols-1">
                  <DropdownInput
                    label="Select Skill"
                    dropDownData={data}
                    name="selectSkill"
                    DropDownFeedBack={(name, value) => {
                      computerFeedback(value, index, name);
                    }}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <DropdownInput
                    label="Select Proficiency"
                    dropDownData={data}
                    name="selectProficiency"
                    DropDownFeedBack={(name, value) => {
                      computerFeedback(value, index, name);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="flex justify-end gap-4 p-4">
          <CommonButton
            text=" Add skill"
            ButtonFeedBack={(status) => {
              ButtonFeedBackHandler(status);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Computer;
