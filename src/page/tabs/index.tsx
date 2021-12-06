import React from "react";
import { unstable_Tabs as Tabs } from "@ant-design/mobile";
import "@ant-design/mobile-styles/lib/Tabs/index.less";
import "./index.less";

const { Item } = Tabs;
const len = [1, 2, 3, 4];
const TabsWrap = () => {
  return (
    <div className="tabs-wrap">
      <Tabs>
        {len.map((tab, i) => {
          return (
            <Item tab={{ title: "1111", desc: "123", badge: "6" }} key={i}>
              <div>{i}</div>
            </Item>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabsWrap;
