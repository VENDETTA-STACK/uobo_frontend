import styled from "styled-components";

const TestDrive = styled.div`
  position: absolute;
  top: calc(50% - 113px);
  left: calc(50% - 96px);
`;
const Pickup = styled.div`
  position: absolute;
  top: calc(50% + 99px);
  left: calc(50% - 96px);
  display: none;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 113px);
  left: calc(50% - 142px);
  letter-spacing: 0.59px;
  font-family: var(--font-avenir-next);
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% + 99px);
  left: calc(50% - 142px);
  letter-spacing: 0.59px;
  font-family: var(--font-avenir-next);
  display: none;
`;
const MaskGroup44Child = styled.img`
  position: absolute;
  top: 32px;
  left: 20px;
  width: 2px;
  height: 91px;
`;
const MaskGroup44Item = styled.img`
  position: absolute;
  bottom: -49px;
  left: 20px;
  width: 2px;
  height: 53px;
  display: none;
`;
const MaskGroup44Inner = styled.img`
  position: absolute;
  top: 36px;
  left: 30px;
  border-radius: var(--br-8xs);
  width: 84px;
  height: 78px;
  object-fit: cover;
`;
const Year = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 38px);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;
const Make = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% + 20px);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;
const Model = styled.div`
  position: absolute;
  top: 30px;
  right: 44px;
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 38px);
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-dimgray-200);
`;
const Audi = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% + 20px);
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-dimgray-200);
`;
const A4 = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% + 77px);
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-dimgray-200);
`;
const AlexSamMercer = styled.div`
  position: absolute;
  top: 19px;
  left: 0px;
  letter-spacing: 0.26px;
`;
const ChurchStreetWest = styled.p`
  margin: 0;
`;
const ChurchStreetWestNorfolkContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  line-height: 22.4px;
`;
const CustomersName = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;
const Address = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 0px;
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;
const GroupBuyersDetails = styled.div`
  position: absolute;
  top: calc(50% - 46px);
  right: 26px;
  width: 174px;
  height: 130px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray-200);
`;
const JeepCherokee = styled.div`
  position: absolute;
  top: calc(50% + 99px);
  left: calc(50% - 65.5px);
  font-size: var(--font-size-mini);
  letter-spacing: 0.68px;
  font-family: var(--font-avenir-next);
  color: var(--color-dimgray-300);
`;
const Pickup1 = styled.div`
  position: absolute;
  top: calc(50% + 117px);
  left: calc(50% - 142px);
`;
const Div3 = styled.div`
  position: absolute;
  top: calc(50% + 100px);
  left: calc(50% - 137px);
  letter-spacing: 0.59px;
  font-family: var(--font-avenir-next);
  text-align: right;
`;
const MrsSarahJohnes = styled.div`
  position: absolute;
  top: calc(50% + 120px);
  left: calc(50% - 65.5px);
  font-size: var(--font-size-sm);
  letter-spacing: 0.63px;
  font-family: var(--font-arial);
  color: var(--color-dimgray-300);
`;
const GroupIcon = styled.img`
  position: absolute;
  bottom: -7px;
  left: calc(50% - 71.5px);
  width: 2px;
  height: 30px;
`;
const MaskGroup44Root = styled.div`
  position: absolute;
  top: 149px;
  right: 36px;
  width: 324px;
  height: 248px;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-lt-std);
`;
const ScheduleCard1 = () => {
  return (
    <MaskGroup44Root>
      <TestDrive>Test drive</TestDrive>
      <Pickup>Pickup</Pickup>
      <Div>10:00-</Div>
      <Div1>11:00-</Div1>
      <MaskGroup44Child alt="" src="/group-106622.svg" />
      <MaskGroup44Item alt="" src="/group-10677.svg" />
      <MaskGroup44Inner alt="" src="/rectangle-28363@2x.png" />
      <Year>Year</Year>
      <Make>Make</Make>
      <Model>Model</Model>
      <Div2>2019</Div2>
      <Audi>Audi</Audi>
      <A4>A4</A4>
      <GroupBuyersDetails>
        <AlexSamMercer>Alex Sam Mercer</AlexSamMercer>
        <ChurchStreetWestNorfolkContainer>
          <ChurchStreetWest>1410 Church Street West</ChurchStreetWest>
          <ChurchStreetWest>Norfolk County</ChurchStreetWest>
          <ChurchStreetWest>Toronto, Ontario</ChurchStreetWest>
        </ChurchStreetWestNorfolkContainer>
        <CustomersName>Customer's name</CustomersName>
        <Address>Address</Address>
      </GroupBuyersDetails>
      <JeepCherokee>2018 Jeep Cherokee</JeepCherokee>
      <Pickup1>Pickup</Pickup1>
      <Div3>11:00</Div3>
      <MrsSarahJohnes>Mrs. Sarah Johnes</MrsSarahJohnes>
      <GroupIcon alt="" src="/group-106623.svg" />
    </MaskGroup44Root>
  );
};

export default ScheduleCard1;
