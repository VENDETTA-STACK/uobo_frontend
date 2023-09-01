import { Property } from "csstype";
import styled from "styled-components";

const Figure11 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const Figure11Icon = styled.img`
  position: absolute;
  height: calc(100% - 5.04px);
  width: calc(100% - 5.04px);
  top: 2.52px;
  right: 2.52px;
  bottom: 2.52px;
  left: 2.52px;
  border-radius: var(--br-4xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Figure11Parent = styled.div`
  position: absolute;
  top: 27px;
  right: 0px;
  width: 179.99px;
  height: 103.77px;
`;
const Figure111 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  border-radius: ${(p) => p.propBorderRadius};
`;
const Figure11Icon1 = styled.img`
  position: absolute;
  height: calc(100% - 5.03px);
  width: calc(100% - 5.03px);
  top: 2.52px;
  right: 2.52px;
  bottom: 2.52px;
  left: 2.52px;
  border-radius: var(--br-9xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  border-radius: ${(p) => p.propBorderRadius1};
`;
const Figure11Group = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;
  width: 179.99px;
  height: 103.77px;
  cursor: ${(p) => p.propCursor};
`;
const Figure11Container = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 179.99px;
  height: 103.77px;
`;
const DriversLicensefront = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const DriversLicenseback = styled.div`
  position: absolute;
  top: 0px;
  right: 27.99px;
  right: ${(p) => p.propRight};
`;
const BankStatement = styled.div`
  position: absolute;
  top: calc(50% + 7.5px);
  left: 0px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 313px;
  right: 162px;
  width: 440px;
  height: 276.54px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
`;
const DocumentUploadForm1 = ({
  imageDimensions,
  driverLicenseFrontImageUr,
  driverLicenseBackImageUrl,
  propCursor,
  propBorderRadius,
  propBorderRadius1,
  propRight,
  onGroupContainer10Click,
}) => {
  return (
    <GroupParentRoot>
      <Figure11Parent>
        <Figure11 />
        <Figure11Icon alt="" src="/2figure112@2x.png" />
      </Figure11Parent>
      <Figure11Group propCursor={propCursor} onClick={onGroupContainer10Click}>
        <Figure111 propBorderRadius={propBorderRadius} />
        <Figure11Icon1
          alt=""
          src={imageDimensions}
          propBorderRadius1={propBorderRadius1}
        />
      </Figure11Group>
      <Figure11Container>
        <Figure11 />
        <Figure11Icon alt="" src="/2figure114@2x.png" />
      </Figure11Container>
      <DriversLicensefront>{driverLicenseFrontImageUr}</DriversLicensefront>
      <DriversLicenseback propRight={propRight}>
        {driverLicenseBackImageUrl}
      </DriversLicenseback>
      <BankStatement>Bank Statement</BankStatement>
    </GroupParentRoot>
  );
};

export default DocumentUploadForm1;
