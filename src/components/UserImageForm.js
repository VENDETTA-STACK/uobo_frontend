import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  height: calc(100% + 2px);
  width: calc(100% - 8px);
  top: -2px;
  right: 5px;
  bottom: 0px;
  left: 3px;
  border-radius: var(--br-76xl);
  border: 1px solid var(--color-crimson);
  box-sizing: border-box;
  border: ${(p) => p.propBorder};
`;
const GroupItem = styled.div`
  position: absolute;
  height: calc(100% - 10px);
  width: calc(100% - 20px);
  top: 5px;
  right: 10px;
  bottom: 5px;
  left: 10px;
  border-radius: var(--br-62xl);
  background-color: var(--color-royalblue-200);
`;
const AddUsersImage = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 56px);
  letter-spacing: -0.3px;
  line-height: 18px;
`;
const JpegPng = styled.div`
  position: absolute;
  top: calc(50% + 9px);
  left: calc(50% - 71px);
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 14px;
  color: var(--color-gray-200);
  display: inline-block;
  width: 143px;
`;
const GroupInner = styled.img`
  position: absolute;
  right: 5px;
  bottom: 3px;
  width: 30px;
  height: 29px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 71.5px);
  width: 142px;
  height: 132px;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
`;
const UserImageForm = ({ propBorder }) => {
  return (
    <RectangleParentRoot>
      <GroupChild propBorder={propBorder} />
      <GroupItem />
      <AddUsersImage>Add user's image</AddUsersImage>
      <JpegPng>(jpeg, png)</JpegPng>
      <GroupInner alt="" src="/group-105681.svg" />
    </RectangleParentRoot>
  );
};

export default UserImageForm;
