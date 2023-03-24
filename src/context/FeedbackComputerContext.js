import { createContext, useState } from "react";

const FeedbackComputerContext = createContext();

export const FeedbackComputerProvider = ({ children }) => {
  const [addForm, setaddForm] = useState([
    { id: 0, selectSkill: "", selectProficiency: "" },
  ]);

  const computerFeedback = (status, value, target) => {
    // computerFeedback(status, value, target);

    addForm[value] = { ...addForm[value], [target]: status };
    setaddForm([...addForm]);

    console.log(target);
  };

  const removeLayoutHandler = (post, index) => {
    const list = [...addForm];
    list.splice(index, 1);
    setaddForm(list);
  };

  const ButtonFeedBackHandler = (status) => {
    setaddForm((p) => {
      return [...p, { id: "", selectSkill: "", selectProficiency: "" }];
    });
  };

  console.log(addForm);

  return (
    <FeedbackComputerContext.Provider
      value={{
        addForm,
        computerFeedback,
        removeLayoutHandler,
        ButtonFeedBackHandler,
      }}
    >
      {children}
    </FeedbackComputerContext.Provider>
  );
};

export default FeedbackComputerContext;
