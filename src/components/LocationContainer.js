import { Property } from "csstype";
import styled from "styled-components";

const YourLocation = styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  display: inline-block;
  width: 108px;
`;
const AnyLocation = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 15px;
  display: inline-block;
  width: 108px;
`;
const CrosshairIcon = styled.img`
  position: absolute;
  top: calc(50% - 12.42px);
  right: 7.54px;
  width: 24.95px;
  height: 24.84px;
`;
const AnyLocationParent = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-aliceblue-300);
  height: 40px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
  font-family: var(--font-avenir-lt-std);
`;
const LocationRoot = styled.div`position: absolute;
  top: 73.25px;
  left: 29.5px;
  width: 344px;
  height: 68px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
  right: ${(p) => p.propRight}
`;
const LocationContainer = ({ propTop, propLeft, propRight }) => {
  return (
    <LocationRoot propTop={propTop} propLeft={propLeft} propRight={propRight}>
      <YourLocation>Your Location</YourLocation>
      <AnyLocationParent>
        <AnyLocation>Any Location</AnyLocation>
        <CrosshairIcon alt="" src="/crosshair.svg" />
      </AnyLocationParent>
    </LocationRoot>
  );
};

export default LocationContainer;
