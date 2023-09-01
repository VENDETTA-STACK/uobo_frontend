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
const VehicleDetails = styled.div`
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
const Icon = styled.img`
  position: absolute;
  height: calc(100% + 7.18px);
  width: calc(100% - 39.55px);
  top: 0px;
  right: 46.65px;
  bottom: -7.18px;
  left: -7.1px;
  border-radius: var(--br-sm);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  display: none;
`;
const Icon1 = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Parent1 = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 142.88px;
`;
const AudiA4 = styled.div`
  position: absolute;
  top: 2.17px;
  left: calc(50% - 3.12px);
  letter-spacing: 0.27px;
  font-family: var(--font-avenir-lt-std);
`;
const TextModel = styled.div`
  position: absolute;
  top: calc(50% - 28.17px);
  left: calc(50% - 3.12px);
`;
const Application = styled.div`
  position: absolute;
  bottom: 6.5px;
  left: calc(50% - 3.12px);
`;
const MississaugaOntario = styled.div`
  position: absolute;
  top: 0px;
  left: 16.12px;
`;
const MapPlaceholderIcon = styled.img`
  position: absolute;
  bottom: 1.51px;
  left: 0px;
  width: 11.18px;
  height: 15.66px;
`;
const Location1 = styled.div`
  position: absolute;
  top: calc(50% - 2.17px);
  right: 0px;
  width: 161.12px;
  height: 21px;
  font-size: var(--font-size-base);
`;
const GroupParent = styled.div`
  position: absolute;
  width: calc(100% - 35px);
  right: 20px;
  bottom: 0px;
  left: 15px;
  height: 108.67px;
  font-size: var(--font-size-mid);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 173px;
  left: 227px;
  width: 347px;
  height: 162.67px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const FinanceApprovalContainer = ({ propBackgroundColor }) => {
  return (
    <RectangleParentRoot>
      <GroupChild propBackgroundColor={propBackgroundColor} />
      <VehicleDetails>Vehicle Details</VehicleDetails>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <GroupParent>
        <Parent1>
          <Icon alt="" src="/1@2x.png" />
          <Icon1 alt="" src="/11@2x.png" />
        </Parent1>
        <AudiA4>Audi A4</AudiA4>
        <TextModel>2019</TextModel>
        <Application>$16,700</Application>
        <Location1>
          <MississaugaOntario>Mississauga, Ontario</MississaugaOntario>
          <MapPlaceholderIcon alt="" src="/mapplaceholder.svg" />
        </Location1>
      </GroupParent>
    </RectangleParentRoot>
  );
};

export default FinanceApprovalContainer;
