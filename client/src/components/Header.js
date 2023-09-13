import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="w-screen h-screen bg-yellow-800/5 text-yellow-900 ">
      <div className=" sticky z-50 h-20 text-xl flex flex-row items-center border-b-2 border-yellow-600 border-solid">
        <Link to={"/"} className=" mr-auto  ml-3">
          Logo
        </Link>
        <Link to={"/"} className=" mx-5 hover:text-yellow-700">
          文章列表
        </Link>
        <Link to={"/about"} className=" mx-5 hover:text-yellow-700">
          關於我
        </Link>
        <Link
          to={"/"}
          className=" rounded-md mx-5 hover:text-white font-medium px-5 py-2 bg-yellow-500"
        >
          寫點東西
        </Link>
      </div>
      <div className=" text-yellow-700   text-center text-2xl"></div>
      {props.children}
    </div>
  );
}

export default Header;
