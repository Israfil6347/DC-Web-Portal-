import { motion } from "framer-motion";
import { useEffect } from "react";

function Entrepreneur() {
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
                Entrepreneur Loan
              </h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                To provide loans to the members of our association through
                training on agro-based projects and self-reliance through
                freelancing. One of the objectives of this Loan is to create
                entrepreneurship and increase investment in the backward
                sections of the society through productive & sustainable work.
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Loan Application Requirements:
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    The Loan applicant must be a regular member of Dhaka Credit.
                  </li>
                  <li className="mt-2">
                    Prior to applying for the loan, the applicant should have
                    received training in the relevant subject from Dhaka Credit
                    / other approved institution.
                  </li>
                  <li className="mt-2">
                    The loan amount is a maximum of Tk. 5000. The limit can be
                    increased to Tk. 10,000 based on at least 2 loans and 6
                    months of regular transactions with upto Maximum of Tk.
                    25,000.
                  </li>
                  <li className="mt-2">
                    This loan can be taken while having existing General Loan.
                  </li>
                  <li className="mt-2">
                    In case of loan up to Tk.5,00,000 (Tk. 5 Lac) one tenth of
                    the loan amount & for Loan more then Tk.5,00,000 One-eighth
                    of the money must be deposited by the applicant in the
                    Savings Acc/ STD Acc which will be treated as Surety against
                    the loan..
                  </li>
                  <li className="mt-2">
                    Preference will be given to young entrepreneurs.
                  </li>
                  <li className="mt-2">
                    The loan can be availed again based on the repayment of the
                    loan.
                  </li>
                  <li className="mt-2">
                    The maximum age of the loan applicant is 65 years.
                  </li>
                </ol>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Rules & Regulations:
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    The Loan have to be applied through the application form
                    provided by the Credit Union.
                  </li>
                  <li className="mt-2">
                    2 copies of updated passport size photograph, Dhaka Credit
                    Digital ID Card, photocopy of NID card and consent of the
                    family (husband-wife, son-daughter) should be given along
                    with the loan application.
                  </li>
                  <li className="mt-2">
                    Photocopy of training certificate is required.
                  </li>
                  <li className="mt-2">
                    This loan can be taken while having existing General Loan.
                  </li>
                  <li className="mt-2">
                    For applied loan, the project proposal has to be submitted
                    along with the loan application in a specified format
                    provided by Dhaka Credit (assistance can be provided, if
                    required).
                  </li>
                  <li className="mt-2">
                    Loan steps:
                    <ul className="my-2">
                      <li>1st step – maximum Tk. 5,00,000 (5 Lac).</li>
                      <li>2nd step – maximum Tk. 15,00,000 (15 Lac).</li>
                      <li>3rd step – maximum Tk. 30,00,000 (30 Lac).</li>
                      <p>
                        If you take a loan and repay it in minimum 6 monthly
                        installments and if you take a loan of at least 50% of
                        one step, you will get the next step loan.
                      </p>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Loans will be approved based on the estimated cost of the
                    project proposal.
                  </li>
                  <li className="mt-2">
                    Approved loan money will be repaid in multiple installments
                    as per project requirement.
                  </li>
                  <li>Loan annual Interest is @ 12%.</li>
                  <li>
                    Regular repayment of the loan will result in Rebate at 10%
                    of the total interest
                  </li>
                  <li>
                    A service charge of Tk.1,000 / – will be applicable for the
                    loan applied for which will have to be paid by account payee
                    bank check in the name of the association.
                  </li>
                  <li>
                    The Loan Applicant has to extend all possible cooperation
                    during the inspection of the project by Dhaka Credit.
                  </li>
                </ol>
                <h4 className="mt-5 text-xl lg:text-2xl font-semibold ">
                  Loan Repayment Policy
                </h4>
                <ol className="mt-5 list-decimal md:mx-10 lg:mx-10 xl:mx-10 px-3">
                  <li className="mt-2">
                    Loan interest will be calculated on daily basis from the
                    date of disbursement.
                  </li>
                  <li className="mt-2">
                    The first 6 months installment payment is not mandatory but
                    only interest has to be paid.
                  </li>
                  <li className="mt-2">
                    Loan repayment installments:
                    <ul className="my-2">
                      <li>
                        1st step – maximum Tk. 500,000 in maximum 36
                        installments.
                      </li>
                      <li>
                        2nd step – maximum Tk. 15,00,000 in maximum 48
                        installments.
                      </li>
                      <li>
                        3rd step – maximum Tk. 30,00,000 in maximum 60
                        installments.
                      </li>
                    </ul>
                    <p>
                      However, in case of termination of the Loan by the member,
                      the entire loan amount will be subject to one-time
                      repayment and the letter of exemption will have to be
                      taken.
                    </p>
                  </li>
                  <li className="mt-2">
                    Failure to repay the loan will result in recovery of fines
                    and other expenses as per the prevailing rules of Dhaka
                    Credit.
                  </li>
                  <li className="mt-2">
                    The loan will be covered under the same Loan Protection
                    Scheme (LPS) as other loans, i.e. the Loan Protection Scheme
                    will have to be paid at the rate of 50 paisa per thousand on
                    the loan taken per month.
                  </li>

                  <li className="mt-2">
                    If the loan taken is default for more than 3 months,
                    necessary action will be taken as per the defaulting loan
                    recovery policy and decision of the board.
                  </li>
                  <li className="mt-2">
                    According to the type of business, The Loan Applicant has to
                    deposit the income from the project on a daily/ weekly/
                    monthly basis into the Dhaka Credit Savings/ STD Account.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Entrepreneur;
