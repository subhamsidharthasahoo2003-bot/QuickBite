// import React from 'react'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//     return (
//         <>
//             <div className='bg-gray-400  justify-center gap-[20px] pt-[80px] pb-[20px] px-[8vw]' id='footer'>
//                 <div className='w-full grid grid-cols-3 gap-[80px] '>
//                     <div className=''>
//                         <span className="inline-flex h-8 w-8  items-center justify-center rounded-full bg-orange-600 text-white font-bold">
//                             Q
//                         </span>
//                         <span className="text-xl font-extrabold tracking-tight text-gray-900">
//                             Quick<span className="text-gray-800">Bite</span>
//                         </span>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                         <div className='flex flex-2 gap-2'>
//                             <img src={assets.facebook_icon} alt="" />
//                             <img src={assets.twitter_icon} alt="" />
//                             <img src={assets.linkedin_icon} alt="" />
//                         </div>
//                     </div>
//                     <div className=''>
//                          <h2>COMPANY</h2>
//                          <ul>
//                             <li>Home</li>
//                             <li>About us</li>
//                             <li>Delivery</li>
//                             <li>Privacy policy</li>
//                          </ul>
//                     </div>
//                     <div className=''>
//                        <h2>GET IN TOUCH</h2>
//                        <ul>
//                         <li>+1-312-589-9587</li>
//                         <li>contact@quickbite.com</li>
//                        </ul>
//                     </div>
//                 </div>
//                 <hr />
//                 <p className=''>
//                     Copyright 2026 O Quickbite.com - All Right Reserved.
//                 </p>
//             </div>
//         </>
//     )
// }

// export default Footer




import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-4 border-t border-slate-200 text-slate-700" id="footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-12">
          {/* Brand / About */}
          <div>
            <div className="flex items-center ">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg leading-none">
                Q
              </span>
              <span className="text-2xl font-extrabold text-slate-900">
                Quick<span className="text-slate-900">Bite</span>
              </span>
            </div>
            <p className="mt-6 text-slate-600 leading-relaxed text-base">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                Home
              </li>
              <li>
                About us
              </li>
              <li>
               Delivery
              </li>
              <li>
              Privacy policy
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-base text-slate-600">
              <li>📞 +1-568-689-872</li>
              <li>✉️ contact@quickbite.com</li>
              <li>
                📍 123 QuickBite Street, Bhubaneswar,
                <br /> Odisha, India
              </li>
            </ul>
          </div>

          {/* Map + Social Icons */}
          <div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-40 mb-6 ">
              <iframe
                title="QuickCart Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.045937421321!2d-122.40136312409158!3d37.792507971982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df5f0c0f%3A0x9ff115dbb9c8b1!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000"
              ></iframe>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-7 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-orange-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm sm:text-base text-slate-700">
            Copyright {new Date().getFullYear()} ©{" "}
            <span className="text-orange-600 font-semibold">QuickBite.com</span>{" "}
             - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;