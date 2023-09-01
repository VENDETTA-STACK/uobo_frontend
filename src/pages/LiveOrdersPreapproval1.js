import styled from "styled-components";
import CustomerDetailsContainer from "../components/CustomerDetailsContainer";
import PreApprovedCard from "../components/PreApprovedCard";
import DocumentUploadForm from "../components/DocumentUploadForm";
import MortgageFormContainer from "../components/MortgageFormContainer";
import FormContainer3 from "../components/FormContainer3";
import IncomeDetailsForm from "../components/IncomeDetailsForm";
import FormContainer4 from "../components/FormContainer4";

const LiveOrdersPreapproval1Child = styled.div`
  position: absolute;
  top: 85px;
  right: -10px;
  border-radius: var(--br-8xs) 0px 0px 0px;
  background-color: var(--color-gray-100);
  width: 1095px;
  height: 694px;
  display: none;
`;
const LiveOrdersPreapproval1Item = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  background-color: var(--color-white);
  width: 1280px;
  height: 768px;
  display: none;
`;
const LiveOrdersPreapproval1Inner = styled.div`
  position: absolute;
  top: 134.5px;
  left: -2px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 895.5px;
  height: 1px;
  display: none;
  opacity: 0.45;
`;
const LineDiv = styled.div`
  position: absolute;
  top: -0.5px;
  left: 191px;
  border-right: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 2px;
  height: 769px;
`;
const LiveOrdersPreapproval1Child1 = styled.div`
  position: absolute;
  top: 333.5px;
  left: -13.5px;
  border-top: 1px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 1292px;
  height: 2px;
  display: none;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 438px;
  right: 72px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 969px;
  height: 83px;
  display: none;
`;
const LiveOrdersPreapproval1Child2 = styled.div`
  position: absolute;
  top: 535px;
  right: 72px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 969px;
  height: 83px;
  display: none;
`;
const LiveOrdersPreapproval1Child3 = styled.div`
  position: absolute;
  top: 632px;
  right: 72px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 969px;
  height: 83px;
  display: none;
`;
const LiveOrdersPreapproval1Child4 = styled.div`
  position: absolute;
  top: 729px;
  right: 72px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 969px;
  height: 83px;
  display: none;
`;
const LiveOrdersPreapproval1Child5 = styled.div`
  position: absolute;
  top: 581px;
  right: 102px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const LiveOrdersPreapproval1Child6 = styled.div`
  position: absolute;
  top: 678px;
  right: 102px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const LiveOrdersPreapproval1Child7 = styled.div`
  position: absolute;
  top: 147px;
  right: 86.5px;
  border-top: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 870.5px;
  height: 1px;
  display: none;
`;
const LiveOrdersPreapproval1Child8 = styled.div`
  position: absolute;
  top: 330.5px;
  right: 86.5px;
  border-top: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 870.5px;
  height: 1px;
  display: none;
`;
const LiveOrdersPreapproval1Child9 = styled.div`
  position: absolute;
  top: 482.5px;
  right: 71.5px;
  border-top: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 953px;
  height: 2px;
  display: none;
`;
const Layer2Icon = styled.img`
  position: absolute;
  top: 30px;
  left: 19.98px;
  width: 54.27px;
  height: 16.95px;
`;
const LiveOrdersPreapproval1Child10 = styled.div`
  position: absolute;
  top: 51.5px;
  left: 706.5px;
  border-top: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 217px;
  height: 2px;
  display: none;
`;
const LiveOrdersPreapproval1Child11 = styled.div`
  position: absolute;
  top: 51.5px;
  left: 205.5px;
  border-top: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 364px;
  height: 2px;
  display: none;
`;
const MrDoe = styled.div`
  position: absolute;
  top: 4px;
  left: calc(50% - 30px);
  letter-spacing: 0.38px;
  line-height: 20px;
`;
const MrDoeWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 569px;
  border-radius: var(--br-base);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 138px;
  height: 32px;
  display: none;
  color: var(--color-black);
`;
const LiveOrdersPreapproval1Child12 = styled.div`
  position: absolute;
  top: 764px;
  right: 80px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const LiveOrdersPreapproval1Child13 = styled.div`
  position: absolute;
  top: 95px;
  left: -28px;
  border-radius: var(--br-lg);
  background-color: var(--color-royalblue-100);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 210px;
  height: 36px;
`;
const LiveOrders = styled.div`
  position: absolute;
  top: 101px;
  left: 44px;
  letter-spacing: 0.72px;
`;
const Inventory = styled.div`
  position: absolute;
  top: 199px;
  left: 44px;
  letter-spacing: 0.72px;
  color: var(--color-darkslategray-200);
`;
const Help = styled.div`
  position: absolute;
  top: 249px;
  left: 44px;
  letter-spacing: 0.72px;
  color: var(--color-darkslategray-200);
`;
const Settings = styled.div`
  position: absolute;
  top: 298px;
  left: 44px;
  letter-spacing: 0.72px;
  color: var(--color-darkslategray-200);
`;
const Home = styled.div`
  position: absolute;
  top: 150px;
  left: 44px;
  letter-spacing: 0.72px;
  color: var(--color-darkslategray-200);
`;
const NounHome940422Icon = styled.img`
  position: absolute;
  top: 150.75px;
  left: 15.14px;
  width: 18.92px;
  height: 19.23px;
`;
const GroupChild = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  top: calc(50% + 4.63px);
  right: 2.9px;
  left: 2.9px;
  background-color: var(--color-darkslategray-200);
  height: 2.1px;
`;
const GroupItem = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  top: calc(50% + 1.73px);
  right: 2.9px;
  left: 2.9px;
  background-color: var(--color-darkslategray-200);
  height: 2.1px;
`;
const GroupInner = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  right: 2.9px;
  bottom: 0px;
  left: 2.9px;
  background-color: var(--color-darkslategray-200);
  height: 2.25px;
`;
const Path1023Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild1 = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  top: calc(50% - 1.18px);
  right: 2.9px;
  left: 2.9px;
  background-color: var(--color-darkslategray-200);
  height: 2.1px;
`;
const GarageInner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Garage = styled.div`
  position: absolute;
  top: 200.53px;
  left: 14.59px;
  width: 20.03px;
  height: 19.58px;
`;
const NounLive3989668Icon = styled.img`
  position: absolute;
  top: 105.04px;
  left: 18.04px;
  width: 13.63px;
  height: 15.34px;
`;
const NounHelp568541Icon = styled.img`
  position: absolute;
  top: 250.08px;
  left: 13.99px;
  width: 21.24px;
  height: 21.24px;
`;
const Path1998Icon = styled.img`
  position: absolute;
  top: 298.85px;
  left: 13.98px;
  width: 39.24px;
  height: 39.24px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  height: calc(100% - 0.5px);
  width: 100%;
  top: 0.5px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 4px);
  letter-spacing: 0.34px;
  line-height: 20px;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 102.5px;
  left: 152px;
  width: 20px;
  height: 20.5px;
  text-align: center;
  font-size: var(--font-size-sm);
`;
const LiveOrdersPreapproval1Child14 = styled.div`
  position: absolute;
  top: 142px;
  right: 131px;
  border-radius: var(--br-mid);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 500px;
  height: 408px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 158px;
  left: 782px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 20px;
  color: var(--color-gray-600);
`;
const CreditScore = styled.div`
  position: absolute;
  top: 163px;
  left: 679px;
  color: var(--color-gray-200);
`;
const NeedMoreInformation = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 102.41px);
  letter-spacing: 0.47px;
`;
const NeedMoreInformationWrapper = styled.div`
  position: absolute;
  top: 641px;
  right: 143.38px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 475.62px;
  height: 50px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-royalblue-100);
`;
const SendToDealertrack = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 80.41px);
  letter-spacing: 0.47px;
`;
const SendToDealertrackWrapper = styled.div`
  position: absolute;
  top: 581px;
  right: 143.38px;
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-100);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 475.62px;
  height: 50px;
  text-align: center;
  font-size: var(--font-size-lg);
`;
const Reject = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.47px;
`;
const RejectWrapper = styled.div`
  position: absolute;
  top: 710px;
  left: 874.38px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid var(--color-red-200);
  box-sizing: border-box;
  width: 50px;
  height: 24px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-red-200);
`;
const DocumentsUploaded = styled.div`
  position: absolute;
  top: 205px;
  left: 679px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 25px;
  font-family: var(--font-avenir-lt-std);
  color: var(--color-gray-600);
`;
const LiveOrdersPreapproval1Child15 = styled.div`
  position: absolute;
  top: 158px;
  left: 594px;
  border-right: 5px solid var(--color-darkgray-300);
  box-sizing: border-box;
  width: 10px;
  height: 533px;
`;
const LiveOrdersPreapproval1Child16 = styled.div`
  position: absolute;
  top: 158px;
  left: 594px;
  border-right: 5px solid var(--color-darkgray-400);
  box-sizing: border-box;
  width: 10px;
  height: 164px;
`;
const LiveOrdersPreapproval1Child17 = styled.div`
  position: absolute;
  top: 334.8px;
  left: 241.8px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const LiveOrdersPreapproval1Child18 = styled.div`
  position: absolute;
  top: 538.8px;
  left: 241.8px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const LiveOrdersPreapproval1Child19 = styled.div`
  position: absolute;
  top: 722.8px;
  left: 241.8px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const LiveOrdersPreapproval1Child20 = styled.div`
  position: absolute;
  top: 1173.8px;
  left: 241.8px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const LiveOrdersPreapproval1Child21 = styled.div`
  position: absolute;
  top: 1394.8px;
  left: 241.8px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const GroupChild2 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  height: 44px;
`;
const CurrentAddress = styled.div`
  position: absolute;
  top: 7px;
  left: 15px;
  letter-spacing: 0.48px;
  line-height: 25px;
`;
const Path1161Icon = styled.img`
  position: absolute;
  width: calc(100% - 8.04px);
  top: calc(50% - 4.5px);
  right: 4.04px;
  left: 4px;
  max-width: 100%;
  overflow: hidden;
  height: 9.1px;
`;
const ButtonExpand = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  border-radius: var(--br-9xs);
  width: 21px;
  height: 21px;
`;
const SuiteNumber = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Address = styled.div`
  position: absolute;
  top: 32px;
  left: 0px;
`;
const AddressType = styled.div`
  position: absolute;
  top: calc(50% - 4.5px);
  left: 0px;
`;
const StreetType = styled.div`
  position: absolute;
  top: calc(50% + 27.5px);
  left: 0px;
`;
const Direction = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0px;
`;
const PostalCode = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const Div2 = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const ChurchStreetWest = styled.p`
  margin: 0;
`;
const ChurchStreetWestNorfolkContainer = styled.div`
  position: absolute;
  top: 32px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Street = styled.div`
  position: absolute;
  top: calc(50% - 4.5px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Square = styled.div`
  position: absolute;
  top: calc(50% + 27.5px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const NorthWest = styled.div`
  position: absolute;
  right: -1px;
  bottom: 32px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const A0b1c2 = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const SuiteNumberParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 225px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 374px;
  left: 227px;
  width: 347px;
  height: 275px;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const LiveOrdersPreapproval1Child22 = styled.div`
  position: absolute;
  top: 0px;
  left: 210px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0), #fff);
  width: 375px;
  height: 173px;
`;
const LiveOrdersPreapproval1Child23 = styled.img`
  position: absolute;
  top: 40px;
  right: 116.91px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
const LiveOrdersPreapproval1Child24 = styled.div`
  position: absolute;
  top: 0px;
  right: 2px;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  width: 1085px;
  height: 85px;
`;
const GridCustoms = styled.div`
  position: absolute;
  top: calc(50% - 4.28px);
  left: 5.43px;
  letter-spacing: 0.64px;
  line-height: 5px;
  text-transform: uppercase;
`;
const LogoIcon = styled.div`
  position: absolute;
  height: calc(100% - 9.2px);
  width: calc(100% - 9.17px);
  top: 4.6px;
  right: 4.58px;
  bottom: 4.6px;
  left: 4.58px;
`;
const LogoIconWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 42.35px;
  border-radius: var(--br-62xl);
  background-color: var(--color-white);
  border: 2px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 47.96px;
  height: 47.96px;
  text-align: center;
  font-size: var(--font-size-8xs);
  font-family: var(--font-league-gothic);
`;
const NounNotification3408005Icon = styled.img`
  position: absolute;
  top: 38.51px;
  right: 120.3px;
  width: 21.16px;
  height: 27.64px;
`;
const MrDoeJohn = styled.div`
  position: absolute;
  top: 95px;
  left: 206px;
  font-size: var(--font-size-3xl);
  letter-spacing: 0.7px;
  line-height: 22px;
  color: var(--color-gray-600);
  display: inline-block;
  width: 537px;
`;
const LiveOrders1 = styled.div`
  position: absolute;
  top: 36px;
  left: 206px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.9px;
  line-height: 25px;
  color: var(--color-gray-200);
`;
const Pending = styled.div`
  position: absolute;
  top: 4px;
  left: calc(50% - 43px);
  letter-spacing: 0.38px;
  line-height: 20px;
`;
const PendingWrapper = styled.div`
  position: absolute;
  top: 37px;
  left: 319px;
  border-radius: var(--br-5xl);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 124px;
  height: 32px;
  text-align: center;
  color: var(--color-royalblue-100);
`;
const LiveOrdersPreapproval1Child25 = styled.div`
  position: absolute;
  top: 626px;
  left: 210px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
  width: 375px;
  height: 143px;
`;
const LiveOrdersPreapproval1Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1875px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-avenir-next);
`;
const LiveOrdersPreapproval1 = () => {
  return (
    <LiveOrdersPreapproval1Root>
      <LiveOrdersPreapproval1Child />
      <LiveOrdersPreapproval1Item />
      <LiveOrdersPreapproval1Inner />
      <LineDiv />
      <LiveOrdersPreapproval1Child1 />
      <RectangleDiv />
      <LiveOrdersPreapproval1Child2 />
      <LiveOrdersPreapproval1Child3 />
      <LiveOrdersPreapproval1Child4 />
      <LiveOrdersPreapproval1Child5 />
      <LiveOrdersPreapproval1Child6 />
      <LiveOrdersPreapproval1Child7 />
      <LiveOrdersPreapproval1Child8 />
      <LiveOrdersPreapproval1Child9 />
      <Layer2Icon alt="" src="/layer-2.svg" />
      <LiveOrdersPreapproval1Child10 />
      <LiveOrdersPreapproval1Child11 />
      <MrDoeWrapper>
        <MrDoe>Mr. Doe</MrDoe>
      </MrDoeWrapper>
      <LiveOrdersPreapproval1Child12 />
      <LiveOrdersPreapproval1Child13 />
      <LiveOrders>Live orders</LiveOrders>
      <Inventory>Inventory</Inventory>
      <Help>Help</Help>
      <Settings>Settings</Settings>
      <Home>Home</Home>
      <NounHome940422Icon alt="" src="/noun-home-940422.svg" />
      <Garage>
        <GarageInner>
          <GarageInner>
            <GroupChild />
            <GroupItem />
            <GroupInner />
            <Path1023Icon alt="" src="/path-1023.svg" />
            <GroupChild1 />
          </GarageInner>
        </GarageInner>
      </Garage>
      <NounLive3989668Icon alt="" src="/noun-live-3989668.svg" />
      <NounHelp568541Icon alt="" src="/noun-help-568541.svg" />
      <Path1998Icon alt="" src="/path-1998.svg" />
      <EllipseParent>
        <EllipseIcon alt="" src="/ellipse-369.svg" />
        <Div>6</Div>
      </EllipseParent>
      <CustomerDetailsContainer
        customerDetails="Vehicle Preferences"
        customerName="Type"
        customerFullName="(New) Sedan"
        customerDateOfBirth="Make and model"
        customerDateOfBirthText="Audi Q3"
        customerGenderText="Year"
        customerGender="2017 to 2021"
        customerContactNumber="Kilometers Driven"
        customerContactNumberText="Below 50,000 km"
        customerMaritalStatusText="Price Range"
        customerCommonLawText="Below $20,000"
        propTop="661px"
        propBackgroundColor="#eef2f8"
      />
      <PreApprovedCard />
      <LiveOrdersPreapproval1Child14 />
      <Div1>700</Div1>
      <CreditScore>Credit Score</CreditScore>
      <DocumentUploadForm propTop="245.23px" propTop1="calc(50% + 7.5px)" />
      <NeedMoreInformationWrapper>
        <NeedMoreInformation>Need more information?</NeedMoreInformation>
      </NeedMoreInformationWrapper>
      <SendToDealertrackWrapper>
        <SendToDealertrack>Send to dealertrack</SendToDealertrack>
      </SendToDealertrackWrapper>
      <RejectWrapper>
        <Reject>Reject</Reject>
      </RejectWrapper>
      <DocumentsUploaded>Documents Uploaded</DocumentsUploaded>
      <MortgageFormContainer />
      <FormContainer3 />
      <LiveOrdersPreapproval1Child15 />
      <LiveOrdersPreapproval1Child16 />
      <IncomeDetailsForm />
      <LiveOrdersPreapproval1Child17 />
      <LiveOrdersPreapproval1Child18 />
      <LiveOrdersPreapproval1Child19 />
      <LiveOrdersPreapproval1Child20 />
      <LiveOrdersPreapproval1Child21 />
      <RectangleGroup>
        <GroupChild2 />
        <CurrentAddress>Current Address</CurrentAddress>
        <ButtonExpand>
          <Path1161Icon alt="" src="/path-1161.svg" />
        </ButtonExpand>
        <SuiteNumberParent>
          <SuiteNumber>Suite Number</SuiteNumber>
          <Address>Address</Address>
          <AddressType>Address Type</AddressType>
          <StreetType>Street Type</StreetType>
          <Direction>Direction</Direction>
          <PostalCode>Postal Code</PostalCode>
          <Div2>32</Div2>
          <ChurchStreetWestNorfolkContainer>
            <ChurchStreetWest>1410 Church Street West</ChurchStreetWest>
            <ChurchStreetWest>Norfolk CountyToronto, Ontario</ChurchStreetWest>
          </ChurchStreetWestNorfolkContainer>
          <Street>Street</Street>
          <Square>Square</Square>
          <NorthWest>North-West</NorthWest>
          <A0b1c2>A0B 1C2</A0b1c2>
        </SuiteNumberParent>
      </RectangleGroup>
      <FormContainer4 />
      <LiveOrdersPreapproval1Child22 />
      <LiveOrdersPreapproval1Child23 alt="" src="/ellipse-359.svg" />
      <LiveOrdersPreapproval1Child24 />
      <LogoIconWrapper>
        <LogoIcon>
          <Path1023Icon alt="" src="/union-7.svg" />
          <GridCustoms>Grid Customs</GridCustoms>
        </LogoIcon>
      </LogoIconWrapper>
      <NounNotification3408005Icon
        alt=""
        src="/noun-notification-3408005.svg"
      />
      <MrDoeJohn>Mr. Doe John is waiting for getting Pre-Approved.</MrDoeJohn>
      <LiveOrders1>Live orders</LiveOrders1>
      <PendingWrapper>
        <Pending>+5 pending</Pending>
      </PendingWrapper>
      <LiveOrdersPreapproval1Child25 />
    </LiveOrdersPreapproval1Root>
  );
};

export default LiveOrdersPreapproval1;
