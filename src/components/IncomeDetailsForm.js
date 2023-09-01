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
const IncomeDetails = styled.div`
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
const GrossIncomeAmount = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const OtherIncomeSource = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  left: 0px;
`;
const OtherIncomeAmount = styled.div`
  position: absolute;
  bottom: 21px;
  left: 0px;
`;
const P = styled.p`
  margin: 0;
`;
const Monthly = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const ChildSupportAlimony = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Monthly2 = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const GrossIncomeAmountParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 142px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  bottom: 186px;
  left: 227px;
  width: 347px;
  height: 192px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const IncomeDetailsForm = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <IncomeDetails>Income Details</IncomeDetails>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <GrossIncomeAmountParent>
        <GrossIncomeAmount>Gross Income amount</GrossIncomeAmount>
        <OtherIncomeSource>Other Income Source</OtherIncomeSource>
        <OtherIncomeAmount>Other Income amount</OtherIncomeAmount>
        <Monthly>
          <P>$4200</P>
          <P>(Monthly)</P>
        </Monthly>
        <ChildSupportAlimony>Child Support/Alimony</ChildSupportAlimony>
        <Monthly2>
          <P>$1000</P>
          <P>(Monthly)</P>
        </Monthly2>
      </GrossIncomeAmountParent>
    </RectangleParentRoot>
  );
};

export default IncomeDetailsForm;
