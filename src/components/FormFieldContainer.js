import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  height: 100%;
  width: 48.98%;
  top: 0%;
  right: 51.02%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 100%;
  width: 48.98%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 51.02%;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
`;
const FirstName = styled.div`
  position: absolute;
  top: calc(50% - 15.5px);
  left: 20px;
  letter-spacing: 0.32px;
`;
const LastName = styled.div`
  position: absolute;
  top: calc(50% - 15.5px);
  left: 270px;
  letter-spacing: 0.32px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 172.5px);
  right: 0px;
  left: 0px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop};
`;
const FormFieldContainer = ({ propTop }) => {
  return (
    <RectangleParentRoot propTop={propTop}>
      <GroupChild />
      <GroupItem />
      <FirstName>First Name</FirstName>
      <LastName>Last Name</LastName>
    </RectangleParentRoot>
  );
};

export default FormFieldContainer;
