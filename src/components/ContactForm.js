import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 493px;
  height: 65px;
`;
const DealershipContactNumber = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  letter-spacing: 0.22px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 29.69px;
  left: 24.66px;
  border-right: 1px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  width: 2px;
  height: 25.15px;
`;
const IconCorrect = styled.img`
  position: absolute;
  top: 22px;
  right: 14px;
  width: 21px;
  height: 21px;
  display: none;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 395px;
  left: 200px;
  width: 493px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  left: ${(p) => p.propLeft};
`;
const ContactForm = ({ propLeft }) => {
  return (
    <RectangleParentRoot propLeft={propLeft}>
      <GroupChild />
      <DealershipContactNumber>
        Dealership contact number
      </DealershipContactNumber>
      <GroupItem />
      <IconCorrect alt="" src="/iconcorrect17.svg" />
    </RectangleParentRoot>
  );
};

export default ContactForm;
