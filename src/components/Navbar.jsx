/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo} // votre logo ici
            alt="logo"
            className="smooth sm:w-[100px] sm:h-[100px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
  Otherwise delete this if you don't need it. */}
          <p className="typewriter text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] font-poppins font-extrabold uppercase text-black mr-2">
            Tristan Bossard
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "textColor-current" : "text-black"
              } textColor-notcurrent text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
        top-0 left-0 w-screen h-[100vh] z-10 menu ${
          toggle ? "menu-open" : "menu-close"
        }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-4 -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? "textColor-current" : "text-black"
                    } text-[14px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
