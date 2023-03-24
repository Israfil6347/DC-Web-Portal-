import { useState } from "react";

function Loan() {
  const [openFaq, setIsOpenFaq] = useState("");

  const openClickHandler = (faqId) => {
    if (faqId === openFaq) {
      setIsOpenFaq("");
    } else {
      setIsOpenFaq(faqId);
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col divide-y">
        <div className="block w-full">
          <div
            onClick={() => openClickHandler("faq1")}
            className="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
          >
            <p className="block w-full text-lg font-bold hover:cursor-pointer">
              MillionaireDeposit Account with Dhaka Credit?
            </p>
            <span
              className={`fas ${
                openFaq === "faq1" ? "fa fa-chevron-down" : "fa fa-chevron-up"
              }`}
            ></span>
          </div>
          <div
            className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
              openFaq === "faq1" ? "max-h-[1000px] p-4" : "max-h-0"
            }`}
          >
            <ul className="space-y-2">
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Collect the application form from the office & complete the
                application form accurately in Bangla and/or English.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Original copy and photocopy of Baptism Certificate or Church
                Birth Certificate with date of birth and if married, a photocopy
                of Marriage Certificate should be submitted.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Original copy and photocopy of the birth certificate.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                2 Stamp Size and 1 Passport Size Color photo is required.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Incase of College/University, Student ID and incase of Job
                Holder, Job ID is required.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Incase of minor, the parents should submit 2 stamp size photo as
                well as photo of the minor.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                The applicant should mention their permanent address and present
                address including (incase of present address: House Name,
                Holding Number, Road & Block Number, Floor Number & Area name
                and incase of Permanent address: House Name, Village, Post
                Office, Thana & district.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Mobile number and Email Address should be provided.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Incase of Private service, Govt. Service & Businessman should
                provide their respective documents.
              </li>
              <li className="flex">
                <svg
                  className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
                Membership Class is required.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="block w-full">
        <div
          onClick={() => openClickHandler("faq2")}
          className="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p className="block w-full text-lg font-bold hover:cursor-pointer">
            2. How to Register for MMS App of Dhaka Credit?
          </p>
          <span
            className={`fas ${
              openFaq === "faq2" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq2" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2">
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Please register your Email Address and Mobile Number by collecting
              the “Information Update Form for Online Services” from the nearest
              service center or Head office or by downloading it from our
              website (Click here to Download).
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Download and Install the “Dhaka Credit“ App from the “Google Play
              Store”
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Head to the “MFS” section in the home screen of the app and click
              on the “Sign up” button.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Input the registered number and click “Verify”. After which an OTP
              will be sent to the registered mobile number.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Input the OTP and click “Verify”.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Accept the “I agree to all the Terms and Condition”.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Input the Email address & Password and Click “Submit”.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Then input the registered email and password again for Login.
            </li>
            <li className="flex">
              <svg
                className="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Avail our Instant Loan from the Dhaka Credit App within minutes.
              For more information on Instant Loan.
            </li>
          </ul>
        </div>
      </div>

      <div class="block w-full">
        <div
          onClick={() => openClickHandler("faq3")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            3. What are the requirements of a member to apply for a loan?
          </p>
          <span
            className={`fas ${
              openFaq === "faq3" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq3" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          <ul class="space-y-2">
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Suitable Surety.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Consent Form.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Promise Letter.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              NID Copy.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              2 Copy Color Passport size photo.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Dhaka Credit ID Card photocopy.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              For Job holder, Salary certificate or bank statement is required.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              For Business, Trade license, bank statement, TIN certificate and
              Return Receipt is required.
            </li>
          </ul>
        </div>
      </div>
      <div class="block w-full">
        <div
          onClick={() => openClickHandler("faq4")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            4. What are the benefits of being a member of Dhaka Credit?
          </p>
          <span
            className={`fas ${
              openFaq === "faq4" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq4" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          As a valuable member of Dhaka Credit, you avail various attractive
          products which are unique to Dhaka Credit. Such as, Instant Loan up to
          Tk. 25,000/-, LTSD with attractive interest rate & various lucrative
          to meet the requirements of our valuable members.
        </div>
      </div>
      <div class="block w-full">
        <div
          onClick={() => openClickHandler("faq5")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            5. What is Instant Loan?
          </p>
          <span
            className={`fas ${
              openFaq === "faq4" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq5" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          <ul class="space-y-2">
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Members will be entitled to this loan after 6 months of
              membership. The share Account should have a minimum of Tk. 1000
              and 10% of the amount of the loan amount should be deposited in
              the member’s Savings Account.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              The member using Mobile Member Service (MMS) of Dhaka Credit will
              be entitled to this loan
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              The loan amount is a maximum of Tk. 5000. The limit can be
              increased to Tk. 10,000 based on at least 2 loans and 6 months of
              regular transactions with up to Maximum of Tk. 25,000.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Monthly interest rate is @ 1.25%.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Loan Repayment: 90 days (3 Months) or 180 (6 Months).
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              Failure to repay the Loan within (90 Days) 3 Months or 180 (6
              Months) will result in fine @ 25% interest rate.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              For Job holder, Salary certificate or bank statement is required.
            </li>
            <li class="flex">
              <svg
                class="mr-1.5 mt-1 h-4 w-4 flex-shrink-0 items-start"
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
              The loan can be availed again based on the repayment of the loan.
            </li>
          </ul>
        </div>
      </div>

      <div class="block w-full">
        <div
          onClick={() => openClickHandler("faq6")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            6. How many products are currently available in Dhaka Credit?
          </p>
          <span
            className={`fas ${
              openFaq === "faq6" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq6" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          <p>There are 86 Products currently active in Dhaka Credit</p>
        </div>
      </div>
      <div x-data="{ open: false }" class="block w-full">
        <div
          onClick={() => openClickHandler("faq7")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            7. How many Service Centers are currently operation?
          </p>
          <span
            className={`fas ${
              openFaq === "faq7" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq7" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          <p>
            There are 12 service centers located in Dhaka, Savar, Gazipur &
            Munshiganj.
          </p>
        </div>
      </div>
      <div x-data="{ open: false }" class="block w-full">
        <div
          onClick={() => openClickHandler("faq8")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            8. What are the locations of the ATMs of Dhaka Credit?
          </p>
          <span
            className={`fas ${
              openFaq === "faq8" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq8" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          Our 24/7 ATM’s are located in Head Office, John Vianney Hospital,
          Shadhonpara, Monipuripara, Nadda, Nagori, Hashnabad, Mirpur, Pagar &
          Savar.
        </div>
      </div>
      <div x-data="{ open: false }" class="block w-full">
        <div
          onClick={() => openClickHandler("faq9")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            9. What are the different methods of depositing amount to a members
            account?
          </p>
          <span
            className={`fas ${
              openFaq === "faq9" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq9" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          Our valuable members can avail various methods of depositing their
          money in any account of Dhaka Credit such as Deposit in any of our
          Service Centers & Collection Booths, Bkash, Bank Deposit and Dhaka
          Credit MMS App.
        </div>
      </div>
      <div x-data="{ open: false }" class="block w-full">
        <div
          onClick={() => openClickHandler("faq10")}
          class="flex w-full items-center justify-between py-2 hover:bg-backgroundVariant"
        >
          <p class="block w-full text-lg font-bold hover:cursor-pointer">
            10. At what age an account can be opened in Dhaka Credit?
          </p>
          <span
            className={`fas ${
              openFaq === "faq10" ? "fa fa-chevron-down" : "fa fa-chevron-up"
            }`}
          ></span>
        </div>
        <div
          className={`ease overflow-hidden bg-background text-justify font-medium transition-all duration-700 ${
            openFaq === "faq10" ? "max-h-[1000px] p-4" : "max-h-0"
          }`}
        >
          A parent of a new born baby can open an Bee Savers account in the name
          of the Baby and if the account is opened with in 60 days of birth,
          then the account will receive Tk. 500 bonus on opening the account.
        </div>
      </div>
    </div>
  );
}

export default Loan;
