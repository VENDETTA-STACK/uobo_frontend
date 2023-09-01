import styled from "styled-components";

const ImageResolutionShould = styled.span`
  letter-spacing: -0.15px;
`;
const X240pxAnd800x800px = styled.span`
  letter-spacing: 0.59px;
`;
const ImageResolutionShouldContainer = styled.div`
  position: absolute;
  top: calc(50% - 14px);
  left: calc(50% - 110.5px);
  line-height: 22px;
  display: inline-block;
  width: 262px;
`;
const MaximumUploadSize = styled.div`
  position: absolute;
  top: calc(50% + 38px);
  left: calc(50% - 110.5px);
  letter-spacing: 0.11px;
  line-height: 22px;
  display: inline-block;
  width: 262px;
`;
const LogoUploadGuidelines = styled.div`
  position: absolute;
  top: calc(50% - 64px);
  left: calc(50% - 108.5px);
  font-size: var(--font-size-lg);
  letter-spacing: 0.4px;
  line-height: 26px;
  font-family: var(--font-avenir-lt-std);
  text-align: center;
`;
const InformationIcon = styled.img`
  position: absolute;
  top: 22px;
  left: 18px;
  width: 19px;
  height: 19px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: 25px;
  border-right: 5px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  width: 5.1px;
  height: 10px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: calc(50% + 43px);
  left: 25px;
  border-right: 5px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  width: 5.1px;
  height: 10px;
`;
const ImageResolutionShouldBeBetParentRoot = styled.div`
  position: absolute;
  top: 421px;
  right: 47px;
  border-radius: var(--br-6xs);
  background-color: var(--color-royalblue-300);
  width: 309px;
  height: 164px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-200);
  font-family: var(--font-avenir-next);
`;
const FormContainer1 = () => {
  return (
    <ImageResolutionShouldBeBetParentRoot>
      <ImageResolutionShouldContainer>
        <ImageResolutionShould>{`Image resolution should be between `}</ImageResolutionShould>
        <X240pxAnd800x800px>240x240px and 800x800px</X240pxAnd800x800px>
      </ImageResolutionShouldContainer>
      <MaximumUploadSize>Maximum upload size is 2mb.</MaximumUploadSize>
      <LogoUploadGuidelines>Logo upload guidelines</LogoUploadGuidelines>
      <InformationIcon alt="" src="/information.svg" />
      <GroupChild />
      <GroupItem />
    </ImageResolutionShouldBeBetParentRoot>
  );
};

export default FormContainer1;
