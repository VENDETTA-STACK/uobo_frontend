import { Property } from "csstype";
import styled from "styled-components";

const Icon = styled.img`
  position: absolute;
  height: calc(100% - 15px);
  top: 7px;
  bottom: 8px;
  left: 8px;
  border-radius: var(--br-8xs);
  max-height: 100%;
  width: 96.96px;
  object-fit: cover;
`;
const Audi = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 138px;
  letter-spacing: 0.27px;
`;
const A4 = styled.div`
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
const Premium = styled.div`position: absolute;
  top: calc(50% - 10.5px);
  left: calc(50% + 62px);
  display: inline-block;
  width: 108px;
  top: ${(p) => p.propTop1}
  bottom: ${(p) => p.propBottom1}
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
const ParentRoot = styled.div`position: absolute;
  top: 229px;
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
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
`;
const CardImageContainer = ({
  carDimensions,
  carModel,
  carModelYear,
  carYear,
  carTrimLevel,
  carPrice,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
}) => {
  return (
    <ParentRoot propTop={propTop} propBottom={propBottom}>
      <Icon alt="" src={carDimensions} />
      <Audi>{carModel}</Audi>
      <A4>{carModelYear}</A4>
      <Div>{carYear}</Div>
      <Premium propTop1={propTop1} propBottom1={propBottom1}>
        {carTrimLevel}
      </Premium>
      <Div1>{carPrice}</Div1>
      <MississaugaOntario>Mississauga,Ontario</MississaugaOntario>
    </ParentRoot>
  );
};

export default CardImageContainer;
