import React from "react";

const TestContext = React.createContext({
  userInfo: JSON.parse(localStorage.getItem("userinfo")),
});
console.log(localStorage.getItem("userinfo"));
export default TestContext;
