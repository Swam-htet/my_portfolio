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
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import InterestList from "./UI/InterestList";
import ToolList from "./UI/ToolList";

// about content
let content = {
    header: "This is about me.",
    paragraph:[
        "I have started my web development journey since 2021. I started learning by using a book (Professional Web Developer by Ei Maung) and then attended the React.js Course By Sayar Thet Khine. ",
        "Now I'm studying Level-5 diploma of Computing at NCC Education by KMD Institute. ","For Web development, I want to be a fullstack Wed developer and "]


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
        name: "Express.js : Node.js",
        icon: faNodeJs,
        exp: "8 months Learning Experience for MERN full-stack project.",
    },
    {                     
        name: "React.js",
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
    {
        name: "Laravel",
        icon: faLaravel,
        exp: "Currently learning to create Web application with Laravel with Vue framework.",
    },
    // {
    //   name: "VueJS",
    //   icon: faVuejs,
    //   exp: "Currently learning to create Web application with Laravel with Vue framework.",
    // },
    {
        name: "Next.js",
        icon: faCode,
        exp: "Currently learning to create Web application with popular Next.js server side rendering.",
    },
    {
        name: "Redux Toolkit",
        icon: faCode,
        exp: "Currently learning with Next.js and Redux tool kit.",
    },
    {
        name: "TypeScript",
        icon: faCode,
        exp: "Currently learning with Next.js.",
    },
    {
        name: "TailwindCSS",
        icon: faCode,
        exp: "Currently learning for more customizable UI Component in Next.js project.",
    },
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
        description: "The best web browser for web development.",
    },
    {
        name: "Visual Studio Code",
        icon: faTools,
        description: "Light weight text editor.",
    },
    // {
    //   name: "Terminal",
    //   icon: faTerminal,
    //   description: "This is the reason of using this tool.",
    // },
    {
        name: "jetBrains tools",
        icon: faTools,
        description: "By using jetBrains tools like WebStorm, PhpStorm and DataGrip, increase my productivity.",
    },
    {
        name: "Postman",
        icon: faTools,
        description: "Very useful tools for web development for HTTP request testing.",
    },
];

export default function About() {
    return (
        <div className={"bg-light rounded-2 p-3 p-lg-5"}>

            <div className={"my-2"}>
                <Header content={content.header}/>
                <Paragraph content={content.paragraph}/>
            </div>


            <hr/>


            <div className={"my-5"}>
                <SkillList skills={skill_list}/>
            </div>


            <hr/>


            <div className={"my-5"}>
                <ToolList tools={tool_list}/>
            </div>


            <hr/>

            <div className={"my-5"}>
                <InterestList interests={interest_list}/>
            </div>




            <div className={"my-5 my-3-lg"}>
                <SocialList list={list}/>
            </div>


        </div>
    );
}
