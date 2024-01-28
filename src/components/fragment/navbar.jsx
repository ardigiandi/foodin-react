import { Link } from "react-router-dom";
import Foodin from "../../assets/img/FoodIn.svg";
import hamburger_nonactive from "../../assets/img/hamburger-nonactive.svg"
import { useState } from "react";
import cross from "../../assets/img/cross.svg";
import Button from "../element/button/button";

const Header = () => {
  const [toogleNavbar, setToogleNavbar] = useState(false);

  const email = localStorage.getItem("email")
  const handleLogout  = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
  }

  return (
    <nav className="bg-white px-5 mt-5">
      <div className="max-w-6xl mx-auto flex flex-row justify-between py-2 items-center">
        <div className="order-1 sm:order-2 lg:order-1">
          <img src={Foodin} alt="" />
        </div>
        <div className="hidden lg:flex lg:order-2 ">
          <ul className="flex gap-x-5">
            <li>
              <Link to="" className="text-base text-black hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="text-base text-black hover:text-blue-500">
                Categories
              </Link>
            </li>
            <li>
              <Link to="" className="text-base text-black hover:text-blue-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="" className="text-base text-black hover:text-blue-500">
                Brands
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="order-2 sm:order-1 lg:hidden"
          onClick={() => setToogleNavbar(toogleNavbar ? false : true)}
        >
          <img src={toogleNavbar ? cross : hamburger_nonactive} alt="" />
        </div>
        <div className="space-x-4 order-3 hidden sm:flex items-center">
          <p>{email}</p>
          {/* <Button className={"bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-xl"}>
            <Link to="/login">Login</Link>
          </Button> */}
          <Button className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-xl">
            <Link to="/login" onClick={handleLogout}>Logout</Link>
          </Button>
        </div>
      </div>
      <div
        className={`${
          toogleNavbar ? "block" : "hidden"
        } bg-blue-500 rounded-lg my-5 relative`}
      >
        <ul className="space-y-4 px-3 py-3">
          <li>
            <Link to="" className="text-base text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="text-base text-white">
              Categories
            </Link>
          </li>
          <li>
            <Link to="" className="text-base text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="" className="text-base text-white">
              Brands
            </Link>
          </li>
          <li className="block sm:hidden">
            <Link to="" className="text-base text-white">
              Login
            </Link>
          </li>
          <li className="block sm:hidden">
            <Link to="" className="text-base text-white">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
