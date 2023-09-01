import { Property } from "csstype";
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
  background-color: ${(p) => p.propBackgroundColor};
`;
const TradeInDetails = styled.div`
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
const MakeAndModel = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--color-gray-200);
  text-align: left;
`;
const AudiA4 = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
`;
const LtLuxuryEdition = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0px;
`;
const MakeAndModelParent = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 46px;
  text-align: right;
  color: var(--color-dimgray-200);
`;
const Mileage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Km = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const MileageParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 46px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const ColorParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 14px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const TransmissionParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% + 18px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const VehicleValueParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% + 50px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const TaxSavingsParent = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 21px;
`;
const GroupParent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const GroupWrapper = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 206px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const CoverIcon = styled.img`
  position: absolute;
  height: 100%;
  width: calc(100% + 1175.62px);
  top: 0px;
  right: -1169.62px;
  bottom: 0px;
  left: -6px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ScrollGroup4 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 81.81px);
  right: 0px;
  left: 0px;
  height: 163.62px;
  overflow-x: auto;
  mix-blend-mode: normal;
`;
const GroupItem = styled.img`
  position: absolute;
  bottom: 8.62px;
  left: calc(50% - 32.51px);
  width: 66px;
  height: 6px;
`;
const ScrollGroup4Parent = styled.div`
  position: absolute;
  width: calc(100% - 33.99px);
  top: 54px;
  right: 12.99px;
  left: 21px;
  height: 163.62px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 704px;
  left: 227px;
  width: 347px;
  height: 433px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const TradeInDetailsContainer = ({ propBackgroundColor }) => {
  return (
    <RectangleParentRoot>
      <GroupChild propBackgroundColor={propBackgroundColor} />
      <TradeInDetails>Trade-In Details</TradeInDetails>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <GroupWrapper>
        <GroupParent>
          <MakeAndModelParent>
            <MakeAndModel>Make and Model</MakeAndModel>
            <AudiA4>2010 Audi A4</AudiA4>
            <LtLuxuryEdition>(1.5 LT Luxury edition)</LtLuxuryEdition>
          </MakeAndModelParent>
          <MileageParent>
            <Mileage>Mileage</Mileage>
            <Km>123,600 km</Km>
          </MileageParent>
          <ColorParent>
            <Mileage>Color</Mileage>
            <Km>Gray</Km>
          </ColorParent>
          <TransmissionParent>
            <Mileage>Transmission</Mileage>
            <Km>Automatic</Km>
          </TransmissionParent>
          <VehicleValueParent>
            <Mileage>Vehicle value</Mileage>
            <Km>$6,600.00</Km>
          </VehicleValueParent>
          <TaxSavingsParent>
            <Mileage>Tax Savings</Mileage>
            <Km>$1,817.00</Km>
          </TaxSavingsParent>
        </GroupParent>
      </GroupWrapper>
      <ScrollGroup4Parent>
        <ScrollGroup4>
          <CoverIcon alt="" src="/cover@2x.png" />
        </ScrollGroup4>
        <GroupItem alt="" src="/group-10759.svg" />
      </ScrollGroup4Parent>
    </RectangleParentRoot>
  );
};

export default TradeInDetailsContainer;
