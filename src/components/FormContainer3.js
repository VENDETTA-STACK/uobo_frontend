import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-aliceblue-300);
  height: 44px;
`;
const CurrentEmployment = styled.div`
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
const EmploymentType = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Employer = styled.div`
  position: absolute;
  top: calc(50% - 128px);
  left: 0px;
`;
const Occupation = styled.div`
  position: absolute;
  top: 32px;
  left: 0px;
`;
const WorkAddress = styled.div`
  position: absolute;
  top: calc(50% - 86px);
  left: 0px;
  font-size: var(--font-size-mid);
  letter-spacing: 0.27px;
  color: var(--color-gray-1000);
`;
const TradesFullTime = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const MarketingExecutive = styled.div`
  position: absolute;
  top: 32px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const AbcLtd = styled.div`
  position: absolute;
  top: calc(50% - 128px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const SuiteNumber = styled.div`
  position: absolute;
  top: calc(50% - 53px);
  left: 0px;
`;
const AddressNumber = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  left: 0px;
`;
const AddressType = styled.div`
  position: absolute;
  top: calc(50% + 11px);
  left: 0px;
`;
const StreetName = styled.div`
  position: absolute;
  top: calc(50% + 43px);
  left: 0px;
`;
const StreetType = styled.div`
  position: absolute;
  top: calc(50% + 75px);
  left: 0px;
`;
const Direction = styled.div`
  position: absolute;
  top: calc(50% + 107px);
  left: 0px;
`;
const PostalCode = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0px;
`;
const Telephone = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 53px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Street = styled.div`
  position: absolute;
  top: calc(50% + 11px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const AlbertStreet = styled.div`
  position: absolute;
  top: calc(50% + 43px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Road = styled.div`
  position: absolute;
  top: calc(50% + 75px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const SouthEast = styled.div`
  position: absolute;
  top: calc(50% + 107px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const A0b1c2 = styled.div`
  position: absolute;
  right: -1px;
  bottom: 32px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Xxx0021Ext212 = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const EmploymentTypeParent = styled.div`
  position: absolute;
  height: calc(100% - 50px);
  width: calc(100% - 21px);
  top: 50px;
  right: 6px;
  bottom: 0px;
  left: 15px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 1051px;
  left: 227px;
  width: 347px;
  height: 434px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const FormContainer3 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <CurrentEmployment>Current Employment</CurrentEmployment>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <EmploymentTypeParent>
        <EmploymentType>Employment Type</EmploymentType>
        <Employer>Employer</Employer>
        <Occupation>Occupation</Occupation>
        <WorkAddress>Work Address</WorkAddress>
        <TradesFullTime>Trades (Full Time)</TradesFullTime>
        <MarketingExecutive>{`Marketing Executive `}</MarketingExecutive>
        <AbcLtd>ABC ltd</AbcLtd>
        <SuiteNumber>Suite Number</SuiteNumber>
        <AddressNumber>Address Number</AddressNumber>
        <AddressType>Address Type</AddressType>
        <StreetName>Street Name</StreetName>
        <StreetType>Street Type</StreetType>
        <Direction>Direction</Direction>
        <PostalCode>Postal Code</PostalCode>
        <Telephone>Telephone</Telephone>
        <Div>53</Div>
        <Div1>211</Div1>
        <Street>Street</Street>
        <AlbertStreet>Albert Street</AlbertStreet>
        <Road>Road</Road>
        <SouthEast>South-East</SouthEast>
        <A0b1c2>A0B 1C2</A0b1c2>
        <Xxx0021Ext212>100-xxx-0021, Ext. 212</Xxx0021Ext212>
      </EmploymentTypeParent>
    </RectangleParentRoot>
  );
};

export default FormContainer3;
