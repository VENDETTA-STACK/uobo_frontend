import { Property } from "csstype";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke-200);
  height: 29px;
`;
const CustomerDetails = styled.div`
  position: absolute;
  top: 4px;
  left: 10px;
  letter-spacing: 0.31px;
  line-height: 16px;
`;
const Name1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const MrDoeJohn = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const NameParent = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  top: 0px;
  right: 2px;
  left: 0px;
  height: 14px;
`;
const DateOfBirthParent = styled.div`
  position: absolute;
  width: calc(100% - 1px);
  top: calc(50% - 28px);
  right: 1px;
  left: 0px;
  height: 14px;
`;
const GenderParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 7px);
  right: 0px;
  left: 0px;
  height: 14px;
`;
const ContactNumberParent = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  top: calc(50% + 14px);
  right: 2px;
  left: 0px;
  height: 14px;
`;
const MaritalStatusParent = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  right: 2px;
  bottom: 0px;
  left: 0px;
  height: 14px;
`;
const GroupParent = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  right: 6px;
  bottom: 0px;
  left: 10px;
  height: 98px;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
  width: ${(p) => p.propWidth};
`;
const Path1161Icon = styled.img`position: absolute;
  width: calc(100% - 4.47px);
  top: calc(50% - 2.99px);
  right: 2.23px;
  left: 2.24px;
  max-width: 100%;
  overflow: hidden;
  height: 5.99px;
  width: ${(p) => p.propWidth1}
  top: ${(p) => p.propTop1}
`;
const ButtonExpand = styled.div`
  position: absolute;
  top: 8px;
  right: 6px;
  border-radius: var(--br-9xs);
  width: 13px;
  height: 13px;
`;
const RectangleParentRoot = styled.div`position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 271.5px);
  width: 229px;
  height: 130px;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;
const CustomerDetailsContainer1 = ({
  detailsText,
  dimensionText,
  propTop,
  propLeft,
  propWidth,
  propWidth1,
  propTop1,
}) => {
  return (
    <RectangleParentRoot propTop={propTop} propLeft={propLeft}>
      <GroupChild />
      <CustomerDetails>{detailsText}</CustomerDetails>
      <GroupParent propWidth={propWidth}>
        <NameParent>
          <Name1>Name</Name1>
          <MrDoeJohn>Mr. Doe John</MrDoeJohn>
        </NameParent>
        <DateOfBirthParent>
          <Name1>Date of Birth</Name1>
          <MrDoeJohn>01/07/1993</MrDoeJohn>
        </DateOfBirthParent>
        <GenderParent>
          <Name1>Gender</Name1>
          <MrDoeJohn>Male</MrDoeJohn>
        </GenderParent>
        <ContactNumberParent>
          <Name1>Contact Number</Name1>
          <MrDoeJohn>+172XXXXXX68</MrDoeJohn>
        </ContactNumberParent>
        <MaritalStatusParent>
          <Name1>Marital Status</Name1>
          <MrDoeJohn>Common Law</MrDoeJohn>
        </MaritalStatusParent>
      </GroupParent>
      <ButtonExpand>
        <Path1161Icon
          alt=""
          src={dimensionText}
          propWidth1={propWidth1}
          propTop1={propTop1}
        />
      </ButtonExpand>
    </RectangleParentRoot>
  );
};

export default CustomerDetailsContainer1;
