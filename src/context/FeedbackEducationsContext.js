import { createContext, useState } from "react";

const FeedbackEducationsContext = createContext();

export const FeedbackEducationProvider = ({ children }) => {
  const [addEducation, setAddEducation] = useState([
    {
      id: 0,
      nameOfDegree: "",
      instituteName: "",
      major: "",
      eductionBoard: "",
      result: "",
      resultOutOf: "",
      passingYear: "",
    },
  ]);

  const EducationFeedback = (status, value, target) => {
    // computerFeedback(status, value, target);
    console.log(status);

    addEducation[value] = { ...addEducation[value], [target]: status };
    setAddEducation([...addEducation]);
    console.log(addEducation);
  };
  const removeLayoutHandler = (post, index) => {
    const list = [...addEducation];
    list.splice(index, 1);
    setAddEducation(list);
  };

  const ButtonFeedBackHandler = (input) => {
    setAddEducation((p) => {
      return [
        ...p,
        {
          id: 0,
          nameOfDegree: "",
          instituteName: "",
          major: "",
          eductionBoard: "",
          result: "",
          resultOutOf: "",
          passingYear: "",
        },
      ];
    });
  };

  console.log(addEducation);

  return (
    <FeedbackEducationsContext.Provider
      value={{
        addEducation,
        // computerFeedback,
        removeLayoutHandler,
        ButtonFeedBackHandler,
        EducationFeedback,
      }}
    >
      {children}
    </FeedbackEducationsContext.Provider>
  );
};

export default FeedbackEducationsContext;
