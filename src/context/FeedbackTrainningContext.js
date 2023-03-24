import { createContext, useState } from "react";

const FeedbackTrainingContext = createContext();

export const FeedbackTrainingProvider = ({ children }) => {
  const [addTraining, setAddTraining] = useState([
    {
      id: 0,
      trainingTitle: "",
      trainingDetails: "",
      instituteName: "",
      durationFrom: "",
      durationTo: "",
      validityDate: "",
    },
  ]);

  const TrainingFeedback = (status, value, target) => {
    // computerFeedback(status, value, target);
    console.log(status);

    addTraining[value] = { ...addTraining[value], [target]: status };
    setAddTraining([...addTraining]);
  };
  const removeLayoutHandler = (post, index) => {
    const list = [...addTraining];
    list.splice(index, 1);
    setAddTraining(list);
  };

  const ButtonFeedBackHandler = (input) => {
    setAddTraining((p) => {
      return [
        ...p,
        {
          id: 0,
          trainingTitle: "",
          trainingDetails: "",
          instituteName: "",
          durationFrom: "",
          durationTo: "",
          validityDate: "",
        },
      ];
    });
  };

  console.log(addTraining);

  return (
    <FeedbackTrainingContext.Provider
      value={{
        addTraining,
        // computerFeedback,
        removeLayoutHandler,
        ButtonFeedBackHandler,
        TrainingFeedback,
      }}
    >
      {children}
    </FeedbackTrainingContext.Provider>
  );
};

export default FeedbackTrainingContext;
