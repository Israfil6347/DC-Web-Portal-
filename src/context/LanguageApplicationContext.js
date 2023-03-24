import { createContext, useState } from "react";
const LanguageApplicationContext = createContext();
export const LanguageApplicationProvider = ({ children }) => {
  const [addFormLanguageFeedback, setaddFormLanguageFeedback] = useState([
    { id: 0, languageName: "", reading: "", writing: "", Speaking: "" },
  ]);

  const languageFeedbackHandler = (value, name, index) => {
    console.log(name);
    console.log(value);

    addFormLanguageFeedback[index] = {
      ...addFormLanguageFeedback[index],
      [name]: value,
    };
    setaddFormLanguageFeedback([...addFormLanguageFeedback]);
  };

  const removeLayoutHandler = (post, index) => {
    const list = [...addFormLanguageFeedback];
    list.splice(index, 1);
    setaddFormLanguageFeedback(list);
  };

  const ButtonLanguageFeedBackHandler = (status) => {
    setaddFormLanguageFeedback((p) => {
      return [
        ...p,
        { id: 0, languageName: "", reading: "", writing: "", Speaking: "" },
      ];
    });
  };
  return (
    <LanguageApplicationContext.Provider
      value={{
        addFormLanguageFeedback,
        languageFeedbackHandler,
        removeLayoutHandler,
        ButtonLanguageFeedBackHandler,
        // LanguageHandler,
      }}
    >
      {children}
    </LanguageApplicationContext.Provider>
  );
};

export default LanguageApplicationContext;
