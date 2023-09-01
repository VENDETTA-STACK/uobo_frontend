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
  border: 2px solid var(--color-royalblue-100);
  box-sizing: border-box;
`;
const GroupItem = styled.div`
  position: absolute;
  height: calc(100% - 41px);
  width: calc(100% - 3px);
  top: 0px;
  right: 0px;
  bottom: 41px;
  left: 3px;
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  display: none;
`;
const UploadSuccessfullyCompleted = styled.div`
  position: absolute;
  top: calc(50% + 87.5px);
  left: calc(50% - 127px);
  font-size: var(--font-size-lg);
  letter-spacing: 0.29px;
  line-height: 22.4px;
`;
const DocumentIcon = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% - 25.46px);
  width: 50.62px;
  height: 66.46px;
`;
const GridCustomsxml = styled.div`
  position: absolute;
  top: calc(50% + 25.33px);
  left: calc(50% - 66px);
  letter-spacing: 0.72px;
`;
const DocumentParent = styled.div`
  position: absolute;
  top: calc(50% - 47.33px);
  left: calc(50% - 66px);
  width: 132px;
  height: 92.66px;
  color: var(--color-dimgray-300);
`;
const RemoveFile = styled.div`
  position: absolute;
  top: calc(50% - 10.5px);
  left: calc(50% - 30.06px);
  letter-spacing: 0.26px;
  line-height: 22.4px;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
const GroupInner = styled.img`
  position: absolute;
  height: calc(100% + 14.86px);
  top: 1px;
  bottom: -15.86px;
  left: 0px;
  max-height: 100%;
  width: 32.89px;
`;
const RemoveFileParent = styled.div`
  position: absolute;
  top: 19px;
  right: 16.97px;
  width: 107.88px;
  height: 21px;
  color: var(--color-salmon-200);
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
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
`;
const LineDiv = styled.div`
  position: absolute;
  top: calc(50% + 65px);
  left: 27.63px;
  border-top: 4px solid var(--color-royalblue-100);
  box-sizing: border-box;
  width: 374px;
  height: 8px;
  display: none;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 261px;
  left: 82px;
  width: 730px;
  height: 287px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-royalblue-100);
  font-family: var(--font-avenir-next);
`;
const UploadSuccessContainer = () => {
  return (
    <GroupParentRoot>
      <RectangleParent>
        <GroupChild />
        <GroupItem />
        <UploadSuccessfullyCompleted>
          Upload Successfully completed
        </UploadSuccessfullyCompleted>
        <DocumentParent>
          <DocumentIcon alt="" src="/document1.svg" />
          <GridCustomsxml>grid_customs.xml</GridCustomsxml>
        </DocumentParent>
        <RemoveFileParent>
          <RemoveFile>Remove file</RemoveFile>
          <GroupInner alt="" src="/group-106201.svg" />
        </RemoveFileParent>
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
      <LineDiv />
    </GroupParentRoot>
  );
};

export default UploadSuccessContainer;
