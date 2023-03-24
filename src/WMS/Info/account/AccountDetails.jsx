function AccountDetails({ key, account, getAccountNo, accountName }) {
  const accountDetailsHandler = (accountNo) => {
    getAccountNo(accountNo);
  };

  return (
    <>
      <li
        className="w-full p-2 sm:w-1/2 md:w-full lg:w-1/2 text-onError"
        onClick={() => {
          accountDetailsHandler(account.AccountNo);
        }}
      >
        <div
          className={`flex h-full items-center ${
            account.IsDefaulter ? "bg-error" : "bg-success"
          }  rounded  p-4 hover:animate-twPulse hover:shadow-sm`}
        >
          <svg
            className="mr-1.5 h-6 w-6 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="title-font font-medium">{accountName}</span>
        </div>
      </li>
    </>
  );
}

export default AccountDetails;
