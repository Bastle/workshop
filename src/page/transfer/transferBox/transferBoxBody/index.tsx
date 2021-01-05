import React, { FC, useState } from 'react'
import { Checkbox, Pagination, Input } from 'antd'
import { SearchIcon } from '@/assets/svg'
import Empty from '@/pages/product/list/components/transferBox/empty'
import './index.scss'
interface TransferBoxBodyProps {
  itemTitle?: string
  itemKey?: string
  showPagination?: boolean
  showSearch?: boolean
  checkedAll?: boolean
  indeterminate?: boolean
  supportCheckedAll?: boolean
  showId?: boolean
  checkedMap: any
  dataSource: Array<any>
  onCheckedAllChange?: (newCheckedAll: any) => void
  onCheckedChange: (dataItem: any, checked: boolean) => void
}

const TransferBoxBody: FC<TransferBoxBodyProps> = ({
  dataSource,
  onCheckedChange,
  checkedMap,
  showPagination = false,
  showSearch = false,
  itemTitle = 'title',
  itemKey = 'id',
  checkedAll = false,
  indeterminate = false,
  supportCheckedAll = false,
  showId = false,
  onCheckedAllChange,
}) => {
  const [pageNo, setPageNo] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [pageSize, setPageSize] = useState(20)

  const displayDataSource =
    showPagination && !searchText
      ? dataSource.slice((pageNo - 1) * pageSize, pageNo * pageSize)
      : dataSource.filter(({ [itemTitle]: title }) => ~title.indexOf(searchText))

  return (
    <div
      className={`transfer-box-body-wrap ${showSearch ? 'transfer-box-body-wrap-with-search' : ''} ${
        showPagination && !searchText ? 'transfer-box-body-wrap-with-pagination' : ''
      }`}
    >
      {showSearch && (
        <div className="transfer-box-body-search-input-wrap">
          <Input
            maxLength={20}
            allowClear
            placeholder="请输入公司名称搜索"
            suffix={!searchText && <SearchIcon />}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      )}
      <ul className="transfer-box-body-list">
        {supportCheckedAll && (
          <li className="transfer-box-body-list-item">
            <Checkbox
              checked={checkedAll}
              indeterminate={indeterminate}
              onChange={e => onCheckedAllChange(e.target.checked)}
            />
            <span className="transfer-box-body-list-item-label">全选</span>
          </li>
        )}
        {displayDataSource.length === 0 ? (
          <div className="transfer-box-empty-wrap">
            <Empty title="暂无数据" />
          </div>
        ) : (
          displayDataSource.map((item, index) => {
            const checked = checkedMap[item[itemKey]]
            return (
              <TransferBoxItem
                itemTitle={itemTitle}
                itemKey={itemKey}
                key={`${item[itemKey]}-${index}`}
                checked={checked}
                itemData={item}
                showId={showId}
                onCheckedChange={onCheckedChange}
              />
            )
          })
        )}
      </ul>
      {showPagination && !searchText && (
        <div className="transfer-box-body-pagination-wrap">
          <Pagination
            simple
            defaultCurrent={pageNo}
            onChange={page => setPageNo(page)}
            pageSize={pageSize}
            total={dataSource.length}
          />
        </div>
      )}
    </div>
  )
}

interface TransferBoxItemProps {
  itemTitle?: string
  itemKey?: string
  showId?: boolean
  checked: boolean
  itemData: any
  onCheckedChange: (dataItem: any, checked: boolean) => void
}

function areEqual(prevProps, nextProps) {
  return prevProps.checked === nextProps.checked
}

const TransferBoxItem: FC<TransferBoxItemProps> = React.memo(
  ({ checked, itemData, onCheckedChange, itemTitle = 'name', itemKey = 'id', showId = false }) => (
    <li
      className="transfer-box-body-list-item"
      onClick={() => {
        onCheckedChange(itemData, !checked)
      }}
    >
      <Checkbox checked={checked} />
      <span className="transfer-box-body-list-item-label">
        <span>{itemData[itemTitle]}</span>
        {showId && <span>{`(ID:${itemData[itemKey]})`}</span>}
      </span>
    </li>
  ),
  areEqual,
)

export default TransferBoxBody
