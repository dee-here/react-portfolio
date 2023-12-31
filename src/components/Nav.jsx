// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  const currentPage = useLocation().pathname;
  // console.log("currentPage :", currentPage);
  return (
    <div className="header">
      <Header />
      <Navbar
        links={[
          <Link
            key={1}
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>,
          <Link
            key={2}
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>,
          <Link
            key={3}
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
            to="/resume"
          >
            Resume
          </Link>,
          <Link
            key={4}
            className={
              currentPage === "/contacts" ? "nav-link active" : "nav-link"
            }
            to="/contacts"
          >
            Contact
          </Link>,
        ]}
      />
    </div>
  );
}
