import React, { Component } from 'react';
import './Navbar.css'

const navbarItems = [
    {
        text: 'about',
        link: ''
    },
    {
        text: 'Projects',
        link: ''
    },
    {
        text: 'Contact',
        link: ''
    }
]

class Navbar extends Component {    

    render() {
        return (
            <div>
                <div className="p-5 flex justify-between">
                    <img className="w-14" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                    <div>
                        <button>not yet</button>
                        <button className="mx-4 py-2 px-4 text-md rounded-3xl font-weight-bold text-indigo-800 border-2 border-indigo-400 hover:bg-indigo-400 hover:text-white">Say Hello</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <ul className="mx-auto">
                        {
                            navbarItems.map(item => (
                                <li className="inline-block mx-2 text-gray-400 text-xl uppercase cursor-pointer hover:text-xl hover:font-bold hover:text-indigo-700">
                                    { item.text }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;