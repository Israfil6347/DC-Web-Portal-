import { createContext, useState } from "react";

const FeedbackEmployContext = createContext();

export const FeedbackEmployProvider = ({ children }) => {
  const [addEmployeeJobHistory, setAddForm] = useState([
    {
      id: 0,
      organizationName: "",
      organizationAddress: "",
      position: "",
      durationFrom: "",
      durationTo: "",
      responsibilities: "",
      reasonForLeaving: "",
      NoOfEmployeeSupervisedByYou: 0,
      salary: "",
    },
  ]);

  const EmploymentFeedbackHandler = (status, value, target) => {
    // computerFeedback(input, index, inputFieldName);

    addEmployeeJobHistory[value] = {
      ...addEmployeeJobHistory[value],
      [target]: status,
    };
    setAddForm([...addEmployeeJobHistory]);
  };

  const removeLayoutHandler = (post, index) => {
    const list = [...addEmployeeJobHistory];
    list.splice(index, 1);
    setAddForm(list);
  };

  const ButtonFeedBackHandler = (input) => {
    setAddForm((p) => {
      return [
        ...p,
        {
          id: "",
          organizationName: "",
          organizationAddress: "",
          position: "",
          durationFrom: "",
          durationTo: "",
          responsibilities: "",
          reasonForLeaving: "",
          NoOfEmployeeSupervisedByYou: 0,
          salary: "",
        },
      ];
    });
  };

  console.log(addEmployeeJobHistory);

  return (
    <FeedbackEmployContext.Provider
      value={{
        addEmployeeJobHistory,
        EmploymentFeedbackHandler,
        removeLayoutHandler,
        ButtonFeedBackHandler,
      }}
    >
      {children}
    </FeedbackEmployContext.Provider>
  );
};

export default FeedbackEmployContext;
