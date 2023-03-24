import { motion } from "framer-motion";
import { useEffect } from "react";

function DoubleLoanFDR() {
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
              <h2 className="mb-2 p-1 text-2xl lg:text-3xl font-bold text-onSurface">
                Double Loan on Fixed Deposit
              </h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                In the current economic situation, it is almost impossible to
                get sufficient surety for any loan. Due to this situation
                members are unable to secure new loans from Dhaka Credit. Hence,
                Dhaka Credit has launched a new product “Double Loan on Fixed
                Deposit” which is targeting members who have sufficient Fixed
                Deposit but are unable to secure surety for loan.
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Requirements
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    The loan applicant must pay the first loan and then He/ She
                    will eligible to get the loan within at least 6 months of
                    regular payment.
                  </li>
                  <li className="mt-2">
                    5% of the Loan must be available in Share/ Savings/ HDS.
                  </li>

                  <li className="mt-2">
                    This loan can be applied while having a General Loan or even
                    when the surety is default. Additional 5% of
                    Shares/Savings/HDS deposits must be used against this loan
                    should be Shares/Savings/HDS.
                  </li>
                </ol>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Rules & Regulations
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    You have to apply for this loan through the prescribed
                    application form of the Union.
                  </li>
                  <li className="mt-2">
                    In case of loans against deposits of minors, only if the
                    account operator is a regular member of the credit union,
                    the loan will be given in the name of the account operator.
                  </li>
                  <li className="mt-2">
                    This loan will be sanctioned as double against the deposit
                    maintained by the member in Dhaka Credit, which shall not
                    exceed Tk. 35,00,000.00/- (35 Lac).
                  </li>
                  <li className="mt-2">
                    The loan is repayable in 36/60/72/96/120 installments.
                  </li>
                  <li className="mt-2">Yearly Interest rate is @ 12%.</li>
                  <li className="mt-2">Rebate will be paid on this loan.</li>
                  <li className="mt-2">
                    Subject to repayment/settlement of this loan, refinance can
                    be taken.
                  </li>
                </ol>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Loan Surety
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    3 MICR cheque in applicant’s own name should be given as
                    surety.
                  </li>
                  <li className="mt-2">
                    Affidavit of one earning member of the family (husband-wife,
                    son-daughter) has to give an undertaking on non-judicial
                    stamp paper. If there is no earning member in the family,
                    the applicant has to give an undertaking on non-judicial
                    stamp paper. In case of retirees, his dependent has to give
                    undertaking on non-judicial stamp paper.
                  </li>
                </ol>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Loan Repayment
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    Payment of Loan interest and installments are calculated on
                    a daily basis from the date of disbursement of the loan.
                  </li>
                  <li className="mt-2">
                    In case of failure to repay the loan, fines and other
                    expenses will be collected as per the prevailing rules of
                    Dhaka Credit.
                  </li>
                  <li className="mt-2">
                    If the loan is defaulted for more than 3 months, it will be
                    reconciled with the deposit (as per the deposit Encashment
                    policy) and necessary action will be taken as per the loan
                    recovery policy by the decision of the Board.
                  </li>
                </ol>
                <p className="mt-5">
                  Any change/s or addition/s to this loan policy made by the
                  Board of Directors of Dhaka Credit Union are subject to the
                  jurisdiction of the Board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default DoubleLoanFDR;
