import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu"; // Import the Menu component

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  // Menu items data
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Treatments", link: "/treatments" },
    { label: "Schedule", link: "/schedule" },
    { label: "Contact Us", link: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookClick = () => {
    navigate("/appointment");
    setIsMenuOpen(false);
  };

  // Close the menu when a link is clicked if screen size is below md
  const handleLinkClick = () => {
    if (!isMdScreen) {
      setIsMenuOpen(false); // Close menu
    }
  };

  return (
    <>
      <nav className="bg-blue-900 text-white py-2 px-8 flex justify-between items-center fixed w-full z-50">
        <div className="flex items-center gap-3">
          <img
            className="w-[20%] cursor-pointer"
            src="assets/Website_logo 1.png"
            onClick={() => {
              navigate("/");
            }}
          />
          <div
            className="text-sm font-bold cursor-pointer lg:text-base xl:text-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Care Clinic
          </div>
        </div>

        {/* Render the Menu component */}
        <Menu
          menuItems={menuItems}
          isMdScreen={isMdScreen}
          isMenuOpen={isMenuOpen}
          handleLinkClick={handleLinkClick}
          handleBookClick={handleBookClick}
        />

        {isMdScreen && (
          <button
            className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 lg:py-1.5  rounded hover:bg-yellow-300 md:text-[10px] text-xs lg:text-base xl:text-base"
            onClick={handleBookClick}
          >
            Book Appointment
          </button>
        )}

        <button className="md:hidden flex" onClick={toggleMenu}>
          {isMenuOpen ? (
            <HiX size={40} className="z-50 text-black" />
          ) : (
            <HiMenu size={40} />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
