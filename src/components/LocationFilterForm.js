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
  top: 16px;
  left: 20px;
  letter-spacing: 0.32px;
`;
const Path3030Icon = styled.img`
  position: absolute;
  top: 27.5px;
  right: 20px;
  width: 15px;
  height: 10px;
  display: none;
`;
const RectangleParentRoot = styled.div`position: absolute;
  height: 9.49%;
  width: 100%;
  top: 79.56%;
  right: 0%;
  bottom: 10.95%;
  left: 0%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
`;
const LocationFilterForm = ({ locationCount, propTop, propBottom }) => {
  return (
    <RectangleParentRoot propTop={propTop} propBottom={propBottom}>
      <GroupChild />
      <NumberOfLocations>{locationCount}</NumberOfLocations>
      <Path3030Icon alt="" src="/path-3030.svg" />
    </RectangleParentRoot>
  );
};

export default LocationFilterForm;
