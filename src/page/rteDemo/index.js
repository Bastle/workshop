import React, { useEffect, useRef } from "react";
import E from "wangeditor";
import xss from "xss";
import { Form, Input } from "antd";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import WangEditor from "./coms/WangEditor";

const RteDemo = () => {
  const editor = useRef(null);
  const [form] = Form.useForm();

  const showText = () => {
    console.log(editor.current.txt.text());
    console.log(editor.current.txt.html());
    console.log(xss(editor.current.txt.html()));
  };
  return (
    <div className="rte-wrap">
      <div>
        <label>文档内容：</label>
        {/* <div id="rte-box"></div> */}
        <Form form={form}>
          <Form.Item
            name="note"
            label="Note"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <WangEditor
              showFullScreen={true}
              colors={["#000000", "#eeece0", "#1c487f", "#4d80bf"]}
              initialValue={'222222'}
            />
          </Form.Item>
          <Form.Item
            name="note2"
            label="Note2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
      <button onClick={showText}>显示文本内容</button>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={console.log}
      />
    </div>
  );
};

export default RteDemo;
