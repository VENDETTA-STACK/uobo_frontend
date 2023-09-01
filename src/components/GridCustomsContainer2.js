import styled from "styled-components";

const Union7Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GridCustoms = styled.div`
  position: absolute;
  top: calc(50% - 16.56px);
  left: calc(50% - 64px);
  letter-spacing: 3.05px;
  line-height: 22.4px;
  text-transform: uppercase;
`;
const LogoIcon = styled.div`
  position: absolute;
  top: calc(50% - 75.09px);
  left: calc(50% - 75.15px);
  width: 150.29px;
  height: 150.17px;
  opacity: 0.1;
  font-family: var(--font-league-gothic);
`;
const GroupChild = styled.div`
  position: absolute;
  height: calc(100% + 6px);
  width: calc(100% + 6px);
  top: -6px;
  right: 0px;
  bottom: 0px;
  left: -6px;
  border-radius: var(--br-103xl);
  background-color: var(--color-whitesmoke-400);
  border: 3px dashed var(--color-royalblue-100);
  box-sizing: border-box;
`;
const GroupItem = styled.div`
  position: absolute;
  height: calc(100% - 28px);
  width: calc(100% - 28px);
  top: 14px;
  right: 14px;
  bottom: 14px;
  left: 14px;
  border-radius: var(--br-89xl);
  background-color: var(--color-royalblue-200);
`;
const Uploading = styled.div`
  position: absolute;
  top: calc(50% - 16.5px);
  left: calc(50% - 54.5px);
  font-size: var(--font-size-3xl);
  letter-spacing: 0.35px;
  line-height: 27px;
  color: var(--color-royalblue-100);
`;
const JpegPng = styled.div`
  position: absolute;
  top: calc(50% + 4.5px);
  left: calc(50% - 108.5px);
  font-size: var(--font-size-sm);
  letter-spacing: 0.22px;
  line-height: 14px;
  color: var(--color-gray-200);
  display: none;
  width: 218px;
`;
const GroupInner = styled.img`
  position: absolute;
  right: 0px;
  bottom: 10px;
  width: 52px;
  height: 52px;
  display: none;
`;
const LogoIconParentRoot = styled.div`
  position: absolute;
  top: 232px;
  left: 326px;
  width: 243px;
  height: 243px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-family: var(--font-avenir-next);
`;
const GridCustomsContainer2 = () => {
  return (
    <LogoIconParentRoot>
      <LogoIcon>
        <Union7Icon alt="" src="/union-71.svg" />
        <GridCustoms>Grid Customs</GridCustoms>
      </LogoIcon>
      <GroupChild />
      <GroupItem />
      <Uploading>Uploading ...</Uploading>
      <JpegPng>(jpeg, png)</JpegPng>
      <GroupInner alt="" src="/group-10568.svg" />
    </LogoIconParentRoot>
  );
};

export default GridCustomsContainer2;
