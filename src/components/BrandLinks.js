

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const BrandLinks = () => {
    const brandLinks = [
        {
            name: "Brend",
            submenu: true,
            linkto: "/brand",
            sublinks: [
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/adidas%20logo-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/CR-PUMA-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/neo-nike-logo-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/lacoste-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/newb-130x100.png"
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/brands/CR-REEBOK-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/asics-main-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/vans-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/converse-130x100.png"
                },
                {
                    img: "	https://courir.az/image/cache/catalog/courir/brands/newr-130x100.png"
                }
            ]
        }
    
    ]


    const [open, setOpen] = useState(false)
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {brandLinks.map((link) => (
        <div key={link.name}>
          <div className="px-3 flex text-left md:cursor-pointer group">
          <div className="flex">
            <h5
              className="flex justify-between md:pr-0 pr-5 group"
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
            </div>
            {link.submenu && (
              <div>
                <div className="absolute left-0 top-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-white shadow-2xl w-60vw p-5 z-10 grid grid-cols-4 gap-100 left-0 top-8 absolute">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index + 1} className="ml-0">
                        <img src={mysublinks.img} alt="img"/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
        </div>

        <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {/* {link.sublinks.map((slinks, index) => (
              <div key={index + 1}>
                <div>
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
            ))} */}
          </div>
     </div>
     ))}
    </>
  )
}

export default BrandLinks