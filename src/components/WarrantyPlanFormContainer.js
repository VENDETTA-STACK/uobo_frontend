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
const WarrantyPlan = styled.div`
  position: absolute;
  top: 7px;
  left: 15px;
  letter-spacing: 0.48px;
  line-height: 25px;
`;
const WarrantyCoverage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Monthly = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const WarrantyPlanParent = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 21px;
`;
const WarrantyCoverageParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 10.5px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const Km = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
`;
const CoverageDistance = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--color-gray-200);
  text-align: left;
`;
const KmParent = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 21px;
  text-align: right;
  color: var(--color-dimgray-200);
`;
const GroupParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 85px;
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
const RectangleParentRoot = styled.div`position: absolute;
  top: 557px;
  left: 227px;
  width: 347px;
  height: 135px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
`;
const WarrantyPlanFormContainer = ({
  propTop,
  propBottom,
  propBackgroundColor,
}) => {
  return (
    <RectangleParentRoot propTop={propTop} propBottom={propBottom}>
      <GroupChild propBackgroundColor={propBackgroundColor} />
      <WarrantyPlan>Warranty Plan</WarrantyPlan>
      <GroupParent>
        <WarrantyPlanParent>
          <WarrantyCoverage>Warranty Plan</WarrantyCoverage>
          <Monthly>$38.50 Monthly</Monthly>
        </WarrantyPlanParent>
        <WarrantyCoverageParent>
          <WarrantyCoverage>Warranty Coverage</WarrantyCoverage>
          <Monthly>36 Months or</Monthly>
        </WarrantyCoverageParent>
        <KmParent>
          <Km>60,000 km</Km>
          <CoverageDistance>Coverage Distance</CoverageDistance>
        </KmParent>
      </GroupParent>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
    </RectangleParentRoot>
  );
};

export default WarrantyPlanFormContainer;
