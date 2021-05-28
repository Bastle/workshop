import React, { Children, FC, ReactChild, useState } from "react";
import { Form, Input, Button, Table } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

type DataType = { name: string; productId: string };

const DynamicForm: FC<{}> = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<DataType[]>([
    { name: "这是商名称", productId: "1111111111" },
    { name: "这是商名称2", productId: "2222222222" },
  ]);
  const columns = [
    {
      name: "名称",
      dataIndex: "name",
    },
    {
      name: "商品ID",
      dataIndex: "productId",
      isEditable: true,
    },
  ];

  const generateColumns = (columns: any[]): unknown[] => {
    return columns.map((col) => {
      if (!col.isEditable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          isEditable: col.isEditable,
          dataIndex: col.dataIndex,
          name: col.name,
        }),
      };
    });
  };

  return (
    <div>
      <Form form={form}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={generateColumns(columns)}
          dataSource={data}
          footer={() => {
            return <div>新增商品</div>;
          }}
        />
      </Form>
    </div>
  );
};

const EditableCell: FC<{ children: ReactChild; isEditable: boolean }> = ({
  children,
  isEditable,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  let childNode = children;
  if (isEditable) {
    childNode = isEditing ? (
      <Form.Item
        rules={[
          {
            required: true,
            message: "请输入正确的ID",
          },
          {
            validator: async () => {},
          },
        ]}
      >
        <Input
          onBlur={() => {
            setIsEditing(false);
          }}
        />
      </Form.Item>
    ) : (
      <div onClick={() => setIsEditing(true)}>{children}</div>
    );
  }

  return <td>{childNode}</td>;
};
export default DynamicForm;
