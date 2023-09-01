import styled from "styled-components";

const IfYourDealership = styled.span`
  letter-spacing: 0.32px;
`;
const ThanOneBranch = styled.span`
  letter-spacing: -0.35px;
`;
const ForEachBranches = styled.span`
  letter-spacing: 0.11px;
`;
const IfYourDealershipHasMoreTh = styled.span``;
const Button = styled.span`
  color: var(--color-darkslategray-200);
`;
const AddAnotherDealershipLocatio = styled.span`
  letter-spacing: 0.38px;
  color: var(--color-royalblue-100);
`;
const IfYourDealershipContainer = styled.div`
  position: absolute;
  top: calc(50% - 34px);
  left: calc(50% - 101px);
  line-height: 22px;
  display: inline-block;
  width: 225px;
`;
const InformationIcon = styled.img`
  position: absolute;
  top: 25px;
  left: 18px;
  width: 19px;
  height: 19px;
`;
const AddAnotherDealership = styled.div`
  position: absolute;
  top: calc(50% - 76px);
  left: calc(50% - 101px);
  font-size: var(--font-size-lg);
  letter-spacing: 0.4px;
  line-height: 26px;
  font-family: var(--font-avenir-lt-std);
  display: inline-block;
  width: 217px;
`;
const GroupInfoRoot = styled.div`
  position: absolute;
  top: 429px;
  right: 66px;
  border-radius: var(--br-6xs);
  background-color: var(--color-royalblue-300);
  width: 290px;
  height: 200px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
  font-family: var(--font-avenir-next);
`;
const BranchForm = () => {
  return (
    <GroupInfoRoot>
      <IfYourDealershipContainer>
        <IfYourDealershipHasMoreTh>
          <IfYourDealership>{`If your dealership has more `}</IfYourDealership>
          <ThanOneBranch>than one branch, enter details</ThanOneBranch>
          <ForEachBranches>{` for each branches using the `}</ForEachBranches>
        </IfYourDealershipHasMoreTh>
        <AddAnotherDealershipLocatio>
          <IfYourDealershipHasMoreTh>{`Add another dealership location `}</IfYourDealershipHasMoreTh>
          <Button>button.</Button>
        </AddAnotherDealershipLocatio>
      </IfYourDealershipContainer>
      <InformationIcon alt="" src="/information.svg" />
      <AddAnotherDealership>Add another dealership</AddAnotherDealership>
    </GroupInfoRoot>
  );
};

export default BranchForm;
