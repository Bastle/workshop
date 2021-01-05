import React, { FC, useEffect, useState, useImperativeHandle } from 'react'
import { Tabs } from 'antd'
import useChecked from '@/hooks/useChecked'
import TransferBoxBody from '@/pages/product/list/components/transferBox/transferBoxBody'
import Empty from '@/pages/product/list/components/transferBox/empty'
import SelectedItem from '@/pages/product/list/components/transferBox/selectedItem'
import './index.scss'

const { TabPane } = Tabs

type P = {
  onChange: (values: Array<any>) => void
  initialRoleConfig?: Array<any>
  initialCompanyConfig?: Array<any>
  roleData: Array<any>
  companyData: Array<any>
  ref?: any
}

const TransferBox: FC<P> = React.forwardRef(
  ({ onChange, initialRoleConfig = [], initialCompanyConfig = [], roleData, companyData }, ref) => {
    const checkRoleData = useChecked(roleData, { key: 'displayPerson' })
    const checkCompanyData = useChecked(companyData, { key: 'displayPerson' })
    const [isError, setIsError] = useState(false)

    useImperativeHandle(ref, () => ({
      checkTransferStatus: () => {
        if (checkCompanyData.checkedLength + checkRoleData.checkedLength === 0) {
          setIsError(true)
          return false
        }
        return true
      },
      getSelectedList: () => {
        return [...checkRoleData.filterChecked(), ...checkCompanyData.filterChecked()]
      },
    }))

    useEffect(() => {
      if (checkRoleData.checkedLength + checkCompanyData.checkedLength > 0) {
        setIsError(false)
      }
      onChange([...checkRoleData.filterChecked(), ...checkCompanyData.filterChecked()])
    }, [checkRoleData.filterChecked(), checkCompanyData.filterChecked()])

    useEffect(() => {
      const newCheckMap = {}
      roleData.forEach(({ displayPerson: id }) => {
        if (initialRoleConfig.find(item => item.displayPerson === id)) {
          newCheckMap[id] = true
        }
      })
      checkRoleData.onSetCheckedMap(Object.assign({}, newCheckMap))
    }, [roleData, initialRoleConfig.length])

    useEffect(() => {
      const newCheckMap = {}
      companyData.forEach(({ displayPerson: id }) => {
        if (initialCompanyConfig.find(item => item.displayPerson === id)) {
          newCheckMap[id] = true
        }
      })
      checkCompanyData.onSetCheckedMap(Object.assign({}, newCheckMap))
    }, [companyData, initialCompanyConfig.length])

    const selectedItemLength = checkRoleData.checkedLength + checkCompanyData.checkedLength

    return (
      <div className="transfer-box-wrap">
        <div className="transfer-box-list">
          <div className="transfer-box-item transfer-box-left-item">
            <Tabs>
              <TabPane
                tab={`商户角色${checkRoleData.checkedLength > 0 ? `(${checkRoleData.checkedLength})` : ''}`}
                key="role"
              >
                <div className="transfer-box-item-content">
                  <TransferBoxBody
                    checkedMap={checkRoleData.checkedMap}
                    itemTitle={'displayName'}
                    itemKey={'displayPerson'}
                    dataSource={roleData}
                    supportCheckedAll
                    onCheckedChange={checkRoleData.onCheckedChange}
                    onCheckedAllChange={checkRoleData.onCheckedAllChange}
                    checkedAll={checkRoleData.checkedAll}
                    indeterminate={checkRoleData.indeterminate}
                  />
                </div>
              </TabPane>
              <TabPane
                tab={`商户${checkCompanyData.checkedLength > 0 ? `(${checkCompanyData.checkedLength})` : ''}`}
                key="business"
              >
                <div className="transfer-box-item-content">
                  <TransferBoxBody
                    checkedMap={checkCompanyData.checkedMap}
                    itemTitle={'displayName'}
                    itemKey={'displayPerson'}
                    dataSource={companyData}
                    onCheckedChange={checkCompanyData.onCheckedChange}
                    showSearch
                    showPagination
                    showId
                  />
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="transfer-box-block"></div>
          <div className="transfer-box-item transfer-box-right-item">
            <div className="transfer-box-item-title">
              <span className="transfer-box-selected-number">
                已选 {`${selectedItemLength > 0 ? '(' + selectedItemLength + ')' : ''}`}
              </span>
              {selectedItemLength > 0 && (
                <span
                  className="transfer-box-empty"
                  onClick={() => {
                    checkRoleData.onCheckedAllChange(false)
                    checkCompanyData.onCheckedAllChange(false)
                  }}
                >
                  清空
                </span>
              )}
            </div>
            <div className="transfer-box-item-content">
              {selectedItemLength === 0 ? (
                <div className="transfer-box-empty-wrap">
                  <Empty title="请在左侧区域选择内容" />
                </div>
              ) : (
                <ul className="transfer-box-selected-content">
                  {checkRoleData.filterChecked().map((item, index) => (
                    <SelectedItem
                      key={item['displayPerson']}
                      item={item}
                      itemTitle="displayName"
                      itemKey="displayPerson"
                      onCheckedChange={checkRoleData.onCheckedChange}
                    />
                  ))}
                  {checkCompanyData.filterChecked().map(item => (
                    <SelectedItem
                      key={item['displayPerson']}
                      item={item}
                      itemTitle="displayName"
                      itemKey="displayPerson"
                      onCheckedChange={checkCompanyData.onCheckedChange}
                      showId={true}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {isError && <p className="transfer-box-tips transfer-box-tips-error">请至少选择商户和角色其中一个</p>}
        <p className="transfer-box-tips">至少选择商户和角色其中一个</p>
      </div>
    )
  },
)

export default TransferBox
