import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  height: calc(100% + 2px);
  width: calc(100% + 2px);
  top: -2px;
  right: 0px;
  bottom: 0px;
  left: -2px;
  border-radius: var(--br-76xl);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const GroupItem = styled.img`
  position: absolute;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: var(--br-62xl);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const AddUsersImage = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 56px);
  letter-spacing: -0.3px;
  line-height: 18px;
  display: none;
`;
const JpegPng = styled.div`
  position: absolute;
  top: calc(50% + 9px);
  left: calc(50% - 71px);
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 14px;
  color: var(--color-gray-200);
  display: none;
  width: 143px;
`;
const GroupInner = styled.img`
  position: absolute;
  right: 0px;
  bottom: 3px;
  width: 30px;
  height: 29px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 66.5px);
  width: 132px;
  height: 132px;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-royalblue-100);
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
  width: 453px;
  height: 60px;
`;
const Name1 = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  letter-spacing: 0.22px;
`;
const NolanMill = styled.div`
  position: absolute;
  top: 26px;
  left: 20px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.29px;
  color: var(--color-darkslategray-200);
`;
const RectangleGroup = styled.div`
  position: absolute;
  height: 18.52%;
  width: 91.89%;
  top: 53.7%;
  right: 4.06%;
  bottom: 27.78%;
  left: 4.06%;
`;
const RectangleContainer = styled.div`
  position: absolute;
  height: 18.52%;
  width: 91.89%;
  top: 75.31%;
  right: 4.06%;
  bottom: 6.17%;
  left: 4.06%;
`;
const AddTeamsCardRoot = styled.div`
  position: absolute;
  top: 215px;
  left: 200px;
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  border: 0.5px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 493px;
  height: 324px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const AddTeamsForm = () => {
  return (
    <AddTeamsCardRoot>
      <RectangleParent>
        <GroupChild />
        <GroupItem alt="" src="/rectangle-28046@2x.png" />
        <AddUsersImage>Add user's image</AddUsersImage>
        <JpegPng>(jpeg, png)</JpegPng>
        <GroupInner alt="" src="/group-105684.svg" />
      </RectangleParent>
      <RectangleGroup>
        <RectangleDiv />
        <Name1>Name</Name1>
        <NolanMill>Nolan Mill</NolanMill>
      </RectangleGroup>
      <RectangleContainer>
        <RectangleDiv />
        <Name1>Omvic ID</Name1>
        <NolanMill>1236513</NolanMill>
      </RectangleContainer>
    </AddTeamsCardRoot>
  );
};

export default AddTeamsForm;
