import { NavLink, useLocation } from "react-router-dom";

const data = [
  {
    id: 1,
    jobPosition: "Web Developer",
    organizationName: "The Christian Co-operative Credit Union Ltd.",
    totalNumberVacancy: "Undefined",
    jobContext: "Undefined",
    jobResponsibility: "<h1>est dolores cupiditate</h1></p>",
    employmentStatus: "Full Time",
    educationalRequirement: "BSC/MSC IN CSE",
    experienceRequirements: "At least 1 Years of Software Development",
    additionalRequirements:
      "<ul><li>The candidate should have solid foundation onPython and itsframeworks like Django and Odoo.</li><li>Solid understanding of MVC is mandatory.</li><li>Solid experience of ERPdevelopment is mandatory.</li><li>Candidates having experience of developing e-commerceapplication will get additional advantage.</li><li>Must have expertise on PostgreSQL and should be able towrite complex queries.</li><li>Applicantsmust have expertise on frontendweb technologieslike HTML5, CSS, JavaScript, Bootstrap, jQuery, AJAX etc.</li><li>The candidate must have good knowledge of security featuresof web application development.</li><li>The applicant must have the attitude of self-learning of new skills and technology.</li><li>The applicant should be able to deliver the project independently with little supervision. </li> <li>Applicant should have proven managerial and leadershipskills.</li><li>Strong verbal and written communication skills.</li><li>Problem-solving skills.</li><li>At least 5 years job experience of software development of which 1 year should be in supervisor's role.</li></ul>",

    religion: "Christian",
    age: "Below 30",
    gender: "Male and Female",
    jobLocation: "20000",
    salary: "20000",
    compensationAndOtherBenefits:
      " <ul><li>Festival bonus, CPF, Gratuity, standard package of leave with pay, subsidized lunch, telephone allowance, transport allowance etc.</li></ul>",
    applicationDeadline: "2022-10-01",
    publishedDate: "2022-09-01",
    contactInfo: "info@cccul.com",
  },
  {
    id: 2,
    jobPosition: "Software Developer",
    organizationName: "The Christian Co-operative Credit Union Ltd.",
    totalNumberVacancy: "1",
    jobContext:
      "Gram Unnayan Karma (GUK) is one of the leading non-government social development organization in Bangladesh. This organization is helping theunder-privileged people of Bangladesh by providingfinance, education, healthcare, and market linkage torealize their full potential. GUK is operating in 56districts of Bangladesh with more than 5000 employees.IT department is responsible for providing IT andcomputer-based solution and services to all of its  concerns.",
    jobResponsibility: "<h1>est dolores cupiditate</h1>",
    employmentStatus: "Full-time",
    educationalRequirement:
      " <ul><li>Bachelor of Science (BSc) in CSE or IT related discipline.</li><li>Educational qualification can be relaxed for skilled and experienced candidate.</li></ul>",
    experienceRequirements: " <ul><li>At least 5 year(s)</li></ul>",
    additionalRequirements:
      "<ul><li>The candidate should have solid foundation onPython and itsframeworks like Django and Odoo.</li><li>Solid understanding of MVC is mandatory.</li><li>Solid experience of ERPdevelopment is mandatory.</li><li>Candidates having experience of developing e-commerceapplication will get additional advantage.</li><li>Must have expertise on PostgreSQL and should be able towrite complex queries.</li><li>Applicantsmust have expertise on frontendweb technologieslike HTML5, CSS, JavaScript, Bootstrap, jQuery, AJAX etc.</li><li>The candidate must have good knowledge of security featuresof web application development.</li><li>The applicant must have the attitude of self-learning of new skills and technology.</li><li>The applicant should be able to deliver the project independently with little supervision. </li> <li>Applicant should have proven managerial and leadershipskills.</li><li>Strong verbal and written communication skills.</li><li>Problem-solving skills.</li><li>At least 5 years job experience of software development of which 1 year should be in supervisor's role.</li></ul>",

    religion: "Christian",
    age: "Below 30",
    gender: "Male and Female",
    jobLocation: "20000",
    salary: "20000",
    compensationAndOtherBenefits:
      " <ul><li>Festival bonus, CPF, Gratuity, standard package of leave with pay, subsidized lunch, telephone allowance, transport allowance etc.</li></ul>",

    applicationDeadline: "2022-10-01",
    publishedDate: "2022-09-01",
    contactInfo: "info@cccul.com",
  },
  {
    id: 3,
    jobPosition: "Manager",
    organizationName: "The Christian Co-operative Credit Union Ltd.",
    totalNumberVacancy: "1",
    jobContext:
      "Gram Unnayan Karma (GUK) is one of the leading non-government social development organization in Bangladesh. This organization is helping theunder-privileged people of Bangladesh by providingfinance, education, healthcare, and market linkage torealize their full potential. GUK is operating in 56districts of Bangladesh with more than 5000 employees.IT department is responsible for providing IT andcomputer-based solution and services to all of its  concerns.",

    jobResponsibility: "<h1>est dolores cupiditate</h1></p>",
    employmentStatus: "Full Time",
    educationalRequirement: "BSC/MSC IN CSE",
    experienceRequirements: "At least 1 Years of Software Development",
    additionalRequirements:
      "<ul><li>The candidate should have solid foundation onPython and itsframeworks like Django and Odoo.</li><li>Solid understanding of MVC is mandatory.</li><li>Solid experience of ERPdevelopment is mandatory.</li><li>Candidates having experience of developing e-commerceapplication will get additional advantage.</li><li>Must have expertise on PostgreSQL and should be able towrite complex queries.</li><li>Applicantsmust have expertise on frontendweb technologieslike HTML5, CSS, JavaScript, Bootstrap, jQuery, AJAX etc.</li><li>The candidate must have good knowledge of security featuresof web application development.</li><li>The applicant must have the attitude of self-learning of new skills and technology.</li><li>The applicant should be able to deliver the project independently with little supervision. </li> <li>Applicant should have proven managerial and leadershipskills.</li><li>Strong verbal and written communication skills.</li><li>Problem-solving skills.</li><li>At least 5 years job experience of software development of which 1 year should be in supervisor's role.</li></ul>",
    religion: "Christian",
    age: "Below 30",
    gender: "Male and Female",
    jobLocation: "20000",
    salary: "20000",
    compensationAndOtherBenefits: "<h1>est dolores cupiditate</h1>",
    applicationDeadline: "2022-10-01",
    publishedDate: "2022-09-01",
    contactInfo: "info@cccul.com",
  },
];

function SinglePage() {
  const location = useLocation();
  console.log(location.state);

  var jobData;
  var html;
  data.forEach((element) => {
    if (element.id === location.state) {
      console.log(element);
      jobData = element;
      html = element.jobResponsibility;
    }
  });

  return (
    <div>
      <section className="text-onSurface">
        <div className="container mx-auto mb-20 px-4 text-left md:text-justify lg:text-justify">
          <div className="clear-both"></div>
          <div className="content bg-surface px-6 py-6 shadow-sm md:mx-20 md:px-10 md:py-10 lg:mx-40 lg:px-20 lg:py-20">
            <h2 className="text-3xl font-bold">{jobData.jobPosition}</h2>
            <h6 className="mb-4">{process.env.REACT_APP_COMPANY_NAME}</h6>
            <div className="mb-4 flex flex-col gap-4 text-justify">
              <div className="">
                <h4 className="font-bold">Vacancy</h4>
                <p>{jobData.totalNumberVacancy}</p>
              </div>
              {jobData.jobContext == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Job Context</h4>
                  <ul>
                    <li>{jobData.jobContext}</li>
                  </ul>
                </div>
              )}

              {jobData.jobResponsibility == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Job Responsibilities</h4>

                  <div className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobData?.jobResponsibility,
                      }}
                    />
                  </div>
                </div>
              )}

              {jobData.employmentStatus == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Employment Status</h4>
                  <p>{jobData.employmentStatus}</p>
                </div>
              )}

              {jobData.educationalRequirement == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Educational Requirements</h4>

                  <div className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobData?.educationalRequirement,
                      }}
                    />
                  </div>
                </div>
              )}

              {jobData.experienceRequirements == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Experience Requirements</h4>
                  <div className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobData?.experienceRequirements,
                      }}
                    />
                  </div>
                </div>
              )}
              {jobData.religion == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Religion</h4>
                  <ul>
                    <li>{jobData.religion}</li>
                  </ul>
                </div>
              )}

              {jobData.additionalRequirements == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Additional Requirements</h4>
                  <div className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobData?.additionalRequirements,
                      }}
                    />
                  </div>
                </div>
              )}

              {jobData.age == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Age</h4>
                  <ul>
                    <li>{jobData.age}</li>
                  </ul>
                </div>
              )}
              {jobData.gender == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Gender</h4>
                  <ul>
                    <li>{jobData.gender}</li>
                  </ul>
                </div>
              )}
              {jobData.jobLocation == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Job Location</h4>
                  <p>{jobData.jobLocation}</p>
                </div>
              )}

              {jobData.salary == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Salary</h4>
                  <ul>{jobData.salary}</ul>
                </div>
              )}
              {jobData.compensationAndOtherBenefits == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">
                    Compensation &amp; Other Benefits
                  </h4>
                  <div className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobData?.compensationAndOtherBenefits,
                      }}
                    />
                  </div>
                </div>
              )}
              {jobData.applicationDeadline == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Application Deadline</h4>
                  <ul>
                    <li>{jobData.applicationDeadline}</li>
                  </ul>
                </div>
              )}

              {jobData.publishedDate == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Publiched On</h4>
                  <ul>
                    <li>{jobData.publishedDate}</li>
                  </ul>
                </div>
              )}
              {jobData.contactInfo == null ? (
                ""
              ) : (
                <div className="">
                  <h4 className="font-bold">Contact Info</h4>
                  <ul>
                    <li>{jobData.contactInfo}</li>
                  </ul>
                </div>
              )}

              <div>
                <NavLink
                  to="/career/job-application/"
                  className="inline-block rounded-md bg-primary py-2 px-6 font-bold text-onPrimary shadow-sm"
                >
                  Apply
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SinglePage;
