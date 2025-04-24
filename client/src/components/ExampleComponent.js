// ExampleComponent.js

import React, { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 使用 fetch 向後端發送 GET 請求
    fetch("https://secondhandclothesserve.onrender.com")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // 更新狀態，將後端資料儲存到狀態中
      })
      .catch((error) => console.error("Error:", error));
  }, []); // 空陣列確保只有在組件加載時發送請求

  return (
    <div>
      <h1>Backend Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* 顯示後端資料 */}
    </div>
  );
}

export default ExampleComponent;
