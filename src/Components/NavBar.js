import React, { Fragment } from "react";

const NavBar = () => {
  const size = "text-sm hover:text-blue-500 hover:underline cursor-pointer";
  return (
    <Fragment>
      <ul className="flex space-x-10  justify-end mr-40  py-8">
        <li></li>
        <li className={size}>Home</li>
        <li className={size}>About US </li>
        <li className={size}>Community</li>
        <li className={size}>Public Utilities</li>
        <li className={size}>EZA Controller</li>
        <li className={size}>Refrences</li>
        <li className={size}>Carrers</li>
        <button className="bg-blue-400 px-5  py-3 -mt-4 text-white hover:text-black ">Request a quote</button>
      </ul>
    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533.png" alt="" className="w-40 -mt-28 mx-8" />
    </Fragment>
  );
};

export default NavBar;
