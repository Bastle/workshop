import React, { useEffect, useRef } from 'react'
import Clappr from 'clappr'

const ClapprPlayer = (props) => {
  const player = useRef(null)
  const parent = useRef(null)

  useEffect(() => {
    player.current = new Clappr.Player({
      parent: parent.current,
      source: props.source,
      width: '100%',
      height: '100%',
      hlsjsConfig: {
        enableWorker: true
      }
    })
    player.current.play()
    player.current.seek(20)
    player.current.on(Clappr.Events.PLAYER_TIMEUPDATE, function(e){
      if(e.total - e.current < 3){
        // player.current.pause()
      }
    })
    player.current.on(Clappr.Events.PLAYER_ENDED, function(e){
      props.playNext && props.playNext()
      console.log('end')
    })
    player.current.on(Clappr.Events.PLAYER_ERROR, function(e){
      props.playNext && props.playNext()
    })
    return () => {
      if(player.current) {
        player.current.destroy()
      }
    }
  }, [props.source])
  return <div style={{width: '100%',height: '800px'}} ref={ref => parent.current = ref}></div>
}

export default ClapprPlayer