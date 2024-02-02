import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../element/table/table";

const User = () => {
  const [tooglesidebar, settooglesidebar] = useState(false);

  return (
    <section className="bg-gray-100 flex">
      <div
        className={`${
          tooglesidebar ? "block" : "hidden"
        } sidebar w-full lg:w-[320px] h-screen flex flex-col bg-white`}
      >
        <div
          className="mt-3 flex justify-end px-3 cursor-pointer"
          onClick={() => settooglesidebar(tooglesidebar ? false : true)}
        >
          <FaXmark size={25} />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/Mask group.svg"
            alt=""
            className="w-[88px] h-[88px] mt-7"
          />
          <h1 className="text-lg font-bold mt-5">Rendi Fadillah</h1>
          <p className="text-base">rendiganteng@gmail.com</p>
        </div>

        <div className="flex flex-col mt-12 gap-y-7 ml-7">
          <div className="flex items-center gap-x-4">
            <img src="/img/shopping-bag.svg" alt="" />
            <Link to="/landingpage" className="text-base text-gray-500">
              Back to Store
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <img src="/img/shop.svg" alt="" />
            <p className="text-base text-gray-500">Transaction</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img src="/img/cards.svg" alt="" />
            <p className="text-base text-gray-500">Card</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img src="/img/messages-3.svg" alt="" />
            <p className="text-base text-gray-500">Massages</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img src="/img/setting-2.svg" alt="" />
            <p className="text-base text-gray-500">Settings</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img src="/img/Logout.svg" alt="" />
            <p className="text-base text-gray-500">Logout</p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen">
        <div
          className={`${
            tooglesidebar ? "hidden" : "block"
          } p-2.5 cursor-pointer`}
          onClick={() => settooglesidebar(tooglesidebar ? false : true)}
        >
          <IoMenu size={30} />
        </div>
        <div className="mx-0 lg:mx-12 mb-13 mt-6">
          <h1 className="text-2xl font-bold">My Transaction</h1>
          <p className="text-base my-3 text-gray-500">
            Track your all transaction here
          </p>
          <Table />
        </div>
      </div>
    </section>
  );
};

export default User;
