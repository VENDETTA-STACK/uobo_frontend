import styled from "styled-components";
import DealershipTypeForm1 from "../components/DealershipTypeForm1";
import ContainerForm from "../components/ContainerForm";

const DealershipSignup13Child = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 1280px;
  height: 768px;
`;
const Path3020Icon = styled.img`
  position: absolute;
  top: 138px;
  left: 48px;
  width: 475px;
  height: 580px;
`;
const Uobo = styled.div`
  position: absolute;
  top: 33px;
  left: 48px;
  letter-spacing: 9.1px;
  font-family: var(--font-merel-regular-);
`;
const RedefiningTheAutomotive = styled.div`
  position: absolute;
  top: 71px;
  left: 50px;
  font-size: var(--font-size-base);
  letter-spacing: 0.42px;
  color: var(--color-darkgray-200);
  display: inline-block;
  width: 340px;
`;
const DealershipSignup13Item = styled.div`
  position: absolute;
  top: 619px;
  right: 2px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
  width: 640px;
  height: 153px;
`;
const ButtonLoginChild = styled.div`
  position: absolute;
  top: calc(50% - 32.5px);
  left: calc(50% - 245px);
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-100);
  width: 490px;
  height: 65px;
`;
const Submit = styled.div`
  position: absolute;
  top: calc(50% - 18.5px);
  left: calc(50% - 36.59px);
  letter-spacing: 0.38px;
`;
const ButtonLogin = styled.div`
  position: absolute;
  top: 673.5px;
  right: 104px;
  width: 490px;
  height: 65px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
`;
const DealershipSignup13Inner = styled.div`
  position: absolute;
  top: 0px;
  right: 2px;
  background: linear-gradient(180deg, #fff, #fff);
  width: 640px;
  height: 183px;
`;
const TitleWeBelieve = styled.div`
  position: absolute;
  top: 105px;
  left: 816px;
  font-size: var(--font-size-14xl);
  letter-spacing: 3.6px;
  text-transform: uppercase;
  color: var(--color-darkslategray-200);
  text-align: center;
`;
const AFewClicks = styled.div`
  position: absolute;
  top: calc(50% - 34.5px);
  left: calc(50% - 111px);
  letter-spacing: 0.9px;
`;
const TheFutureOf = styled.div`
  position: absolute;
  top: calc(50% - 5.5px);
  left: calc(50% - 160px);
  font-size: var(--font-size-11xl);
  letter-spacing: 1.35px;
  line-height: 30px;
  color: var(--color-royalblue-100);
  text-align: center;
`;
const TextWelcome = styled.div`
  position: absolute;
  top: 609px;
  left: 126px;
  width: 320px;
  height: 69px;
  font-size: var(--font-size-xl);
  color: var(--color-dimgray-300);
`;
const DealershipSignup13Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1144px;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: var(--color-gray-1400);
  font-family: var(--font-avenir-next);
`;
const DealershipSignup13 = () => {
  return (
    <DealershipSignup13Root>
      <DealershipSignup13Child />
      <Path3020Icon alt="" src="/path-3020.svg" />
      <Uobo>UOBO</Uobo>
      <RedefiningTheAutomotive>
        Redefining the automotive industry
      </RedefiningTheAutomotive>
      <DealershipTypeForm1 />
      <DealershipSignup13Item />
      <ButtonLogin>
        <ButtonLoginChild />
        <Submit>Submit</Submit>
      </ButtonLogin>
      <DealershipSignup13Inner />
      <TitleWeBelieve>Get Started</TitleWeBelieve>
      <TextWelcome>
        <AFewClicks>A few clicks away from</AFewClicks>
        <TheFutureOf>The future of car sales</TheFutureOf>
      </TextWelcome>
      <ContainerForm
        dimension="/group-105121.svg"
        imageDimensions="/group-105491.svg"
        propOpacity="unset"
        propLeft="calc(50% - 32px)"
        propLeft1="calc(50% - 60.84px)"
      />
    </DealershipSignup13Root>
  );
};

export default DealershipSignup13;
