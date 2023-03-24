import React from "react";
import { useState, useEffect, useContext } from "react";
import CommonTextInput from "inputComponent/CommonTextInput";
import DropdownInput from "inputComponent/DropdownInput";
import FeedbackApplicationContext from "context/FeedbackApplicationContext";
const data = [
  { id: 0, value: "", label: "Select data" },
  { id: 0, label: "RED", value: "RED" },
  { id: 1, label: "GREEN", value: "GREEN" },
  { id: 2, label: "YELLOW", value: "YELLOW" },
];
const gender = [
  {
    id: 0,
    value: "",
    label: "Select gender",
  },
  {
    id: 1,
    value: "M",
    label: "Male",
  },
  {
    id: 2,
    value: "F",
    label: "Female",
  },
  {
    id: 3,
    value: "O",
    label: "Others",
  },
];
const bloodGroup = [
  {
    id: 0,
    value: "",
    label: "Select Bloodgroup",
  },
  {
    id: 1,
    value: 1,
    label: "A (+)",
  },
  {
    id: 2,
    value: 2,
    label: "A (-)",
  },
  {
    id: 3,
    value: 3,
    label: "AB (+)",
  },
  {
    id: 4,
    value: 4,
    label: "AB (-)",
  },
  {
    id: 5,
    value: 5,
    label: "B (+)",
  },
  {
    id: 6,
    value: 6,
    label: "B (-)",
  },
  {
    id: 7,
    value: 7,
    label: "O (+)",
  },
  {
    id: 8,
    value: 8,
    label: "O (-)",
  },
  {
    id: 9,
    value: 9,
    label: "Unknown",
  },
];
const Relationship = [
  { id: 0, value: "", label: "Select Relationship" },
  { id: 1, value: "Father", label: "Father" },
  { id: 2, value: "Mother", label: "Mother" },
  { id: 3, value: "Sister", label: "Sister" },
  { id: 4, value: "Brother", label: "Brother" },
];

const MaritalStatus = [
  {
    id: 0,
    value: "",
    label: "Select MaritalStatus",
  },
  {
    id: 1,
    value: "M",
    label: "Married",
  },
  {
    id: 2,
    value: "U",
    label: "Single",
  },
];
function Personal() {
  const { PersonFeedbackHandler } = useContext(FeedbackApplicationContext);
  return (
    <div>
    <div className="text-onSurface">
    <div class="grid grid-cols-1 gap-3 md:grid-flow-col md:grid-cols-4 md:gap-8">
    <div class="grid-cols-1 md:col-span-2 md:row-span-3">
    <label class="text-light mb-1 text-xs uppercase text-gray-500 md:text-sm">
    Applicant Photo
    </label>
    <div class="flex w-full items-center justify-center">
    <label class="group flex h-32 w-full flex-col border-4 border-dashed hover:border-primary hover:bg-gray-100">
    <div class="flex flex-col items-center justify-center pt-7">
    <svg
    class="h-10 w-10 text-primary group-hover:text-primaryVariant"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
    </svg>
    <p class="pt-1 text-sm lowercase tracking-wider text-gray-400 group-hover:text-primary">
    Select a photo
    </p>
    </div>
    <CommonTextInput
    inputType="file"
    name="photo"
    hidden="hidden"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </label>
    </div>
    </div>
    <div class="grid-cols-1 md:col-span-2">
    <CommonTextInput
    inputType="text"
    name="fullName"
    label="Full Name"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div class="-mt-5 grid-cols-1 md:col-span-2 md:row-span-2">
    <CommonTextInput
    inputType="text"
    name="fatherName"
    label="Father's Name"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="motherName"
    label="Mother's Name"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="date"
    name="dateOfBirth"
    label="Date of Birth"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="number"
    name="nationalIDNumber"
    label="National ID Number"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="number"
    name="eTinNumber"
    label="E-Tin Number"
    InputFeedBack={(name, value, index) => {
      PersonFeedbackHandler(name, value, index);
    }}
    />
    </div>
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="number"
    name="passportNumber"
    label="Passport Number"
    InputFeedBack={(name, value, index) => {
      PersonFeedbackHandler(name, value, index);
    }}
    />
    </div>
    <div className="grid grid-cols-1">
    {" "}
    <DropdownInput
    label="Select Nationality"
    name="nationality"
    dropDownData={data}
    DropDownFeedBack={(name, value, index) => {
      PersonFeedbackHandler(name, value, index);
    }}
    required="*"
    />
    </div>
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    {" "}
    <DropdownInput
    label="Gender"
    name="gender"
    dropDownData={gender}
    DropDownFeedBack={(name, value, index) => {
      PersonFeedbackHandler(name, value, index);
    }}
    required="*"
    />
    </div>
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Blood Group"
    name="bloodGroup"
    dropDownData={bloodGroup}
    DropDownFeedBack={(name, value, index) => {
      PersonFeedbackHandler(name, value, index);
    }}
    required="*"
    />
    </div>
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    {" "}
    <DropdownInput
    label="Select Religion"
    name="religion"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div className="grid grid-cols-1">
    {" "}
    <DropdownInput
    label="Select Marital Status"
    name="maritalStatus"
    dropDownData={MaritalStatus}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="spouse"
    label="Spouse’s Name (if married)"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    <div class="my-10">
    <h6 class="text-light text-xs font-semibold uppercase md:text-sm">
    Emergency Contact
    </h6>
    <div class="w-full rounded-lg border border-dashed p-2 text-onSurface">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="emergencyContactName"
    label="Name"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div class="grid grid-cols-1">
    <CommonTextInput
    inputType="number"
    name="emergencyContactNumber"
    label="Number"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
    <div class="grid grid-cols-1">
    <DropdownInput
    label="Select Relation"
    name="emergencyContactRelation"
    dropDownData={Relationship}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    </div>
    </div>
    
    <div className="present-address my-10">
    <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
    Present Address
    </h6>
    <div className="border border-dashed p-2">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="presentHouse"
    label="House/Road/Block"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Division"
    name="presentDivision"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select District"
    name="presentDistrict"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Police Station"
    name="presentPoliceStation"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Village"
    name="presentVillage"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    </div>
    </div>
    
    <div className="permanent-address my-10">
    <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
    Permanent Address
    </h6>
    <div className="border border-dashed p-2">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="permanentHouse"
    label="House/Road/Block"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Division"
    name="permanentDivision"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select District"
    name="permanentDistrict"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Police Station"
    name="permanentPoliceStation"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    <div className="grid grid-cols-1">
    <DropdownInput
    label="Select Village"
    name="permanentVillage"
    dropDownData={data}
    DropDownFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    />
    </div>
    </div>
    </div>
    </div>
    <div className="contact my-10">
    <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
    Contact
    </h6>
    <div className="border border-dashed p-2">
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="ContactWork"
    label="Work"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    // InputFeedBack={ContactWorkHandler}
    />
    </div>
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="contactHome"
    label="Home"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="contactCellphone"
    label="Cellphone"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    </div>
    </div>
    <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
    Email
    </h6>
    <div className="border border-dashed p-2">
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="contactEmailOfficial"
    label="Email (Official)"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    <div className="grid grid-cols-1">
    <CommonTextInput
    inputType="text"
    name="contactEmailPersonal"
    label="Email (Personal)"
    id="email2"
    InputFeedBack={(name, value) => {
      PersonFeedbackHandler(name, value);
    }}
    required="*"
    />
    </div>
    </div>
    </div>
    </div>
    </div>
    );
  }
  
  export default Personal;
  