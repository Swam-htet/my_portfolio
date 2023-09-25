import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SocialItem({item}) {
    return <li className={'nav-item'}>
        <a href={item.route} className={'nav-link'}>
            <FontAwesomeIcon className={'fs-3 me-3 text-dark'} icon={item.type}/>
        </a>
    </li>;
}

export default function SocialList({list}) {
    return (<ul className={'nav'}>
        {
            list.map((item, index) => (<SocialItem key={index} item={item}/>))
        }
    </ul>);
}