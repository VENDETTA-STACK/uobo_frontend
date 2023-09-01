import styled from "styled-components";

const ImageLoginPageChild = styled.div`
  position: absolute;
  height: calc(100% - 83.29px);
  top: 46.88px;
  bottom: 36.4px;
  left: 30px;
  border-radius: var(--br-10xl);
  background-color: var(--color-white);
  width: 146.76px;
`;
const ImageLoginPageItem = styled.img`
  position: absolute;
  height: calc(100% - 36.21px);
  width: calc(100% - 29.5px);
  top: 0px;
  right: -0.5px;
  bottom: 36.21px;
  left: 30px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.9;
`;
const ImageLoginPageInner = styled.img`
  position: absolute;
  width: calc(100% - 26.05px);
  right: 26.05px;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  height: 24px;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: calc(50% - 6px);
  letter-spacing: 0.29px;
  line-height: 5px;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;
const Wrapper = styled.div`
  position: absolute;
  top: calc(50% + 75.82px);
  left: calc(50% - 64.53px);
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-400);
  width: 104px;
  height: 25px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: calc(50% - 47.69px);
  left: calc(50% - 67.56px);
  width: 119.97px;
  height: 106.51px;
`;
const ImageLoginPageRoot = styled.div`
  position: absolute;
  top: 173.36px;
  left: 181px;
  width: 233.05px;
  height: 325.64px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const FormContainer2 = () => {
  return (
    <ImageLoginPageRoot>
      <ImageLoginPageChild />
      <ImageLoginPageItem alt="" src="/group-10512.svg" />
      <ImageLoginPageInner alt="" src="/ellipse-332.svg" />
      <Wrapper>
        <Div>$</Div>
      </Wrapper>
      <GroupIcon alt="" src="/group-10524.svg" />
    </ImageLoginPageRoot>
  );
};

export default FormContainer2;
