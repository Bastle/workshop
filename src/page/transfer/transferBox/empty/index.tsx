import React, { FC } from 'react'
import './index.scss'

type P = {
  title: string
  style?: any
}

const Empty: FC<P> = ({ title, style }) => {
  return (
    <div className="transfer-box-empty" style={style}>
      <div className="transfer-box-empty-img-wrap"></div>
      <p className="transfer-box-empty-tips">{title}</p>
    </div>
  )
}

export default Empty
