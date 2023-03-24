import { motion } from "framer-motion";
import { useEffect } from "react";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="clear-both"></div>

      <div className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:w-9/12 md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <motion.div
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="animate-slideInUp"
        >
          <h4 className="mb-4 text-2xl font-semibold">Our Story</h4>
          <div className="mb-2 space-y-4 text-justify">
            <p>
              An American Origin Priest named
              <strong>Father Charles J. Young</strong> CSC founded, The
              Christian Co-Operative Credit Union Limited on July 3<sup>rd</sup>
              , 1955, which is also popularly known as “Dhaka Credit”. It was
              registered under the Bengal Co-Operative Act 1940.
            </p>

            <p>
              The main focus of this organization is to promote the standard of
              living of its members who are mainly living situated in the
              operational areas in four districts, such as Dhaka, Gazipur,
              Narayanganj and Munshiganj districts. Gradually, Dhaka Credit is
              expanding its services to common people irrespective of their
              Caste or Creed and exceeding the traditional dealings with Loan
              &amp; Installment.
            </p>

            <p>
              Dhaka Credit’s Headquarter is located at East Tejturibazar in the
              Dhaka Metropolitan Area. Currently Dhaka Credit has around 75
              innovation products on Loans &amp; Savings for its members and
              different kinds of social projects &amp; services that are being
              developed and some already in service.
            </p>

            <p>
              Dhaka Credit is the first as well as the largest co-operative
              credit union of its kind in Bangladesh, with over 40,000 active
              members, 11 service centers, 19 collection booths and nearly 600
              highly qualified staff members. Dhaka Credit is constantly
              increasing its products &amp; Projects to better satisfy the
              changing and demanding needs of the members and to keep up with
              the demand, Dhaka Credit is also increasing its workforce to
              provide better employment and also services to its Members.
            </p>

            <p>
              This organization has 22 members of Managing Board. Dhaka has
              recently celebrated its 64<sup>th</sup>&nbsp;anniversary on 3
              <sup>rd</sup>&nbsp;July, 2019.
            </p>

            <p>
              Dhaka Credit is currently operating projects such as Dhaka Credit
              Resort &amp; Training Center, International Standard Childcare
              &amp; Education Center, 2 Co-Operative Shops, Security Service,
              Dhaka Credit Union School, Cultural Academy, 2 multipurpose
              Projects, Gym, Ambulance Service, Internet-Based DCTVBD.com, news
              portal dcnewsbd.com, IELTS &amp; English Spoken Course, 2 Girls
              Hostels, Students Project for part-time working students, Health
              Project, Funeral Support Fund, Mcarthy Library, Archives, Job
              Linking Cells, etc.
            </p>

            <p>
              Along with Savings Products, Dhaka Credit has a long list of Loan
              products that members can take advantage with low interest. These
              Loans includes General Loan, Business Loan, Car Loan, Capacity
              Based Loan, House Building Loan, Emergency Loan (Mother &amp;
              Child), Competency Based Loan, Small &amp; Medium Business Loan,
              Credit Ceiling Loan, Solvency Loan for Higher Education, Solvency
              Loan for Going Abroad, Top-Up Loan, Dhaka Credit Flat Purchase
              Loan, Flat Purchase Loan, Dhaka Metropolitan House Building Loan,
              Consumer Loan, Bill Pay Loan, Loan against Monthly Savings, Gym
              Loan, industrial Loan &amp; General Credit Ceiling Loan, Loan
              against Long Term Savings Deposit, Secure Over Draft (SOD) Loan,
              Open Installment Loan, Own Share Loan, Etc.
            </p>

            <p>
              Dhaka Credit in its recent years, the Hospital Project Foundation
              Stone Laying Ceremony was attended by many dignitaries of the
              society headed by parliament member Meher Afroz Chumki in the
              chair. The Foundation Stone for the Multi-Purpose project was
              inaugurated by His Excellency Archbishop George Kocherry as well
              as Vatican Ambassador of Dhaka. There are more Dream Projects for
              Dhaka Credit in the Pipeline.
            </p>

            <p>
              Of the various projects in the pipeline for Dhaka Credit, the
              construction of Nadda Multi-Purpose Project will consist of a
              Beauty parlor &amp; Training Center, Co-Operative Shop &amp;
              Hostel for the girls of indigenous communities in Bangladesh.
              Beside these, Dhaka Credit will start Seven more Beauty Parlor
              Outlets in different parts of Dhaka with a concept of creating
              more job opportunities for the community.
            </p>

            <h4 className="text-2xl font-semibold">Objectives:</h4>

            <ul>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                To promote the habit of thrift among its Members.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                To Create Fund received from the members and then let them
                borrow these funds for the member’s productive purpose.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                To Promote Self-Reliant &amp; Mutual Benefits among the members
                to improve their Socio-Economic Conditions.
              </li>
            </ul>

            <h4 className="text-2xl font-semibold">3 Year Strategic Plan</h4>

            <p>
              Dhaka Credit already had five 3 years strategic plan until now,
              these are as follows;
            </p>

            <ul>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                1st 3 Year Strategic Plan (2004-2007)
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                2nd 3 Year Strategic Plan (2008-2011)
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                3rd 3 Year Strategic Plan (2011-2014)
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                4th 3 Year Strategic Plan (2014-2017)
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                5th 3 Year Strategic Plan (2017-2020) currently going on.
              </li>
            </ul>

            <p>
              Currently Dhaka Credit is working under these strategic plan for
              Financial Viability, Operational Efficiency, Member Satisfaction,
              Competitive Advantage Position, Employee Satisfaction, Good
              Co-Operative Governance.
            </p>

            <h4 className="text-2xl font-semibold">Patronized</h4>

            <ul>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                We are patronizing the Freedom Fighter of our Liberation War in
                1971.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Christian Businessman by Creating Christian Businessman Forum.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Christian Writers through Christian Writers Forum.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Christian Bankers by creating Christian Bankers Association.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Children &amp; Women For Empowerment.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Encouraging &amp; Supporting Young Leadership.
              </li>
              <li className="mt-2 flex items-start">
                <svg
                  className="mr-1.5 h-4 w-4 mt-[2px] flex-shrink-0"
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
                Members for&nbsp;Entrepreneurship.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OurStory;
