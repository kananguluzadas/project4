import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../components/MyLinks";
import { BsChevronUp, BsChevronDown } from "react-icons/bs"; // Import the icons
// import {HiMenu} from 'react-icons/hi'
// import {BsArrowLeft} from 'react-icons/bs'



const NavLinks = () => {
    const [open, setOpen] = useState(false)
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
    


  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 flex text-left md:cursor-pointer group">
          {/* <div className=""> */}
            <h5
              className="flex justify-between md:pr-0 py-1 pr-5 group text-center"
              onClick={() => {
                if (heading !== link.name) {
                  setHeading(link.name);
                } else {
                  setHeading("");
                }
                setSubHeading("");
              }}
            >
            <Link to={link.linkto}>
                {link.name}
            </Link> 
              <span className=" md:hidden inline" onClick={() => setOpen(!open)}>
                {open ? <BsChevronUp /> : <BsChevronDown />}
              </span>
              <span className="text-sm transition-all ease-in-out duration-300 md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180">
                <BsChevronDown/>
              </span>
            </h5>
            {/* </div> */}
            {link.submenu && (
              <div>
                <div className="absolute left-0 top-20 hidden group-hover:md:block hover:md:block">
                  {/* <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div> */}
                  <div className="bg-white shadow-2xl w-60vw p-5 z-10 grid grid-cols-3 gap-100 left-0 top-10 absolute">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index + 1} className="ml-0">
                        <h4 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h4>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className="text-sm text-gray-600 my-2.5" key={index+1}>
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index + 1}>
                <div>
                  <div className="">
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                        {subHeading === slinks.Head ? <BsChevronUp /> : <BsChevronDown />}
                    </span>
                  </h1>
                  </div>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li className="py-3 pl-14" key={index + 1}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
