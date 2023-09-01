import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-200);
  height: 44px;
`;
const SocialInsuranceNumber = styled.div`
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
  top: calc(50% - 23.5px);
  right: 8px;
  border-radius: var(--br-9xs);
  width: 21px;
  height: 21px;
`;
const SocialInsuranceNumber1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const SocialInsuranceNumberParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 21px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  bottom: 102px;
  left: 227px;
  width: 347px;
  height: 71px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const FormContainer4 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <SocialInsuranceNumber>
        Social Insurance Number (SIN)
      </SocialInsuranceNumber>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
      <SocialInsuranceNumberParent>
        <SocialInsuranceNumber1>Social Insurance Number</SocialInsuranceNumber1>
        <Div>*** *** *53</Div>
      </SocialInsuranceNumberParent>
    </RectangleParentRoot>
  );
};

export default FormContainer4;
