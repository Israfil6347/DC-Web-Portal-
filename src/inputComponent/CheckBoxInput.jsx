import React from "react";
import { useState } from "react";

function CheckBoxInput({ name, question, label, InputFeedBack, isCheckOpen }) {
  const [isCheck, setIsCheck] = useState(false);
  const checkHandler = (e) => {
    if (!isCheck) {
      setIsCheck(true);
      InputFeedBack(e.target.name, e.target.checked);
      isCheckOpen(true);
    } else {
      setIsCheck(false);
      InputFeedBack(e.target.name, e.target.checked);
      isCheckOpen(false);
    }
  };

  console.log(isCheck);
  return (
    <div>
      <div
        class="relative my-3 w-full justify-between rounded border p-3 text-onSurface"
        // x-data="{ hasValue: '' }"
      >
        {question}
        <input
          id=""
          name={name}
          type="checkbox"
          class="ml-4 h-4 w-4 appearance-none rounded"
          onClick={checkHandler}

          // value=""
        />
        <label for="" class="w-full py-3 px-2 text-sm font-medium">
          {label}
        </label>
      </div>
    </div>
  );
}

export default CheckBoxInput;
