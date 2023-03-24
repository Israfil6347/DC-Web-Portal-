import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "./../assets/images/Ignatious_Corraya.JPG";

const PresidentMessage = () => {
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
        <motion.div transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
          <img
            src={image}
            className="w-full lg:w-96  float-left mr-4 mb-2 animate-slideInLeft rounded"
            alt=""
          />

          <div className="animate-slideInUp">
            <h4 className="mb-4 text-2xl font-semibold">Presidents Message</h4>
            <div className="mb-4 space-y-2 text-justify">
              <p className="">
                Dhaka Credit is going ahead with the dream of serving more than
                50,000 Members. On February 2017, the Vision-2020 has been set
                in the 5th three years strategic planning workshop. According to
                the Vision, Dhaka Credit will achieve assets amounting to nearly
                BDT 900 Crore and more then 1,000 Employees with in 2020. In
                order to implement the Vision 2020, various initiatives have
                been taken. To achieve these goals, Dhaka Credit is working with
                utmost dedication and hard work.
              </p>

              <p>
                With the recent launch of 24×7 ATM service for our valuable
                members, Dhaka Credit has stepped into the new era of Technology
                based services and One Big step closer to providing Banking
                Level services to our members under our coverage area and will
                be launching in more areas in the upcoming future.
              </p>

              <p>
                One of the main aspects of Vision-2020 is to establish a 300-Bed
                capacity Divine Mercy General Hospital in Mothbari in the
                district of Gazipur. Undoubtedly the Hospital will play an
                important role in the Service Sector of the Country. Later,
                Dhaka Credit will work with a goal of establishing a Nursing
                Institute and Medical College.
              </p>

              <p>
                We believe that the ongoing projects of Dhaka Credit will
                transform it into a big institution. We have dreams of
                establishing a Bank, an Airlines, a Daily Newspaper, a Satellite
                Television, a University, an International Standard Convention
                Center to serve the Christian community as well as the common
                people of the country. Dhaka Credit is going forward with a view
                of achieving these goals. Giving equal dignity and importance to
                the contemporary Members, Dhaka Credit has adopted the strategy
                of safe and productive investments, using modern technology,
                professionalism and highest standard of development keeping in
                line with the global economy and progress.
              </p>

              <p>
                Highest priority has to be given to the Modernization and use of
                information technology for improving the quality of the services
                given to the Members. Members are getting quick and quality
                service from Dhaka Credit compared to any other financial
                institution.
              </p>

              <p>
                Money market has always been a challenging market to conquer but
                Dhaka Credit is going ahead by facing and overcoming all the
                challenges. Dhaka Credit is investing in different sectors
                through its Members by providing them with Loan facilities for
                their economic development as well as the development of the
                Country. Specific mission, vision, core values, techniques,
                working quality, professionalism, expertise, transparency and
                the use of software and modern Information Technology have
                helped Dhaka Credit to achieve new heights to obtain the highest
                ranking Credit Union among its kind in South Asia.
              </p>

              <p>
                Purchase of Commercial Space at ‘Jalshiri Abashon Project’ in
                new Purbachal Modern Town is currently under process.
              </p>

              <p>
                Beside these projects, Dhaka Credit is contributing a lot in
                creating and developing small Entrepreneur, Education, Health,
                Culture, Young Leadership, Women Empowerment, Development of
                Children and Indigenous people. There are many Members of Dhaka
                Credit residing outside the country. We are working really hard
                to get them easy access to our services.
              </p>

              <p>
                Dhaka Credit is now considered as a Brand. The reputation of
                Dhaka Credit has spread beyond the borders of the country. It
                has become a role model for other Credit Unions to follow in
                Bangladesh and rest of the world. Our goal is to lead the Credit
                Union Movement from the front in South Asia including
                Bangladesh. Through its own website, Dhaka Credit is spreading
                its vast information related to its activities worldwide. Dhaka
                Credit have a dream of building a Dhaka Credit (DC) Tower in
                Dhaka Metropolitan. This will be another milestone for Dhaka
                Credit, and hoping that the projects will be implemented during
                the tenure of the existing Board. Each &amp; Everyone is humbly
                requested to visit our facilities &amp; experience the
                exceptional services provided by Dhaka Credit. With everyone’s
                Love, Blessing &amp; Co-operation, we can go ahead and develop
                together.
              </p>

              <p>
                We portray true Christian Love and Care through products &amp;
                services of our great organization.
              </p>

              <p className=" pt-2">
                <p> Best Wishes to Everyone </p>
                <p>Mr. Ignatious Hemanta Corraya</p>
                <p> President</p>
                <p> The Christian Co-Operative Credit Union Ltd; Dhaka</p>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PresidentMessage;
