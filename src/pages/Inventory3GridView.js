import styled from "styled-components";
import FilterContainer from "../components/FilterContainer";

const Inventory3GridViewChild = styled.div`
  position: absolute;
  top: 85px;
  right: -8px;
  border-radius: var(--br-8xs) 0px 0px 0px;
  background-color: var(--color-gray-100);
  width: 1095px;
  height: 700px;
  display: none;
`;
const Inventory3GridViewItem = styled.div`
  position: absolute;
  top: 137px;
  left: 212px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 0.3px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 438px;
  height: 486px;
  display: none;
`;
const Inventory3GridViewInner = styled.div`
  position: absolute;
  top: 137px;
  right: 63px;
  border-radius: var(--br-xs);
  background-color: var(--color-aliceblue-200);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 483px;
  height: 424px;
  display: none;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  background-color: var(--color-white);
  width: 1280px;
  height: 768px;
  display: none;
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
const Inventory3GridViewChild1 = styled.div`
  position: absolute;
  top: 193px;
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
  color: var(--color-white);
`;
const Help = styled.div`
  position: absolute;
  top: 249px;
  left: 44px;
  letter-spacing: 0.72px;
`;
const Settings = styled.div`
  position: absolute;
  top: 298px;
  left: 44px;
  letter-spacing: 0.72px;
`;
const Home = styled.div`
  position: absolute;
  top: 150px;
  left: 44px;
  letter-spacing: 0.72px;
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
  background-color: var(--color-white);
  height: 2.1px;
`;
const GroupItem = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  top: calc(50% + 1.73px);
  right: 2.9px;
  left: 2.9px;
  background-color: var(--color-white);
  height: 2.1px;
`;
const GroupInner = styled.div`
  position: absolute;
  width: calc(100% - 5.81px);
  right: 2.9px;
  bottom: 0px;
  left: 2.9px;
  background-color: var(--color-white);
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
  background-color: var(--color-white);
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
const Layer2Icon = styled.img`
  position: absolute;
  top: 30px;
  left: 19.98px;
  width: 54.27px;
  height: 16.95px;
`;
const Inventory3GridViewChild2 = styled.div`
  position: absolute;
  top: 51.5px;
  left: 706.5px;
  border-top: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 217px;
  height: 2px;
  display: none;
`;
const Inventory3GridViewChild3 = styled.div`
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
const Inventory3GridViewChild4 = styled.div`
  position: absolute;
  top: 764px;
  right: 80px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const Inventory3GridViewChild5 = styled.div`
  position: absolute;
  top: 164.5px;
  left: 615.5px;
  border-right: 3px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 6px;
  height: 230px;
  display: none;
`;
const Inventory3GridViewChild6 = styled.div`
  position: absolute;
  top: 174px;
  right: 42px;
  background-color: var(--color-white);
  border: 1px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 1023px;
  height: 110px;
  display: none;
`;
const Inventory3GridViewChild7 = styled.div`
  position: absolute;
  top: 207px;
  left: 428.29px;
  border-right: 1.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 3px;
  height: 12.5px;
  display: none;
`;
const Inventory3GridViewChild8 = styled.div`
  position: absolute;
  top: 198px;
  right: 18px;
  border-radius: var(--br-smi);
  background-color: var(--color-aliceblue-300);
  width: 25px;
  height: 533px;
  display: none;
`;
const Inventory3GridViewChild9 = styled.div`
  position: absolute;
  top: 212px;
  right: 6px;
  border-right: 7px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 14px;
  height: 496px;
`;
const Inventory3GridViewChild10 = styled.div`
  position: absolute;
  top: 187.8px;
  right: -149px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const Inventory3GridViewChild11 = styled.div`
  position: absolute;
  top: 408.8px;
  right: -149px;
  border-top: 0.2px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327.2px;
  height: 0.4px;
  display: none;
`;
const Inventory3GridViewChild12 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--color-white);
  width: 1088px;
  height: 157px;
`;
const Inventory3GridViewChild13 = styled.div`
  position: absolute;
  top: 22px;
  left: 184px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0), #fff);
  width: 1088px;
  height: 189px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 116.91px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
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
  color: var(--color-white);
  font-family: var(--font-league-gothic);
`;
const NounNotification3408005Icon = styled.img`
  position: absolute;
  top: 38.51px;
  right: 120.3px;
  width: 21.16px;
  height: 27.64px;
`;
const TextSub = styled.div`
  position: absolute;
  top: 119px;
  left: 361px;
  letter-spacing: 0.38px;
  font-family: var(--font-roboto);
  color: var(--color-royalblue-100);
`;
const TextSub1 = styled.div`
  position: absolute;
  top: 119px;
  left: 461px;
  letter-spacing: 0.38px;
  font-family: var(--font-roboto);
  color: var(--color-dimgray-300);
`;
const TextSub2 = styled.div`
  position: absolute;
  top: 119px;
  left: 552px;
  letter-spacing: 0.38px;
  font-family: var(--font-roboto);
  color: var(--color-dimgray-300);
`;
const TextSub3 = styled.div`
  position: absolute;
  top: 120px;
  left: 297px;
  letter-spacing: 0.38px;
  font-family: var(--font-roboto);
  color: var(--color-dimgray-200);
`;
const TextSub4 = styled.div`
  position: absolute;
  top: 118px;
  left: 232.47px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.43px;
  font-family: var(--font-roboto);
  color: var(--color-royalblue-100);
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const Inventory3GridViewChild14 = styled.div`
  position: absolute;
  top: 107px;
  right: 47px;
  border-radius: var(--br-19xl);
  background-color: var(--color-royalblue-100);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 196px;
  height: 38px;
`;
const AddNewVehicle = styled.div`
  position: absolute;
  top: 113.5px;
  right: 65.5px;
  font-size: var(--font-size-mid);
  letter-spacing: 0.44px;
  color: var(--color-white);
  text-align: center;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 117.4px;
  right: 207.39px;
  width: 18.71px;
  height: 18.71px;
`;
const Inventory3GridViewChild15 = styled.div`
  position: absolute;
  top: 106px;
  left: 736px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue-300);
  width: 274px;
  height: 40px;
`;
const NounSearch1868255Icon = styled.img`
  position: absolute;
  top: 117.63px;
  left: 981.3px;
  width: 17.38px;
  height: 16.52px;
`;
const SearchSomething = styled.div`
  position: absolute;
  top: 114px;
  left: 746px;
  font-weight: 300;
  font-family: var(--font-roboto);
  color: var(--color-darkgray-100);
  text-align: center;
`;
const NounFilter787737Icon = styled.img`
  position: absolute;
  top: 125.42px;
  left: 214.7px;
  width: 42.72px;
  height: 39.17px;
`;
const Inventory3GridViewChild16 = styled.div`
  position: absolute;
  top: 121.5px;
  left: 283.5px;
  border-right: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 2px;
  height: 18px;
`;
const Inventory11 = styled.div`
  position: absolute;
  top: 37px;
  left: 208px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  font-weight: 300;
  font-family: var(--font-roboto);
  color: var(--color-gray-200);
  text-align: center;
`;
const Inventory3GridViewChild17 = styled.div`
  position: absolute;
  top: 155.5px;
  right: 42.5px;
  border-top: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 1030px;
  height: 2px;
`;
const Inventory3GridViewChild18 = styled.div`
  position: absolute;
  top: 153px;
  left: 358.5px;
  border-top: 3px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 74px;
  height: 6px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  height: calc(100% - 2.74px);
  top: 1.59px;
  bottom: 1.15px;
  left: 1.94px;
  border-radius: var(--br-lg);
  background-color: var(--color-royalblue-100);
  box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.16);
  width: 43.59px;
`;
const GroupChild3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-dimgray-300);
  height: 2.64px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 1.32px);
  right: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-dimgray-300);
  height: 2.64px;
`;
const GroupChild5 = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-dimgray-300);
  height: 2.64px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: calc(50% - 6.38px);
  left: calc(50% + 13.87px);
  width: 14.53px;
  height: 13.21px;
  opacity: 0.7;
`;
const GroupChild6 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-12xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild7 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 1.32px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild8 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild9 = styled.div`
  position: absolute;
  top: calc(50% - 1.32px);
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild10 = styled.div`
  position: absolute;
  top: calc(50% - 1.32px);
  left: calc(50% - 1.32px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild11 = styled.div`
  position: absolute;
  top: calc(50% - 1.32px);
  right: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild12 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild13 = styled.div`
  position: absolute;
  bottom: 0px;
  left: calc(50% - 1.32px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const GroupChild14 = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 2.64px;
  height: 2.64px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: calc(50% - 6.38px);
  left: calc(50% - 27.08px);
  width: 13.21px;
  height: 13.21px;
`;
const Path875Parent = styled.div`
  position: absolute;
  top: 36.21px;
  left: 312px;
  width: 85.85px;
  height: 29.16px;
`;
const Inventory3GridViewRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1297px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
  font-family: var(--font-avenir-next);
`;
const Inventory3GridView = () => {
  return (
    <Inventory3GridViewRoot>
      <Inventory3GridViewChild />
      <Inventory3GridViewItem />
      <Inventory3GridViewInner />
      <RectangleDiv />
      <LineDiv />
      <Inventory3GridViewChild1 />
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
            <Path1023Icon alt="" src="/path-10231.svg" />
            <GroupChild1 />
          </GarageInner>
        </GarageInner>
      </Garage>
      <NounLive3989668Icon alt="" src="/noun-live-39896681.svg" />
      <NounHelp568541Icon alt="" src="/noun-help-568541.svg" />
      <Path1998Icon alt="" src="/path-1998.svg" />
      <Layer2Icon alt="" src="/layer-2.svg" />
      <Inventory3GridViewChild2 />
      <Inventory3GridViewChild3 />
      <MrDoeWrapper>
        <MrDoe>Mr. Doe</MrDoe>
      </MrDoeWrapper>
      <Inventory3GridViewChild4 />
      <Inventory3GridViewChild5 />
      <Inventory3GridViewChild6 />
      <Inventory3GridViewChild7 />
      <Inventory3GridViewChild8 />
      <Inventory3GridViewChild9 />
      <Inventory3GridViewChild10 />
      <Inventory3GridViewChild11 />
      <FilterContainer
        carDimensions="/13@2x.png"
        carModel="Audi A4"
        carYear="2018"
        carTrimLevel="Premium"
        carPrice="16,540"
      />
      <FilterContainer
        carDimensions="/13@2x.png"
        carModel="Audi A4"
        carYear="2018"
        carTrimLevel="Premium"
        carPrice="16,540"
        propTop="unset"
        propBottom="80px"
        propLeft="212px"
        propRight="unset"
        propWidth="127px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 11.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/14@2x.png"
        carModel="Audi Q7"
        carYear="2020"
        carTrimLevel="2.0T quattro Premium Plus"
        carPrice="20,350"
        propTop="539px"
        propBottom="unset"
        propLeft="212px"
        propRight="unset"
        propWidth="130px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 13px)"
        propWidth1="calc(100% - 47px)"
        propRight1="22px"
      />
      <FilterContainer
        carDimensions="/15@2x.png"
        carModel="Audi A5"
        carYear="2021"
        carTrimLevel="Premium Plus"
        carPrice="18,900"
        propTop="190px"
        propBottom="unset"
        propLeft="559px"
        propRight="unset"
        propWidth="127px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 11.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/15@2x.png"
        carModel="Audi A5"
        carYear="2021"
        carTrimLevel="Premium Plus"
        carPrice="18,900"
        propTop="unset"
        propBottom="80px"
        propLeft="559px"
        propRight="unset"
        propWidth="127px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 11.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/16@2x.png"
        carModel="Bentley Bentayga"
        carYear="2020"
        carTrimLevel="Speed Trim"
        carPrice="16,520"
        propTop="539px"
        propBottom="unset"
        propLeft="559px"
        propRight="unset"
        propWidth="206px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 51px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/13@2x.png"
        carModel="Audi A7"
        carYear="2021"
        carTrimLevel="Technik 45 TFSI quattro"
        carPrice="17,300"
        propTop="190px"
        propBottom="unset"
        propLeft="unset"
        propRight="47px"
        propWidth="127px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 11.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/13@2x.png"
        carModel="Audi A7"
        carYear="2021"
        carTrimLevel="Technik 45 TFSI quattro"
        carPrice="17,300"
        propTop="unset"
        propBottom="80px"
        propLeft="unset"
        propRight="47px"
        propWidth="127px"
        propLetterSpacing="0.29px"
        propLeft1="calc(50% + 11.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <FilterContainer
        carDimensions="/17@2x.png"
        carModel="Bentley Continental GT"
        carYear="2021"
        carTrimLevel="Technik 45 TFSI quattro"
        carPrice="17,300"
        propTop="539px"
        propBottom="unset"
        propLeft="unset"
        propRight="47px"
        propWidth="249px"
        propLetterSpacing="unset"
        propLeft1="calc(50% + 72.5px)"
        propWidth1="220px"
        propRight1="unset"
      />
      <Inventory3GridViewChild12 />
      <Inventory3GridViewChild13 />
      <EllipseIcon alt="" src="/ellipse-359.svg" />
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
      <TextSub>By Make</TextSub>
      <TextSub1>By Year</TextSub1>
      <TextSub2>By Type</TextSub2>
      <TextSub3>Sort :</TextSub3>
      <TextSub4>Filter</TextSub4>
      <Inventory3GridViewChild14 />
      <AddNewVehicle>Add new vehicle</AddNewVehicle>
      <GroupIcon alt="" src="/group-10785.svg" />
      <Inventory3GridViewChild15 />
      <NounSearch1868255Icon alt="" src="/noun-search-1868255.svg" />
      <SearchSomething>Search something..</SearchSomething>
      <NounFilter787737Icon alt="" src="/nounfilter7877372.svg" />
      <Inventory3GridViewChild16 />
      <Inventory11>Inventory</Inventory11>
      <Inventory3GridViewChild17 />
      <Inventory3GridViewChild18 />
      <Path875Parent>
        <Path1023Icon alt="" src="/path-875.svg" />
        <GroupChild2 />
        <RectangleGroup>
          <GroupChild3 />
          <GroupChild4 />
          <GroupChild5 />
        </RectangleGroup>
        <RectangleContainer>
          <GroupChild6 />
          <GroupChild7 />
          <GroupChild8 />
          <GroupChild9 />
          <GroupChild10 />
          <GroupChild11 />
          <GroupChild12 />
          <GroupChild13 />
          <GroupChild14 />
        </RectangleContainer>
      </Path875Parent>
    </Inventory3GridViewRoot>
  );
};

export default Inventory3GridView;
