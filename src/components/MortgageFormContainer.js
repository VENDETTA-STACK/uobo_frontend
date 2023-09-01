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
const Homemortgage = styled.div`
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
const MortgageAmount = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const MortgageWith = styled.div`
  position: absolute;
  top: calc(50% - 26.5px);
  left: 0px;
`;
const MarketValue = styled.div`
  position: absolute;
  top: calc(50% + 5.5px);
  left: 0px;
`;
const MonthlyPayment = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const RmgMortgages = styled.div`
  position: absolute;
  top: calc(50% - 26.5px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% + 5.5px);
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const Div2 = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const MortgageAmountParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 117px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 872px;
  left: 227px;
  width: 347px;
  height: 167px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const MortgageFormContainer = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <Homemortgage>Home/Mortgage</Homemortgage>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <MortgageAmountParent>
        <MortgageAmount>Mortgage Amount</MortgageAmount>
        <MortgageWith>Mortgage With</MortgageWith>
        <MarketValue>Market Value</MarketValue>
        <MonthlyPayment>Monthly Payment</MonthlyPayment>
        <Div>$7000</Div>
        <RmgMortgages>RMG Mortgages</RmgMortgages>
        <Div1>$5000</Div1>
        <Div2>$300</Div2>
      </MortgageAmountParent>
    </RectangleParentRoot>
  );
};

export default MortgageFormContainer;
