// about page content
import Header from "./UI/Header";
import Paragraph from "./UI/Paragraph";
import SocialList from "./UI/SocialList";
import {
  faBootstrap,
  faChrome,
  faCss3,
  faFacebook,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faReact,
  faVuejs,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SkillList from "./UI/SkillList";
import {
  faCamera,
  faCode,
  faCoffee,
  faComputer,
  faDatabase,
  faFemale,
  faGuitar,
  faMusic,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import InterestList from "./UI/InterestList";
import ToolList from "./UI/ToolList";

// about content
let content = {
  header: "This is about me.",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
};

// social list
let list = [
  {
    route: "https://www.facebook.com",
    type: faFacebook,
  },
  {
    route: "https://www.youtube.com",
    type: faYoutube,
  },
  {
    route: "https://www.github.com",
    type: faGithub,
  },
  {
    route: "https://www.instagram.com",
    type: faInstagram,
  },
];

// skill list
let skill_list = [
  {
    name: "JavaScript",
    icon: faJs,
    exp: "1 year Deep Learning Experience, including functional programming concepts, and others.",
  },
  {
    name: "PHP",
    icon: faPhp,
    exp: "6 months Learning Experience for University Assignment.",
  },
  {
    name: "ExpressJS : NodeJS",
    icon: faNodeJs,
    exp: "8 months Learning Experience for MERN full-stack project.",
  },
  {
    name: "ReactJS",
    icon: faReact,
    exp: "6 months Learning Experience for MERN full-stack project.",
  },
  {
    name: "MySQL",
    icon: faDatabase,
    exp: "1 year Learning Experience with basic relational theory.",
  },
  {
    name: "MongoDB",
    icon: faDatabase,
    exp: "4 months Learning Experience for MERN full-stack project.",
  },
  {
    name: ".Net : C#",
    icon: faCode,
    exp: "4 months Learning Experience for .Net OOP based Windows Form Application.",
  },
  {
    name: "HTML",
    icon: faHtml5,
    exp: "2 years experience since the start of the Web Development.",
  },
  {
    name: "CSS",
    icon: faCss3,
    exp: "2 years experience since the start of the Web Development.",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    exp: "2 years experience since the start of the Web Development.",
  },
  {
    name: "JQuery",
    icon: faCode,
    exp: "1 years experience during learning JavaScript.",
  },
  // {
  //   name: "Laravel",
  //   icon: faLaravel,
  //   exp: "Currently learning to create Web application with Laravel with Vue framework.",
  // },
  // {
  //   name: "VueJS",
  //   icon: faVuejs,
  //   exp: "Currently learning to create Web application with Laravel with Vue framework.",
  // },
  {
    name: "NextJS",
    icon: faCode,
    exp: "Currently learning to create Web application with popular NextJS server side rendering.",
  },
  {
    name: "TypeScript",
    icon: faCode,
    exp: "Currently learning with NextJS and Redux tool kit.",
  },
  // {
  //   name: "TailwindCSS",
  //   icon: faCode,
  //   exp: "Currently learning for more customizable UI Component in NextJS project.",
  // },
];

// interest link
let interest_list = [
  faComputer,
  faCode,
  faGuitar,
  faMusic,
  faCamera,
  faCoffee,
  faFemale,
];

// tool list
let tool_list = [
  {
    name: "Google Chrome",
    icon: faChrome,
    description: "This is the reason of using this tool.",
  },
  {
    name: "Visual Studio Code",
    icon: faTools,
    description: "This is the reason of using this tool.",
  },
  {
    name: "Terminal",
    icon: faTerminal,
    description: "This is the reason of using this tool.",
  },
  {
    name: "jetBrain",
    icon: faTools,
    description: "This is the reason of using this tool.",
  },
  {
    name: "Postman",
    icon: faTools,
    description: "This is the reason of using this tool.",
  },
];

export default function About() {
  return (
    <div className={"bg-light rounded-2 p-3 p-lg-5"}>
      <div className={"my-2"}>
        <Header content={content.header} />
        <Paragraph content={content.paragraph} />
      </div>
      <hr />

      <div className={"my-2"}>
        <SkillList skills={skill_list} />
      </div>
      <hr />
      <div className={"my-2"}>
        <ToolList tools={tool_list} />
      </div>
      <hr />

      <div className={"my-2"}>
        <InterestList interests={interest_list} />
      </div>
      <hr />
      <div className={"my-2"}>
        <SocialList list={list} />
      </div>
    </div>
  );
}
