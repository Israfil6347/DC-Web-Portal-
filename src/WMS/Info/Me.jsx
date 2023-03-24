import { motion } from "framer-motion";
import { useEffect } from "react";
import TestContext from "../../store/test-context";

function Me() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <>
            <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
              <motion.div
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, width: 100 }}
              >
                <div className="animate-slideInUp">
                  <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="mb-10 flex w-48 flex-col items-center justify-center overflow-hidden rounded-full shadow-md md:mb-0 md:w-56 md:rounded-md">
                      <img
                        className="overflow-hidden rounded-full p-2 md:rounded-md"
                        src={`data:image/png;base64,${!!ctx.userInfo?ctx.userInfo.UserPicture:""}`}
                        alt="user"
                      />
                    </div>
                    <div className="w-full justify-center divide-y text-left md:ml-4 md:divide-y-0">
                      <h5 className="mb-5 flex justify-start text-center text-xl font-bold uppercase md:text-2xl lg:mb-2 lg:text-3xl">
                 
                        {!!ctx.userInfo?ctx.userInfo.UserName:""}
                      </h5>

                      <div className="flex justify-start py-1">
                        <div className="w-1/3 font-semibold">Email</div>
                        <div className="w-2/3 font-normal">
                       
                          {!!ctx.userInfo?ctx.userInfo.loginemail:""}
                        </div>
                      </div>
                      <div className="flex justify-start py-1">
                        <div className="w-1/3 font-semibold">Phone Number</div>
                        <div className="w-2/3 font-normal">
                      
                          {!!ctx.userInfo?ctx.userInfo.RegMobile:""}
                        </div>
                      </div>

                      <div className="flex justify-start py-1">
                        <div className="w-1/3 font-semibold">
                          Present Address
                        </div>
                        <div className="w-2/3 font-normal">
                         
                          {!!ctx.userInfo?ctx.userInfo.Address:""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        );
      }}
    </TestContext.Consumer>
  );
}

export default Me;
