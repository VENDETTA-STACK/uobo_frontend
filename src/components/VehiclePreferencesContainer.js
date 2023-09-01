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
const VehiclePreferences = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  letter-spacing: 0.31px;
  line-height: 16px;
`;
const Type = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const NewSedan = styled.div`
  position: absolute;
  top: 0px;
  right: -1px;
  color: var(--color-dimgray-200);
  text-align: right;
`;
const TypeParent = styled.div`
  position: absolute;
  width: calc(100% - 1px);
  top: 0px;
  right: 1px;
  left: 0px;
  height: 14px;
`;
const MakeAndModelParent = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
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
  height: 34px;
  font-size: var(--font-size-3xs);
  color: var(--color-gray-200);
  font-family: var(--font-avenir-next);
`;
const Path1161Icon = styled.img`
  position: absolute;
  width: calc(100% - 5.47px);
  top: calc(50% - 3.31px);
  right: 2.62px;
  left: 2.85px;
  max-width: 100%;
  overflow: hidden;
  height: 5.99px;
`;
const ButtonExpand = styled.div`
  position: absolute;
  top: 8px;
  right: 5px;
  border-radius: var(--br-9xs);
  width: 14px;
  height: 14px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  bottom: 4px;
  left: calc(50% - 264.5px);
  width: 228px;
  height: 67px;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-600);
  font-family: var(--font-avenir-lt-std);
`;
const VehiclePreferencesContainer = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <VehiclePreferences>Vehicle Preferences</VehiclePreferences>
      <GroupParent>
        <TypeParent>
          <Type>Type</Type>
          <NewSedan>(New) Sedan</NewSedan>
        </TypeParent>
        <MakeAndModelParent>
          <Type>Make and model</Type>
          <NewSedan>Audi Q3</NewSedan>
        </MakeAndModelParent>
      </GroupParent>
      <ButtonExpand>
        <Path1161Icon alt="" src="/path-11619.svg" />
      </ButtonExpand>
    </RectangleParentRoot>
  );
};

export default VehiclePreferencesContainer;
