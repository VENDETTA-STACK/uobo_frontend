import { Property } from "csstype";
import styled from "styled-components";

const Icon = styled.img`
  position: absolute;
  width: calc(100% - 20px);
  top: 10px;
  right: 10px;
  left: 10px;
  border-radius: var(--br-sm);
  max-width: 100%;
  overflow: hidden;
  height: 206px;
  object-fit: cover;
`;
const MississaugaOn = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  letter-spacing: 0.29px;
`;
const Path775Icon = styled.img`
  position: absolute;
  bottom: 2.87px;
  left: 0px;
  width: 11.62px;
  height: 16.27px;
`;
const MississaugaOnParent = styled.div`
  position: absolute;
  bottom: 22px;
  left: 25px;
  width: 151px;
  height: 24px;
`;
const AudiA4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.29px;
  letter-spacing: ${(p) => p.propLetterSpacing};
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  letter-spacing: 0.29px;
`;
const GroupChild = styled.div`
  position: absolute;
  height: calc(100% - 4px);
  top: 1px;
  bottom: 3px;
  left: calc(50% + 11.5px);
  border-right: 2px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 4px;
  left: ${(p) => p.propLeft1};
`;
const AudiA4Parent = styled.div`
  position: absolute;
  top: calc(50% + 63.5px);
  left: 25px;
  width: 127px;
  height: 24px;
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
  width: ${(p) => p.propWidth};
`;
const Premium = styled.div`
  position: absolute;
  width: calc(100% - 19px);
  top: calc(50% - 12px);
  left: 20px;
  display: inline-block;
`;
const NounCategory1041139Icon = styled.img`
  position: absolute;
  top: calc(50% - 7px);
  left: 0px;
  width: 12px;
  height: 12px;
`;
const PremiumParent = styled.div`position: absolute;
  bottom: 48px;
  left: 25px;
  width: 220px;
  height: 24px;
  width: ${(p) => p.propWidth1}
  right: ${(p) => p.propRight1}
`;
const NounDollar1241940Icon = styled.img`
  position: absolute;
  bottom: 2.5px;
  left: 0px;
  width: 17px;
  height: 17px;
`;
const Group = styled.div`
  position: absolute;
  right: 20px;
  bottom: 22px;
  width: 76.5px;
  height: 24px;
`;
const ParentRoot = styled.div`position: absolute;
  top: 190px;
  left: 212px;
  border-radius: var(--br-mid);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  border: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 327px;
  height: 329px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-dimgray-300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
  left: ${(p) => p.propLeft}
  right: ${(p) => p.propRight}
`;
const FilterContainer = ({
  carDimensions,
  carModel,
  carYear,
  carTrimLevel,
  carPrice,
  propTop,
  propBottom,
  propLeft,
  propRight,
  propWidth,
  propLetterSpacing,
  propLeft1,
  propWidth1,
  propRight1,
}) => {
  return (
    <ParentRoot
      propTop={propTop}
      propBottom={propBottom}
      propLeft={propLeft}
      propRight={propRight}
    >
      <Icon alt="" src={carDimensions} />
      <MississaugaOnParent>
        <MississaugaOn>Mississauga, On</MississaugaOn>
        <Path775Icon alt="" src="/path-775.svg" />
      </MississaugaOnParent>
      <AudiA4Parent propWidth={propWidth}>
        <AudiA4 propLetterSpacing={propLetterSpacing}>{carModel}</AudiA4>
        <Div>{carYear}</Div>
        <GroupChild propLeft1={propLeft1} />
      </AudiA4Parent>
      <PremiumParent propWidth1={propWidth1} propRight1={propRight1}>
        <Premium>{carTrimLevel}</Premium>
        <NounCategory1041139Icon alt="" src="/nouncategory1041139.svg" />
      </PremiumParent>
      <Group>
        <Div>{carPrice}</Div>
        <NounDollar1241940Icon alt="" src="/noundollar1241940.svg" />
      </Group>
    </ParentRoot>
  );
};

export default FilterContainer;
