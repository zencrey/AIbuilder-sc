"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// react icons
import { IoIosArrowBack } from "react-icons/io";
import { FaRegStar, FaClock, FaRocketchat } from "react-icons/fa6";

const Sidebar = () => {
  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0",
      transition: {
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  // Check screen size on mount and when resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Automatically close sidebar on smaller screens
      } else {
        setIsOpen(true); // Open sidebar on larger screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className={`fixed top-0 left-0 bg-white text-gray shadow-xl z-[999] h-screen overflow-hidden md:relative ${
          isOpen ? "w-[16rem]" : "w-0"
        }`}
      >
        {isOpen && (
          <>
            <div className="flex justify-center mt-8 font-black text-red-700">
              <h1>SKODE</h1>
            </div>

            <div className="w-full flex justify-center mt-10 bg-slate-800 p-5 rounded-3xl">
              <span>@ Start a new chat</span>
            </div>

            {/* Menus */}
            <div className="flex flex-col h-full mt-10">
              <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-4 font-medium overflow-x-hidden">
                <li className="bg-slate-600 text-center p-2 flex items-center justify-center rounded-xl">
                  <Link href="/monitor">Starred Prompts</Link>
                </li>
                <li className="bg-slate-600 text-center p-2 flex items-center justify-center rounded-xl">
                  <Link href="/monitor">Recent Prompts</Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* Control button for larger screens */}
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer text-black text-[40px] border-black border-2 rounded-full"
          >
            <IoIosArrowBack />
          </motion.div>
        )}
      </motion.div>

      {/* Logo Button for Mobile View */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-5 z-50 cursor-pointer bg-slate-800 p-3 rounded-lg "
        >
          <FaRocketchat className="text-white" size={24} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
