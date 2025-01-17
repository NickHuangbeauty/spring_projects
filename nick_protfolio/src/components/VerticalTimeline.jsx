/*
MIT License

Copyright (c) 2019 Fred K. Schott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Chrono } from "react-chrono";

const items = [
  {
    title: "2024年4月 - 2024年12月",
    cardTitle: "高級數據工程師（技術副理）",
    cardSubtitle: "遊戲橘子",
    cardDetailedText: 
        ["原有系統改善：通過數據分析與重構數據流架構，以因應各業務單位的需求。"]
  },
  {
    title: "2021年7月 - 2024年3月",
    cardTitle: "大數據開發工程師",
    cardSubtitle: "緯創軟體",
    cardDetailedText: 
        ["大數據系統整合：國內外數據源，通過數據分析與匯流中心進行收集與分發，以支援各業務單位的需求。"]
  },
  {
    title: "2020年2月 - 2021年7月",
    cardTitle: "數據開發工程師",
    cardSubtitle: "吉貝克",
    cardDetailedText: ["系統導入：規劃Oracle OFSAA專案之資料清洗、數據建模與分析、測試與驗證計算模組正確性。"],
  },
  {
    title: "2018年12月 - 2019年8月",
    cardTitle: "軟體工程師",
    cardSubtitle: "香港商天奕科技",
    cardDetailedText: ["自有雲維護與推薦系統開發：監控伺服器以及開發推薦系統進一步完善自有產品生態系。"],
  },
  {
    title: "2016年6月 - 2018年2月",
    cardTitle: "信用風險資深專員",
    cardSubtitle: "王道銀行",
    cardDetailedText: ["系統移轉與整合Basel計算模組：因應核心移轉後信用風險資料分析與整合以及優化資本計提計算過程。"],
  },
  {
    title: "2013年8月 - 2016年6月",
    cardTitle: "資深商業顧問",
    cardSubtitle: "亞太財金",
    cardDetailedText: ["系統計算模組開發與導入：產品開發、規劃專案進行與後續維護。"],
  },
];

const VerticalAlternatingTimeline = () => {
  return (
    <Chrono
      items={items}
      slideShow
      allowDynamicUpdate
      mode="VERTICAL_ALTERNATING"
    >
      {items.map((item, itemIndex) => (
        <ul key={`item-${itemIndex}`} className="my-5 list-disc ml-5 space-y-2">
          {Array.isArray(item.cardDetailedText) ? item.cardDetailedText.map((point, index) => (
            <li key={`item-${itemIndex}-point-${index}`}>
              {point}
            </li>
          )) : (
            <li className="text-black-500/10 font-normal pl-10">
              {item.cardDetailedText}
            </li>
          )}
        </ul>
      ))}
    </Chrono>
  );
};

export default VerticalAlternatingTimeline;
