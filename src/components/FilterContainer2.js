import styled from "styled-components";
import LocationContainer from "./LocationContainer";

const TextSub = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  letter-spacing: 0.53px;
  line-height: 30px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const NounFilter787737Icon = styled.img`
  position: absolute;
  top: calc(50% - 6px);
  left: 0px;
  width: 46.77px;
  height: 42.08px;
`;
const FilterHead = styled.div`
  position: absolute;
  top: 65px;
  left: calc(50% - 74.75px);
  width: 73.82px;
  height: 29px;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-600);
  font-family: var(--font-roboto);
`;
const PriceRange = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Indicator = styled.div`
  position: absolute;
  bottom: 9.32px;
  left: calc(50% - 153.65px);
  border-radius: var(--br-81xl);
  background-color: var(--color-whitesmoke-200);
  width: 312.86px;
  height: 3px;
`;
const Any = styled.div`
  position: absolute;
  top: 1px;
  right: -1px;
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-gray-600);
  text-align: right;
`;
const Indicator1 = styled.div`
  position: absolute;
  bottom: 8.75px;
  left: calc(50% - 153.65px);
  border-radius: var(--br-81xl);
  background-color: var(--color-royalblue-100);
  width: 307.86px;
  height: 4px;
`;
const PriceChild = styled.img`
  position: absolute;
  bottom: -19px;
  left: 1.25px;
  width: 40.49px;
  height: 40.49px;
`;
const PriceItem = styled.img`
  position: absolute;
  right: -18.71px;
  bottom: -19px;
  width: 40.49px;
  height: 40.49px;
`;
const Price = styled.div`
  position: absolute;
  top: calc(50% - 183px);
  right: 32px;
  width: 330.5px;
  height: 54.75px;
`;
const BodyType = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 36px;
  display: inline-block;
  width: 108px;
`;
const Path1161Icon = styled.img`
  position: absolute;
  top: calc(50% - 5px);
  right: 29.04px;
  width: 12.96px;
  height: 9.1px;
`;
const Any1 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  right: 51.5px;
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-gray-600);
  text-align: right;
`;
const Body = styled.div`
  position: absolute;
  top: calc(50% - 97.5px);
  right: 7.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 50px;
`;
const Make = styled.div`
  position: absolute;
  top: calc(50% - 47.5px);
  right: 7.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 50px;
`;
const Models = styled.div`
  position: absolute;
  top: calc(50% + 2.5px);
  right: 7.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 50px;
`;
const Trims = styled.div`
  position: absolute;
  top: calc(50% + 52.5px);
  right: 7.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 50px;
`;
const Year = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 36px;
  display: inline-block;
  width: 168px;
`;
const RegYear = styled.div`
  position: absolute;
  top: calc(50% + 102.5px);
  right: 7.5px;
  background-color: var(--color-white);
  width: 391px;
  height: 50px;
`;
const FilterGroupChild = styled.div`
  position: absolute;
  right: 3.5px;
  bottom: 42px;
  background: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0));
  width: 389px;
  height: 121px;
`;
const ApplyFilters = styled.div`
  position: absolute;
  top: 3px;
  left: calc(50% - 61px);
  letter-spacing: 0.57px;
`;
const ButtonApplyFilters = styled.div`
  position: absolute;
  right: 20.5px;
  bottom: 62px;
  border-radius: var(--br-19xl);
  background-color: var(--color-royalblue-100);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 210px;
  height: 40px;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-white);
`;
const LinesIcon = styled.img`
  position: absolute;
  top: 124px;
  right: 0px;
  width: 402px;
  height: 452px;
`;
const SliderIcon = styled.img`
  position: absolute;
  top: calc(50% - 290px);
  right: 2.5px;
  width: 4px;
  height: 575px;
`;
const FilterGroupRoot = styled.div`
  position: absolute;
  top: -35px;
  left: -192.5px;
  background-color: var(--color-white);
  border: 0.5px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 594.5px;
  height: 846px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-next);
`;
const FilterContainer2 = () => {
  return (
    <FilterGroupRoot>
      <FilterHead>
        <TextSub>Filter</TextSub>
        <NounFilter787737Icon alt="" src="/nounfilter7877371.svg" />
      </FilterHead>
      <LocationContainer
        propTop="calc(50% - 279px)"
        propLeft="unset"
        propRight="28.5px"
      />
      <Price>
        <PriceRange>Price Range</PriceRange>
        <Indicator />
        <Any>Any</Any>
        <Indicator1 />
        <PriceChild alt="" src="/group-10795.svg" />
        <PriceItem alt="" src="/group-10795.svg" />
      </Price>
      <Body>
        <BodyType>Body Type</BodyType>
        <Path1161Icon alt="" src="/path-11611.svg" />
        <Any1>Any</Any1>
      </Body>
      <Make>
        <BodyType>Make (21)</BodyType>
        <Path1161Icon alt="" src="/path-11611.svg" />
        <Any1>Any</Any1>
      </Make>
      <Models>
        <BodyType>Models (92)</BodyType>
        <Path1161Icon alt="" src="/path-11611.svg" />
        <Any1>Any</Any1>
      </Models>
      <Trims>
        <BodyType>Trims (303)</BodyType>
        <Path1161Icon alt="" src="/path-11611.svg" />
        <Any1>Any</Any1>
      </Trims>
      <RegYear>
        <Year>Year</Year>
        <Path1161Icon alt="" src="/path-11611.svg" />
        <Any1>Any</Any1>
      </RegYear>
      <FilterGroupChild />
      <ButtonApplyFilters>
        <ApplyFilters>Apply filters</ApplyFilters>
      </ButtonApplyFilters>
      <LinesIcon alt="" src="/lines.svg" />
      <SliderIcon alt="" src="/slider.svg" />
    </FilterGroupRoot>
  );
};

export default FilterContainer2;
