/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import ProgressBar from "react-bootstrap/ProgressBar";

import { DownArrow, Search } from "../../../../assets/icons/icons";
import GMC_Yukon from "../../../../assets/images/GMC_Yukon.jpeg";

const CurrentStatus = () => {
  const [isSearch, setIsSearch] = useState(false);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      className="flex items-center border rounded-xl px-2"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <DownArrow width="15" height="15" className="ml-2 fill-blue-500" />
    </div>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <>
      <div className="flex xs:flex-wrap md:flex-nowrap justify-between items-center w-full">
        {/* Left Side */}
        <div className="flex">
          <div>Current Status</div>
          <div className="ml-2">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">A-Z</Dropdown.Item>
                <Dropdown.Item eventKey="2">Z-A</Dropdown.Item>
                <Dropdown.Item eventKey="3" /* active */>Price</Dropdown.Item>
                <Dropdown.Item eventKey="4">Approved</Dropdown.Item>
                <Dropdown.Item eventKey="4">Waiting for approval</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* Right Side */}
        <div
          className="bg-slate-200 p-2 rounded-xl flex items-center xs:mt-3 sm:mt-0"
          onClick={() => setIsSearch(true)}
        >
          <Search className="fill-blue-500" />
          {isSearch && (
            <Form.Control
              type="text"
              placeholder=""
              className="ml-3"
              autoFocus
              size="sm"
            />
          )}
        </div>
      </div>

      {/* Table */}
      <Table responsive="sm">
        <thead>
          <tr className="text-start">
            <th>Vehicle Details</th>
            <th>Customer Name</th>
            <th>Documents</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start align-middle">
              <div className="flex">
                <img
                  className="h-16 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div>
                  <div>2016 GMC Yukon</div>
                  <div>$32,985</div>
                  <ProgressBar
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                    height="1px"
                  />
                </div>
              </div>
            </td>
            <td className="text-start align-middle">
              <div>John Philippe</div>
              <div className="text-blue-500 text-sm">Awating Bank Approval</div>
            </td>
            <td>
              <div className="bg-blue-50 flex items-center w-fit rounded-lg">
                <img
                  className="h-10 rounded-lg m-2"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div className="mx-2 text-blue-500">+2more</div>
              </div>
            </td>
            <td className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded p-1 w-1/2">
                Approve
              </div>
              <div className="text-blue-500">Approve with condition</div>
            </td>
          </tr>
          <tr>
            <td className="text-start align-middle">
              <div className="flex">
                <img
                  className="h-16 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div>
                  <div>2016 GMC Yukon</div>
                  <div>$32,985</div>
                  <ProgressBar
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                    height="1px"
                  />
                </div>
              </div>
            </td>
            <td className="text-start align-middle">
              <div>John Philippe</div>
              <div className="text-blue-500 text-sm">Awating Bank Approval</div>
            </td>
            <td>
              <div className="bg-blue-50 flex items-center w-fit rounded-lg">
                <img
                  className="h-10 rounded-lg m-2"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div className="mx-2 text-blue-500">+2more</div>
              </div>
            </td>
            <td className="align-middle">
              <div>You will be notified when the bank approves</div>
            </td>
          </tr>
          <tr>
            <td className="text-start align-middle">
              <div className="flex">
                <img
                  className="h-16 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div>
                  <div>2016 GMC Yukon</div>
                  <div>$32,985</div>
                  <ProgressBar
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                    height="1px"
                  />
                </div>
              </div>
            </td>
            <td className="text-start align-middle">
              <div>John Philippe</div>
              <div className="text-blue-500 text-sm">Awating Bank Approval</div>
            </td>
            <td>
              <div className="bg-blue-50 flex items-center w-fit rounded-lg">
                <img
                  className="h-10 rounded-lg m-2"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div className="mx-2 text-blue-500">+2more</div>
              </div>
            </td>
            <td className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded p-1 w-1/2">
                Approve
              </div>
              <div className="text-blue-500">Approve with condition</div>
            </td>
          </tr>
          <tr>
            <td className="text-start align-middle">
              <div className="flex">
                <img
                  className="h-16 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div>
                  <div>2016 GMC Yukon</div>
                  <div>$32,985</div>
                  <ProgressBar
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                    height="1px"
                  />
                </div>
              </div>
            </td>
            <td className="text-start align-middle">
              <div>John Philippe</div>
              <div className="text-blue-500 text-sm">Awating Bank Approval</div>
            </td>
            <td>
              <div className="bg-blue-50 flex items-center w-fit rounded-lg">
                <img
                  className="h-10 rounded-lg m-2"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />
                <img
                  className="h-10 rounded-lg mr-3"
                  src={GMC_Yukon}
                  alt="GMC_Yukon"
                />

                <div className="mx-2 text-blue-500">+2more</div>
              </div>
            </td>
            <td className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded p-1 w-1/2">
                Approve
              </div>
              <div className="text-blue-500">Approve with condition</div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CurrentStatus;
