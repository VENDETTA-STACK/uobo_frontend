import UserImageForm from "./UserImageForm";
import styled from "styled-components";

const GroupChild = styled.div`
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
  top: 17px;
  left: 20px;
  letter-spacing: 0.29px;
`;
const RectangleParent = styled.div`
  position: absolute;
  height: 18.52%;
  width: 91.89%;
  top: 53.7%;
  right: 4.06%;
  bottom: 27.78%;
  left: 4.06%;
`;
const RectangleGroup = styled.div`
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
  font-size: var(--font-size-lg);
  color: var(--color-gray-1300);
  font-family: var(--font-avenir-next);
`;
const AddTeamsForm2 = () => {
  return (
    <AddTeamsCardRoot>
      <UserImageForm propBorder="1px solid var(--color-royalblue-100)" />
      <RectangleParent>
        <GroupChild />
        <Name1>Name</Name1>
      </RectangleParent>
      <RectangleGroup>
        <GroupChild />
        <Name1>Omvic ID</Name1>
      </RectangleGroup>
    </AddTeamsCardRoot>
  );
};

export default AddTeamsForm2;
