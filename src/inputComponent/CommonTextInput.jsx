import { useState } from "react";

function CommonTextInput({
  label,
  name,
  InputFeedBack,
  value,
  ErrorMessage,
  id,
  errorMessageObj,
  inputType,
  hidden,
  required,
}) {
  const [hasValue, setHasValue] = useState("");
  const inputHandler = (event) => {
    setHasValue(event.target.value);
    InputFeedBack(event.target.name, event.target.value);
    // InputFeedBack(event.target.value);
  };

  return (
    <>
      <div className="">
        <div className="relative my-3 w-full text-onSurface">
          <input
            id={label}
            name={name}
            required
            type={inputType}
            className={`peer w-full rounded bg-surface transition-colors focus:border-primary ${
              errorMessageObj !== null
                ? id === errorMessageObj?.key
                  ? ""
                  : " "
                : "border-red-600"
            } ${hidden !== null ? hidden : ""}  `}
            onChange={inputHandler}
          />
          <label
            htmlFor={label}
            className={`absolute left-0  mx-3 cursor-text bg-surface px-1  transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary text  ${
              hasValue.length > 0 ? " -top-2 text-xs text-primary" : "top-3"
            }`}
          >
            {label}
            <span className="font-medium text-red-700"> {required} </span>
          </label>
          {ErrorMessage !== null ? (
            <p className={`mt-1  text-xs text-error`}>{ErrorMessage}</p>
          ) : (
            <p
              className={`mt-1 ${
                errorMessageObj !== null ? "" : "hidden "
              }   text-xs text-error`}
            >
              {errorMessageObj.Message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default CommonTextInput;
