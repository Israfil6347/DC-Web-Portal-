function InputText() {
  const inputHandler = (value) => {};

  return (
    <div>
      <div className="relative my-3 w-full text-onSurface">
        <input
          id=""
          type=""
          value=""
          className="peer w-full rounded bg-surface transition-colors focus:border-primary"
          onClick={() => {
            inputHandler({ value: "input.length" });
          }}
        />
        <label
          htmlFor=""
          className={`absolute left-0 top-3 mx-3 cursor-text bg-surface px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary`}
        ></label>
        <p
          className="mt-1 hidden text-xs text-error"
          x-text="hasValue.length"
        ></p>
      </div>
    </div>
  );
}

export default InputText;
