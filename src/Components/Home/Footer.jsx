import React from "react";
import Logo from "../../../src/assets/LOGO 1.png";
import Group from "../../../src/assets/Group.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and App Download */}
        <div className="flex flex-col w-full h-35 justify-center">
          <h2 className="text-3xl flex justify-center md:justify-start font-bold">
           <img src={Logo} alt="Logo"/>
          </h2>
          <div className=" flex justify-center md:justify-start space-x-2 mt-4">
            <img src={Group} alt="Grup"/>
          </div>
          <p className="text-sm text-center md:text-left mt-2">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-1 text-center md:text-start lg:col-span-1">
          <h3 className="font-bold text-sm">
            Get Exclusive Deals in your Inbox
          </h3>
          <div className="flex  mt-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="px-4 py-2 border rounded-l-md w-full"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-1">
            We won’t spam, read our{" "}
            <a href="#" className="underline">
              email policy
            </a>
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a  href="#">
              <FaFacebook size={30}/>
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaYoutube size={30}/>
            </a>
            <a href="#">
              <IoLogoWhatsapp size={30}/>
            </a>
          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h3 className="font-semibold text-lg">Legal Pages</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Modern Slavery Statement
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-lg">Important Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Get Help
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Add Your Restaurant
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Sign Up to Deliver
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Create a Business Account
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 font-semibold flex justify-around align-center text-white text-center py-4 text-sm">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="hidden md:block flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
