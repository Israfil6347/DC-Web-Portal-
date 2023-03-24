import { motion } from "framer-motion";
import { useEffect } from "react";
import image from "./../assets/images/founder/founder_bw.png";

const FoundersProfile = () => {
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
          <div className="float-left animate-slideInLeft lg:w-2/5">
            <img src={image} className="w-full " alt="" />
          </div>
          <div className="animate-slideInUp">
            <h2 className="p-1 text-2xl font-semibold">Fr. Charles J. Young</h2>
            <p className="mb-4 p-1 font-semibold">Founder of Dhaka Credit</p>
            <div className="">
              <p className="mb-4 p-1 text-justify text-onSurface">
                The pioneer of the Credit Union Movement in Bangladesh, Fr.
                Charles J. Young CSC was born in 1904, in New York, USA. His
                full name is Fr. Charles Joseph Young CSC. He was the founder of
                The Christian Co-Operative Credit Union Ltd. Dhaka, the largest
                Credit Union in Bangladesh and South Asia. Fr. Charles joined
                the seminary of the Holy Cross on September in 1923, and joined
                in the first verse in 1925 & accepted his blessing in 1928. In
                1929, he obtained his BA degree from Notre Dame University of
                America. Later in 1933, after studying the theory of Theism at
                the Foreign Mission seminary in Washington, he was promoted as a
                Priest at Indiana Notre Dame University chapel. And in the same
                year he came to Bangladesh as a foreign missionary and did
                various pastoral and social activities in Dhaka and Mymensingh.
                In 1953, Lawrence L. Grenar CSC, Archbishop of Dhaka sent him to
                the Coady Institute of St. Francis Xavier University in Canada
                to acquire knowledge on Co-operatives. In 1955, coming back to
                Dhaka, he established The Christian Co-Operative Credit Union
                Ltd. Dhaka (Dhaka Credit) in order to bring the socio-economic
                development of the Christian community of the country.
              </p>
              <p className="mb-4 p-1 text-justify text-onSurface">
                His philosophy in credit movement has spread widely throughout
                the country. This theory brings radical changes in people’s
                lives. Later, using this theory, the non-governmental
                organization Grameen Bank won the Nobel Peace Prize. Many
                organizations of the country are working in the light of this
                theory. The Christian Co-Operative Credit Union Ltd. Dhaka is
                now the largest Credit Union in South Asia of its kind. The name
                of Fr. Charles J. Young CSC will be written in the history of
                Credit Movement of this region. He died on 14 November 1988 in a
                tragic road accident. He was buried in Tejgaon Holy Rosary
                Church in Dhaka. His death anniversary is being celebrated every
                year with due honor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FoundersProfile;
