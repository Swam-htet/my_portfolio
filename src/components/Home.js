import CarouselDisplay from "./UI/CarouselDisplay";
import Header from "./UI/Header";
import Paragraph from "./UI/Paragraph";
import SocialList from "./UI/SocialList";
import {faFacebook, faGithub, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

// social list
let list = [
    {
        route:"https://www.facebook.com",
        type:faFacebook
    },
    {
        route:"https://www.youtube.com",
        type:faYoutube
    },
    {
        route:"https://www.github.com",
        type:faGithub
    },
    {
        route:"https://www.instagram.com",
        type:faInstagram
    }

];

// home page content
let content = {
    header:"I'm Swam Htet.",
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
}


export default function Home(){
    return (
        <div className={'bg-light rounded-2 p-3 p-lg-5'}>
            <div className={'my-3'}>
                <Header content={content.header}/>
                <Paragraph content={content.paragraph}/>
            </div>
            <div className={'my-2'}>
                <SocialList list={list}/>
            </div>
            <CarouselDisplay/>
        </div>
    )
}