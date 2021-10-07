import React from 'react';
import './Projects.css'
import { useSpring, animated } from 'react-spring';
import TextAnimation from './../../animations/TextAnimation';


const selectedCategory = 'Mobile Apps'

function Projects() {

    const projects = [
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "Dolphy",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        },
        {
            image: process.env.PUBLIC_URL + '/website.jpg',
            name: "project name",
            techs: [
                "Angular",
                "expressJs",
                'mongodb'
            ]
        }
    ];

    const lineAnim = useSpring({
        from: {
            opacity:0,
            marginLeft: -800
        }, 
        to: {
            opacity:1,
            marginLeft: 0
        }, 
        delay: 300
    })

    const projectAnim = useSpring({
        from: {
            opacity:0,
            marginLeft: -800
        }, 
        to: {
            opacity:1,
            marginLeft: 0
        }, 
        delay: 300
    })

    const categories = [
        'Mobile Apps',
        'web sites',
    ]

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="relative text-white text-center">
                <span className="text-4xl font-bold">
                    <TextAnimation
                        type="zoom"
                        fontSize={34}
                        delay={300}
                        speed={100}
                        text="ABOUT"
                    >
                    </TextAnimation>
                </span>
                <animated.div style={ lineAnim } className="w-100 flex justify-center">
                    <div className="bg-white h-1 w-16 mt-3"></div>
                </animated.div>
            </div>
            <div className="w-full flex my-8">
                <ul className="mx-auto">
                { categories.map((category, ind) => (
                    <li key={ind} className={"inline-block px-4 text-xl uppercase cursor-pointer hover:text-xl border-b-2 mx-1 border-dashed border-transparent hover:bg-white hover:text-indigo-800 p-2 bg-transparent text-gray-400 " + (selectedCategory === category ? " bg-white text-indigo-800" : "")}>
                        { category }
                    </li>
                )) }
                </ul>
            </div>
            <div className="overflow-auto flex-grow">
                <div className="mb-8 mx-6 lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    { projects.map((project, ind) => (
                        <animated.div style={ projectAnim }>
                            <div key={ind} className="relative pb-full z-10 border-4 border-gray-900 hover:border-transparent overflow-hidden relative shadow-xl hover:shadow-sm project my-1">
                                <img className="thumbnail" src={ project.image } alt="" />
                                <div className="flex justify-center items-center project-details">
                                    <div className="text-white text-center overflow-hidden">
                                        <span className="project-info">
                                            <span className="text-2xl font-bold">{ project.name }</span>
                                            <span className="block text-xl mt-2">
                                                {project.techs.map(tech => (
                                                    <span className=" mx-2">{ tech }</span>
                                                ))}
                                            </span>
                                        </span>
                                        <button className="p-2 border learn-more-btn border-white mt-7 hover:bg-white hover:text-black learn-more-btn" >
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    )) }
                </div>
            </div>
        </div>
    );
}


export default Projects;