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
const PaymentDetails = styled.div`
  position: absolute;
  top: 7px;
  left: 15px;
  letter-spacing: 0.48px;
  line-height: 25px;
`;
const PreferredMethod = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Delivery = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const PreferredMethodParent = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  top: 0px;
  right: 1.5px;
  left: 0px;
  height: 21px;
`;
const DeliveryCostParent = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  top: calc(50% - 62.5px);
  right: 1.5px;
  left: 0px;
  height: 21px;
`;
const WarrantyCostParent = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  top: calc(50% - 30.5px);
  right: 1.5px;
  left: 0px;
  height: 21px;
`;
const TradeInValueParent = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  top: calc(50% + 1.5px);
  right: 1.5px;
  left: 0px;
  height: 21px;
`;
const DownPaymentParent = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  top: calc(50% + 33.5px);
  right: 1.5px;
  left: 0px;
  height: 21px;
`;
const GroupItem = styled.div`
  position: absolute;
  width: calc(100% - 1.25px);
  right: 0px;
  bottom: 29.5px;
  left: 1.25px;
  border-top: 0.5px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  height: 1px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
`;
const TotalAmountDue = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--color-gray-200);
  text-align: left;
`;
const Parent1 = styled.div`
  position: absolute;
  width: calc(100% - 1.5px);
  right: 1.5px;
  bottom: 0px;
  left: 0px;
  height: 21px;
  text-align: right;
  color: var(--color-dimgray-200);
`;
const GroupParent = styled.div`
  position: absolute;
  width: calc(100% - 19.5px);
  right: 4.5px;
  bottom: 0px;
  left: 15px;
  height: 189px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
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
const RectangleParentRoot = styled.div`
  position: absolute;
  bottom: 102px;
  left: 227px;
  width: 347px;
  height: 239px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const PaymentDetailsFormContainer = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <PaymentDetails>Payment Details</PaymentDetails>
      <GroupParent>
        <PreferredMethodParent>
          <PreferredMethod>Preferred method</PreferredMethod>
          <Delivery>Delivery</Delivery>
        </PreferredMethodParent>
        <DeliveryCostParent>
          <PreferredMethod>Delivery Cost</PreferredMethod>
          <Delivery>$199.00</Delivery>
        </DeliveryCostParent>
        <WarrantyCostParent>
          <PreferredMethod>Warranty Cost</PreferredMethod>
          <Delivery>$1,995.00</Delivery>
        </WarrantyCostParent>
        <TradeInValueParent>
          <PreferredMethod>Trade-In Value</PreferredMethod>
          <Delivery>$8,417.00</Delivery>
        </TradeInValueParent>
        <DownPaymentParent>
          <PreferredMethod>Down payment</PreferredMethod>
          <Delivery>$500(paid)</Delivery>
        </DownPaymentParent>
        <GroupItem />
        <Parent1>
          <Div3>$12,477.15</Div3>
          <TotalAmountDue>Total amount due</TotalAmountDue>
        </Parent1>
      </GroupParent>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
    </RectangleParentRoot>
  );
};

export default PaymentDetailsFormContainer;
