import presidentImage from "../../assets/images/president.png";
import { NavLink } from "react-router-dom";

function PresidentMessage() {
  return (
    <>
      <div className="container my-20 mx-auto px-4">
        <section className="flex flex-col-reverse items-center gap-6 text-justify md:flex-row lg:text-left">
          <div className="z-10 bg-surface p-6 shadow-sm lg:w-3/5 lg:backdrop-blur-md">
            <h2 className="mb-2 p-1 text-3xl font-bold text-primary">
              Pankaj Gilbert Costa
            </h2>
            <p className="mb-4 p-1 font-semibold text-primary">
              President's Message
            </p>
            <p className="mb-4 p-1 text-onSurface">
              Dhaka Credit has already reached the dream of serving more then
              43,000 Members, and now it’s looking for a bigger target in
              serving the community through various services and projects. In
              March 2021, the Vision-2023 has been set in the 6th three years
              strategic planning workshop. According to the Vision, Dhaka Credit
              will achieve assets amounting to nearly BDT 1500 Crore and more
              than 1,000 Employees in 2023. To implement the Vision 2023,
              various ...
              <NavLink
                to="/pages/President-message/"
                className="underline hover:cursor-pointer"
              >
                READ MORE
              </NavLink>
            </p>
          </div>
          <div className="lg:w-2/5">
            <img src={presidentImage} className="w-full lg:rotate-6" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default PresidentMessage;
