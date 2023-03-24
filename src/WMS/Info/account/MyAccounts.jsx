import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/UseModal";
import Encryption from "../../../utils/Encryption";
import AccountDetails from "./AccountDetails";

function MyAccounts({ accDetailsPopup, IsLoading, popError }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [accounts, setAccounts] = useState([]);
  var basicInfo = JSON.parse(localStorage.getItem("userinfo"));

  // !!ctx.userInfo?ctx.userInfo.Address:""
var obj = {
    AccountNo: "Not found.",
    ByUserId: !!basicInfo?basicInfo.userid:"",
    DeviceRegId: !!basicInfo?basicInfo.DeviceId:"",
    MobileNumber: !!basicInfo?basicInfo.RegMobile:"",
    RolePermissionId: !!basicInfo?basicInfo.RoleId:"",
    UID: !!basicInfo?basicInfo.userid:"",
    UserName:!!basicInfo?basicInfo.loginemail:"",
  };

  var encryptObj = new Encryption();

  var objMain = { Data: encryptObj.getEncryptedData(JSON.stringify(obj)) };
  const httpData = useHttp();
  const { isLoading, Error, sendRequest: fetchTasks } = httpData;

  IsLoading(isLoading);

  useEffect(() => {
    popError(Error);
  }, [Error]);

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      var AccountInfoObj = [];
      var obj = JSON.parse(tasksObj.Data);
      for (let i = 0; i < obj.length; i++) {
        AccountInfoObj.push({
          AccountNo: obj[i].AccountNo,
          DCAccountNo: obj[i].DCAccountNo,
          AccountId: obj[i].AccountId,
          AccountTypeName: obj[i].AccountTypeName,
          IsDefaulter: obj[i].IsDefaulter,
          ledger_id: obj[i].ledger_id,
        });
      }
      setAccounts(AccountInfoObj);
    };

    fetchTasks(
      {
        url: process.env.React_App_Base_Api + "/MFSApi/GetPersonalAccountsInfo",
        method: "POST",
        body: objMain,
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      },
      transformTasks
    );
  }, []);

  const requestDetails = (detailsObj) => {
    var objMain = {
      Data: encryptObj.getEncryptedData(JSON.stringify(detailsObj)),
    };

    const transformTasks = (tasksObj) => {
      var obj = JSON.parse(tasksObj.Data);
      accDetailsPopup(obj[0]);
    };

    fetchTasks(
      {
        url:
          process.env.React_App_Base_Api + "/MFSApi/GetPersonalAccountsDetails",
        method: "POST",
        body: objMain,
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      },
      transformTasks
    );
  };

  const accountDetailsHandler = (AccountNo) => {


  

    var DetailsObj = {
      AccountNo: AccountNo,
      ByUserId:!!basicInfo?basicInfo.userid:"",
      DeviceRegId:!!basicInfo?basicInfo.DeviceId:"",
      MobileNumber: !!basicInfo?basicInfo.RegMobile:"",
      RolePermissionId:!!basicInfo?basicInfo.RoleId:"",
      UID: !!basicInfo?basicInfo.userid:"",
      UserName: !!basicInfo?basicInfo.loginemail:"",
    };

    requestDetails(DetailsObj);
  };

  return (
    <>
      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, width: 100 }}
        >
          <div className="animate-slideInUp">
            <div>
              <ul className="mb-2 flex flex-wrap">
                {accounts.map((obj, index) => (
                  <AccountDetails
                    key={obj.AccountNo}
                    account={obj}
                    accountName={obj.AccountTypeName}
                    getAccountNo={accountDetailsHandler}
                  ></AccountDetails>
                ))}
              </ul>
            </div>
          </div>
          <div className="duration-400 fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-90 p-4 text-onSurface transition-all -translate-x-full">
            <div className="m-auto w-full overflow-hidden rounded-sm bg-surface shadow-sm md:w-[450px]">
              <div className="header flex items-center justify-center border-b p-4 text-2xl font-bold text-onSurface">
                <p className="ml-2 antialiased">
                  Monthly Share Account8/58/548/58/58/528/5
                </p>
              </div>
              <div className="content p-4">
                <ul className="divide-y overflow-hidden text-justify">
                  <li className="flex items-center p-2 hover:bg-backgroundVariant">
                    <div className="w-3/5 font-bold">Account Number</div>
                    <div className="w-2/5">T-0060567</div>
                  </li>
                  <li className="flex items-center p-2 hover:bg-backgroundVariant">
                    <div className="w-3/5 font-bold">Balance</div>
                    <div className="w-2/5">51357</div>
                  </li>
                  <li className="flex items-center p-2 hover:bg-backgroundVariant">
                    <div className="w-3/5 font-bold">Withdrawable Balance</div>
                    <div className="w-2/5">3000</div>
                  </li>
                  <li className="flex items-center p-2 hover:bg-backgroundVariant">
                    <div className="w-3/5 font-bold">Nominee</div>
                    <div className="w-2/5 flex-wrap">
                      Driste Maria Palma, Lintas Philip Corraya, Driste Maria
                      Palma
                    </div>
                  </li>
                  <li className="flex items-center p-2 hover:bg-backgroundVariant">
                    <div className="w-3/5 font-bold">Last Deposit Date</div>
                    <div className="w-2/5">13-Nov-2022</div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center gap-4 p-4">
                <button className="w-24 rounded-sm border bg-primary py-1 font-semibold uppercase text-onPrimary hover:bg-primaryVariant">
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MyAccounts;
