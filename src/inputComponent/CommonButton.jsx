import React from "react";

function CommonButton({ text, ButtonFeedBack }) {
  const buttonClickHandler = (e) => {
    ButtonFeedBack("clicked");
  };
  return (
    <div>
      <button
        type="submit"
        className="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={buttonClickHandler}
      >
        {text}
      </button>
    </div>
  );
}

export default CommonButton;
