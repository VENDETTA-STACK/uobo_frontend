import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  right: 20px;
  bottom: 21px;
  left: 20px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  height: 209px;
`;
const LetMrJohn = styled.div`
  position: absolute;
  width: calc(100% - 158.62px);
  top: 20px;
  left: 80px;
  letter-spacing: 0.58px;
  line-height: 22px;
  display: inline-block;
`;
const StartTyping = styled.div`
  position: absolute;
  top: calc(50% - 22px);
  left: 43.31px;
  font-size: var(--font-size-base);
  letter-spacing: 0.51px;
  line-height: 22px;
  color: var(--color-darkgray-100);
  text-align: left;
  display: inline-block;
  width: 325px;
`;
const Send = styled.div`
  position: absolute;
  bottom: 35px;
  left: calc(50% - 21px);
  letter-spacing: 0.47px;
  color: var(--color-royalblue-100);
  opacity: 0.34;
`;
const GroupItem = styled.div`
  position: absolute;
  top: calc(50% - 29px);
  left: 39px;
  border-right: 1px solid var(--color-dimgray-100);
  box-sizing: border-box;
  width: 2px;
  height: 29px;
`;
const GroupInner = styled.div`
  position: absolute;
  width: calc(100% - 98.62px);
  right: 49.12px;
  bottom: 67.5px;
  left: 49.5px;
  border-top: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  height: 2px;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: 14px;
`;
const Textbox3 = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: calc(50% - 70px);
  border-radius: var(--br-lgi);
  background-color: var(--color-white);
  border: 0.7px solid var(--color-dimgray-300);
  box-sizing: border-box;
  width: 140px;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: 25px;
`;
const Textbox2 = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: var(--br-lgi);
  background-color: var(--color-white);
  border: 0.7px solid var(--color-dimgray-300);
  box-sizing: border-box;
  width: 140px;
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: 15px;
`;
const Textbox1 = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-lgi);
  background-color: var(--color-white);
  border: 0.7px solid var(--color-dimgray-300);
  box-sizing: border-box;
  width: 140px;
`;
const ButtonsPreText = styled.div`
  position: absolute;
  width: calc(100% - 39.62px);
  top: calc(50% - 93.5px);
  right: 19.62px;
  left: 20px;
  height: 32px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray-300);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  right: 131.38px;
  bottom: 78px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border: 0.5px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 501.62px;
  height: 365px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-next);
`;
const FormContainer6 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <LetMrJohn>
        Let Mr. John know what more details would be required.
      </LetMrJohn>
      <StartTyping>Start typing..</StartTyping>
      <Send>Send</Send>
      <GroupItem />
      <GroupInner />
      <ButtonsPreText>
        <Textbox3>
          <Div>Self Assessment</Div>
        </Textbox3>
        <Textbox2>
          <Div1>Void Cheque</Div1>
        </Textbox2>
        <Textbox1>
          <Div2>Bank Statement</Div2>
        </Textbox1>
      </ButtonsPreText>
    </RectangleParentRoot>
  );
};

export default FormContainer6;
