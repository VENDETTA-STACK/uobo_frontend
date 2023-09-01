import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: calc(50% - 33.5px);
  left: calc(50% - 214.32px);
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
  width: 428.65px;
  height: 67px;
`;
const Password = styled.div`
  position: absolute;
  top: calc(50% - 16.5px);
  left: 60px;
  letter-spacing: 0.35px;
`;
const Path2982Icon = styled.img`
  position: absolute;
  top: calc(50% - 6.5px);
  left: calc(50% - 194.32px);
  width: 25.46px;
  height: 12.73px;
`;
const GroupItem = styled.img`position: absolute;
  top: calc(50% - 7.18px);
  right: 14px;
  width: 28.02px;
  height: 14.35px;
  top: ${(p) => p.propTop}
  height: ${(p) => p.propHeight}
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 354.5px;
  left: 686px;
  width: 428.65px;
  height: 67px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const SorryUserNotFoundContainer = ({ dimensions, propTop, propHeight }) => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <Password>Password</Password>
      <Path2982Icon alt="" src="/path-2982.svg" />
      <GroupItem
        alt=""
        src={dimensions}
        propTop={propTop}
        propHeight={propHeight}
      />
    </RectangleParentRoot>
  );
};

export default SorryUserNotFoundContainer;
