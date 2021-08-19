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
            <div className="fixed w-full z-40">
                <div className="w-full flex justify-center">
                    <ul className="flex items-center shadow-xl bg-gray-900 py-2 px-8 rounded-bl-full rounded-br-full border border-t-0 border-gray-600">
                        <li className="mx-2">
                            <img className="w-8 relative z-20" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                        </li>
                        {
                            navbarItems.map((item, ind) => (
                                <li key={ind} className="my-2 mx-3 text-gray-400 text-md uppercase cursor-pointer hover:text-white">
                                    <span>{ item.text }</span>
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