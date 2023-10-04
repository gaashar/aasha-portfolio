import reactLogo from "../../../assets/react.png";
import sassLogo from "../../../assets/sass.png";

export const projectList = [
  {
    id: 1,
    name: "Insights",
    logos: [
      reactLogo,
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
      sassLogo,
    ],
    title: "Platform for building Data Visualization Dashboards",
    description:
      "Platform that enables users to build Dashboards, based on the metrics curated using historical and real-time data. This platform is highly interactive and allows the user to refine the data to the point. It enables the users right from picking the data (modifying and transforming it based on user needs) till creating a standalone widgets, that can be reused across multiple dashboards. All the visualization created is maintained in frontend specific backend PostgreSQL tables, accessed via GraphQL endpoints.",
  },
  {
    id: 2,
    name: "Musicaly",
    logos: [
      reactLogo,
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
      sassLogo,
    ],
    title: "Musicaly - [Pet Project]",
    description:
      "I had a blast crafting this React SPA website that places a spotlight on CSS layouts, responsiveness, and seamless navigation with react-router. It was a fantastic journey creating this engaging and exceptionally user-friendly design, all while diving headfirst into the fascinating world of CSS during my early adventures in frontend UI development.",
    link: "https://aasha-portfolio.web.app",
    gitHub: "https://github.com/gaashar/aasha-portfolio",
  },
];
