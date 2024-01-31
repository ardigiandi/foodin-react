import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto flex flex-col mt-16 gap-y-12">
      <div className="flex flex-row justify-between items-stretch">
        <div className="flex flex-col gap-y-4 mx-auto lg:mx-0 px-4 lg:px-0 items-center text-center lg:items-start lg:text-left">
          <img src="/img/FoodIn.svg" alt="" className="w-[108px]" />
          <p className="text-base text-gray-500">
            FoodIn is an online store dealing with food product FoodIn provide <br />
            cheap, high quality, products to customers <br />
          </p>
        </div>
        <div className="flex flex-col hidden lg:block">
          <h1 className="text-base font-bold">For Beginner</h1>
          <ul className="mt-4 gap-y-2">
            <li>
              <Link to="" className="text-sm text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Career
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Promotion
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col hidden lg:block">
          <h1 className="text-base font-bold">Overview</h1>
          <ul className="mt-4 gap-y-2">
            <li>
              <Link to="" className="text-sm text-gray-500">
                Product
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Categories
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col hidden lg:block">
          <h1 className="text-base font-bold">Explore Us</h1>
          <ul className="mt-4 gap-y-2">
            <li>
              <Link to="" className="text-sm text-gray-500">
                Our Career
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col hidden lg:block">
          <h1 className="text-base font-bold">Connect Us</h1>
          <ul className="mt-4 gap-y-2">
            <li>
              <Link to="" className="text-sm text-gray-500">
                support@foodin.com
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                021 - 234 -456
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm text-gray-500">
                Sudirman, South Jakarta
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="flex justify-center text-base text-gray-500">Copyright 2022 • All Rights Reserved FoodIn by Giatinaja</h1>
    </footer>
  );
};

export default Footer;
