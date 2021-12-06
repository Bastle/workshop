import React, { useEffect, useState } from "react";
import ClapprPlayer from './clapprPlayer/index.jsx'

const ClapprDemo = () => {
  const [id, setId] = useState(0)
  const [source, setSource] = useState("https://vod.ali.xmcdn.com/download/1.0.0/group3/M08/F0/A4/wKgMbF3mEDzi1Nb3AE8jh53NBCo520.mp4?sign=350a879f8dc34ddebf72850a96de8724&buy_key=fe4f133ccbf4b22dfa2a1e704ccbbda8&token=9552&timestamp=1630569780&duration=29")
  const playNext = () => {
    setId(id+1);
    setSource('https://vod.ali.xmcdn.com/download/1.0.0/group3/M03/F9/31/wKgMbF3nkSPw-BIVAKkm8C_ekGc732.mp4?sign=f1b157fd2a4364ed8d5894d23b30ba4c&buy_key=fe4f133ccbf4b22dfa2a1e704ccbbda8&token=1459&timestamp=1630569891&duration=62')
  }
  return <div>
    <ClapprPlayer source={source} seek={20} playNext={playNext} />
    <button onClick={() => {
      setSource('https://vod.ali.xmcdn.com/download/1.0.0/group3/M03/F9/31/wKgMbF3nkSPw-BIVAKkm8C_ekGc732.mp4?sign=f1b157fd2a4364ed8d5894d23b30ba4c&buy_key=fe4f133ccbf4b22dfa2a1e704ccbbda8&token=1459&timestamp=1630569891&duration=62')
    }}>
      切换resource
    </button>
    </div>;
};

export default ClapprDemo;
