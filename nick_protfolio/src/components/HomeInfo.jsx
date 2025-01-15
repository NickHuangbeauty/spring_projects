import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className="font-medium sm:text-x1 text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn" > 
         {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
      </Link>
    </div>
)

const renderContent = {
    1: (
      <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        您好，我是 <span className="font-semibold">國申</span> 👋
        <br/>
        一位數據資料工程師
      </h1>
    ),
    2: (
      <InfoBox
        text="專注於資料工程,數據分析與AI以及注重團隊合作與溝通能力"
        link="/about"
        btnText="關於我"
      />
      ),
    3: (
      <InfoBox
        text="有關於個人過往工作專案經歷與自學專案"
        link="/projects"
        btnText="經歷與專案"
      />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo