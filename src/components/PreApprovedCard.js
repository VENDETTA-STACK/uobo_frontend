import styled from "styled-components";

const Path4209Icon = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  height: 44px;
`;
const PersonalDetails = styled.div`
  position: absolute;
  top: 7px;
  left: 15px;
  letter-spacing: 0.48px;
  line-height: 25px;
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
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 21px;
`;
const DateOfBirthParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 42.5px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const GenderParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 10.5px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const ContactNumberParent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% + 21.5px);
  right: 0px;
  left: 0px;
  height: 21px;
`;
const MaritalStatusParent = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 21px;
`;
const GroupParent = styled.div`
  position: absolute;
  width: calc(100% - 21px);
  right: 6px;
  bottom: 0px;
  left: 15px;
  height: 149px;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const Path1161Icon = styled.img`
  position: absolute;
  width: calc(100% - 8.04px);
  top: calc(50% - 4.5px);
  right: 4.04px;
  left: 4px;
  max-width: 100%;
  overflow: hidden;
  height: 9.1px;
`;
const ButtonExpand = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  border-radius: var(--br-9xs);
  width: 21px;
  height: 21px;
`;
const Path4209ParentRoot = styled.div`
  position: absolute;
  top: 163px;
  left: 227px;
  width: 347px;
  height: 199px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const PreApprovedCard = () => {
  return (
    <Path4209ParentRoot>
      <Path4209Icon alt="" src="/path-4209.svg" />
      <PersonalDetails>Personal Details</PersonalDetails>
      <GroupParent>
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
        <Path1161Icon alt="" src="/path-1161.svg" />
      </ButtonExpand>
    </Path4209ParentRoot>
  );
};

export default PreApprovedCard;
