// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    git,
    github,
    linkedin,
    python,
    postgresql,
    oracle,
    sql,
    news,
    data,
    ai,
    coursera,
    udacity,
    aia
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "PYTHON",
        type: "Backtend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Query",
    },
    {
        imageUrl: oracle,
        name: "ORACLE",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "POSTGRESQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const certificates = [
  {
    iconUrl: udacity,
    theme: "btn-back-white",
    name: 'Data Engineering with AWS Nanodegree',
    link: 'https://app.heptabase.com/w/13e9a42c15e1702cc0e54988873b8e90ac4a41e3863307fb4bf28ed198b575c2',
  },
  {
    iconUrl: coursera,
    theme: "btn-back-white",
    name: 'Programming for Everybody (Getting Started with Python)',
    link: 'https://www.coursera.org/verify/33F7RENXJS7V',
  }, 
  {
    iconUrl: coursera,
    theme: "btn-back-white",
    name: 'Using Python to Access Web Data',
    link: 'https://www.coursera.org/verify/PM9YMB3MQKEY',
  }, 
  {
    iconUrl: coursera,
    theme: "btn-back-white",
    name: 'Python Data Structures',
    link: 'https://www.coursera.org/verify/9AT4EAR934GB',
  }, 
  {
    iconUrl: coursera,
    theme: "btn-back-white",
    name: 'Using Databases with Python',
    link: 'https://www.coursera.org/verify/BMAG25Y9DKND',
  }, 
  {
    iconUrl: coursera,
    theme: "btn-back-white",
    name: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
    link: 'https://www.coursera.org/verify/PXENQWGWCS7M',
  }, 
  // {
  //   iconUrl: udacity,
  //   theme: "btn-back-white",
  //   name: 'Data Engineering with AWS Nanodegree',
  //   link: 'https://app.heptabase.com/w/13e9a42c15e1702cc0e54988873b8e90ac4a41e3863307fb4bf28ed198b575c2',
  // }, 
  {
    iconUrl: aia,
    theme: "btn-back-white",
    name: '台灣人工智慧學校第一屆技術領袖班',
    link: 'https://app.heptabase.com/w/d13bf875adff9f7c2dc12fa674b99c3ed2539349a4297c2d3a5c832a04d5ebc8',
  }, 
] 

export const projects = [
    {
        iconUrl: data,
        theme: 'btn-back-orange',
        name: '數據系統整合',
        description: '數據處分析確保資料準確性與及時性，從而支持決策制定與業務分析。該專案著以資料網格為開發架構，提升資料治理與整體數據之靈活性。',
        link: 'https://app.heptabase.com/w/5c86c1a081bd9d70215ccb9bdfa68879e3cad11e7cc6d4e6adcb487ec7cd6c20',
    },
    {
        iconUrl: news,
        theme: 'btn-back-green',
        name: '以COVID-19為基礎資料，將資料分析後進行資料流程自動化',
        description: '監控和處理有關COVID-19的新聞資訊，並利用Apache Airflow與AWS完成ETL流程的自動化。',
        link: 'https://app.heptabase.com/w/fd4da2b7f377fb5d0958c31e4e8235103fb2e03a3dbe9d179f0ac36414725242',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-blue',
        name: 'GPT驅動的ETL優化與規格化解決方案',
        description: '建立與優化ETL部分流程（應用GPT並進行題詞工程，解決VDI資源不足及繁雜的資料規格化過程）。',
        link: 'https://app.heptabase.com/w/0e9f2e79516e69fccf6023a18f522ca35641b1936acd25a1ea4ec9f3a264771c',
    },
    {
      iconUrl: data,
      theme: 'btn-back-blue',
      name: 'LLM在客服系統中的應用',
      description: '參與基於LLM的客服系統的開發，該系統能夠自動化客戶查詢的分類，提高客服的工作效率。',
      link: 'https://app.heptabase.com/w/b745114351592b580e1274e41caf7bb184ea32dc2e36cad7001f1c90a0fc4ffd',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];