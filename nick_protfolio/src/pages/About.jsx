import React from 'react'
import { skills } from '../constants'
import VerticalAlternatingTimeline from '../components/VerticalTimeline'

// Define the About component
const About = () => {
  // Render the About section
  return (
    <section className="max-container">
      <h1 className="head-text">
        您好，我是 <span className="blue-gradient_text font-semibold drop-shadow">國申</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
       <p>作為一位大數據資料工程師，我擁有豐富的數據處理和分析經驗。我擅長使用各種大數據工具和技術，包括Hadoop、Spark和SQL，來處理和分析
        海量數據。我熟悉數據倉庫設計和數據流水線構建，並具備良好的編碼和數據清理能力。我致力於將數據轉化為業務洞察。
        我熱愛學習和不斷探索新的數據技術，並且樂於與團隊合作，共同解決數據相關的挑戰。</p>
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
             <strong>ETL架構設計與開發：</strong> 專注於設計ETL管道、系統流程以及進行相關測試，以確保數據處理的效率與準確性。
             <br />
             <strong>跨團隊溝通與協作：</strong>擁有出色的團隊合作與溝通能力，能在多部門間協調並有效解決問題。
             <br />
             <strong>LLM技術應用：</strong>實際應用GPT於大數據和RDBMS的資料效能問題，開發自動化資料流程以大幅提升效能和產出質量。
             <br />
             <strong>研究：</strong>專注於新技術和方法的探索，包括RAG（Retrieval-Augmented Generation）技術在LLM模型框架中的效率性研究，以及Prompt injection技術的研究。
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