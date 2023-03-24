import { motion } from "framer-motion";
import { useEffect } from "react";
import FounderProfile from "./FounderProfile";
import OurWork from "./OurWork";

function Home() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <OurWork></OurWork>
      <FounderProfile></FounderProfile>
    </>
  );
}

export default Home;
