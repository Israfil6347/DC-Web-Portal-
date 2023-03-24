import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function PasswordInput({
  password,
  ErrorMessage,
  id,
  errorMessageObjPass,
  clearValue,
}) {
  const [hasValue, setHasValue] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setHasValue("");
  }, [location, id]);

  const inputHandler = (event) => {
    setHasValue(event.target.value);
  };
  password(hasValue);

  const checkBoxHandler = () => {
    if (checkBox) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  };

  return (
    <>
      <div className="relative my-3 w-full text-onSurface">
        <div className="">
          <input
            className={`peer w-full rounded bg-surface transition-colors focus:border-primary ${
              errorMessageObjPass !== null
                ? id === errorMessageObjPass.key
                  ? "border-red-600"
                  : " "
                : ""
            }  `}
            // value={hasValue}
            value={hasValue}
            id="password"
            type={checkBox ? "text" : "password"}
            onChange={inputHandler}
          />
          <label
            className={`absolute left-0  mx-3 cursor-text bg-surface px-1 text-sm transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary  ${
              hasValue.length > 0 ? " -top-2 text-xs text-primary" : "top-3"
            }`}
            htmlFor="password"
          >
            Password
          </label>

          {ErrorMessage !== null ? (
            <p className={`mt-1  text-xs text-error`}>{ErrorMessage}</p>
          ) : (
            <p
              className={`mt-1 ${
                errorMessageObjPass !== null ? "" : "hidden"
              }   text-xs text-error`}
            >
              {errorMessageObjPass.Message}
            </p>
          )}
        </div>
        <div className="mb-6 mt-2 flex items-center justify-between">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              id="exampleCheck2"
              onClick={checkBoxHandler}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck2"
            >
              Show password
            </label>
          </div>
          {/* <a
                        href="#!"
                        className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
                        >
                     Forget
                     Password?
                     </Navlink> */}
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
