import React from "react";

function Navbar() {
  const navLinks = [
    { title: "all members", id: 1 },
    { title: "completed", id: 2 },
    { title: "not completed", id: 3 },
  ];
  return (
    <header className="w-[95%] mx-auto">
      <div className="flex justify-between py-6 items-center">
        <div>
          <h2 className="md:text-[18px] text-[13px] tracking-wider font-light capitalize">
            admin dashboard
          </h2>
        </div>
        <div>
          <button className="flex items-center space-x-1 md:text-[13px] text-[8px] text-white font-medium tracking-wide py-1 px-2 md:py-1.5 md:px-5 bg-green-600 capitalize rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <span>add member</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center md:space-x-8 space-x-2">
          {navLinks.map((link) => (
            <p
              key={link.id}
              className="capitalize text-[8px] md:text-[13px] text-gray-500 cursor-pointer hover:text-gray-900 hover:border-b-2 hover:border-b-green-400"
            >
              {link.title}
            </p>
          ))}
        </div>
        <div className="flex items-center md:space-x-2 space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-5 md:h-5 w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="px-3 py-1 text-[10px] md:text-[13px] rounded-full focus:outline-none tracking-wider"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
