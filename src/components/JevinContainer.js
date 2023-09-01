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
  top: calc(50% - 25.5px);
  left: 20px;
  letter-spacing: 0.22px;
`;
const Jevin = styled.div`
  position: absolute;
  top: calc(50% - 5.5px);
  left: 20px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-darkslategray-200);
`;
const LastName = styled.div`
  position: absolute;
  top: calc(50% - 25.5px);
  left: 270px;
  letter-spacing: 0.22px;
`;
const Koshy = styled.div`
  position: absolute;
  top: calc(50% - 5.5px);
  left: 270px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-darkslategray-200);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 115px);
  right: 0px;
  left: 0px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const JevinContainer = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <GroupItem />
      <FirstName>First Name</FirstName>
      <Jevin>Jevin</Jevin>
      <LastName>Last Name</LastName>
      <Koshy>Koshy</Koshy>
    </RectangleParentRoot>
  );
};

export default JevinContainer;
