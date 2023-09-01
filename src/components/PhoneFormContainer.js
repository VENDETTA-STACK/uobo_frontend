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
const PersonalPhoneNumber = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  font-size: var(--font-size-sm);
  letter-spacing: 0.22px;
`;
const Div = styled.div`
  position: absolute;
  top: 27px;
  left: 96px;
  letter-spacing: 0.32px;
  color: var(--color-darkslategray-200);
`;
const Div1 = styled.div`
  position: absolute;
  top: 27px;
  left: 68px;
  letter-spacing: 0.32px;
  color: var(--color-gray-600);
`;
const GroupItem = styled.div`
  position: absolute;
  top: 27.77px;
  left: 64px;
  border-right: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 2px;
  height: 26.57px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 490px;
  height: 65px;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 98.04%;
  width: 100%;
  top: 1.96%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-6xs);
  background-color: var(--color-white);
`;
const Ca = styled.div`
  position: absolute;
  top: 0%;
  left: 8.7%;
  letter-spacing: 0.32px;
`;
const PolygonIcon = styled.img`
  position: absolute;
  height: 17.51%;
  width: 13.04%;
  top: 45.52%;
  right: 8.7%;
  bottom: 36.97%;
  left: 78.26%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleGroup = styled.div`
  position: absolute;
  bottom: 9.44px;
  left: 16px;
  width: 46px;
  height: 28.56px;
  color: var(--color-gray-400);
`;
const GroupParentRoot = styled.div`
  position: absolute;
  height: 8.13%;
  width: 100%;
  top: 45%;
  right: 0%;
  bottom: 46.88%;
  left: 0%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const PhoneFormContainer = () => {
  return (
    <GroupParentRoot>
      <RectangleParent>
        <GroupChild />
        <PersonalPhoneNumber>Personal Phone Number</PersonalPhoneNumber>
        <Div>(123) 123-113</Div>
        <Div1>+1</Div1>
        <GroupItem />
      </RectangleParent>
      <RectangleGroup>
        <GroupInner />
        <Ca>CA</Ca>
        <PolygonIcon alt="" src="/polygon-3.svg" />
      </RectangleGroup>
    </GroupParentRoot>
  );
};

export default PhoneFormContainer;
