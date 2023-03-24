import { useState } from "react";

const data = [
  { id: 0, label: "RED" },
  { id: 1, label: "GREEN" },
  { id: 2, label: "YELLOW" },
];
function DropdownInput({
  name,
  label,
  dropDownData,
  DropDownFeedBack,
  required,
  defaultValue,
}) {
  const [selected, isSelected] = useState(false);

  const selectionDownHandler = (e) => {
    console.log("clicked");
    isSelected(true);
    DropDownFeedBack(e.target.name, e.target.value);
  };

  return (
    <>
      <div
        className="relative my-3 w-full text-onSurface"
        // x-data="{ selected: false, options: ['Red', 'Orange', 'Yellow'] }"
      >
        <select
          id={label}
          // @change="selected = true"
          name={name}
          className="peer w-full rounded bg-surface transition-colors focus:border-primary"
          onChange={selectionDownHandler}
        >
          {dropDownData.map((item) => (
            <option key={item.id} value={item.value}>
              {" "}
              {item.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={label}
          
          className={`absolute left-0 top-3 mx-3 cursor-text bg-surface  
          px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:bg-surface peer-focus:text-xs peer-focus:text-primary
          ${selected ? "-top-[8px] text-xs text-primary" : ""}`}
        >
          {label}
          
          <span className="font-medium text-red-700"> {required} </span>
        </label>
        <div className="">{/* {/ {{ selected }} /} */}</div>
        <p className="mt-1 hidden text-xs text-error">Error text</p>
      </div>
    </>
  );
}

export default DropdownInput;
