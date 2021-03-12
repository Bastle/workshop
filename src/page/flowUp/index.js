import React, { useState, useEffect, useRef } from 'react'
import LazyLoad from 'react-lazyload'
import { Transition } from 'react-transition-group';
import './index.less'
const FlowUp = () => {
  return (
    <div>
      <FlowUpContent />
    </div>
  )
}
const FlowUpContent = () => {
  const [current, setCurrent] = useState(0)
  const [refresh, setRefresh] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const box = useRef()
  const myCurrent = useRef(0)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let newCurrent;
  //     if(myCurrent.current >= 3){
  //       newCurrent = 1
  //     } else {
  //       newCurrent = myCurrent.current + 1
  //     }
  //     setCurrent(newCurrent)
  //     myCurrent.current = newCurrent;
  //   }, 3000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [refresh])
  useEffect(() => {
    const io = new IntersectionObserver(() => {console.log(11111111)})
    io.observe(box.current)
    return () => {
      io.unobserve(box.current)
    }
  }, [])
  return <div className="flow-up-wrap">
    <ul>
      {/* <TransitionGroup> */}
        {new Array(100).fill(1).map((item, index) => 

          // <CSSTransition
          //     className="item"
          //     key={index}
          //     timeout={3000}>
          <LazyLoad height={50}>
            
              <Item index={index}/>
            
          </LazyLoad>
          // </CSSTransition>
        )}
      {/* </TransitionGroup> */}
    </ul>
    <div ref={ref => box.current = ref} className="box">box</div>
  </div>
}

const Item = ({index}) => {
  const [isShow, setIsShow] = useState(false)
  const itemRef = useRef()
  useEffect(() => {
    const changeStatus = () => {
      const clientRect = itemRef.current.getBoundingClientRect();
      if(clientRect.top >= 0){
        console.log(index)
        setIsShow(true)
      }
    }
    // window.addEventListener('scroll', changeStatus)
    return () => {
      window.removeEventListener('scroll', changeStatus)
    }
  }, [])
  return (
    <li ref={ref => itemRef.current = ref} className={`item ${isShow ? 'show' : ''}`} 
          onTouchMove={() => {
            alert(item)
          }}
          onClick={() => {
            // setCurrent(item)
            // myCurrent.current = item;
            // setRefresh(refresh+1)
          }}>item</li>
  )
}


const Fade = (props) =>  {

  const done = () => {
    // console.log('结束了')
  }
  const addaddEndListener = (node) => { //原生时间transition运动的事件
    node.addEventListener('transitionend', done, false);
  }

  // 三个进入状态的事件，可以做你想做的事情
  const onEnter = (node, isAppearing) => {
    console.log(isAppearing, 'onEnter')
  }
  const onEntering = (node, isAppearing) => {
    console.log(isAppearing, 'onEntering')
  }
  const onEntered = (node, isAppearing) => {
    console.log(isAppearing, 'onEntered')
  }

  // 三个退出的状态的事件
  const onExit = (node) => {
    console.log('onExit')
  }
  const onExiting = () => {
    console.log('onExiting')
  }
  const onExited = () => {
    console.log('onExited')
    props.self()
  }
  
    const { in: inProp, dur} = props;
    const defaultStyle = {
      transition: `transform ${300}ms ease-in-out, opacity ${300}ms ease-in-out`,
      transform: 'translateX(100px)',
      opacity: '0'
    }

    const transitionStyles = {
      entering: { transform: 'translateX(100px)', opacity: '0'},
      entered:  { transform: 'translateX(0px)', opacity: '1' },
      exiting: {transform: 'translateX(0px)', opacity: '1'},
      exited: {transform: 'translateX(0px)', opacity: '0'}
    };
    const duration = {
      enter: 300,
      exit: 300,
    }
    // 上面的都是基本参数，样式的转变以及时间的设定，具体的可以看官网文档
    // 样式也可以写成className 例如<MyComponent className={`fade fade-${status}`} />
    return (
      <Transition 
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}

        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}

        addEndListener={addaddEndListener} 
        in={inProp} 
        unmountOnExit={false} // 为true 代表退出的时候移除dom
        appear={true} // 为true  渲染的时候就直接执行动画，默认false，
        timeout={duration}
      >
        {
          state => {
            console.log(state, '###') //你可以很直观的看到组件加载和卸载时候的状态
            return(
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                {props.children}
              </div>
            )
          }
        }
      </Transition>
    );
  }


export default FlowUp