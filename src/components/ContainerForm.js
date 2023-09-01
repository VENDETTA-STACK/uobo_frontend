import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.img`
  position: absolute;
  top: calc(50% + 12.27px);
  left: calc(50% + 27.34px);
  width: 60.87px;
  height: 2.93px;
`;
const GroupItem = styled.img`
  position: absolute;
  top: calc(50% + 12.27px);
  left: calc(50% - 88.69px);
  width: 60.87px;
  height: 2.93px;
`;
const Path3052Icon = styled.img`
  position: absolute;
  top: calc(50% + 52.72px);
  right: 32.41px;
  width: 146.51px;
  height: 30.01px;
`;
const Path3053Icon = styled.img`
  position: absolute;
  top: calc(50% + 52.72px);
  left: 31.61px;
  width: 146.51px;
  height: 30.01px;
`;
const GroupInner = styled.img`
  position: absolute;
  top: calc(50% + 77.79px);
  left: calc(50% + 40.52px);
  width: 40.54px;
  height: 30.09px;
`;
const LineIcon = styled.img`
  position: absolute;
  top: calc(50% + 77.79px);
  left: calc(50% - 73.36px);
  width: 40.54px;
  height: 30.09px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: calc(50% - 90.69px);
  left: calc(50% - 1.89px);
  border-right: 2px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 4px;
  height: 62.49px;
  opacity: 0.8;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: calc(50% + 96.19px);
  left: calc(50% + 70.8px);
  width: 38.92px;
  height: 38.92px;
`;
const GroupChild1 = styled.img`
  position: absolute;
  top: calc(50% + 96.19px);
  left: calc(50% - 109.72px);
  width: 38.92px;
  height: 38.92px;
`;
const GroupChild2 = styled.img`
  position: absolute;
  top: calc(50% + 63.68px);
  right: 0px;
  width: 40px;
  height: 38px;
`;
const GroupChild3 = styled.img`
  position: absolute;
  height: calc(100% - 0.22px);
  width: calc(100% - 0.14px);
  top: 0px;
  right: 0.14px;
  bottom: 0.22px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.9;
  opacity: ${(p) => p.propOpacity};
`;
const GroupWrapper = styled.div`
  position: absolute;
  bottom: 54.66px;
  left: calc(50% - 51.87px);
  border-radius: var(--br-10xl);
  background-color: var(--color-white);
  width: 103.74px;
  height: 171.7px;
`;
const GroupChild4 = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% - 57.72px);
  width: 116.55px;
  height: 116.55px;
`;
const Uobo = styled.div`
  position: absolute;
  top: calc(50% + 39.65px);
  left: calc(50% - 34.37px);
  letter-spacing: 5.6px;
  left: ${(p) => p.propLeft};
`;
const GroupChild5 = styled.img`
  position: absolute;
  top: calc(50% - 6.95px);
  left: calc(50% + 88.16px);
  width: 38.92px;
  height: 38.92px;
`;
const GroupChild6 = styled.img`
  position: absolute;
  top: calc(50% - 6.95px);
  left: calc(50% - 127.08px);
  width: 38.92px;
  height: 38.92px;
`;
const Path3051Icon = styled.img`
  position: absolute;
  top: calc(50% - 93.58px);
  left: calc(50% - 0.53px);
  width: 0px;
  height: 0px;
`;
const GroupChild7 = styled.img`
  position: absolute;
  top: calc(50% + 63.68px);
  left: 0px;
  width: 40px;
  height: 38px;
`;
const GroupChild8 = styled.div`
  position: absolute;
  top: calc(50% + 67.8px);
  left: calc(50% - 33.96px);
  border-top: 2px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  width: 66.16px;
  height: 4px;
`;
const GroupChild9 = styled.div`
  position: absolute;
  top: calc(50% + 67.8px);
  left: calc(50% - 33.96px);
  border-top: 2px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 57.91px;
  height: 4px;
  opacity: 0.8;
`;
const EllipseIcon = styled.img`
  position: absolute;
  bottom: 0px;
  left: calc(50% - 60.84px);
  border-radius: 50%;
  width: 121.9px;
  height: 14.66px;
  left: ${(p) => p.propLeft1};
`;
const LineParentRoot = styled.div`
  position: absolute;
  top: 173px;
  left: 92px;
  width: 388px;
  height: 387.47px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-1400);
  font-family: var(--font-merel-regular-);
`;
const ContainerForm = ({
  dimension,
  imageDimensions,
  propOpacity,
  propLeft,
  propLeft1,
}) => {
  return (
    <LineParentRoot>
      <GroupChild alt="" src="/line-9.svg" />
      <GroupItem alt="" src="/line-10.svg" />
      <Path3052Icon alt="" src="/path-3052.svg" />
      <Path3053Icon alt="" src="/path-3053.svg" />
      <GroupInner alt="" src="/line-7.svg" />
      <LineIcon alt="" src="/line-11.svg" />
      <LineDiv />
      <GroupIcon alt="" src="/group-10530.svg" />
      <GroupChild1 alt="" src="/group-10539.svg" />
      <GroupChild2 alt="" src="/group-10531.svg" />
      <GroupWrapper>
        <GroupChild3 alt="" src={dimension} propOpacity={propOpacity} />
      </GroupWrapper>
      <GroupChild4 alt="" src={imageDimensions} />
      <Uobo propLeft={propLeft}>UOBO</Uobo>
      <GroupChild5 alt="" src="/group-10537.svg" />
      <GroupChild6 alt="" src="/group-10540.svg" />
      <Path3051Icon alt="" src="/path-3051.svg" />
      <GroupChild7 alt="" src="/group-10538.svg" />
      <GroupChild8 />
      <GroupChild9 />
      <EllipseIcon alt="" src="/ellipse-3321.svg" propLeft1={propLeft1} />
    </LineParentRoot>
  );
};

export default ContainerForm;
