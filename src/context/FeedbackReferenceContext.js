import { createContext, useState } from "react";

const FeedbackReferenceContext = createContext();

export const FeedbackReferenceProvider = ({ children }) => {
  const [addReference, setAddReference] = useState([
    {
      id: 0,

      jobApplicationId: "",
      referenceName: "",
      position: "",
      organizationName: "",
      mailingAddress: "",
      mobileNo: "",
      email: "",
    },
  ]);

  const ReferenceFeedback = (status, value, target) => {
    // computerFeedback(status, value, target);
    console.log(status);

    addReference[value] = { ...addReference[value], [target]: status };
    setAddReference([...addReference]);
  };
  const removeLayoutHandler = (post, index) => {
    const list = [...addReference];
    list.splice(index, 1);
    setAddReference(list);
  };

  const ButtonFeedBackHandler = (input) => {
    setAddReference((p) => {
      return [
        ...p,
        {
          id: 0,
          position: "",
          organizationName: "",
          mailingAddress: "",
          mobileNo: "",
          email: "",
        },
      ];
    });
  };

  console.log(addReference);

  return (
    <FeedbackReferenceContext.Provider
      value={{
        addReference,
        // computerFeedback,
        removeLayoutHandler,
        ButtonFeedBackHandler,
        ReferenceFeedback,
      }}
    >
      {children}
    </FeedbackReferenceContext.Provider>
  );
};

export default FeedbackReferenceContext;
