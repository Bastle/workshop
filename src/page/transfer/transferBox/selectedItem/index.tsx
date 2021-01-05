import React, { FC } from 'react'
import './index.scss'

type P = {
  item: any
  itemTitle: string
  itemKey: string
  showId?: boolean
  onCheckedChange: (dataItem: any, checked: any) => void
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.item[prevProps.itemTitle] === nextProps.item[nextProps.itemTitle]
}

const SelectedItem: FC<P> = React.memo(({ onCheckedChange, item, itemTitle, itemKey, showId }) => {
  return (
    <li className="transfer-box-selected-item" onClick={() => onCheckedChange(item, false)}>
      <span className="transfer-box-selected-item-title">
        <span>{item[itemTitle]}</span>
        {showId && <span>{`(ID:${item[itemKey]})`}</span>}
      </span>
      
    </li>
  )
}, areEqual)

export default SelectedItem
