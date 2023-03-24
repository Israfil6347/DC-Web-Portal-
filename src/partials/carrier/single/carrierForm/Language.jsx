import CommonButton from "inputComponent/CommonButton";
import CommonTextInput from "inputComponent/CommonTextInput";
import DropdownInput from "inputComponent/DropdownInput";
import React from "react";
import { useState, useContext } from "react";
import LanguageApplicationContext from "context/LanguageApplicationContext";
const language = [
  { id: 0, label: "Excellent", value: "Excellent" },
  { id: 1, label: "Good", value: "Good" },
  { id: 2, label: "Poor", value: "Poor" },
];
function Language() {
  const {
    addFormLanguageFeedback,
    languageFeedbackHandler,
    removeLayoutHandler,
    ButtonLanguageFeedBackHandler,
  } = useContext(LanguageApplicationContext);

  // console.log(ButtonFeedBackHandler);
  return (
    <div>
      <div className="text-onSurface">
        <h6 className="text-light mb-3 text-center text-xl font-semibold uppercase md:text-2xl">
          Language
        </h6>
        <div class="w-full rounded-lg  p-2 text-onSurface">
          {addFormLanguageFeedback.map((post, index) => (
            <>
              {" "}
              <div className="mt-4 w-full rounded-lg border border-dashed p-2 text-onSurface">
                <div class="flex justify-end" key={index}>
                  {addFormLanguageFeedback.length !== 1 ? (
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
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
                  <div className="grid grid-cols-1">
                    <CommonTextInput
                      inputType="text"
                      label="Language Name"
                      name="languageName"
                      InputFeedBack={(value, name) => {
                        languageFeedbackHandler(value, name, index);
                        // LanguageHandler(name, value);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Reading"
                      dropDownData={language}
                      name="reading"
                      // DropDownFeedBack={employmentStatusHandler}
                      DropDownFeedBack={(value, name) => {
                        languageFeedbackHandler(value, name, index);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Writing"
                      dropDownData={language}
                      // DropDownFeedBack={employmentStatusHandler}
                      name="writing"
                      DropDownFeedBack={(value, name) => {
                        languageFeedbackHandler(value, name, index);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <DropdownInput
                      label="Speaking"
                      dropDownData={language}
                      // DropDownFeedBack={employmentStatusHandler}
                      name="Speaking"
                      DropDownFeedBack={(value, name) => {
                        languageFeedbackHandler(value, name, index);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-end gap-4 p-4">
            <CommonButton
              text="Add Language"
              ButtonFeedBack={(status) => {
                ButtonLanguageFeedBackHandler(status);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
