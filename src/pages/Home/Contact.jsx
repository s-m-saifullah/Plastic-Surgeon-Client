import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactBg from "../../assets/images/contact-bg.jpg";

const Contact = () => {
  return (
    <div>
      <div
        className="min-h-[500px] lg:pl-10 py-20 md:py-32 lg:py-12 bg-right"
        style={{ backgroundImage: `url("${ContactBg}")` }}
      >
        <div className="w-11/12 md:w-10/12 mx-auto hero-overlay bg-transparent text-white flex flex-col items-end">
          <h3 className="text-4xl mb-10">Contact Us</h3>
          <div className="w-11/12 lg:w-2/5">
            {/* New Patients */}
            <div className="flex flex-col md:flex-row gap-10 justify-end px-12 py-6 border mb-10">
              <div>
                <h4 className="text-2xl text-secondary">New Patients</h4>
                <p>I'm a New Patient and/or have a General Question</p>
              </div>
              <div>
                <Link class="btn btn-primary capitalize">Contact Us</Link>
              </div>
            </div>

            {/* Existing Patients */}
            <div className="flex flex-col md:flex-row gap-10 justify-end px-12 py-6 border mb-10">
              <div>
                <h4 className="text-2xl text-secondary">New Patients</h4>
                <p>I'm a New Patient and/or have a General Question</p>
              </div>
              <div>
                <Link class="btn btn-primary capitalize">Contact Us</Link>
              </div>
            </div>

            {/* Skin Care Patients */}
            <div className="flex flex-col md:flex-row gap-10 justify-end px-12 py-6 border mb-10">
              <div>
                <h4 className="text-2xl text-secondary">New Patients</h4>
                <p>I'm a New Patient and/or have a General Question</p>
              </div>
              <div>
                <Link class="btn btn-primary capitalize">Contact Us</Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row gap-x-20 gap-y-5 justify-end px-12 py-6  mb-10">
              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-secondary text-5xl" />
                <p>
                  5201 Eden Ave #170 <br />
                  Edina, MN 55436
                </p>
              </div>
              <div className="ml-16 md:ml-0">
                <a href="tel:+1234567890">Phone: 123.456.7890</a> <br />
                <p>Fax: 123.456.7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
