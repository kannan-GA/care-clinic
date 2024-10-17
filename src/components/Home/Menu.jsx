// import React from "react";
// import { Link } from "react-router-dom";

// const Menu = ({ menuItems, isMdScreen, isMenuOpen, handleLinkClick }) => {
//   return (
//     <ul
//       className={`${
//         isMdScreen
//           ? "md:flex md:space-x-6 md:relative" // Classes for md and above
//           : `absolute w-full h-screen top-0 left-0 bg-slate-50 flex flex-col gap-5 items-center justify-center transition-transform duration-500 ease-in ${
//               isMenuOpen
//                 ? "translate-x-0 opacity-100 pointer-events-auto"
//                 : "translate-x-full opacity-0 pointer-events-none invisible"
//             }` // Classes for mobile
//       }`}
//     >
//       {menuItems.map((item, index) => (
//         <li key={index} onClick={handleLinkClick}>
//           <Link
//             to={item.link}
//             className="md:text-inherit text-black hover:text-gray-300"
//           >
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Menu;

import React from "react";
import { Link } from "react-router-dom";

const Menu = ({
  menuItems,
  isMdScreen,
  isMenuOpen,
  handleLinkClick,
  handleBookClick,
}) => {
  return (
    <div
      className={`${
        isMdScreen
          ? "md:flex md:space-x-6 md:relative" // Classes for md and above
          : `absolute w-full  top-0 left-0 bg-slate-50 flex flex-col gap-5 items-center justify-center transition-transform duration-500 ease-in min-h-full ${
              isMenuOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none invisible"
            }` // Classes for mobile
      }`}
    >
      <ul className="flex flex-col justify-center items-center gap-5 md:flex-row md:text-sm lg:gap-7 py-6 lg:py-3 md:py-3  ">
        {menuItems.map((item, index) => (
          <li key={index} onClick={handleLinkClick}>
            <Link
              to={item.link}
              className="md:text-inherit lg:text-base  xl:text-base text-black hover:text-gray-300"
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Render "Book Appointment" as an <li> for mobile */}
        {!isMdScreen && (
          <li>
            <button
              className="bg-yellow-400 text-blue-900 font-bold py-2 px-4  rounded hover:bg-yellow-300 md:text-xl text-xs"
              onClick={handleBookClick}
            >
              Book Appointment
            </button>
          </li>
        )}
      </ul>

      {/* Render "Book Appointment" as a separate button outside the <ul> for larger screens */}
      {/* {isMdScreen && (
        <button
          className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 md:text-xl text-xs"
          onClick={handleBookClick}
        >
          Book Appointment
        </button>
      )} */}
    </div>
  );
};

export default Menu;
