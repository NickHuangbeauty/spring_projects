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
  {
    iconUrl: udacity,
    theme: "btn-back-white",
    name: 'Data Engineering with AWS Nanodegree',
    link: 'https://sharing.clickup.com/9009179859/wb/h/8cfub6k-4838/48663347cdfef26',
  }, 
  {
    iconUrl: aia,
    theme: "btn-back-white",
    name: '第一屆技術領袖班',
    link: 'https://sharing.clickup.com/9009179859/wb/h/8cfub6k-4858/3ed820064fad572',
  }, 
] 

export const projects = [
    {
        iconUrl: data,
        theme: 'btn-back-orange',
        name: '數據系統整合',
        description: '數據處理技術，確保數據的準確性與及時性，從而支持決策制定與業務分析。此外，專案著重於優化數據流程，減少手動操作，提升整體系統性能。',
        link: 'https://sharing.clickup.com/9009179859/wb/h/8cfub6k-4778/a7ca0784f512aec',
    },
    {
        iconUrl: news,
        theme: 'btn-back-green',
        name: 'COVID-19資訊自動化監控系統',
        description: '監控和處理有關COVID-19的新聞資訊，並利用Apache Airflow與AWS完成ETL流程的自動化。',
        link: 'https://sharing.clickup.com/9009179859/wb/h/8cfub6k-4798/e2d6985b8563b3d',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-blue',
        name: 'GPT驅動的ETL優化與規格化解決方案',
        description: '建立與優化ETL部分流程（應用GPT並進行題詞工程，解決VDI資源不足及繁雜的資料規格化過程）。',
        link: 'https://sharing.clickup.com/9009179859/wb/h/8cfub6k-4818/67708bfea99a56b',
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