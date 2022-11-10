import React from "react";
import { Link } from "react-router-dom";
import featureBg from "../../assets/images/features-bg.jpg";

const Features = () => {
  return (
    <div className="mb-12">
      <div
        className="justify-start min-h-[500px] lg:pl-10 py-20 md:py-32 lg:py-48"
        style={{ backgroundImage: `url("${featureBg}")` }}
      >
        <div className="w-11/12 md:w-10/12 mx-auto hero-overlay bg-transparent text-white ">
          <h3 className="text-4xl">What We Do Best</h3>
          <p className="mt-5 mb-10">
            Expertise requires specialization. We don’t offer everything. We
            offer what we believe in and what we do best.
          </p>
          {/* All Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {/* Surgical Procedures */}
            <div className="md:col-span-2">
              <h4 className="text-secondary text-lg">Surgical Procedures</h4>
              <div className="grid md:grid-cols-2 md:gap-10 mt-5">
                <ul>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Facelift & Necklift</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Mini-Facelift</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Eyelid Surgery</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Otoplasty</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Chin Implant</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Rhinoplasty</Link>
                  </li>
                </ul>
                <ul>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Septoplasty</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Earlobe Surgery</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Reconstructive Surgery</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Reconstructive Procedures After Skin Cancer</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Surgical Lip Lift</Link>
                  </li>
                  <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                    <Link>Neck Liposuction</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Non Surgical Procedures */}
            <div className="md:col-span-1">
              <h4 className="text-secondary text-lg">
                Non Surgical Procedures
              </h4>
              <ul className="mt-5">
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>BOTOX® Cosmetic</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Dysport®</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Dermal Fillers/ Juvéderm®/Restylane®</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Liquid Facelift</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Lip Enhancement</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>KYBELLA®, Non-Surgical Profile Improvements</Link>
                </li>
              </ul>
            </div>
            {/* Skin and Laser Treatments */}
            <div className="md:col-span-1">
              <h4 className="text-secondary text-lg">
                Skin and Laser Treatment
              </h4>
              <ul className="mt-5">
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Wrinkle Treatments</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Skin Discoloration Treatments</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>HALO™ Laser Treatment</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>BroadBand Light™</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Laser Skin Resurfacing</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>Chemical Peels</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>DiamondGlow™</Link>
                </li>
                <li className="hover:bg-secondary border-t border-gray-50 py-2 px-1">
                  <Link>BBL HERO™</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
