import React, { Component } from 'react';
import './Navbar.css'

const navbarItems = [
    {
        text: 'home',
        link: ''
    },
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
            <div className="">
                <div className="z-40 fixed">
                    <ul className="absolute flex">
                        {
                            navbarItems.map((item, ind) => (
                                <li key={ind} className="my-2 text-gray-400 text-md uppercase cursor-pointer hover:text-white">
                                    <span className="ml-3">{ item.text }</span>
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