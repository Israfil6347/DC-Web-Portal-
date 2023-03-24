import React from "react";
import { useState, useEffect, useContext } from "react";
import CommonTextInput from "inputComponent/CommonTextInput";
import CheckBoxInput from "inputComponent/CheckBoxInput";
import DropdownInput from "inputComponent/DropdownInput";
import FeedbackApplicationContext from "context/FeedbackApplicationContext";

function Dependents({ DependentHandler }) {
  const { DependentsFeedbackHandler } = useContext(FeedbackApplicationContext);

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (status) => {
    setIsOpen(status);
  };

  const Relationship = [
    { id: 0, value: "Father", label: "Father" },
    { id: 1, value: "Mother", label: "Mother" },
    { id: 2, value: "Sister", label: "Sister" },
    { id: 3, value: "Brother", label: "Brother" },
  ];

  return (
    <div>
      <div className="border border-dashed p-2">
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question=" Do you Have any Dependents?"
            label="Yes/no"
            name="dependent"
            isCheckOpen={openHandler}
            InputFeedBack={(name, value) => {
              DependentsFeedbackHandler(name, value);
            }}
          />
        </div>
        {/* 
        <div
          className={`ease  text-justify font-medium transition-all
        duration-700${!isOpen ? "max-h-0" : " max-h-[1000px] p-4"} `}
        > */}
        <div
          className={`grid grid-cols-1 overflow-hidden transition-all
        duration-700 gap-5 md:grid-cols-3 md:gap-5 ${
          !isOpen ? "max-h-0" : " max-h-[1000px] p-4"
        } `}
        >
          <div className="grid grid-cols-1">
            <CommonTextInput
              inputType="text"
              name="dependentName"
              label="Name"
              InputFeedBack={(name, value) => {
                DependentsFeedbackHandler(name, value);
              }}
            />
          </div>
          <div className="grid grid-cols-1">
            <CommonTextInput
              inputType="number"
              label="Age"
              name="dependentAge"
              InputFeedBack={(name, value) => {
                DependentsFeedbackHandler(name, value);
              }}
            />
          </div>
          <div className="grid grid-cols-1">
            <DropdownInput
              label="Relationship"
              dropDownData={Relationship}
              name="dependentRelationship"
              DropDownFeedBack={(name, value) => {
                DependentsFeedbackHandler(name, value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Dependents;
