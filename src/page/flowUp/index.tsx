import React, { useState, useEffect, useRef, FC } from "react";
import LazyLoad from "react-lazyload";
import { Transition } from "react-transition-group";
import "./index.less";
const FlowUp = () => {
  return (
    <div>
      <FlowUpContent />
    </div>
  );
};
const FlowUpContent = () => {
  const box = useRef<HTMLDivElement>();
  useEffect(() => {
    const io = new IntersectionObserver(() => {
      console.log(11111111);
    });
    io.observe(box.current);
    console.log(box.current.offsetTop);
    return () => {
      io.unobserve(box.current);
    };
  }, []);
  return (
    <div className="flow-up-wrap">
      <ul>
        {new Array(100).fill(1).map((_, index) => (
          <LazyLoad height={50}>
            <Item index={index} />
          </LazyLoad>
        ))}
      </ul>
      <div ref={(ref) => (box.current = ref)} className="box">
        box
      </div>
    </div>
  );
};

const Item: FC<{ index: number }> = ({ index }) => {
  const [isShow, setIsShow] = useState(false);
  const itemRef = useRef<HTMLLIElement>();
  useEffect(() => {
    const changeStatus = () => {
      const clientRect = itemRef.current.getBoundingClientRect();
      if (clientRect.top >= 0) {
        console.log(index);
        setIsShow(true);
      }
    };
    // window.addEventListener('scroll', changeStatus)
    return () => {
      window.removeEventListener("scroll", changeStatus);
    };
  }, []);
  return (
    <li
      ref={(ref) => (itemRef.current = ref)}
      className={`item ${isShow ? "show" : ""}`}
    >
      <div className="item-child">{index}</div>
    </li>
  );
};

export default FlowUp;
