import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="w-full text-center mt-20">
                    <span className="text-4xl font-bold block">Full Stack Developer</span>
                    <span className="block mt-5">I design and code beautifully simple things, and I love what I do.</span>
                    <img className="w-120" src={process.env.PUBLIC_URL + '/developers.png'} alt="" />
                </div>
            </div>
        );
    }
}

export default Header;