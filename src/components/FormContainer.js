import { Property } from "csstype";
import styled from "styled-components";

const Figure11 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const Figure11Icon = styled.img`
  position: absolute;
  height: calc(100% - 3.31px);
  width: calc(100% - 3.31px);
  top: 1.66px;
  right: 1.66px;
  bottom: 1.66px;
  left: 1.66px;
  border-radius: var(--br-4xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Figure11Parent = styled.div`
  position: absolute;
  top: 18.11px;
  right: 0px;
  width: 118.43px;
  height: 68.28px;
`;
const Figure11Group = styled.div`
  position: absolute;
  top: 18.11px;
  left: 0.12px;
  width: 118.43px;
  height: 68.28px;
`;
const BankStatement = styled.div`
  position: absolute;
  top: 0px;
  left: 0.12px;
`;
const SelfAssessment = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 26.39px);
  left: ${(p) => p.propLeft};
`;
const VoidCheque = styled.div`
  position: absolute;
  top: calc(50% + 4.37px);
  left: 0px;
  top: ${(p) => p.propTop1};
`;
const MaskGroup46 = styled.img`
  position: absolute;
  height: calc(100% - 3.41px);
  width: calc(100% - 3.41px);
  top: 1.7px;
  right: 1.7px;
  bottom: 1.71px;
  left: 1.7px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MaskGroup46Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0.12px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 118.43px;
  height: 68.28px;
`;
const GroupParentRoot = styled.div`position: absolute;
  top: calc(50% - 101.85px);
  right: 105.36px;
  width: 289.64px;
  height: 182.96px;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  right: ${(p) => p.propRight}
`;
const FormContainer = ({
  dimensions,
  productDimensions,
  productDimensionsText,
  propTop,
  propRight,
  propLeft,
  propTop1,
}) => {
  return (
    <GroupParentRoot propTop={propTop} propRight={propRight}>
      <Figure11Parent>
        <Figure11 />
        <Figure11Icon alt="" src={dimensions} />
      </Figure11Parent>
      <Figure11Group>
        <Figure11 />
        <Figure11Icon alt="" src={productDimensions} />
      </Figure11Group>
      <BankStatement>Bank Statement</BankStatement>
      <SelfAssessment propLeft={propLeft}>Self Assessment</SelfAssessment>
      <VoidCheque propTop1={propTop1}>Void Cheque</VoidCheque>
      <MaskGroup46Wrapper>
        <MaskGroup46 alt="" src={productDimensionsText} />
      </MaskGroup46Wrapper>
    </GroupParentRoot>
  );
};

export default FormContainer;
