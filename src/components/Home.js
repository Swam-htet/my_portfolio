import Header from "./UI/Header";
import Paragraph from "./UI/Paragraph";
import SocialList from "./UI/SocialList";
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

// social list
let list = [
    {
        route:"https://www.facebook.com/profile.php?id=100010587397312",
        type:faFacebook
    },
    {
        route:"https://www.linkedin.com/in/swam-htet-354311293/",
        type:faLinkedin
    },
    {
        route:"https://github.com/Swam-htet",
        type:faGithub
    },
    {
        route:"https://twitter.com/alpharboy129",
        type:faTwitter
    },
    {
        route:"https://www.instagram.com/alphar_just_acode?fbclid=IwAR2n5JY4wL8TWe5nPerpXiDNiBmEbW0BRgqpqY2zJa1bX79KioD5Mz82b6Q",
        type:faInstagram
    }

];

// home page content
let content = {
    header:"Hi, I'm is Swam Htet.",
    paragraph:`Now, I'm learning React.js (Next.js) for frontend web development and Laravel framework for backend development. I also use Express.js framework for Rest API development.  `,
}


export default function Home(){
    return (
        <div className={'rounded-2 p-4 p-lg-5 bg-light'}>
            <div className={'mb-5 mb-3-lg p-5-lg p-3'}>
                <Header content={content.header}/>
                <Paragraph content={content.paragraph}/>
            </div>

            <hr/>
            
            <div className={'my-5 my-3-lg p-5-lg p-3'}>
                <h1 className={'fw-light mb-4'}>Project Carousel</h1>
                <div className={'bg-dark rounded'} style={{height:"400px"}}>
                    <h1 className={'text-white text-center'} style={{paddingTop:"150px"}}>Coming Soon ..... </h1>
                </div>
            </div>

            <div className={'my-5 my-3-lg'}>
                <SocialList list={list}/>
            </div>
        </div>
    )
}