import React, { useState, useRef } from "react";
import XLSX from "xlsx";

const ReadExcel = () => {
  const [data, setData] = useState(null);
  const inputFile = useRef(null);

  const readFile = () => {
    inputFile.current.click();
  };
  const readExcel = (file) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (evt) => {
      const data = evt.target.result;
      const wb = XLSX.read(data, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const resultData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setData(resultData);
      console.log(resultData);
    };
    // reader.readAsBinaryString(file);
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };
  const exportFile = () => {
    /* convert state to workbook */
    const newData = data.map((item) => item.concat("是"));

    const ws = XLSX.utils.aoa_to_sheet(
      [["商户名称", "商户ID", "是否导入成功"]].concat(newData)
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  };
  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={inputFile}
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          readExcel(files[0]);
        }}
      />
      <button onClick={readFile}>读取文件</button>
      <button onClick={exportFile}>生成文件</button>
    </div>
  );
};

export default ReadExcel;
