import React, { Component } from 'react';
import TextAnimation from './../../animations/TextAnimation';
import { animated, useSpring } from 'react-spring';

function Footer() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }
    
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
    
    return (
        <div className="text-white text-center flex flex-col h-full lg:px-32">
            <div className="relative flex-grow z-10 bg-indigo-900 pt-2 pb-4 md:pb-6 rounded-3xl flex flex-col">
                <div className="relative text-white text-center">
                    <span className="text-4xl font-bold">
                        <TextAnimation
                            type="zoom"
                            fontSize={34}
                            delay={300}
                            speed={100}
                            text="CONTACT"
                        >
                        </TextAnimation>
                    </span>
                    <animated.div style={ lineAnim } className="w-100 flex justify-center">
                        <div className="bg-white h-1 w-16 mt-3"></div>
                    </animated.div>
                </div>
                <span className="block text-xl px-2 md:px-4 mt-5">
                    <TextAnimation
                        text="Have a question or want to work together?"
                        type="fade"
                        speed={20}
                    >
                    </TextAnimation>
                </span>
                <div className="my-3 flex-grow flex flex-col items-center justify-between">
                    <div className="w-full px-4 ">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="block bg-gray-800 rounded-2xl px-4 py-6 my-4 w-full h-10 mx-auto focus:outline-none" 
                        />
                        <input 
                            type="text" 
                            placeholder="Enter E-mail" 
                            className="block bg-gray-800 rounded-2xl px-4 my-4 py-6 w-full h-10 mx-auto focus:outline-none " 
                        />
                        <textarea 
                            placeholder="Your Message" 
                            className="block bg-gray-800 rounded-2xl px-4 my-4 py-3 w-full mx-auto focus:outline-none" 
                            rows="10"
                        ></textarea>
                    </div>
                    <div className="w-full pb-8">
                        <button 
                            className="uppercase py-2 float-center px-6 rounded-2xl text-xl font-bold border border-white text-white hover:bg-white hover:text-indigo-900"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="-mt-10 z-20 relative">
                <button onClick={scrollTop} className="w-14 h-14 rounded-2xl shadow-xl bg-white text-indigo-900 text-2xl">
                    <i className="fas fa-angle-double-up"></i>
                </button>
            </div>
            <div className="w-full -mt-8">
                <div className="flex pt-14 justify-center">
                    <a target="_blank" rel="noreferrer" href="https://github.com/yassineBassi" className="text-white text-3xl bg-indigo-900 hover:bg-white hover:text-indigo-900 mx-3 rounded-xl w-16">
                        <i className="fab fa-facebook-f m-4"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yassine-bassi-5b05ba192/" className="text-white bg-indigo-900 text-3xl hover:bg-white hover:text-indigo-900 mx-3 rounded-xl w-16">
                        <i className="fab fa-linkedin-in m-4"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yassineBassi" className="text-white text-3xl bg-indigo-900 hover:bg-white hover:text-indigo-900 mx-3 rounded-xl w-16">
                        <i className="fab fa-github m-4"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yassineBassi" className="text-white text-3xl bg-indigo-900 hover:bg-white hover:text-indigo-900 mx-3 rounded-xl w-16">
                        <i className="fab fa-google-plus-g m-4"></i>
                    </a>
                </div>
                <div className="pt-4">
                    <span className="text-lg">BASSI YASSINE @ 2021</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;