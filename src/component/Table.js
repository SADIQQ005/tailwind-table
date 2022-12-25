import React from "react";

export default function Table() {
  const usersInfo = [
    {
      id: 1,
      name: "sam smith",
      company: "apple",
      plan: "part time",
      price: "86.90",
      method: "credit card",
      status: "completed",
      avatar: "./images/profile1.jpg",
    },
    {
      id: 2,
      name: "sam smith",
      company: "airbnb",
      plan: "staff",
      price: "90.99",
      method: "credit card",
      status: "not completed",
      avatar: "./images/profile2.jpg",
    },
    {
      id: 3,
      name: "sam smith",
      company: "microsoft",
      plan: "part time",
      price: "50.98",
      method: "credit card",
      status: "completed",
      avatar: "./images/profile3.jpg",
    },
    {
      id: 4,
      name: "sam smith",
      company: "airbnb",
      plan: "staff",
      price: "1099",
      method: "cash",
      status: "not completed",
      avatar: "./images/profile4.jpg",
    },
    {
      id: 5,
      name: "sam smith",
      company: "google",
      plan: "part time",
      price: "99.99",
      method: "credit card",
      status: "completed",
      avatar: "./images/profile5.jpg",
    },
    {
      id: 6,
      name: "sam smith",
      company: "spotify",
      plan: "staff",
      price: "50",
      method: "cash",
      status: "not completed",
      avatar: "./images/profile6.jpg",
    },
  ];

  return (
    <>
      <table className="w-[95%] mx-auto bg-white shadow-xl rounded-md">
        <thead className="border-b-2 border-gray-100">
          <tr>
            <th className="p-4 w-3/12 text-[8px] md:text-[13px] font-medium text-gray-500 capitalize tracking-wider text-left">
              name
            </th>
            <th className="w-72 p-4 px-3 text-[8px] md:text-[13px] font-medium text-gray-500 capitalize tracking-wider text-left">
              plan
            </th>
            <th className="w-72 p-4 px-3 text-[8px] md:text-[13px] font-medium text-gray-500 capitalize tracking-wider text-left"></th>
            <th className="w-72 p-4 px-3 text-[8px] md:text-[13px] font-medium hidden lg:table-cell text-gray-500 capitalize tracking-wider text-left">
              payment method
            </th>
            <th className="w-72 p-4 px-3 text-[8px] md:text-[13px] font-medium text-gray-500 capitalize tracking-wider text-left">
              status
            </th>
            <th className="w-60 p-4 px-3 text-[8px] md:text-[13px] font-light capitalize tracking-wider text-left hidden lg:table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {usersInfo.map((info) => (
            <tr
              key={info.id}
              className="hover:bg-green-200 hover:bg-opacity-50 border-b-2 border-gray-200"
            >
              <td className="p-4 text-[8px] md:text-[13px] tracking-wide capitalize">
                <div className="flex space-x-6">
                  <img
                    className="md:w-8 md:h-8 w-5 h-5 rounded-full"
                    src={info.avatar}
                    alt="profile"
                  />
                  <div>
                    <p className="font-semibold">{info.name}</p>
                    <span className="text-green-600 text-opacity-80 font-semibold">
                      {info.company}
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-[8px] md:text-[13px] tracking-wide capitalize">
                {info.plan}
              </td>
              <td className="p-4 text-[8px] md:text-[13px] tracking-wide capitalize">
                ${info.price}
              </td>
              <td className="p-4 text-sm  tracking-wide capitalize hidden lg:table-cell">
                {info.method}
              </td>
              <td className="p-4 text-[5px] md:text-[13px] tracking-wide capitalize">
                {info.status === "completed" ? (
                  <span className="bg-green-500 bg-opacity-40 text-green-600 text-opacity-80 p-2 rounded-full">
                    {info.status}
                  </span>
                ) : (
                  <span className="bg-red-500 bg-opacity-40 text-red-600 text-opacity-80 p-2 rounded-full">
                    {info.status}
                  </span>
                )}
              </td>
              <td className="p-4 text-sm tracking-wide capitalize"></td>
              <td className="p-4 text-sm  tracking-wide capitalize hidden lg:table-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-gray-300 bg-opacity-50 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
