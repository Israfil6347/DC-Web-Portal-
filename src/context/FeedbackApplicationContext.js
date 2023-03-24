import { createContext, useState } from "react";

const FeedbackApplicationContext = createContext();

export const FeedbackApplicationProvider = ({ children }) => {
  const [appData, setApplicationData] = useState({
    application: {
      jobCircularId: "",
      employmentStatus: "",
      noticePeriod: "",
      expectedSalary: "",
      coverLetter: "",
      declareIfInformationAreCorrect: false,
      attachedResume: "",
    },
    personal: {
      photo: "",
      fullName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      nationalIDNumber: "",
      eTinNumber: "",
      passportNumber: "",
      gender: "",
      bloodGroup: "",
      religion: "",
      maritalStatus: "",
      nationality: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactRelation: "",
      spouse: "",
      presentHouse: "",
      presentDivision: "",
      presentDistrict: "",
      presentPoliceStation: "",
      presentVillage: "",
      permanentHouse: "",
      permanentDivision: "",
      permanentDistrict: "",
      permanentPoliceStation: "",
      permanentVillage: "",
      ContactWork: "",
      contactHome: "",
      contactCellphone: "",
      contactEmailOfficial: "",
      contactEmailPersonal: "",
    },
    dependents: {
      dependent: false,
      dependentName: "",
      dependentAge: "",
      dependentRelationship: "",
    },
    educational: {
      degree: "",
      group: "",
      eduction: "",
      passingYear: "",
      result: "",
      resultOutOf: "",
      institute: "",
    },
    trainings: [{}],
    computer: [{}],
    otherInfo: {
      otherSkills: "",
      interests: "",
      voluntaredOrganizations: "",
      willingToJoinAnyDeptartmentOrServiceCenter: false,
      willingToTransferAnyDeptartmentOrServiceCenter: false,
      willingToTravelAnyWhere: false,
      memberOfDhakaCredit: false,
      dhakaCreditRelativeEmployeeName: "",
      dhakaCreditRelativeEmployeePosition: "",
      dhakaCreditRelativeEmployeeRelationship: "",
      dhakaCreditRelativeEmployeeContactNo: "",
      previouslyCalledForPosition: "",
      previouslyCalledForApplicationDate: "",
      anyObjectionForMakingInquiriesOfYou: false,
      haveAnyPhysicalOrMentalDisabilities: false,
      DisabilityDetails: "",
      everConvictedCrime: false,
      details: "",
    },
  });

  const applicationFeedbackHandler = (name, value) => {
    setApplicationData((prevState) => {
      return {
        ...prevState,
        application: { ...prevState.application, [name]: value },
      };
    });
  };
  const PersonFeedbackHandler = (name, value) => {
    setApplicationData((prevState) => {
      return {
        ...prevState,
        personal: { ...prevState.personal, [name]: value },
      };
    });
  };

  const otherFeedbackHandler = (name, value) => {
    setApplicationData((prevState) => {
      return {
        ...prevState,
        otherInfo: { ...prevState.otherInfo, [name]: value },
      };
    });
  };
  const DependentsFeedbackHandler = (name, value) => {
    setApplicationData((prevState) => {
      return {
        ...prevState,
        dependents: { ...prevState.dependents, [name]: value },
      };
    });
  };

  console.log(appData);
  //  const crimeDetails(appData.otherInfo.everConvictedCrime);

  return (
    <FeedbackApplicationContext.Provider
      value={{
        appData,
        applicationFeedbackHandler,
        PersonFeedbackHandler,
        otherFeedbackHandler,
        DependentsFeedbackHandler,
      }}
    >
      {children}
    </FeedbackApplicationContext.Provider>
  );
};

export default FeedbackApplicationContext;
