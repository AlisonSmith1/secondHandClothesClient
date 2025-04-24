// ExampleComponent.js

import React, { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 使用 fetch 向後端發送 GET 請求
    fetch("https://secondhandclothesserve.onrender.com/api/endpoint")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 處理後端回傳的資料
      })
      .catch((error) => console.error("Error:", error));
  }, []); // 空陣列確保只有在組件加載時發送請求

  return (
    <div>
      <h1>Backend Data:</h1>
      <pre>console.log("ok")</pre> {/* 顯示後端資料 */}
    </div>
  );
}

export default ExampleComponent;
