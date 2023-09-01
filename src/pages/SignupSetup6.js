import styled from "styled-components";
import BranchForm from "../components/BranchForm";
import GridCustomsContainer from "../components/GridCustomsContainer";
import ContactForm from "../components/ContactForm";

const SignupSetup6Child = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 1280px;
  height: 768px;
`;
const Skip = styled.div`
  position: absolute;
  bottom: 95px;
  left: 281px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-dimgray-200);
  text-align: center;
  display: none;
`;
const SignupSetup6Item = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  background-color: var(--color-white);
  width: 897px;
  height: 768px;
`;
const PleaseEnterYour = styled.div`
  position: absolute;
  top: 155px;
  left: 62px;
  font-size: var(--font-size-3xl);
  letter-spacing: 0.35px;
  line-height: 22px;
  display: inline-block;
  width: 537px;
`;
const NumberOfLocations = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 109.5px);
  letter-spacing: 0.29px;
  line-height: 22px;
`;
const InformationIcon = styled.img`
  position: absolute;
  height: calc(100% - 5px);
  top: 3px;
  right: 0px;
  bottom: 2px;
  max-height: 100%;
  width: 19px;
`;
const NumberOfLocations1Parent = styled.div`
  position: absolute;
  top: 499px;
  left: 339px;
  width: 219px;
  height: 24px;
  text-align: center;
  font-size: var(--font-size-lg);
`;
const ButtonProceedChild = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 25.5px);
  right: 0%;
  left: 0%;
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-100);
  height: 51px;
`;
const Proceed = styled.div`
  position: absolute;
  top: 7px;
  left: calc(50% - 44px);
  letter-spacing: 0.38px;
`;
const ButtonProceed = styled.div`
  position: absolute;
  bottom: 30px;
  left: 322px;
  width: 252px;
  height: 51px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
`;
const AddLocationDetails = styled.div`
  position: absolute;
  top: 617px;
  left: 245px;
  font-size: var(--font-size-mini);
  letter-spacing: 0.6px;
  line-height: 20px;
  color: var(--color-darkslategray-200);
  text-align: center;
  display: inline-block;
  width: 405px;
  opacity: 0.7;
`;
const Uobo = styled.div`
  position: absolute;
  top: 33px;
  right: 46px;
  font-size: var(--font-size-5xl);
  letter-spacing: 8.4px;
  font-family: var(--font-merel-regular-);
  color: var(--color-gray-1400);
`;
const AFewMore = styled.div`
  position: absolute;
  top: calc(50% + 12px);
  left: calc(50% - 324.5px);
  letter-spacing: 0.72px;
  display: inline-block;
  width: 650px;
`;
const StartSellingNow = styled.div`
  position: absolute;
  top: calc(50% - 33px);
  left: calc(50% - 324.5px);
  font-size: var(--font-size-11xl);
  letter-spacing: 1.35px;
  line-height: 30px;
  color: var(--color-royalblue-100);
`;
const TextWelcome = styled.div`
  position: absolute;
  top: 48px;
  left: 62px;
  width: 649px;
  height: 66px;
  color: var(--color-dimgray-300);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-aliceblue-100);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 493px;
  height: 59px;
`;
const AddAnotherDealership = styled.div`
  position: absolute;
  top: 15px;
  left: 115.61px;
  letter-spacing: 0.3px;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 20px;
  left: 87.4px;
  width: 19.71px;
  height: 19.8px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 535px;
  left: 200px;
  width: 493px;
  height: 59px;
  font-size: var(--font-size-lgi);
  color: var(--color-royalblue-100);
`;
const LineDiv = styled.div`
  position: absolute;
  top: 247.5px;
  left: 974.5px;
  border-right: 2px solid var(--color-silver-100);
  box-sizing: border-box;
  width: 4px;
  height: 49px;
`;
const SignupSetup6Child1 = styled.div`
  position: absolute;
  top: 169.5px;
  left: 974.5px;
  border-right: 2px solid var(--color-silver-100);
  box-sizing: border-box;
  width: 4px;
  height: 59px;
`;
const SignupSetup6Child2 = styled.div`
  position: absolute;
  top: 169.5px;
  left: 974.5px;
  border-right: 2px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 4px;
  height: 42px;
`;
const GroupInner = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Path1152Icon = styled.img`
  position: absolute;
  width: calc(100% - 7.46px);
  top: calc(50% - 5.28px);
  right: 3.06px;
  left: 4.4px;
  max-width: 100%;
  overflow: hidden;
  height: 10.95px;
  display: none;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - 4.7px);
  letter-spacing: 0.45px;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 159px;
  left: 964.7px;
  width: 24px;
  height: 24px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 4.5px);
  letter-spacing: 0.48px;
`;
const EllipseGroup = styled.div`
  position: absolute;
  top: 295px;
  left: 964.5px;
  width: 24px;
  height: 24px;
  color: var(--color-white);
`;
const Path1152Icon2 = styled.img`
  position: absolute;
  width: calc(100% - 7.63px);
  top: calc(50% - 5.35px);
  right: 3.14px;
  left: 4.49px;
  max-width: 100%;
  overflow: hidden;
  height: 11.1px;
  display: none;
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - 4.5px);
  letter-spacing: 0.45px;
`;
const EllipseContainer = styled.div`
  position: absolute;
  top: 227px;
  left: 964.5px;
  width: 24px;
  height: 24px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
`;
const Team = styled.div`
  position: absolute;
  top: 228px;
  left: 1001px;
  letter-spacing: 0.48px;
  display: inline-block;
  width: 187px;
`;
const DealershipLocation = styled.div`
  position: absolute;
  top: 160px;
  left: 1001px;
  letter-spacing: 0.48px;
  color: var(--color-royalblue-100);
  display: inline-block;
  width: 187px;
`;
const Inventory = styled.div`
  position: absolute;
  top: 296px;
  left: 1001px;
  letter-spacing: 0.48px;
  display: inline-block;
  width: 187px;
`;
const Path3975Icon = styled.img`
  position: absolute;
  top: -43.75px;
  left: 894.25px;
  width: 0.5px;
  height: 856.5px;
  opacity: 0.45;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  background-color: var(--color-black);
  width: 1280px;
  height: 768px;
  opacity: 0.4;
`;
const IfYourDealership = styled.div`
  position: absolute;
  top: calc(50% - 33px);
  left: calc(50% - 135px);
  letter-spacing: 0.16px;
  line-height: 22.4px;
  display: inline-block;
  width: 271px;
`;
const Popup = styled.div`
  position: absolute;
  top: 357px;
  left: 384px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 328px;
  height: 134px;
  color: var(--color-darkslategray-200);
`;
const SignupSetup6Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 768px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-next);
`;
const SignupSetup6 = () => {
  return (
    <SignupSetup6Root>
      <SignupSetup6Child />
      <Skip>Skip</Skip>
      <BranchForm />
      <SignupSetup6Item />
      <SignupSetup6Item />
      <PleaseEnterYour>
        Please enter your dealership locations details.
      </PleaseEnterYour>
      <NumberOfLocations1Parent>
        <NumberOfLocations>Number of locations: 1</NumberOfLocations>
        <InformationIcon alt="" src="/information.svg" />
      </NumberOfLocations1Parent>
      <ButtonProceed>
        <ButtonProceedChild />
        <Proceed>Proceed</Proceed>
      </ButtonProceed>
      <AddLocationDetails>
        Add location details for all your dealership branches. You could also
        add/edit them later.
      </AddLocationDetails>
      <Uobo>UOBO</Uobo>
      <TextWelcome>
        <AFewMore>
          A few more details are required to finish your account setup.
        </AFewMore>
        <StartSellingNow>Start Selling Now</StartSellingNow>
      </TextWelcome>
      <GridCustomsContainer
        dealerLegalName="Dealership legal name"
        dealershipAddress="Grid Customs"
        carDimensions="/iconcorrect15.svg"
      />
      <GridCustomsContainer
        dealerLegalName="Dealership Address"
        dealershipAddress="884 New Street, London, ON A1B 2C6, CA"
        carDimensions="/iconcorrect16.svg"
        propTop="320px"
        propLeft="200px"
      />
      <ContactForm />
      <RectangleParent>
        <GroupChild />
        <AddAnotherDealership>
          Add another dealership location
        </AddAnotherDealership>
        <GroupItem alt="" src="/group-10573.svg" />
      </RectangleParent>
      <LineDiv />
      <SignupSetup6Child1 />
      <SignupSetup6Child2 />
      <EllipseParent>
        <GroupInner alt="" src="/ellipse-2051.svg" />
        <Path1152Icon alt="" src="/path-1152.svg" />
        <Div>1</Div>
      </EllipseParent>
      <EllipseGroup>
        <GroupInner alt="" src="/ellipse-205.svg" />
        <Path1152Icon alt="" src="/path-1152.svg" />
        <Div1>3</Div1>
      </EllipseGroup>
      <EllipseContainer>
        <GroupInner alt="" src="/ellipse-205.svg" />
        <Path1152Icon2 alt="" src="/path-11521.svg" />
        <Div2>2</Div2>
      </EllipseContainer>
      <Team>Team</Team>
      <DealershipLocation>Dealership Location</DealershipLocation>
      <Inventory>Inventory</Inventory>
      <Path3975Icon alt="" src="/path-3975.svg" />
      <RectangleDiv />
      <Popup>
        <IfYourDealership>
          If your dealership has more than one branch, enter details for each
          branches using the option below.
        </IfYourDealership>
      </Popup>
    </SignupSetup6Root>
  );
};

export default SignupSetup6;
