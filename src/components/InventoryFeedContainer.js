import styled from "styled-components";

const AnInventoryFeed = styled.div`
  position: absolute;
  top: calc(50% - 45px);
  left: calc(50% - 142px);
  line-height: 22px;
  display: inline-block;
  width: 285px;
`;
const InformationIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 18px;
  width: 19px;
  height: 19px;
`;
const WhatIsAn = styled.div`
  position: absolute;
  top: calc(50% - 87px);
  left: calc(50% - 112px);
  font-size: var(--font-size-lg);
  letter-spacing: 0.4px;
  line-height: 26px;
  font-family: var(--font-avenir-lt-std);
  display: inline-block;
  width: 237px;
`;
const GroupInfoRoot = styled.div`
  position: absolute;
  top: 431px;
  right: 47px;
  border-radius: var(--br-6xs);
  background-color: var(--color-royalblue-300);
  width: 312px;
  height: 218px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
  font-family: var(--font-avenir-next);
`;
const InventoryFeedContainer = () => {
  return (
    <GroupInfoRoot>
      <AnInventoryFeed>{`An inventory feed is a digital file which contains a list of all your products with options or attributes describing them. These attributes contain anything from the color, manufacturer, material etc., of each product. `}</AnInventoryFeed>
      <InformationIcon alt="" src="/information.svg" />
      <WhatIsAn>What is an inventory feed?</WhatIsAn>
    </GroupInfoRoot>
  );
};

export default InventoryFeedContainer;
