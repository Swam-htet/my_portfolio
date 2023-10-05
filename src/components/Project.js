import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

// Your project list
let list = [
    {
        index: "one",
        name: "Name of the project 1",
        link: "https://github.com",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        index: "two",
        name: "Name of the project 2",
        link: "https://github.com",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        index: "three",
        name: "Name of the project 3",
        link: "https://github.com",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
];

export default function Project() {
    return (
        <div style={{minHeight:"75vh",paddingTop:"100px"}}>
            {/*<Tabs defaultActiveKey={list[0].index} className="mb-3" fill>*/}
            {/*    {list.map((item) => (*/}
            {/*        <Tab key={item.index} eventKey={item.index} title={item.name}>*/}
            {/*            <div className={'card'}>*/}
            {/*                <div className={'card-header'}>{item.name}</div>*/}
            {/*                <div className={'card-body p-5'}>*/}
            {/*                    Description : {item.description}*/}
            {/*                </div>*/}
            {/*                <div className={'card-footer'}>*/}
            {/*                    <a href={item.link} className={'btn btn-outline-dark'}>*/}
            {/*                        {item.name}*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Tab>*/}
            {/*    ))}*/}
            {/*</Tabs>*/}

            <div className={'bg-dark rounded'} style={{height:"400px"}}>
                <h1 className={'text-white text-center'} style={{paddingTop:"150px"}}>Coming Soon ..... </h1>
            </div>
        </div>
    );
}
