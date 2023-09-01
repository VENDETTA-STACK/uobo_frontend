import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  background-color: var(--color-royalblue-300);
`;
const UploadingFile = styled.div`
  position: absolute;
  top: calc(50% + 75.5px);
  left: calc(50% - 67.73px);
  letter-spacing: 0.29px;
  line-height: 22.4px;
`;
const RectangleParent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const DragAndDrop = styled.div`
  position: absolute;
  top: calc(50% - 63.5px);
  left: calc(50% - 143px);
  letter-spacing: 0.29px;
  line-height: 22.4px;
  display: inline-block;
  width: 287px;
`;
const Or = styled.div`
  position: absolute;
  top: calc(50% - 31.5px);
  left: calc(50% - 143px);
  font-size: var(--font-size-sm);
  letter-spacing: 0.22px;
  text-transform: lowercase;
  display: inline-block;
  width: 287px;
`;
const SupportedFilesTxt = styled.div`
  position: absolute;
  top: calc(50% + 44.5px);
  left: calc(50% - 134px);
  font-size: var(--font-size-sm);
  letter-spacing: 0.22px;
  color: var(--color-gray-200);
  display: inline-block;
  width: 269px;
`;
const ChooseFile = styled.div`
  position: absolute;
  top: calc(50% - 13.5px);
  left: calc(50% - 45.5px);
  letter-spacing: 0.29px;
  line-height: 22.4px;
`;
const ChooseFileWrapper = styled.div`
  position: absolute;
  width: calc(100% - 75px);
  top: calc(50% - 5.5px);
  right: 37px;
  left: 38px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-royalblue-100);
  box-sizing: border-box;
  height: 39px;
  color: var(--color-royalblue-100);
`;
const DragAndDropYourFileHereParent = styled.div`
  position: absolute;
  top: calc(50% - 83.5px);
  left: calc(50% - 143px);
  width: 286px;
  height: 127px;
  display: none;
  color: var(--color-darkslategray-200);
`;
const GroupInner = styled.div`
  position: absolute;
  bottom: 26.5px;
  left: 26px;
  border-top: 4px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 374px;
  height: 8px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 261px;
  left: 82px;
  width: 730px;
  height: 287px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
`;
const UploadFormContainer = () => {
  return (
    <GroupParentRoot>
      <RectangleParent>
        <GroupChild />
        <GroupItem />
        <UploadingFile>Uploading file ...</UploadingFile>
      </RectangleParent>
      <DragAndDropYourFileHereParent>
        <DragAndDrop>Drag and drop your file here</DragAndDrop>
        <Or>OR</Or>
        <SupportedFilesTxt>
          Supported files: txt, xml, gz, bz2, zip
        </SupportedFilesTxt>
        <ChooseFileWrapper>
          <ChooseFile>Choose file</ChooseFile>
        </ChooseFileWrapper>
      </DragAndDropYourFileHereParent>
      <GroupInner />
    </GroupParentRoot>
  );
};

export default UploadFormContainer;
