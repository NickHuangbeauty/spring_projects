import React from 'react'
import { skills } from '../constants'
import VerticalAlternatingTimeline from '../components/VerticalTimeline'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        您好，我是 <span className="blue-gradient_text font-semibold drop-shadow">國申</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
       <p>作為一位資料工程師，我擁有豐富的數據處理和分析經驗。使用大數據工具和技術，包括Hadoop、Spark和SQL，來處理和分析海量數據。
        過去參加過大型數據整合專案，設計和數據流水線構建。我致力於將數據轉化為業務洞察，以及熱愛學習和不斷探索新的數據技術，並樂於與團隊合作，共同解決數據相關的挑戰。</p>
      </div>
      

      <div className="py-10 flex flex-col">
         <h3 className="subhead-text">技術領域</h3>

         <div className="mt-16 flex flex-wrap gap-12">
           {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-x1" />
                <div className="btn-front rounded-x1 flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h1/2 object-conatin" 
                  />
                </div>
              </div>
          ))}
         </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">工作經歷</h3>
         <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
             <strong>資料分析, ETL架構設計與開發：</strong> 專注於資料分析與設計data pipeline、系統流程以及進行相關測試，確保數據處理的效率與準確性。
             <br />
             <strong>跨團隊溝通與協作：</strong>團隊合作與溝通能力，在多部門間協調並釐清與解決問題。
             <br />
             <strong>LLM技術應用：</strong>應用GPT於數據和資料效能問題，提示工程開發加速資料流程進行以提升產出質量。
             <br />
             <strong>研究：</strong>專注於新技術和方法的探索，如：RAG等，以及Prompt injection技術的研究。
             <br />
             總覽如下：
          </p>
         </div>

         <div className="mt-12 flex">
           <VerticalAlternatingTimeline />
         </div>
      </div>
    </section>
  )
}

export default About