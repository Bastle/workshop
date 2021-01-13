import React from 'react'
import { Transfer, Table, Tabs } from 'antd'

const { TabPane } = Tabs
const dataSource = [
  {
    name: '1'
  },
  {
    name: '2'
  },
  {
    name: '3'
  },
]
const columns = [
  {
    dataIndex: 'name',
    title: 'all'
  }
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const MyTransfer = () => {
  const TableTransfer = ({leftColumns, rightColumns, ...restProps}) => (
    <Transfer >
      {
        ({
          direction,
          filteredItems,
          onItemSelectAll,
          onItemSelect,
          selectedKeys: listSelectedKeys,
          disabled: listDisabled
        }) => {
          console.log()
          return direction === 'left' ? 
              <Table rowKey={'name'} columns={columns} rowSelection={rowSelection} dataSource={filteredItems} />
             : <div>123</div>
        }
      }
    </Transfer>
  )
  return (
    <Tabs >
      <TabPane tab="Tab 1" key="1">
        <TableTransfer  filterOption={(inputValue, item) =>
          item.name.indexOf(inputValue) !== -1 
        }  dataSource={dataSource} showSearch={true} />
      </TabPane>
      {/* <TabPane tab="Tab 2" key="2">
        <TableTransfer  filterOption={(inputValue, item) =>
          item.name.indexOf(inputValue) !== -1 
        }  dataSource={dataSource} showSearch={true} />      
      </TabPane> */}
    </Tabs>
    
  )
  
}

export default MyTransfer;