import React, {useState, useRef, useEffect } from 'react'

const useFps = () => {
  const [fps, setFps] = useState(0)
  const [restartFlag, setRestartFlag] = useState(0)

  const stopFlag = useRef(false)
  const start = useRef(null)
  const frames = useRef(0)
  const stop = () => {
    stopFlag.current = true
  }
  const reStart = () => {
    stopFlag.current = false
    setRestartFlag(restartFlag + 1)
  }
  useEffect(() => {
    const callback = stamp => {
      console.log('stopFlag.current: ', stopFlag.current);
      if(!stopFlag.current){
        frames.current = frames.current + 1
        if(!start.current){
          start.current = stamp
        } else if(stamp - start.current > 1000) {
          setFps(frames.current/((stamp - start.current)/ 1000))
          start.current = stamp
          frames.current = 0
        }
        window.requestAnimationFrame(callback)
      }
    }
    window.requestAnimationFrame(callback)
    return () => {
      stopFlag.current = true
    }
  }, [restartFlag])
  return [fps, stop, reStart]
}

export default useFps;