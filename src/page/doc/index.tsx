import React, { FC } from "react";
import { Prompt } from "react-router-dom";

interface DocItem {
  h1: number;
  id: string;
  content: string;
}

const docs: DocItem[] = [
  {
    h1: 1,
    id: "title1",
    content: "这是内容4这是内容4",
  },
  {
    h1: 2,
    id: "title2",
    content: "这是内容4这是内容4",
  },
  {
    h1: 1,
    id: "title3",
    content: "这是内容3这是内容3",
  },
  {
    h1: 3,
    id: "title4",
    content: "这是内容4这是内容4",
  },
];

const Doc: FC = () => {
  const dealWithDocs = (list: DocItem[]) => {
    let titleList: unknown[] = [];
    list.forEach((item) => {
      if (!titleList.includes(item.h1)) {
        titleList.push(item.h1);
      }
    });
    let itemList = titleList.map((item) => ({ title: item, list: [] }));
    list.forEach((item) => {
      itemList.forEach((subItem, index) => {
        if (item.h1 === subItem.title) {
          itemList[index].list.push(item);
        }
      });
    });
    return itemList;
  };
  return (
    <div>
      <Prompt when={true} message={"11111"} />
      {JSON.stringify(dealWithDocs(docs))}
    </div>
  );
};

export default Doc;
