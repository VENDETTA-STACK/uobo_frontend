import { Property } from "csstype";
import styled from "styled-components";

const NopathCopy5 = styled.img`
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
const NopathCopy51 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-black);
  opacity: 0.1;
`;
const NopathCopy5Parent = styled.div`
  position: absolute;
  height: calc(100% - 16.34px);
  top: 7px;
  bottom: 9.34px;
  left: 8px;
  width: 96.96px;
`;
const Audi = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 138px;
  letter-spacing: 0.27px;
`;
const A7 = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: calc(50% - 232px);
  letter-spacing: 0.27px;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: calc(50% - 70px);
  letter-spacing: 0.27px;
`;
const Lxi = styled.div`
  position: absolute;
  top: calc(50% - 10.5px);
  left: calc(50% + 62px);
  display: inline-block;
  width: 108px;
  top: ${(p) => p.propTop};
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: calc(50% + 224px);
  letter-spacing: 0.27px;
`;
const MississaugaOntario = styled.div`
  position: absolute;
  top: calc(50% - 23.5px);
  right: 39px;
  letter-spacing: 0.27px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 421px;
  right: 54px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  border: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 1004px;
  height: 81px;
  text-align: left;
  font-size: var(--font-size-mid);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-lt-std);
`;
const AudiCard = ({ carModelVariant, propTop }) => {
  return (
    <GroupParentRoot>
      <NopathCopy5Parent>
        <NopathCopy5 alt="" src="/nopath--copy-5@2x.png" />
        <NopathCopy51 />
      </NopathCopy5Parent>
      <Audi>Audi</Audi>
      <A7>A7</A7>
      <Div>2021</Div>
      <Lxi propTop={propTop}>{carModelVariant}</Lxi>
      <Div1>$17,300</Div1>
      <MississaugaOntario>Mississauga,Ontario</MississaugaOntario>
    </GroupParentRoot>
  );
};

export default AudiCard;
