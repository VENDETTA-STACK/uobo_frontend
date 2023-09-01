import styled from "styled-components";

const ModelsChild = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--color-white);
  height: 50px;
`;
const Models13 = styled.div`
  position: absolute;
  top: 16px;
  left: 36px;
  font-size: var(--font-size-mini);
  display: inline-block;
  width: 108px;
`;
const Path1161Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 29.04px;
  width: 12.96px;
  height: 9.1px;
`;
const Any = styled.div`
  position: absolute;
  top: 13px;
  right: 51.5px;
  letter-spacing: 0.26px;
  color: var(--color-royalblue-100);
  text-align: right;
  display: none;
`;
const Div = styled.div`
  position: absolute;
  width: 54.38%;
  top: calc(50% - 303.2px);
  left: 0px;
  letter-spacing: 0.26px;
  color: var(--color-royalblue-100);
  display: inline-block;
`;
const Div1 = styled.div`
  position: absolute;
  width: 55.33%;
  top: calc(50% - 266.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div2 = styled.div`
  position: absolute;
  width: 55.33%;
  top: calc(50% - 229.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div3 = styled.div`
  position: absolute;
  width: 55.33%;
  top: calc(50% - 192.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div4 = styled.div`
  position: absolute;
  width: 58.18%;
  top: calc(50% - 155.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div5 = styled.div`
  position: absolute;
  width: 58.18%;
  top: calc(50% - 118.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div6 = styled.div`
  position: absolute;
  width: 54.38%;
  top: calc(50% - 81.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div7 = styled.div`
  position: absolute;
  width: 53.43%;
  top: calc(50% - 44.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div8 = styled.div`
  position: absolute;
  width: 58.18%;
  top: calc(50% - 7.2px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div9 = styled.div`
  position: absolute;
  width: 55.33%;
  top: calc(50% + 29.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div10 = styled.div`
  position: absolute;
  width: 55.33%;
  top: calc(50% + 66.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div11 = styled.div`
  position: absolute;
  width: 58.18%;
  top: calc(50% + 103.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div12 = styled.div`
  position: absolute;
  width: 58.18%;
  top: calc(50% + 140.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div13 = styled.div`
  position: absolute;
  width: 54.38%;
  top: calc(50% + 177.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const Div14 = styled.div`
  position: absolute;
  width: 63.24%;
  top: calc(50% + 214.8px);
  left: 0px;
  letter-spacing: 0.26px;
  display: inline-block;
`;
const DropdownListChild = styled.img`
  position: absolute;
  height: calc(100% - 1.47px);
  top: 3.88px;
  right: -2.83px;
  bottom: -2.41px;
  max-height: 100%;
  width: 17.54px;
`;
const DropdownList = styled.div`
  position: absolute;
  height: calc(100% - 51.25px);
  width: calc(100% - 74.72px);
  top: 51.25px;
  right: 28.22px;
  bottom: 0px;
  left: 46.5px;
  color: var(--color-darkslategray-200);
`;
const ModelsRoot = styled.div`
  position: absolute;
  bottom: -244.45px;
  left: 3.5px;
  width: 391px;
  height: 657.65px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-dimgray-200);
  font-family: var(--font-avenir-next);
`;
const SettingsContainer = () => {
  return (
    <ModelsRoot>
      <ModelsChild />
      <Models13>Models (13)</Models13>
      <Path1161Icon alt="" src="/path-11612.svg" />
      <Any>Any</Any>
      <DropdownList>
        <Div>Any</Div>
        <Div1>Audi A3</Div1>
        <Div2>Audi A4</Div2>
        <Div3>Audi A6</Div3>
        <Div4>Audi Q5</Div4>
        <Div5>Audi Q3</Div5>
        <Div6>Audi R8</Div6>
        <Div7>Audi TT</Div7>
        <Div8>Audi e-tron</Div8>
        <Div9>Audi A8</Div9>
        <Div10>Audi A7</Div10>
        <Div11>Audi Q7</Div11>
        <Div12>Audi Q8</Div12>
        <Div13>Audi S3</Div13>
        <Div14>Audi RS7</Div14>
        <DropdownListChild alt="" src="/group-10812.svg" />
      </DropdownList>
    </ModelsRoot>
  );
};

export default SettingsContainer;
