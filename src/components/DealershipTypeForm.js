import styled from "styled-components";
import LocationFilterForm from "./LocationFilterForm";
import FormFieldContainer from "./FormFieldContainer";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-300);
  width: 490px;
  height: 65px;
`;
const DealershipType = styled.div`
  position: absolute;
  top: 16px;
  left: 20px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-gray-1200);
`;
const New = styled.div`
  position: absolute;
  top: 16px;
  left: 246px;
  letter-spacing: 0.35px;
`;
const PreOwned = styled.div`
  position: absolute;
  top: 16px;
  left: 359px;
  letter-spacing: 0.35px;
`;
const ToggleOffOnChild = styled.div`
  position: absolute;
  height: 65.22%;
  width: 97.3%;
  top: 17.39%;
  right: 2.7%;
  bottom: 17.39%;
  left: 0%;
  border-radius: var(--br-4xs);
  background-color: var(--color-royalblue-100);
`;
const ToggleOffOnItem = styled.img`
  position: absolute;
  height: calc(100% + 15px);
  width: 102.7%;
  top: 0px;
  right: -40.54%;
  bottom: -15px;
  left: 14px;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ToggleOffOn = styled.div`
  position: absolute;
  top: 21px;
  left: 199px;
  width: 37px;
  height: 23px;
`;
const ToggleOffOnInner = styled.div`
  position: absolute;
  height: 65.22%;
  width: 86.49%;
  top: 17.39%;
  right: 0%;
  bottom: 17.39%;
  left: 13.51%;
  border-radius: var(--br-4xs);
  background-color: var(--color-darkgray-100);
`;
const EllipseIcon = styled.img`
  position: absolute;
  height: 165.22%;
  width: 102.7%;
  top: 0%;
  right: -2.7%;
  bottom: -65.22%;
  left: 0%;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ToggleOffOn1 = styled.div`
  position: absolute;
  top: 21px;
  left: 312px;
  width: 37px;
  height: 23px;
`;
const RectangleParent = styled.div`
  position: absolute;
  height: 9.49%;
  width: 100%;
  top: 90.51%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-400);
`;
const GroupItem = styled.div`
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
const Email = styled.div`
  position: absolute;
  top: 16px;
  left: 20px;
  letter-spacing: 0.32px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  height: 9.49%;
  width: 100%;
  top: 46.72%;
  right: 0%;
  bottom: 43.8%;
  left: 0%;
`;
const PersonalPhoneNumber = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  letter-spacing: 0.22px;
`;
const PersonalPhoneNumber1 = styled.div`
  position: absolute;
  top: 28px;
  left: 96px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.29px;
  color: var(--color-gainsboro-100);
`;
const Div = styled.div`
  position: absolute;
  top: 26.06px;
  left: 68px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-gray-600);
`;
const LineDiv = styled.div`
  position: absolute;
  top: 27.77px;
  left: 64px;
  border-right: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 2px;
  height: 26.57px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 490px;
  height: 65px;
`;
const RectangleDiv = styled.div`
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
const GroupDiv = styled.div`
  position: absolute;
  bottom: 9.44px;
  left: 16px;
  width: 46px;
  height: 28.56px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-400);
`;
const GroupContainer = styled.div`
  position: absolute;
  height: 9.49%;
  width: 100%;
  top: 35.77%;
  right: 0%;
  bottom: 54.74%;
  left: 0%;
  font-size: var(--font-size-sm);
`;
const Address = styled.div`
  position: absolute;
  top: 17px;
  left: 20px;
  letter-spacing: 0.32px;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  height: 9.49%;
  width: 100%;
  top: 10.95%;
  right: 0%;
  bottom: 79.56%;
  left: 0%;
`;
const RectangleParent2 = styled.div`
  position: absolute;
  height: 9.49%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 90.51%;
  left: 0%;
`;
const IConfirmThat = styled.div`
  position: absolute;
  top: calc(50% + 60.5px);
  left: calc(50% - 174px);
  letter-spacing: 0.6px;
  line-height: 22.4px;
  color: var(--color-dimgray-300);
  display: inline-block;
  width: 389px;
  opacity: 0.6;
`;
const ToggleOffOn2 = styled.div`
  position: absolute;
  top: calc(50% + 73.5px);
  left: 20px;
  width: 37px;
  height: 23px;
  opacity: 0.6;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  right: 104px;
  bottom: 122px;
  width: 490px;
  height: 685px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const DealershipTypeForm = () => {
  return (
    <GroupParentRoot>
      <RectangleParent>
        <GroupChild />
        <DealershipType>Dealership type</DealershipType>
        <New>New</New>
        <PreOwned>Pre-owned</PreOwned>
        <ToggleOffOn>
          <ToggleOffOnChild />
          <ToggleOffOnItem alt="" src="/ellipse-3311.svg" />
        </ToggleOffOn>
        <ToggleOffOn1>
          <ToggleOffOnInner />
          <EllipseIcon alt="" src="/ellipse-3311.svg" />
        </ToggleOffOn1>
      </RectangleParent>
      <LocationFilterForm locationCount="Number of Locations" />
      <LocationFilterForm
        locationCount="Company Role"
        propTop="68.61%"
        propBottom="21.9%"
      />
      <RectangleGroup>
        <GroupItem />
        <Email>Email</Email>
      </RectangleGroup>
      <GroupContainer>
        <RectangleContainer>
          <GroupItem />
          <PersonalPhoneNumber>Personal Phone Number</PersonalPhoneNumber>
          <PersonalPhoneNumber1>Personal Phone Number</PersonalPhoneNumber1>
          <Div>+1</Div>
          <LineDiv />
        </RectangleContainer>
        <GroupDiv>
          <RectangleDiv />
          <Ca>CA</Ca>
          <PolygonIcon alt="" src="/polygon-3.svg" />
        </GroupDiv>
      </GroupContainer>
      <FormFieldContainer />
      <RectangleParent1>
        <GroupItem />
        <Address>Address</Address>
      </RectangleParent1>
      <RectangleParent2>
        <GroupItem />
        <Address>Dealership Name</Address>
      </RectangleParent2>
      <IConfirmThat>
        I confirm that the above informations are correct and reachable
      </IConfirmThat>
      <ToggleOffOn2>
        <ToggleOffOnInner />
        <EllipseIcon alt="" src="/ellipse-3311.svg" />
      </ToggleOffOn2>
    </GroupParentRoot>
  );
};

export default DealershipTypeForm;
