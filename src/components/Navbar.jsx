import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Vishwa_Chandrasekara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Vishwa &nbsp;
            <span className='sm:block hidden'> | Fullstack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='hidden sm:flex flex-row gap-6 items-center'>
          <button
            onClick={handleDownloadCV}
            className='border border-secondary text-secondary hover:bg-secondary hover:text-primary px-4 py-2 rounded-md font-medium transition-colors'
          >
            Download CV
          </button>
          <a href="https://github.com/Vishwaschandrasekara5" className='text-secondary hover:text-white text-[24px]'>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishwa-s-chandrasekara-6a1071247" className='text-secondary hover:text-white text-[24px]'>
            <FaLinkedin />
          </a>
          <a href="https://www.twitter.com/Vishwa_Sandun5" className='text-secondary hover:text-white text-[24px]'>
            <FaXTwitter />
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className='flex flex-col gap-4 mt-4'>
                <button
                  onClick={handleDownloadCV}
                  className='border border-secondary text-secondary hover:bg-secondary hover:text-primary px-4 py-2 rounded-md font-medium transition-colors'
                >
                  Download CV
                </button>
                <div className='flex flex-row gap-6'>
                  <a href="#" className='text-secondary hover:text-white text-[20px]'>
                    <FaGithub />
                  </a>
                  <a href="#" className='text-secondary hover:text-white text-[20px]'>
                    <FaLinkedin />
                  </a>
                  <a href="#" className='text-secondary hover:text-white text-[20px]'>
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
