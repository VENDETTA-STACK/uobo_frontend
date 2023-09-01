import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: -5px;
  left: -19px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
  width: 451px;
  height: 47px;
  display: none;
`;
const OmvicId = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.18px;
`;
const Div = styled.div`
  position: absolute;
  top: 11px;
  left: 0px;
  font-size: var(--font-size-base);
  letter-spacing: 0.26px;
  color: var(--color-darkslategray-200);
`;
const RectangleParent = styled.div`
  position: absolute;
  height: 26.45%;
  width: 12.58%;
  top: 51.24%;
  right: 59.03%;
  bottom: 22.31%;
  left: 28.4%;
`;
const RectangleGroup = styled.div`position: absolute;
  height: 26.45%;
  width: 18.86%;
  top: 19.83%;
  right: 52.74%;
  bottom: 53.72%;
  left: 28.4%;
  width: ${(p) => p.propWidth}
  right: ${(p) => p.propRight}
`;
const GroupInner = styled.div`
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
const RectangleIcon = styled.img`
  position: absolute;
  height: calc(100% - 12px);
  width: calc(100% - 12px);
  top: 6px;
  right: 6px;
  bottom: 6px;
  left: 6px;
  border-radius: var(--br-62xl);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const AddUsersImage = styled.div`
  position: absolute;
  top: calc(50% - 37px);
  left: calc(50% - 38px);
  letter-spacing: -0.32px;
  line-height: 19px;
  display: none;
`;
const JpegPng = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 55px);
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 14px;
  color: var(--color-gray-200);
  display: none;
  width: 154px;
`;
const GroupIcon = styled.img`
  position: absolute;
  right: -46px;
  bottom: 1px;
  width: 33px;
  height: 32px;
  display: none;
`;
const RectangleContainer = styled.div`
  position: absolute;
  height: calc(100% - 25px);
  top: 13px;
  bottom: 12px;
  left: 24px;
  width: 96px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-royalblue-100);
`;
const GroupChild1 = styled.img`
  position: absolute;
  top: calc(50% - 20.5px);
  right: 20px;
  width: 41px;
  height: 41px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 353px;
  left: 200px;
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 493px;
  height: 121px;
  text-align: left;
  font-size: var(--font-size-2xs);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop};
`;
const ContainerCard = ({
  userImageUrl,
  userName,
  imageId,
  dimensionCode,
  propTop,
  propWidth,
  propRight,
}) => {
  return (
    <GroupParentRoot propTop={propTop}>
      <RectangleParent>
        <GroupChild />
        <OmvicId>Omvic ID</OmvicId>
        <Div>{userImageUrl}</Div>
      </RectangleParent>
      <RectangleGroup propWidth={propWidth} propRight={propRight}>
        <GroupChild />
        <OmvicId>Name</OmvicId>
        <Div>{userName}</Div>
      </RectangleGroup>
      <RectangleContainer>
        <GroupInner />
        <RectangleIcon alt="" src={imageId} />
        <AddUsersImage>Add user's image</AddUsersImage>
        <JpegPng>(jpeg, png)</JpegPng>
        <GroupIcon alt="" src={dimensionCode} />
      </RectangleContainer>
      <GroupChild1 alt="" src="/group-105762.svg" />
    </GroupParentRoot>
  );
};

export default ContainerCard;
