import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import progress3Step3 from "../../../../assets/images/progress3Step3.png";
import { CheckMark } from "../../../../assets/icons/icons";
import { AggrementPerks } from "../../../../assets/constants/const";

const DealerAgreement = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="flex w-2/3">
      {/* LEFT SECTION */}
      <div className="w-3/4 text-left mt-4 mr-3 pr-5">
      {/* <Link to="/home" className="text-2xl text-black no-underline" >U O B O</Link> */}
        {/* Heading */}
        <p className="text-xl my-7">Review Agreement</p>

        {/* What you get */}
        <p className="text-lg text-slate-500 mt-10">
          What you get
        </p>

        {AggrementPerks.map((data) => (
          <div key={data.id} className="flex items-center mb-3">
            <CheckMark width="20" height="20" />
            <p className="mb-0 ml-3">{data.text}</p>
          </div>
        ))}

        <div className="text-lg font-semibold text-slate-500 mt-10">
          What you pay
        </div>
        <div className="mb-0 my-3">5% commission on each deal</div>
        <div className="mb-0 my-3">
          $350 breakdown for the one time fee (Photo-shoots, on-boarding and
          equipments)
        </div>

        <hr />

        <div className="mb-4 my-3">
          By clicking `I agree`, you confirm that you have reviewed and accepted
          the{" "}
          <a href="#" className="text-blue">
            terms and condition
          </a>
        </div>

        {/* <Link
          // to="/dealer-logo-and-location"
          to="/home"
          className="bg-blue-500 text-xl text-white text-center py-2 rounded-2xl w-48 float-right mb-10 no-underline"
        >
          I agree
        </Link> */}
        
<button onClick={handleShow} className="bg-blue-500 text-xl text-white text-center py-2 rounded-2xl w-48 float-right mb-10 no-underline">
I agree
</button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/3 ml-3 border-l pl-5">
        {/* UPPER PROGRESS */}
        <div className="flex mt-20">
          {/* Progress */}
          <img className="h-28" src={progress3Step3} alt="uoboFlow" />
          {/* Status Name*/}
          <div className="w-2/3 mt-1">
            <p className="text-blue-500 text-left ml-2">Getting Started</p>
            <p className="text-blue-500 text-left ml-2">
              Customize partnership
            </p>
            <p className="text-blue-500 text-left ml-2">Review Agreement</p>
          </div>
        </div>
        {/* LOWER INFORMATION */}
        <div className="bg-blue-50 w-4/5 mt-20 p-3 mb-10">
          <p className="ml-3 text-left">Why choose uobo?</p>
          <ul className="text-sm text-left">
            <li className="list-disc">More sales</li>
            <li className="list-disc">Easy to use</li>
            <li className="list-disc">Time saving</li>
            <li className="list-disc">Hassle-free</li>
            <li className="list-disc">Keeping updated</li>
          </ul>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Welcome to UOBO family!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DealerAgreement;
