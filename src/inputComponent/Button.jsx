function Button(props) {
  return (
    <>
      <button
        type="submit"
        className="inline-block w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out active:shadow-lg"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Log in
      </button>
    </>
  );
}

export default Button;
