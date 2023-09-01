import styled from "styled-components";
import CardImageContainer from "../components/CardImageContainer";
import AudiCard from "../components/AudiCard";
import FilterContainer2 from "../components/FilterContainer2";

const InventoryFilter1Child = styled.div`
  position: absolute;
  top: 85px;
  right: -8px;
  border-radius: var(--br-8xs) 0px 0px 0px;
  background-color: var(--color-gray-100);
  width: 1095px;
  height: 700px;
  display: none;
`;
const InventoryFilter1Item = styled.div`
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
const InventoryFilter1Inner = styled.div`
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
const InventoryFilter1Child1 = styled.div`
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
  color: var(--color-darkslategray-200);
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
const InventoryFilter1Child2 = styled.div`
  position: absolute;
  top: 51.5px;
  left: 706.5px;
  border-top: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 217px;
  height: 2px;
  display: none;
`;
const InventoryFilter1Child3 = styled.div`
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
const InventoryFilter1Child4 = styled.div`
  position: absolute;
  right: 80px;
  bottom: 3px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const InventoryFilter1Child5 = styled.div`
  position: absolute;
  top: 164.5px;
  left: 615.5px;
  border-right: 3px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 6px;
  height: 230px;
  display: none;
`;
const InventoryFilter1Child6 = styled.div`
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
const InventoryFilter1Child7 = styled.div`
  position: absolute;
  top: 207px;
  left: 428.29px;
  border-right: 1.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 3px;
  height: 12.5px;
  display: none;
`;
const InventoryFilter1Child8 = styled.div`
  position: absolute;
  right: 18px;
  bottom: 37px;
  border-radius: var(--br-smi);
  background-color: var(--color-aliceblue-300);
  width: 25px;
  height: 533px;
  display: none;
`;
const A = styled.div`
  position: absolute;
  top: 0px;
  left: 2px;
  letter-spacing: 0.24px;
  color: var(--color-royalblue-100);
`;
const B = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const C = styled.div`
  position: absolute;
  top: 38px;
  left: 2px;
  letter-spacing: 0.24px;
`;
const D = styled.div`
  position: absolute;
  top: 57px;
  left: 2px;
  letter-spacing: 0.24px;
`;
const E = styled.div`
  position: absolute;
  top: 76px;
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const F = styled.div`
  position: absolute;
  top: calc(50% - 152.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const G = styled.div`
  position: absolute;
  top: calc(50% - 133.5px);
  left: 2px;
  letter-spacing: 0.24px;
`;
const H = styled.div`
  position: absolute;
  top: calc(50% - 114.5px);
  left: 2px;
  letter-spacing: 0.24px;
`;
const I = styled.div`
  position: absolute;
  top: calc(50% - 95.5px);
  left: calc(50% - 2px);
  letter-spacing: 0.24px;
`;
const J = styled.div`
  position: absolute;
  top: calc(50% - 76.5px);
  left: calc(50% - 3px);
  letter-spacing: 0.24px;
`;
const K = styled.div`
  position: absolute;
  top: calc(50% - 57.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const L = styled.div`
  position: absolute;
  top: calc(50% - 38.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const M = styled.div`
  position: absolute;
  top: calc(50% - 19.5px);
  left: 0px;
  letter-spacing: 0.24px;
`;
const N = styled.div`
  position: absolute;
  top: calc(50% - 0.5px);
  left: 1px;
  letter-spacing: 0.24px;
`;
const O = styled.div`
  position: absolute;
  top: calc(50% + 18.5px);
  left: 1px;
  letter-spacing: 0.24px;
`;
const P = styled.div`
  position: absolute;
  top: calc(50% + 37.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const Q = styled.div`
  position: absolute;
  top: calc(50% + 56.5px);
  left: 1px;
  letter-spacing: 0.24px;
`;
const R = styled.div`
  position: absolute;
  top: calc(50% + 75.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const S = styled.div`
  position: absolute;
  top: calc(50% + 94.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const T = styled.div`
  position: absolute;
  top: calc(50% + 113.5px);
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const U = styled.div`
  position: absolute;
  top: calc(50% + 132.5px);
  left: 2px;
  letter-spacing: 0.24px;
`;
const V = styled.div`
  position: absolute;
  bottom: 76px;
  left: 2px;
  letter-spacing: 0.24px;
`;
const W = styled.div`
  position: absolute;
  bottom: 57px;
  left: 0px;
  letter-spacing: 0.24px;
`;
const X = styled.div`
  position: absolute;
  bottom: 38px;
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const Y = styled.div`
  position: absolute;
  bottom: 19px;
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const Z = styled.div`
  position: absolute;
  bottom: 0px;
  left: calc(50% - 4px);
  letter-spacing: 0.24px;
`;
const AParent = styled.div`
  position: absolute;
  right: 24px;
  bottom: 60px;
  width: 14px;
  height: 495px;
  display: none;
  text-align: center;
  font-size: var(--font-size-mini);
  font-family: var(--font-avenir-lt-std);
`;
const InventoryFilter1Child9 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--color-gray-1100);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  width: 1088px;
  height: 225px;
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
  color: var(--color-gray-200);
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
const Image1 = styled.div`
  position: absolute;
  top: 179px;
  left: 233px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Make = styled.div`
  position: absolute;
  top: 179px;
  left: 360px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Year = styled.div`
  position: absolute;
  top: 179px;
  left: 655px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Model = styled.div`
  position: absolute;
  top: 179px;
  left: 494px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Trim = styled.div`
  position: absolute;
  top: 179px;
  left: 787px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Price = styled.div`
  position: absolute;
  top: 179px;
  left: 949px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const Location1 = styled.div`
  position: absolute;
  top: 179px;
  right: 122px;
  font-size: var(--font-size-mid);
  text-align: center;
`;
const InventoryFilter1Child10 = styled.div`
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
const InventoryFilter1Child11 = styled.div`
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
  text-align: center;
`;
const NounFilter787737Icon = styled.img`
  position: absolute;
  top: 125.42px;
  left: 214.7px;
  width: 42.72px;
  height: 39.17px;
`;
const InventoryFilter1Child12 = styled.div`
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
  top: 36px;
  left: 206px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.9px;
  line-height: 25px;
  color: var(--color-gray-200);
`;
const InventoryFilter1Child13 = styled.div`
  position: absolute;
  top: 155.5px;
  right: 42.5px;
  border-top: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 1030px;
  height: 2px;
`;
const InventoryFilter1Child14 = styled.div`
  position: absolute;
  top: 153px;
  left: 358.5px;
  border-top: 3px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 74px;
  height: 6px;
`;
const InventoryFilter1Child15 = styled.div`
  position: absolute;
  right: 6px;
  bottom: 60px;
  border-right: 7px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 14px;
  height: 496px;
`;
const InventoryFilter1Child16 = styled.div`
  position: absolute;
  top: 215px;
  right: 6px;
  border-right: 7px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 14px;
  height: 22px;
`;
const InventoryFilter1Child17 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-black);
  width: 1280px;
  height: 768px;
  opacity: 0.1;
`;
const Div = styled.div`
  position: absolute;
  top: 100px;
  left: 574px;
  font-size: var(--font-size-sm);
  font-family: var(--font-roboto);
  color: var(--color-royalblue-100);
`;
const InventoryFilter1Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 768px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
  font-family: var(--font-avenir-next);
`;
const InventoryFilter1 = () => {
  return (
    <InventoryFilter1Root>
      <InventoryFilter1Child />
      <InventoryFilter1Item />
      <InventoryFilter1Inner />
      <RectangleDiv />
      <LineDiv />
      <InventoryFilter1Child1 />
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
      <InventoryFilter1Child2 />
      <InventoryFilter1Child3 />
      <MrDoeWrapper>
        <MrDoe>Mr. Doe</MrDoe>
      </MrDoeWrapper>
      <InventoryFilter1Child4 />
      <InventoryFilter1Child5 />
      <InventoryFilter1Child6 />
      <InventoryFilter1Child7 />
      <CardImageContainer
        carDimensions="/12@2x.png"
        carModel="Audi"
        carModelYear="A4"
        carYear="2018"
        carTrimLevel="Premium"
        carPrice="$16,540"
        propTop="229px"
        propBottom="unset"
        propTop1="calc(50% - 10.5px)"
        propBottom1="unset"
      />
      <AudiCard carModelVariant="LXi" propTop="calc(50% - 10.5px)" />
      <CardImageContainer
        carDimensions="/nopath--copy@2x.png"
        carModel="Audi"
        carModelYear="A5"
        carYear="2021"
        carTrimLevel="Premiumplus"
        carPrice="$18,900"
        propTop="325px"
        propBottom="unset"
        propTop1="calc(50% - 20.5px)"
        propBottom1="unset"
      />
      <CardImageContainer
        carDimensions="/nopath--copy-6@2x.png"
        carModel="Audi"
        carModelYear="Q7"
        carYear="2020"
        carTrimLevel="2.0T quattroPremium Plus"
        carPrice="$20,350"
        propTop="517px"
        propBottom="unset"
        propTop1="calc(50% - 19.5px)"
        propBottom1="unset"
      />
      <CardImageContainer
        carDimensions="/nopath--copy-7@2x.png"
        carModel="Bentley"
        carModelYear="Bentayga"
        carYear="2020"
        carTrimLevel="Speed Trim"
        carPrice="$16,520"
        propTop="unset"
        propBottom="74px"
        propTop1="calc(50% - 11.5px)"
        propBottom1="unset"
      />
      <CardImageContainer
        carDimensions="/nopath--copy-8@2x.png"
        carModel="Bentley"
        carModelYear="Continental GT"
        carYear="2020"
        carTrimLevel="Mulliner Convertible"
        carPrice="$20,350"
        propTop="unset"
        propBottom="-22px"
        propTop1="unset"
        propBottom1="8px"
      />
      <InventoryFilter1Child8 />
      <AParent>
        <A>A</A>
        <B>B</B>
        <C>C</C>
        <D>D</D>
        <E>E</E>
        <F>F</F>
        <G>G</G>
        <H>H</H>
        <I>I</I>
        <J>J</J>
        <K>K</K>
        <L>L</L>
        <M>M</M>
        <N>N</N>
        <O>O</O>
        <P>P</P>
        <Q>Q</Q>
        <R>R</R>
        <S>S</S>
        <T>T</T>
        <U>U</U>
        <V>V</V>
        <W>W</W>
        <X>X</X>
        <Y>Y</Y>
        <Z>Z</Z>
      </AParent>
      <InventoryFilter1Child9 />
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
      <Image1>Image</Image1>
      <Make>Make</Make>
      <Year>Year</Year>
      <Model>Model</Model>
      <Trim>Trim</Trim>
      <Price>Price</Price>
      <Location1>Location</Location1>
      <InventoryFilter1Child10 />
      <AddNewVehicle>Add new vehicle</AddNewVehicle>
      <GroupIcon alt="" src="/group-10785.svg" />
      <InventoryFilter1Child11 />
      <NounSearch1868255Icon alt="" src="/noun-search-1868255.svg" />
      <SearchSomething>Search something..</SearchSomething>
      <NounFilter787737Icon alt="" src="/nounfilter787737.svg" />
      <InventoryFilter1Child12 />
      <Inventory11>Inventory</Inventory11>
      <InventoryFilter1Child13 />
      <InventoryFilter1Child14 />
      <InventoryFilter1Child15 />
      <InventoryFilter1Child16 />
      <InventoryFilter1Child17 />
      <FilterContainer2 />
      <Div />
    </InventoryFilter1Root>
  );
};

export default InventoryFilter1;
