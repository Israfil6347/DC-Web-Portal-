import Moment from "react-moment";
import { currencyFormat } from "../../utils/TextFormatter";

function AccountDetailsDialogue({
  popUpHandler,
  IsOpen,
  userInfo,
  isSuccess,
  isLoading,
  accDetails,
}) {
  const closingDialogueHandler = () => {
    popUpHandler({}, false);
  };

  var paidDate;

  if (
    accDetails.AccountTypeCode === 30 ||
    accDetails.AccountTypeCode === 15 ||
    accDetails.AccountTypeCode === 18 ||
    accDetails.AccountTypeCode === 22
  ) {
    paidDate = "Sanction Date";
  } else {
    paidDate = "Last Deposit Date";
  }

  return (
    <>
      <div
        className={`duration-400 fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-90 p-4 text-onSurface transition-all  duration-300 ${
          IsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="m-auto w-full overflow-hidden rounded-sm bg-surface shadow-sm md:w-[450px]">
          <div className="header flex items-center justify-center border-b p-4 text-2xl font-bold text-onSurface">
            <p className="ml-2 antialiased">{accDetails.AccountTypeName}</p>
          </div>
          <div className="content p-4">
            <ul className="divide-y overflow-hidden text-justify">
              <li className="flex items-center p-2 hover:bg-backgroundVariant">
                <div className="w-3/5 font-bold"> Account Number</div>
                <div className="w-2/5">{accDetails.AccountNo}</div>
              </li>
              <li className="flex items-center p-2 hover:bg-backgroundVariant">
                <div className="w-3/5 font-bold">Balance</div>
                <div className="w-2/5">
                  {currencyFormat(accDetails.Balance)}
                </div>
              </li>
              {accDetails.AccountTypeCode === 16 ? (
                <li className="flex items-center p-2 hover:bg-backgroundVariant">
                  <div className="w-3/5 font-bold">Withdrawable Balance</div>
                  <div className="w-2/5">
                    {currencyFormat(accDetails.WithdrawableBalance)}
                  </div>
                </li>
              ) : (
                ""
              )}

              {accDetails.AccountNominee == "" ? (
                ""
              ) : (
                <li className="flex items-center p-2 hover:bg-backgroundVariant">
                  <div className="w-3/5 font-bold">Nominee</div>
                  <div className="w-2/5 flex-wrap">
                    {accDetails.AccountNominee}
                  </div>
                </li>
              )}

              <li className="flex items-center p-2 hover:bg-backgroundVariant">
                <div className="w-3/5 font-bold">{paidDate}</div>
                <div className="w-2/5">
                  <Moment format="YYYY-MMM-DD">
                    {accDetails.LastPaidDate}
                  </Moment>
                </div>
              </li>

              {accDetails.MaturityDate == null ? (
                ""
              ) : (
                <li className="flex items-center p-2 hover:bg-backgroundVariant">
                  <div className="w-3/5 font-bold">Maturity Date</div>
                  <div className="w-2/5">
                    <Moment format="YYYY-MMM-DD">
                      {accDetails.MaturityDate}
                    </Moment>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <button
              className="w-24 rounded-sm border bg-primary py-1 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              onClick={closingDialogueHandler}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetailsDialogue;
