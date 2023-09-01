import { Property } from "csstype";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 18px;
`;
const Textbox1Child = styled.img`
  position: absolute;
  top: calc(50% - 4.37px);
  right: 7.17px;
  width: 11.57px;
  height: 11.57px;
`;
const Textbox1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-lgi);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const ButtonsPreText = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 155.56px;
  height: 32px;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 38px;
`;
const ButtonsPreText1 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 155.56px;
  height: 32px;
`;
const ButtonsPreText2 = styled.div`
  position: absolute;
  top: calc(50% - 15.99px);
  right: 19.03px;
  width: 193px;
  height: 32px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 6px;
  left: 17px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 11.63px;
  right: 7.17px;
  width: 11.57px;
  height: 11.57px;
`;
const Textbox13 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-lgi);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 100px;
  height: 32px;
`;
const ButtonsPreText3 = styled.div`
  position: absolute;
  height: 27.59%;
  width: 31.05%;
  top: 36.21%;
  right: 68.95%;
  bottom: 36.19%;
  left: 0%;
`;
const Div4 = styled.div`
  position: absolute;
  top: 5.5px;
  left: 17px;
`;
const Textbox1Child1 = styled.img`
  position: absolute;
  top: 11.63px;
  right: 7.14px;
  width: 11.57px;
  height: 11.57px;
`;
const ButtonsPreText4 = styled.div`
  position: absolute;
  height: 27.59%;
  width: 31.05%;
  top: 72.41%;
  right: 68.95%;
  bottom: 0%;
  left: 0%;
`;
const SelectedFiltersRoot = styled.div`
  position: absolute;
  top: -76px;
  left: 27px;
  width: 322.03px;
  height: 115.98px;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-dimgray-300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop};
`;
const SelectedFiltersContainer = ({ propTop }) => {
  return (
    <SelectedFiltersRoot propTop={propTop}>
      <ButtonsPreText>
        <Textbox1>
          <Div>$5,500 - $40,000</Div>
          <Textbox1Child alt="" src="/group-10808.svg" />
        </Textbox1>
      </ButtonsPreText>
      <ButtonsPreText1>
        <Textbox1>
          <Div1>2015 - 2021</Div1>
          <Textbox1Child alt="" src="/group-10808.svg" />
        </Textbox1>
      </ButtonsPreText1>
      <ButtonsPreText2>
        <Textbox1>
          <Div>Bentley Continental GT</Div>
          <Textbox1Child alt="" src="/group-108081.svg" />
        </Textbox1>
      </ButtonsPreText2>
      <ButtonsPreText3>
        <Textbox13>
          <Div3>Audi A4</Div3>
          <GroupIcon alt="" src="/group-10808.svg" />
        </Textbox13>
      </ButtonsPreText3>
      <ButtonsPreText4>
        <Textbox13>
          <Div4>Audi A7</Div4>
          <Textbox1Child1 alt="" src="/group-108081.svg" />
        </Textbox13>
      </ButtonsPreText4>
    </SelectedFiltersRoot>
  );
};

export default SelectedFiltersContainer;
