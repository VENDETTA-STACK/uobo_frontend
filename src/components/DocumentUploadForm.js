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
  height: calc(100% - 5.04px);
  width: calc(100% - 5.04px);
  top: 2.52px;
  right: 2.52px;
  bottom: 2.52px;
  left: 2.52px;
  border-radius: var(--br-4xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Figure11Parent = styled.div`
  position: absolute;
  top: 27px;
  right: 0px;
  width: 179.99px;
  height: 103.77px;
`;
const Figure11Icon1 = styled.img`
  position: absolute;
  height: calc(100% - 5.03px);
  width: calc(100% - 5.03px);
  top: 2.52px;
  right: 2.52px;
  bottom: 2.52px;
  left: 2.52px;
  border-radius: var(--br-4xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Figure11Group = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  width: 179.99px;
  height: 103.77px;
`;
const BankStatement = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const SelfAssessment = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 40.01px);
`;
const VoidCheque = styled.div`
  position: absolute;
  top: calc(50% + 7px);
  left: 0px;
  top: ${(p) => p.propTop1};
`;
const MaskGroup46 = styled.img`
  position: absolute;
  height: calc(100% - 5.18px);
  width: calc(100% - 5.18px);
  top: 2.59px;
  right: 2.59px;
  bottom: 2.59px;
  left: 2.59px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MaskGroup46Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 179.99px;
  height: 103.77px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 230.23px;
  right: 162px;
  width: 440px;
  height: 277.54px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop};
`;
const DocumentUploadForm = ({ propTop, propTop1 }) => {
  return (
    <GroupParentRoot propTop={propTop}>
      <Figure11Parent>
        <Figure11 />
        <Figure11Icon alt="" src="/2figure11@2x.png" />
      </Figure11Parent>
      <Figure11Group>
        <Figure11 />
        <Figure11Icon1 alt="" src="/2figure111@2x.png" />
      </Figure11Group>
      <BankStatement>Bank Statement</BankStatement>
      <SelfAssessment>Self Assessment</SelfAssessment>
      <VoidCheque propTop1={propTop1}>Void Cheque</VoidCheque>
      <MaskGroup46Wrapper>
        <MaskGroup46 alt="" src="/mask-group-46@2x.png" />
      </MaskGroup46Wrapper>
    </GroupParentRoot>
  );
};

export default DocumentUploadForm;
