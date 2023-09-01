import styled from "styled-components";
import FormContainer2 from "../components/FormContainer2";

const DealershipLogin5Child = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  background-color: var(--color-white);
  width: 1280px;
  height: 768px;
`;
const Path3020Icon = styled.img`
  position: absolute;
  bottom: 50px;
  left: 48px;
  width: 475px;
  height: 580px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: calc(50% - 33.5px);
  left: calc(50% - 214.12px);
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 428.24px;
  height: 67px;
`;
const IconCorrect = styled.img`
  position: absolute;
  top: calc(50% - 10.5px);
  right: 14px;
  width: 21px;
  height: 21px;
  display: none;
  opacity: 0.05;
`;
const IconOtp = styled.img`
  position: absolute;
  top: calc(50% - 12.89px);
  left: 20px;
  width: 31.18px;
  height: 20.78px;
`;
const OneTimePassword = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  left: 60px;
  letter-spacing: 0.22px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 328.25px;
  left: 686px;
  width: 428.24px;
  height: 67px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
`;
const ButtonLoginChild = styled.div`
  position: absolute;
  top: calc(50% - 32.5px);
  left: calc(50% - 214.32px);
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue-100);
  width: 428.65px;
  height: 65px;
`;
const ConfirmOtp = styled.div`
  position: absolute;
  top: calc(50% - 18.5px);
  left: calc(50% - 67.91px);
  letter-spacing: 0.38px;
`;
const ButtonLogin = styled.div`
  position: absolute;
  top: 445.25px;
  right: 165.35px;
  width: 428.65px;
  height: 65px;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
`;
const DidntReceiveOtp = styled.span``;
const Resend = styled.span`
  text-decoration: underline;
  color: var(--color-royalblue-100);
`;
const DidntReceiveOtpContainer = styled.div`
  position: absolute;
  top: 540.25px;
  left: 716px;
  letter-spacing: 0.32px;
  line-height: 22.4px;
  display: inline-block;
  width: 370px;
`;
const TitleWeBelieve = styled.div`
  position: absolute;
  top: 197.75px;
  left: 789px;
  font-size: var(--font-size-14xl);
  letter-spacing: 3.6px;
  text-transform: uppercase;
  color: var(--color-darkslategray-200);
`;
const PleaseCheckYour = styled.div`
  position: absolute;
  top: 256.25px;
  left: 720px;
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  line-height: 22.4px;
  color: var(--color-royalblue-100);
  display: inline-block;
  width: 362px;
`;
const Uobo = styled.div`
  position: absolute;
  top: 33px;
  left: 48px;
  font-size: var(--font-size-7xl);
  letter-spacing: 9.1px;
  font-family: var(--font-merel-regular-);
  color: var(--color-gray-1400);
  text-align: left;
`;
const RedefiningTheAutomotive = styled.div`
  position: absolute;
  top: 71px;
  left: 50px;
  font-size: var(--font-size-base);
  letter-spacing: 0.42px;
  color: var(--color-darkgray-200);
  text-align: left;
  display: inline-block;
  width: 340px;
`;
const SellYourCars = styled.span`
  letter-spacing: 0.6px;
`;
const WithJustA = styled.span`
  letter-spacing: 1.4px;
  color: var(--color-royalblue-100);
`;
const SellYourCarsContainer = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 137.5px);
  line-height: 30px;
  display: inline-block;
  width: 277px;
`;
const WelcomeBack = styled.div`
  position: absolute;
  top: calc(50% - 54px);
  left: calc(50% - 158.5px);
  font-size: var(--font-size-11xl);
  letter-spacing: 0.9px;
  line-height: 30px;
  color: var(--color-darkslategray-200);
  display: inline-block;
  width: 318px;
`;
const TextWelcome = styled.div`
  position: absolute;
  bottom: 110px;
  left: 127px;
  width: 317px;
  height: 108px;
`;
const DealershipLogin5Item = styled.div`
  position: absolute;
  top: 358.5px;
  left: 750.5px;
  border-right: 1px solid var(--color-gray-600);
  box-sizing: border-box;
  width: 2px;
  height: 23px;
`;
const DealershipLogin5Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 768px;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-dimgray-300);
  font-family: var(--font-avenir-next);
`;
const DealershipLogin5 = () => {
  return (
    <DealershipLogin5Root>
      <DealershipLogin5Child />
      <Path3020Icon alt="" src="/path-3020.svg" />
      <RectangleParent>
        <GroupChild />
        <IconCorrect alt="" src="/iconcorrect.svg" />
        <IconOtp alt="" src="/icon--otp.svg" />
        <OneTimePassword>One Time Password</OneTimePassword>
      </RectangleParent>
      <ButtonLogin>
        <ButtonLoginChild />
        <ConfirmOtp>Confirm OTP</ConfirmOtp>
      </ButtonLogin>
      <DidntReceiveOtpContainer>
        <DidntReceiveOtp>{`Did'nt receive OTP? `}</DidntReceiveOtp>
        <Resend>Resend</Resend>
      </DidntReceiveOtpContainer>
      <TitleWeBelieve>Hello Jevin</TitleWeBelieve>
      <PleaseCheckYour>
        Please check your email for an OTP message
      </PleaseCheckYour>
      <Uobo>UOBO</Uobo>
      <RedefiningTheAutomotive>
        Redefining the automotive industry
      </RedefiningTheAutomotive>
      <TextWelcome>
        <SellYourCarsContainer>
          <DidntReceiveOtp>
            <DidntReceiveOtp>
              <SellYourCars>{`Sell your cars hassle-free `}</SellYourCars>
              <WithJustA>{`with just a `}</WithJustA>
            </DidntReceiveOtp>
            <WithJustA>
              <DidntReceiveOtp>{`few `}</DidntReceiveOtp>
            </WithJustA>
          </DidntReceiveOtp>
          <WithJustA>
            <DidntReceiveOtp>
              <DidntReceiveOtp>clicks</DidntReceiveOtp>
            </DidntReceiveOtp>
          </WithJustA>
        </SellYourCarsContainer>
        <WelcomeBack>Welcome Back!</WelcomeBack>
      </TextWelcome>
      <DealershipLogin5Item />
      <FormContainer2 />
    </DealershipLogin5Root>
  );
};

export default DealershipLogin5;
