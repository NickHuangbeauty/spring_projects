import { Link } from "react-router-dom"

import React from 'react';
import { projects } from '../constants';
import { certificates } from "../constants";
import { arrow } from '../assets/icons';

function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        我的 <span className="blue-gradient_text font-semibold drop-shadow">專案以及證書</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
       <p>我的專案著重於資料工程，結合我在ETL開發工程師角色中的實際工作經驗，自學課程所得的專業知識，以及對開源軟體的參與。</p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
           <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${project.theme}`} />
             <div className="btn-font rounded-xl flex justify-center items-center">
              <img
                src={project.iconUrl}
                alt="Project Icon"
                className="w-4/5 h-4/5 object-contain" 
              />
             </div> 
           </div>

           <div className="mt-5 flex flex-col">
              <h4 className="text-2x1 font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  連結
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div>
         <h3 className="subhead-text">證書</h3>
         <div className="flex flex-wrap my-20 gap-16">
        {certificates.map((certificate) => (
          <div className="lg:w-[400px] w-full" key={certificate.name}>
           <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${certificate.theme}`} />
             <div className="btn-font rounded-xl flex justify-center items-center">
              <img
                src={certificate.iconUrl}
                alt="Certtificate Icon"
                className="w-4/5 h-4/5 object-contain" 
              />
             </div> 
           </div>

           <div className="mt-5 flex flex-col">
              <h4 className="text-2x1 font-poppins font-semibold">
                {certificate.name}
              </h4>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  連結
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  )
}

export default Projects