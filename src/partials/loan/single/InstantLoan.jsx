import { motion } from "framer-motion";
import { useEffect } from "react";

function InstantLoan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div
      //transition={{ type: "spring", stiffness: 100, damping: 20 }}
      exit={{
        opacity: 0,
        x: -window.innerWidth,
        transition: { duration: 0.3 },
      }}
      initial={{
        opacity: 0,
        x: -window.innerWidth,
        transition: { duration: 0.3 },
      }}
      animate={{ x: 0, opacity: 1 }}
    >
      <section className="">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="animate-slideInUp text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <h2 className="mb-2  p-1 text-2xl lg:text-3xl font-bold text-onSurface">
                Instant Loan
              </h2>
              <div className="mb-4  p-1 text-justify text-onSurface">
                This instant loan policy has been formulated to meet the urgent
                financial needs of the members and to provide instant digital
                services.
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold  ">
                  Purposes
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2 animate-fadeInRight animate-delay-75">
                    Members will be entitled to this loan after 6 months of
                    membership. The share Account should have a minimum of Tk.
                    1000 and 10% of the amount of the loan amount should be
                    deposited in the member’s Savings Account.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-75">
                    The member using Mobile Financial Service (MFS) of Dhaka
                    Credit will be entitled to this loan.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-100">
                    The loan amount is a maximum of Tk. 5000. The limit can be
                    increased to Tk. 10,000 based on at least 2 loans and 6
                    months of regular transactions with upto Maximum of Tk.
                    25,000.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-100">
                    Monthly interest rate is @ 1.25%.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-100">
                    Loan Repayment: 90 days (3 Months) or 180 (6 Months).
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-200">
                    Failure to repay the Loan within (90 Days) 3 Months or 180
                    (6 Months) will result in fine @ 25% interest rate.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-200">
                    The loan can be availed again based on the repayment of the
                    loan.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-200">
                    The approved loan can be availed through transfer as
                    ATM/Savings/Bkash(Coming Soon).
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-300">
                    You can repay the outstanding installment/Loan by paying
                    cash at any service center of Dhaka Credit. In addition,
                    Bank, Bkash and MFS in Dhaka Credit (APPS) can be used to
                    repay the outstanding installments/Loan.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-300">
                    Installments can be paid by transferring the Loan amount
                    from Dhaka Credit’s Savings Account/STD Account.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-500">
                    The processing fee for this loan is Tk. 50 (each time) which
                    will be deducted from the approved loan.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-500">
                    If the loan fails to be repaid within scheduled time, the
                    decision of the authority to adjust the loan from the
                    Share/Savings deposit and in this regard the decision will
                    be considered final.
                  </li>
                  <li className="mt-2 animate-fadeInRight animate-delay-700">
                    Actions will be taken to recover the dues as per defaulting
                    loan policy.
                  </li>
                </ol>
                <p className="mt-10">
                  The above policies are in the jurisdiction of the Credit Union
                  and has the right for any future
                  changes/enhancements/additions/subtractions as made by the
                  elected Board of Directors of the Christian Co-operative
                  Credit Union Ltd., Dhaka. The policy was approved at the 27th
                  Joint Meeting of the Board of Directors, Credit and
                  Supervisory Committee held on October 13, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default InstantLoan;
