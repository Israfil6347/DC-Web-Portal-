import CheckBoxInput from "inputComponent/CheckBoxInput";
import CommonTextInput from "inputComponent/CommonTextInput";
import TextArea from "inputComponent/Textarea";
import React from "react";
import FeedbackApplicationContext from "context/FeedbackApplicationContext";
import { useState, useEffect, useContext } from "react";

function OtherInformation({ crimeInfoStatusFeedbackHandler, crimeDetails }) {
  const { otherFeedbackHandler } = useContext(FeedbackApplicationContext);

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (status) => {
    setIsOpen(status);
  };
  console.log(isOpen);

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className="grid grid-cols-1">
            <label
              for="exampleFormControlTextarea1"
              className="text-light text-xs uppercase text-onSurface md:text-sm"
            >
              Skills
            </label>
            <TextArea
              name="otherSkills"
              InputFeedBack={(name, value) => {
                otherFeedbackHandler(name, value);
              }}
            />
          </div>
          <div className="grid grid-cols-1">
            <label
              for="exampleFormControlTextarea1"
              className="text-light text-xs uppercase text-onSurface md:text-sm"
            >
              Interests
            </label>
            <TextArea
              name="interests"
              InputFeedBack={(name, value) => {
                otherFeedbackHandler(name, value);
              }}
            />
          </div>
          <div className="grid grid-cols-1">
            <label
              for="exampleFormControlTextarea1"
              className="text-light text-xs uppercase text-onSurface md:text-sm"
            >
              List of volunteer Organizations
            </label>
            <TextArea
              name="voluntaredOrganizations"
              InputFeedBack={(name, value) => {
                otherFeedbackHandler(name, value);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question="Are you willing to join any Department/Service Center/Project/Strategic Location of the CCCUL?"
            label="Yes/no"
            name="willingToJoinAnyDeptartmentOrServiceCenter"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            name="willingToTransferAnyDeptartmentOrServiceCenter"
            question="Are you willing to accept transfer to any of the Service Centers/Projects of Dhaka Credit?"
            label="Yes/no"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question="Are you physically fit for extensive travel (if required) at any location? "
            label="Yes/no"
            name="willingToTravelAnyWhere"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question="Are you a member of Dhaka Credit?"
            label="Yes/no"
            name="memberOfDhakaCredit"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>

        <div
          className="relative my-3 w-full justify-between rounded border p-3 text-onSurface"
          x-data="{ hasValue: '' }"
        >
          Do you have any relative working at the CCCUL? If yes, please mention
          below:
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="text"
                name="dhakaCreditRelativeEmployeeName"
                label="Name"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="text"
                name="dhakaCreditRelativeEmployeePosition"
                label="Designation/Position"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="text"
                name="dhakaCreditRelativeEmployeeRelationship"
                label="Relationship"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="number"
                name="dhakaCreditRelativeEmployeeContactNo"
                label="Contact Number"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="relative my-3 w-full justify-between rounded border p-3 text-onSurface"
          x-data="{ hasValue: '' }"
        >
          Have you received any call for other position(s) in the CCCUL during
          last 3-5 years? If yes, please mention below:
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="text"
                name="previouslyCalledForPosition"
                label="Name of the Position"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
            <div className="grid grid-cols-1">
              <CommonTextInput
                inputType="date"
                name="previouslyCalledForApplicationDate"
                label="Date of Application"
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question="Have you any objections to our making inquiries of your present employer?"
            label="Yes/no"
            name="anyObjectionForMakingInquiriesOfYou"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CheckBoxInput
            question="Do you have any physical or mental disabilities which might limit the performance of your work?"
            label="Yes/no"
            name="haveAnyPhysicalOrMentalDisabilities"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>

        <div x-data="{ open: false }">
          <div className="grid grid-cols-1">
            <div className="border border-dashed p-2">
              <CheckBoxInput
                question="Have you ever been convicted of a crime? (If answer is “Yes”
              please mention details)?"
                label="Yes/no"
                name="everConvictedCrime"
                isCheckOpen={openHandler}
                InputFeedBack={(name, value) => {
                  otherFeedbackHandler(name, value);
                  // isCheckOpen(name, value);
                }}
              />
              <div
                className={`ease overflow-hidden text-justify font-medium transition-all duration-700 ${
                  !isOpen ? "max-h-0" : " max-h-[1000px] p-4"
                } `}
              >
                <div className="my-3">
                  <TextArea
                    name="details"
                    InputFeedBack={(name, value) => {
                      otherFeedbackHandler(name, value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <label for="exampleFormControlTextarea1" className="text-md">
            Describe below how you fit into this position (max 100 words, please
            refer specifically to the Job Requirements)
          </label>
          <TextArea
            name="DisabilityDetails"
            InputFeedBack={(name, value) => {
              otherFeedbackHandler(name, value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherInformation;
