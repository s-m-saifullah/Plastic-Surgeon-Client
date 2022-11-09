import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white">
        <div className="container pt-9 w-11/12 lg:w-10/12 mx-auto">
          <div className="flex justify-center mb-9">
            <Link to="#!" className="mr-9 text-gray-800">
              <FaFacebookF />
            </Link>
            <Link to="#!" className="mr-9 text-gray-800">
              <FaTwitter />
            </Link>
            <Link to="#!" className="mr-9 text-gray-800">
              <FaGoogle />
            </Link>
            <Link to="#!" className="mr-9 text-gray-800">
              <FaInstagram />
            </Link>
            <Link to="#!" className="mr-9 text-gray-800">
              <FaLinkedinIn />
            </Link>
            <Link to="#!" className="text-gray-800">
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {`${new Date().getFullYear()}`} Copyright:
          <Link className="text-gray-800"> Dr. Mcconnell</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
