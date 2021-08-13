import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <div className="bg-gray-900 text-white">
                <Navbar></Navbar>
                <div className="p-5 flex justify-center">
                    <img className="w-52  relative z-20" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                </div>
                <div className="w-full flex justify-center mt-8">
                    <div className="text-center">
                        <span className="text-4xl font-bold block">Full Stack Developer</span>
                        <span className="block mt-5">I design and code beautifully simple things, and I love what I do.</span>
                        <img className="w-120 relative z-20" src={process.env.PUBLIC_URL + '/developer.svg'} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;