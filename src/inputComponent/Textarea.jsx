import React from "react";

function TextArea({ label, placeholder, InputFeedBack, name }) {
  const inputHandler = (event) => {
    InputFeedBack(event.target.name, event.target.value);
    // InputFeedBack(event.target.value);
    console.log(event.target.name);
  };

  return (
    <div>
      <div class="">
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="text-light text-xs uppercase md:text-sm"
          >
            {label}
          </label>
          <textarea
            class="mt-1 w-full rounded-lg border py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={placeholder}
            name={name}
            onChange={inputHandler}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
