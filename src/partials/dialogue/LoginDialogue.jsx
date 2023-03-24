import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";
import image from "../../assets/images/logo/logocccul.png";
import Button from "../../inputComponent/Button";
import PasswordInput from "../../inputComponent/PasswordInput";
import TextInput from "../../inputComponent/TextInput";
import Encryption from "../../utils/Encryption";

function LoginDialogue({
  popUpHandler,
  loginIsOpen,
  userInfo,
  isSuccess,
  isLoading,
}) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageObj, setErrorMessageObj] = useState([]);
  const [errorMessageObjPass, setErrorMessageObjPass] = useState([]);
  const [clearValue, setClearValue] = useState("");
  const navigate = useNavigate();

  const displayModalHandler = () => {
    popUpHandler(false);
  };

  const emailHandler = (userName) => {
    setUserName(userName);
  };
  const passwordHandler = (password) => {
    setUserPass(password);
  };
  var encryptObj = new Encryption();
  var userInfoObject;

  const loginHandler = async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    const re = /\S+@\S+\.\S+/;

    if (userName.length === 0) {
      setErrorMessageObj({
        key: "UserName",
        Message: "Input Email Address",
      });
      return;

      // setErrorMessage("Invalid Email ");
    } else {
      setErrorMessageObj({});
    }

    if (re.test(userName)) {
      setErrorMessageObj({});
    } else {
      setErrorMessageObj({
        key: "UserName",
        Message: "Enter Valid Email Address",
      });
      return;
    }

    if (userPass.length === 0) {
      setErrorMessageObjPass({
        key: "UserPass",
        Message: "Enter Password",
      });
      return;
    } else {
      setErrorMessageObjPass({});
    }

    var hashMain = CryptoJS.MD5(userPass);
    const obj = {
      UserName: userName,
      Password: hashMain.toString(),
    };

    var objMain = { Data: encryptObj.getEncryptedData(JSON.stringify(obj)) };
    isLoading(true);

    const response = await fetch(
      "http://27.147.142.178:4541/api/LoginApi/Post_v2",
      {
        method: "POST",
        body: JSON.stringify(objMain),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        localStorage.setItem("token", response.headers.get("token"));
        return response.json();
      })
      .then((data) => {
        if (data.Status === "success") {
          setClearValue("");
          setErrorMessage(null);
          isLoading(false);
          isSuccess(true);
          var obj = JSON.parse(data.Data);
          userInfoObject = {
            userid: obj[0].userid,
            UserName: obj[0].UserName,
            UserPicture: obj[0].UserPicture,
            loginemail: obj[0].loginemail,
            Address: obj[0].Address,
            RegMobile: obj[0].RegMobile,
            RoleId: obj[0].RoleId,
            RoleName: obj[0].RoleName,
          };
          localStorage.setItem("userinfo", JSON.stringify(userInfoObject));

          userInfo(userInfoObject);
          popUpHandler(false);
          navigate("me");
        } else {
          isLoading(false);
          setErrorMessage(data.Message);
        }
      });
  };
  return (
    <>
      <section
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-95 p-4 text-onSurface transition-all duration-300 ${
          loginIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full overflow-hidden rounded-sm bg-surface py-12 px-6 shadow-sm md:w-3/5 md:px-10 lg:w-2/5 lg:px-20">
          <button
            className="absolute top-5 right-0 w-10 font-semibold "
            onClick={displayModalHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 transition-all duration-300 hover:text-error hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex w-full flex-col items-center text-onSurface">
            <div className="flex w-full flex-col items-center hover:cursor-pointer hover:animate-swing">
              <img src={image} alt="" />
              <h2 className="text-center text-2xl font-extrabold uppercase">
                Member Login
              </h2>
              <h3 className="text-center text-sm">Login to your account</h3>
            </div>
            <form className="w-full" onSubmit={loginHandler}>
              <TextInput
                label="Email"
                userName={emailHandler}
                ErrorMessage={errorMessage}
                errorMessageObj={errorMessageObj}
                id="UserName"
              ></TextInput>
              <PasswordInput
                clearValue={clearValue}
                password={passwordHandler}
                ErrorMessage={errorMessage}
                id="UserPass"
                errorMessageObjPass={errorMessageObjPass}
              ></PasswordInput>
              <Button></Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginDialogue;
