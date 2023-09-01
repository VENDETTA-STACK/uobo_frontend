import styled from "styled-components";

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
  border: 3px solid var(--color-royalblue-100);
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
  top: calc(50% - 19.99px);
  left: calc(50% - 74.7px);
  letter-spacing: 3.56px;
  line-height: 26px;
  text-transform: uppercase;
`;
const LogoIcon = styled.div`
  position: absolute;
  height: calc(100% - 61.73px);
  width: calc(100% - 61.59px);
  top: 30.87px;
  right: 30.59px;
  bottom: 30.87px;
  left: 31px;
  font-family: var(--font-league-gothic);
`;
const Uploading = styled.div`
  position: absolute;
  top: calc(50% - 16.5px);
  left: calc(50% - 54.5px);
  font-size: var(--font-size-3xl);
  letter-spacing: 0.35px;
  line-height: 27px;
  color: var(--color-royalblue-100);
  display: none;
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
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 232px;
  left: 326px;
  width: 243px;
  height: 243px;
  text-align: center;
  font-size: var(--font-size-9xl);
  color: var(--color-white);
  font-family: var(--font-avenir-next);
`;
const GridCustomsContainer1 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <GroupItem />
      <LogoIcon>
        <Union7Icon alt="" src="/union-72.svg" />
        <GridCustoms>Grid Customs</GridCustoms>
      </LogoIcon>
      <Uploading>Uploading ...</Uploading>
      <JpegPng>(jpeg, png)</JpegPng>
      <GroupInner alt="" src="/group-105685.svg" />
    </RectangleParentRoot>
  );
};

export default GridCustomsContainer1;
