import React from "react";
import { Link } from "react-router-dom";

import {
  Bell,
  Help,
  Home,
  Inventory,
  Play,
  Settings,
} from "../../assets/icons/icons";

const DashboardHeader = () => {
  return (
    <>
      {/* SIDEBAR */}
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="text-left ml-4">
            <Link to="/" className="text-2xl font-bold text-black no-underline">
              Uobo
            </Link>
          </div>
          <ul className="space-y-2 font-medium mt-5 pl-3">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline"
              >
                <Play className="flex-shrink-0" />
                <span className="ms-2 whitespace-nowrap text-left">
                  Live orders
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-red-400 dark:text-white">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline"
              >
                <Home className="flex-shrink-0" />
                <span className=" ms-2 whitespace-nowrap text-left">Home</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-red-400 dark:text-white">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline"
              >
                <Inventory className="flex-shrink-0" />
                <span className=" ms-2 whitespace-nowrap text-left">
                  Inventory
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-red-400 dark:text-white">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline"
              >
                <Help className="flex-shrink-0" />
                <span className=" ms-2 whitespace-nowrap text-left">Help</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-red-400 dark:text-white">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline"
              >
                <Settings className="flex-shrink-0" />
                <span className=" ms-2 whitespace-nowrap text-left">
                  Settings
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-400 rounded-full dark:bg-red-400 dark:text-white">
                  3
                </span> */}
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ml-56 flex justify-between">
        {/* USERNAME */}
        <div className="mt-4 ml-2">
          <div className="text-left text-lg">Hey Jevin,</div>
          <div className="text-sm text-slate-400">
            Here's what happening in your dashboard.
          </div>
        </div>
        <div className="flex items-center">
          <Bell />
          <div className="mx-3 border-blue-400 border-2 rounded-full h-10 w-10 flex items-center justify-center">
            <div className="bg-black rounded-full h-8 w-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
