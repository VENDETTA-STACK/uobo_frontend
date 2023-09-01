import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
  width: 490px;
  height: 65px;
`;
const NumberOfLocations = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  letter-spacing: 0.22px;
`;
const Div = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-darkslategray-200);
`;
const Path3029Icon = styled.img`
  position: absolute;
  top: 27.5px;
  right: 20px;
  width: 15px;
  height: 10px;
  display: none;
`;
const RectangleParentRoot = styled.div`position: absolute;
  height: 8.13%;
  width: 100%;
  top: 82.5%;
  right: 0%;
  bottom: 9.38%;
  left: 0%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
`;
const NumberedCard = ({ locationCount, employeeRole, propTop, propBottom }) => {
  return (
    <RectangleParentRoot propTop={propTop} propBottom={propBottom}>
      <GroupChild />
      <NumberOfLocations>{locationCount}</NumberOfLocations>
      <Div>{employeeRole}</Div>
      <Path3029Icon alt="" src="/path-3030.svg" />
    </RectangleParentRoot>
  );
};

export default NumberedCard;
