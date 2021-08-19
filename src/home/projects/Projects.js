import React, { Component } from 'react';
import './Projects.css'

const projects = [
    {
        image: process.env.PUBLIC_URL + '/website.jpg'
    },
    {
        image: process.env.PUBLIC_URL + '/website.jpg'
    },
    {
        image: process.env.PUBLIC_URL + '/website.jpg'
    },
    {
        image: process.env.PUBLIC_URL + '/website.jpg'
    },
    {
        image: process.env.PUBLIC_URL + '/website.jpg'
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
            <div className='w-full pt-10'>
                <div className="text-center">
                    <div className="text-4xl font-bold text-white uppercase">Projects</div>
                    <div className="bg-white h-1 w-20 mx-auto mt-3"></div>
                </div>
                <div className="w-full flex my-8">
                    <ul className="mx-auto">
                    { categories.map((category, ind) => (
                        <li key={ind} className={"inline-block px-4 text-xl uppercase cursor-pointer hover:text-xl border mx-1 border-dashed border-transparent hover:border-white p-2 bg-transparent text-gray-400 " + (selectedCategory === category ? "border-dashed border border-white" : "")}>
                            { category }
                        </li>
                    )) }
                    </ul>
                </div>
                <div className="mb-8 mx-6 lg:mx-40 grid grid-cols-1">
                    { projects.map((project, ind) => (
                        <div className="grid grid-cols-2 justify-center">
                            <img src={ project.image } alt="" />
                            <div className="none">

                            </div>
                        </div> 
                    )) }
                        
                    {/* { projects.map((project, ind) => (
                        <div key={ind} className="relative z-10 border-4 border-gray-900 hover:border-transparent overflow-hidden relative shadow-xl hover:shadow-sm project">
                            <img src={ project.image } alt="" />
                            <div className="flex justify-center items-center">
                                <div className="text-white text-center overflow-hidden">
                                    <span className="project-info">
                                        <span className="text-2xl font-bold">Project Name</span>
                                        <span className="block text-xl">Express/js</span>
                                    </span>
                                    <button className="p-2 border learn-more-btn border-white mt-7 hover:bg-white hover:text-black" >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) } */}
                </div>
            </div>
        );
    }
}

export default Projects

;