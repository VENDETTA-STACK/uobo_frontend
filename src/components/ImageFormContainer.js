import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  height: calc(100% + 6px);
  width: calc(100% + 6px);
  top: -6px;
  right: 0px;
  bottom: 0px;
  left: -6px;
  border-radius: var(--br-103xl);
  background-color: var(--color-whitesmoke-400);
  border: 3px dashed var(--color-crimson);
  box-sizing: border-box;
  border: ${(p) => p.propBorder};
`;
const GroupItem = styled.div`
  position: absolute;
  height: calc(100% - 28px);
  width: calc(100% - 28px);
  top: 14px;
  right: 14px;
  bottom: 14px;
  left: 14px;
  border-radius: var(--br-89xl);
  background-color: var(--color-royalblue-200);
`;
const ChooseImage = styled.div`
  position: absolute;
  top: calc(50% - 28.5px);
  left: calc(50% - 72.5px);
  letter-spacing: 0.35px;
  line-height: 27px;
`;
const JpegPng = styled.div`
  position: absolute;
  top: calc(50% + 4.5px);
  left: calc(50% - 108.5px);
  font-size: var(--font-size-sm);
  letter-spacing: 0.22px;
  line-height: 14px;
  color: var(--color-gray-200);
  display: inline-block;
  width: 218px;
`;
const GroupInner = styled.img`
  position: absolute;
  right: 0px;
  bottom: 10px;
  width: 52px;
  height: 52px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 232px;
  left: 326px;
  width: 243px;
  height: 243px;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
`;
const ImageFormContainer = ({ propBorder }) => {
  return (
    <RectangleParentRoot>
      <GroupChild propBorder={propBorder} />
      <GroupItem />
      <ChooseImage>Choose image</ChooseImage>
      <JpegPng>(jpeg, png)</JpegPng>
      <GroupInner alt="" src="/group-10568.svg" />
    </RectangleParentRoot>
  );
};

export default ImageFormContainer;
