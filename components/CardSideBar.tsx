import Link from "next/link";
import React from "react";
import { FaCompass, FaHome, FaPlay, FaRegListAlt } from "react-icons/fa";

const CardSideBar = () => {
  return (
    <div className="">
      <div className="grid-rows-3 gap-2">
        <div className="w-auto h-auto bg-gray-800 text-white p-4">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded">
                <FaHome className="text-xl" />
                <span>Home</span>
              </div>
            </Link>
            <Link href="/explore">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded">
                <FaCompass className="text-xl" />
                <span>Explore</span>
              </div>
            </Link>
            <Link href="/shorts">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded">
                <FaPlay className="text-xl" />
                <span>Shorts</span>
              </div>
            </Link>
            <Link href="/subscriptions">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded">
                <FaRegListAlt className="text-xl" />
                <span>Subscriptions</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
