import { Property } from "csstype";
import styled from "styled-components";

const RegistrationYear = styled.div`
  position: absolute;
  top: calc(50% - 18.37px);
  left: 36.5px;
  display: inline-block;
  width: 168px;
`;
const Path1161Icon = styled.img`
  position: absolute;
  top: calc(50% - 14.37px);
  right: 29.04px;
  width: 12.96px;
  height: 9.1px;
`;
const Indicator = styled.div`
  position: absolute;
  bottom: 9.32px;
  left: calc(50% - 147.9px);
  border-radius: var(--br-81xl);
  background-color: var(--color-whitesmoke-200);
  width: 312.86px;
  height: 3px;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 19.37px);
  right: 51.5px;
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-royalblue-100);
  text-align: right;
`;
const Indicator1 = styled.div`
  position: absolute;
  bottom: 8.75px;
  left: calc(50% - 24.67px);
  border-radius: var(--br-81xl);
  background-color: var(--color-royalblue-100);
  width: 183.89px;
  height: 4px;
`;
const RegYearChild = styled.img`
  position: absolute;
  bottom: -19px;
  left: calc(50% - 35.42px);
  width: 40.49px;
  height: 40.49px;
`;
const RegYearItem = styled.img`
  position: absolute;
  right: 6.54px;
  bottom: -19px;
  width: 40.49px;
  height: 40.49px;
`;
const RegYearRoot = styled.div`position: absolute;
  top: 554.75px;
  left: 3.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 68.75px;
  display: none;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  bottom: ${(p) => p.propBottom}
`;
const YearFilterContainer = ({
  vehicleRegistrationYear,
  regYear,
  propTop,
  propBottom,
}) => {
  return (
    !regYear && (
      <RegYearRoot propTop={propTop} propBottom={propBottom}>
        <RegistrationYear>{vehicleRegistrationYear}</RegistrationYear>
        <Path1161Icon alt="" src="/path-11612.svg" />
        <Indicator />
        <Div>2015 - 2021</Div>
        <Indicator1 />
        <RegYearChild alt="" src="/group-10795.svg" />
        <RegYearItem alt="" src="/group-10795.svg" />
      </RegYearRoot>
    )
  );
};

export default YearFilterContainer;
