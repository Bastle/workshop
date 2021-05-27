import React from "react";
import { Carousel } from "antd";
import "./index.less";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Tabs = () => {
  return (
    <div className="tabs-wrap">
      <div className="tabs-nav-wrap">
        <ul>
          {list.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className="arror">向下</div>
      </div>
      <div className="mask"></div>
      <Carousel />
    </div>
  );
};

export default Tabs;
