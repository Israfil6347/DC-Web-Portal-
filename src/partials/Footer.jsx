import logo from "../assets/images/logo/logocccul.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-surface text-center text-onSurface">
      <div className="container mx-auto flex flex-col items-center justify-center p-3 py-10">
        <NavLink
          to="#"
          className="mb-4 flex flex-col items-center justify-center"
        >
          <img className="h-16" src={logo} alt="header logo" />
          <h6 className="block text-2xl font-semibold">Dhaka Credit</h6>
          <p className="text-xl">{process.env.REACT_APP_COMPANY_NAME}</p>
          <p className="text-sm">
            Rev. Fr. Charles J. Young Bhaban, 173/1/A, East Tejturi Bazar,
            Tejgaon, Dhaka-1215.
          </p>
        </NavLink>
        <div className="mb-5">
          <ul className="flex gap-2">
            <li className="h-8 w-8 rounded-full  shadow-lg hover:scale-125 hover:text-primary">
              <a className="h-full w-full" href="https://www.facebook.com/">
                <i className="fa fa-facebook mt-2 h-full w-full text-center leading-3"></i>
              </a>
            </li>
            <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
              <a
                className="h-full w-full text-center"
                href="tel:+8809678771270"
                data-url="tel:+8809678771270"
              >
                <i className="fa fa-phone mt-2 h-full w-full text-center leading-3"></i>
              </a>
            </li>
            <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
              <a
                className="h-full w-full text-center"
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwQnhBvKlZwLvjSMPCRWgqgwZCBbBjmFbHpBXzdcqGNkGKGHxzqrkGWZxwgfKGDxGlRHbKj"
              >
                <i className="fa fa-envelope mt-2 h-full w-full text-center leading-3"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm">
          © 2022 {process.env.REACT_APP_COMPANY_NAME}. All Rights Reserved.
        </p>
        <p className="text-sm">Powered by Dhaka Credit ICT Squad.</p>
      </div>
    </footer>
  );
}

export default Footer;
