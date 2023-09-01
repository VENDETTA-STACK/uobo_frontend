import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver-200);
  box-sizing: border-box;
  width: 493px;
  height: 65px;
`;
const DealershipLegalName = styled.div`
  position: absolute;
  top: 7px;
  left: 20px;
  letter-spacing: 0.22px;
`;
const GridCustoms = styled.div`
  position: absolute;
  top: 26px;
  left: 20px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.32px;
  color: var(--color-darkslategray-200);
`;
const IconCorrect = styled.img`
  position: absolute;
  top: 22.6px;
  right: 14.4px;
  width: 21.1px;
  height: 21.1px;
`;
const RectangleParentRoot = styled.div`position: absolute;
  top: 245px;
  left: 200px;
  width: 493px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;
const GridCustomsContainer = ({
  dealerLegalName,
  dealershipAddress,
  carDimensions,
  propTop,
  propLeft,
}) => {
  return (
    <RectangleParentRoot propTop={propTop} propLeft={propLeft}>
      <GroupChild />
      <DealershipLegalName>{dealerLegalName}</DealershipLegalName>
      <GridCustoms>{dealershipAddress}</GridCustoms>
      <IconCorrect alt="" src={carDimensions} />
    </RectangleParentRoot>
  );
};

export default GridCustomsContainer;
