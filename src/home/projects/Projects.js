import React, { Component } from 'react';
import './Projects.css'

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
    }
];

const categories = [
    'Angular',
    'React',
    'Vue'
]

const selectedCategory = 'Angular'

class Projects extends Component {
    render() {
        return (
            <div className='w-full'>
                <div className="text-center">
                    <div className="text-4xl font-bold text-white uppercase">Projects</div>
                    <div className="bg-white h-1 w-20 mx-auto mt-3"></div>
                </div>
                <div className="w-full flex my-8">
                    <ul className="mx-auto">
                    { categories.map((category, ind) => (
                        <li key={ind} className={"inline-block px-4 text-xl uppercase cursor-pointer hover:text-xl border-b-2 mx-1 border-dashed border-transparent hover:border-white p-2 bg-transparent text-gray-400 " + (selectedCategory === category ? "border-dashed border-b-2 border-white bg-white text-indigo-800" : "")}>
                            { category }
                        </li>
                    )) }
                    </ul>
                </div>
                <div className="mb-8 mx-6 lg:mx-40 grid grid-cols-3">
                    { projects.map((project, ind) => (
                        <div key={ind} className="relative pb-full z-10 border-4 border-gray-900 hover:border-transparent overflow-hidden relative shadow-xl hover:shadow-sm project">
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
                    )) }
                </div>
            </div>
        );
    }
}

export default Projects

;