import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DocumentUploadForm1 from "../components/DocumentUploadForm1";

const LiveOrdersBuyNow1Child = styled.div`
  position: absolute;
  top: 85px;
  right: -8px;
  border-radius: var(--br-8xs) 0px 0px 0px;
  background-color: var(--color-gray-100);
  width: 1095px;
  height: 700px;
  display: none;
`;
const LiveOrdersBuyNow1Item = styled.div`
  position: absolute;
  top: 142px;
  right: 132px;
  border-radius: var(--br-mid);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 500px;
  height: 474px;
`;
const LiveOrdersBuyNow1Inner = styled.div`
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
const RectangleDiv = styled.div`
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
const LiveOrdersBuyNow1Child1 = styled.div`
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
const LiveOrdersBuyNow1Child2 = styled.div`
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
  color: var(--color-white);
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
const Layer2Icon = styled.img`
  position: absolute;
  top: 30px;
  left: 19.98px;
  width: 54.27px;
  height: 16.95px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 116.91px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
const LiveOrdersBuyNow1Child3 = styled.div`
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
const LiveOrdersBuyNow1Child4 = styled.div`
  position: absolute;
  top: 51.5px;
  left: 706.5px;
  border-top: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 217px;
  height: 2px;
  display: none;
`;
const LiveOrdersBuyNow1Child5 = styled.div`
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
const LiveOrdersBuyNow1Child6 = styled.div`
  position: absolute;
  right: 80px;
  bottom: 3px;
  border-top: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 893.5px;
  height: 1px;
  display: none;
`;
const GroupChild2 = styled.img`
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
  color: var(--color-white);
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
const OrderDetails = styled.div`
  position: absolute;
  top: 181px;
  left: 242px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 25px;
  font-family: var(--font-avenir-lt-std);
`;
const CustomerDetails = styled.div`
  position: absolute;
  top: 159px;
  left: 678.5px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 25px;
  font-family: var(--font-avenir-lt-std);
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
const PleaseConfirmThe = styled.div`
  position: absolute;
  top: 95px;
  left: 206px;
  font-size: var(--font-size-3xl);
  letter-spacing: 0.7px;
  line-height: 22px;
  display: inline-block;
  width: 537px;
`;
const AudiA4 = styled.div`
  position: absolute;
  top: 412.51px;
  left: 243px;
  font-size: var(--font-size-mid);
  letter-spacing: 0.27px;
  font-family: var(--font-avenir-lt-std);
  color: var(--color-dimgray-200);
`;
const MississaugaOntario = styled.div`
  position: absolute;
  top: 0px;
  left: 17.49px;
`;
const MapPlaceholderIcon = styled.img`
  position: absolute;
  height: calc(100% - 5.3px);
  top: 2.72px;
  bottom: 2.58px;
  left: 0px;
  max-height: 100%;
  width: 10.5px;
`;
const Location1 = styled.div`
  position: absolute;
  top: 444.51px;
  left: 244.46px;
  width: 153.49px;
  height: 20px;
  font-size: var(--font-size-mini);
  color: var(--color-dimgray-200);
`;
const Application = styled.div`
  position: absolute;
  top: 413.01px;
  left: 509.28px;
  letter-spacing: 0.26px;
  font-family: var(--font-avenir-lt-std);
  color: var(--color-dimgray-200);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
`;
const Application1 = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
`;
const Application2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--color-gray-200);
`;
const ApplicationParent = styled.div`
  position: absolute;
  top: 474.51px;
  left: 242.78px;
  width: 324px;
  height: 21px;
  color: var(--color-dimgray-200);
`;
const ApplicationGroup = styled.div`
  position: absolute;
  top: 506.51px;
  left: 242.78px;
  width: 322px;
  height: 21px;
  color: var(--color-dimgray-200);
`;
const ApplicationContainer = styled.div`
  position: absolute;
  top: 538.51px;
  left: 242.78px;
  width: 325px;
  height: 21px;
  color: var(--color-dimgray-200);
`;
const MrDoeJohn = styled.div`
  position: absolute;
  top: 194px;
  right: 166px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 20px;
`;
const Delivery = styled.div`
  position: absolute;
  top: 231px;
  right: 165px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 20px;
`;
const CustomerName = styled.div`
  position: absolute;
  top: 199px;
  left: 678px;
  color: var(--color-gray-200);
`;
const PreferredMethod = styled.div`
  position: absolute;
  top: 236px;
  left: 678px;
  color: var(--color-gray-200);
`;
const DocumentsUploaded = styled.div`
  position: absolute;
  top: 277px;
  left: 678.5px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.48px;
  line-height: 25px;
  font-family: var(--font-avenir-lt-std);
  cursor: pointer;
`;
const ConfirmAvailablity = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 78.41px);
  letter-spacing: 0.47px;
`;
const ConfirmAvailablityWrapper = styled.div`
  position: absolute;
  right: 144.38px;
  bottom: 77px;
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-100);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 475.62px;
  height: 50px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const NotAvailable = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.47px;
`;
const NotAvailableWrapper = styled.div`
  position: absolute;
  bottom: 30.67px;
  left: 842px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-red-200);
  box-sizing: border-box;
  width: 112px;
  height: 24px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-red-200);
`;
const LiveOrdersBuyNow1Child7 = styled.div`
  position: absolute;
  top: 164.5px;
  left: 615.5px;
  border-right: 3px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 6px;
  height: 230px;
  display: none;
`;
const Icon = styled.img`
  position: absolute;
  top: 228px;
  left: 243px;
  border-radius: var(--br-10xs);
  width: 258.68px;
  height: 172.51px;
  object-fit: cover;
`;
const LiveOrdersBuyNow1Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 768px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-next);
`;
const LiveOrdersBuyNow1 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/live-orders-buy-now-doc-view");
  }, [navigate]);

  const onDocumentsUploadedTextClick = useCallback(() => {
    navigate("/live-orders-buy-now-doc-view");
  }, [navigate]);

  return (
    <LiveOrdersBuyNow1Root>
      <LiveOrdersBuyNow1Child />
      <LiveOrdersBuyNow1Item />
      <LiveOrdersBuyNow1Inner />
      <RectangleDiv />
      <LiveOrdersBuyNow1Child1 />
      <LineDiv />
      <LiveOrdersBuyNow1Child2 />
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
      <Layer2Icon alt="" src="/layer-2.svg" />
      <EllipseIcon alt="" src="/ellipse-359.svg" />
      <LiveOrdersBuyNow1Child3 />
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
      <LiveOrdersBuyNow1Child4 />
      <LiveOrdersBuyNow1Child5 />
      <MrDoeWrapper>
        <MrDoe>Mr. Doe</MrDoe>
      </MrDoeWrapper>
      <LiveOrdersBuyNow1Child6 />
      <EllipseParent>
        <GroupChild2 alt="" src="/ellipse-369.svg" />
        <Div>6</Div>
      </EllipseParent>
      <LiveOrders1>Live orders</LiveOrders1>
      <OrderDetails>Order details</OrderDetails>
      <CustomerDetails>Customer details</CustomerDetails>
      <PendingWrapper>
        <Pending>+5 pending</Pending>
      </PendingWrapper>
      <PleaseConfirmThe>
        Please confirm the availability for this vehicle.
      </PleaseConfirmThe>
      <AudiA4>2019 Audi A4</AudiA4>
      <Location1>
        <MississaugaOntario>Mississauga, Ontario</MississaugaOntario>
        <MapPlaceholderIcon alt="" src="/mapplaceholder5.svg" />
      </Location1>
      <Application>$16,540</Application>
      <ApplicationParent>
        <Application1>2019</Application1>
        <Application2>Year</Application2>
      </ApplicationParent>
      <ApplicationGroup>
        <Application1>14,894</Application1>
        <Application2>Mileage (KM)</Application2>
      </ApplicationGroup>
      <ApplicationContainer>
        <Application1>Auto</Application1>
        <Application2>Transmission</Application2>
      </ApplicationContainer>
      <MrDoeJohn>Mr. Doe John</MrDoeJohn>
      <Delivery>Delivery</Delivery>
      <CustomerName>Customer Name</CustomerName>
      <PreferredMethod>Preferred method</PreferredMethod>
      <DocumentsUploaded onClick={onDocumentsUploadedTextClick}>
        Documents Uploaded
      </DocumentsUploaded>
      <DocumentUploadForm1
        imageDimensions="/2figure113@2x.png"
        driverLicenseFrontImageUr="Driver's License (Front)"
        driverLicenseBackImageUrl="Driver's License (Back)"
        propCursor="pointer"
        propBorderRadius="9px"
        propBorderRadius1="9px"
        propRight="23.99px"
        onGroupContainer10Click={onGroupContainer1Click}
      />
      <ConfirmAvailablityWrapper>
        <ConfirmAvailablity>Confirm Availablity</ConfirmAvailablity>
      </ConfirmAvailablityWrapper>
      <NotAvailableWrapper>
        <NotAvailable>Not Available</NotAvailable>
      </NotAvailableWrapper>
      <LiveOrdersBuyNow1Child7 />
      <Icon alt="" src="/19@2x.png" />
    </LiveOrdersBuyNow1Root>
  );
};

export default LiveOrdersBuyNow1;
