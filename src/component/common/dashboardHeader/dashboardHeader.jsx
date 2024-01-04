import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  Home,
  Play,
  Bell,
  Help,
  Settings,
  Inventory,
} from "../../../assets/icons/icons";

const DashboardHeader = () => {
  const [isActive, setIsActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("live-order")) {
      setIsActive("live-order");
    } else if (location.pathname.includes("dealer-dashboard")) {
      setIsActive("dealer-dashboard");
    } else if (location.pathname.includes("inventory")) {
      setIsActive("inventory");
    } else if (location.pathname.includes("help")) {
      setIsActive("help");
    } else if (location.pathname.includes("setting")) {
      setIsActive("setting");
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-end sm:justify-between w-full relative">
      {/* Responsive header Button */}
      <div className="sm:hidden absolute z-10 left-2">
        <Navbar expand="lg" bg="primary" className="bg-body-tertiary p-0">
          <Container className="bg-transparent p-0 rounded">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav p-0"
              className="shadow-none"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div
                  className={`flex items-center justify-start m-2 cursor-pointer ${
                    isActive === "live-order" &&
                    "bg-blue-500 text-white rounded p-2"
                  }`}
                  href="/live-order"
                >
                  <Play
                    className={`mr-1 ${
                      isActive === "live-order" && "fill-white"
                    }`}
                  />{" "}
                  Live order
                  <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
                    2
                  </div>
                </div>
                <div
                  className={`flex items-center justify-start m-2 cursor-pointer ${
                    isActive === "dealer-dashboard" &&
                    "bg-blue-500 text-white rounded p-2"
                  }`}
                  href="/dealer-dashboard"
                >
                  <Home
                    className={`mr-1 ${
                      isActive === "dealer-dashboard" && "fill-white"
                    }`}
                  />{" "}
                  Home
                  <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
                    2
                  </div>
                </div>
                <div
                  className={`flex items-center justify-start m-2 cursor-pointer ${
                    isActive === "inventory" &&
                    "bg-blue-500 text-white rounded p-2"
                  }`}
                  href="/inventory"
                >
                  <Inventory
                    className={`mr-1 ${
                      isActive === "inventory" && "fill-white"
                    }`}
                  />{" "}
                  Inventory
                  <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
                    2
                  </div>
                </div>
                <div
                  className={`flex items-center justify-start m-2 cursor-pointer ${
                    isActive === "help" && "bg-blue-500 text-white rounded p-2"
                  }`}
                  href="/help"
                >
                  <Help
                    className={`mr-1 ${isActive === "help" && "fill-white"}`}
                  />{" "}
                  Help
                  <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
                    2
                  </div>
                </div>
                <div
                  className={`flex items-center justify-start m-2 cursor-pointer ${
                    isActive === "setting" &&
                    "bg-blue-500 text-white rounded p-2"
                  }`}
                  href="/setting"
                >
                  <Settings
                    className={`mr-1 ${isActive === "setting" && "fill-white"}`}
                  />{" "}
                  Settings
                  <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
                    2
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="hidden sm:flex">
        {/* Live Order */}
        <div
          className={`${
            isActive === "live-order" && "bg-blue-500 px-2 rounded-full"
          } flex items-center justify-center ml-5 cursor-pointer`}
          onClick={() => navigate("/live-order")}
        >
          <Play
            height="16"
            className={`${
              isActive === "live-order" ? "fill-white" : "fill-black"
            }`}
          />
          <div
            className={`${
              isActive === "live-order" ? "text-white" : "text-black"
            } ml-1 hidden lg:flex`}
          >
            Live orders
          </div>
          <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
            2
          </div>
        </div>

        {/*Dealer Home*/}
        <div
          className={`${
            isActive === "dealer-dashboard" && "bg-blue-500 px-2 rounded-full"
          } flex items-center justify-center ml-5 cursor-pointer`}
          onClick={() => navigate("/dealer-dashboard")}
        >
          <Home
            height="16"
            className={`${
              isActive === "dealer-dashboard" ? "fill-white" : "fill-black"
            }`}
          />
          <div
            className={`${
              isActive === "dealer-dashboard" ? "text-white" : "text-black"
            } ml-1 hidden lg:flex`}
          >
            Home
          </div>
          <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
            2
          </div>
        </div>

        {/* Inventory")} */}
        <div
          className={`${
            isActive === "inventory" && "bg-blue-500 px-2 rounded-full"
          } flex items-center justify-center ml-5 cursor-pointer`}
          onClick={() => navigate("/inventory")}
        >
          <Inventory
            height="16"
            className={`${
              isActive === "inventory" ? "fill-white" : "fill-black"
            }`}
          />
          <div
            className={`${
              isActive === "inventory" ? "text-white" : "text-black"
            } ml-1 hidden lg:flex`}
          >
            Inventory
          </div>
          <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
            2
          </div>
        </div>

        {/* Help */}
        <div
          className={`${
            isActive === "help" && "bg-blue-500 px-2 rounded-full"
          } flex items-center justify-center ml-5 cursor-pointer`}
          onClick={() => navigate("/help")}
        >
          <Help
            height="16"
            className={`${isActive === "help" ? "fill-white" : "fill-black"}`}
          />
          <div
            className={`${
              isActive === "help" ? "text-white" : "text-black"
            } ml-1 hidden lg:flex`}
          >
            Help
          </div>
          <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
            2
          </div>
        </div>

        {/* Setting */}
        <div
          className={`${
            isActive === "setting" && "bg-blue-500 px-2 rounded-full"
          } flex items-center justify-center ml-5 cursor-pointer`}
          onClick={() => navigate("/setting")}
        >
          <Settings
            height="16"
            className={`${
              isActive === "setting" ? "fill-white" : "fill-black"
            }`}
          />
          <div
            className={`${
              isActive === "setting" ? "text-white" : "text-black"
            } ml-1 hidden lg:flex`}
          >
            Settings
          </div>
          <div className="bg-red-500 text-white text-xs w-4 h-4 rounded-full ml-1">
            2
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center">
        <Bell className="cursor-pointer" />
        <div className="bg-gray-500 w-12 h-12 rounded-full ml-5 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;
