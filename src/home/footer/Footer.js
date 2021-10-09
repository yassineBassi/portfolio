import React from 'react';
import TextAnimation from './../../animations/TextAnimation';
import { animated, useSpring } from 'react-spring';

function Footer() {
    
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

    const inputAnim = useSpring({
        from: {
            opacity:0,
            marginTop: -800
        }, 
        to: {
            opacity:1,
            marginTop: 0
        }, 
        delay: 200
    })
    
    const iconBtnAnim = useSpring({
        from: {
            opacity:0,
            marginTop: -800
        }, 
        to: {
            opacity:1,
            marginTop: 0
        }, 
        delay: 300
    })
    
    return (
        <div className="text-white text-center flex flex-col h-full lg:px-32">
            <div className="relative flex-grow z-10  pt-2 pb-4 md:pb-6 rounded-3xl flex flex-col">
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
                <span className="block text-xl px-8 md:px-4 mt-5">
                    <TextAnimation
                        text="Have a question or want to work together?"
                        type="fade"
                        speed={20}
                    >
                    </TextAnimation>
                </span>
                <div className="mt-3 flex-grow flex flex-col items-center justify-between">
                    <div className="w-full flex-grow flex flex-col px-4 ">
                        <animated.input 
                            style={ inputAnim }
                            type="text" 
                            placeholder="Full Name" 
                            className="block bg-indigo-900 border border-green-400 rounded-2xl px-4 py-6 my-4 w-full h-10 mx-auto focus:outline-none" 
                        />
                        <animated.input 
                            style={ inputAnim }
                            type="text" 
                            placeholder="Enter E-mail" 
                            className="block bg-indigo-900 border border-green-400 rounded-2xl px-4 my-4 py-6 w-full h-10 mx-auto focus:outline-none " 
                        />
                        <animated.textarea 
                            style={ inputAnim }
                            placeholder="Your Message" 
                            className="block bg-indigo-900 border border-green-400 rounded-2xl px-4 my-4 py-3 w-full mx-auto focus:outline-none flex-grow" 
                        ></animated.textarea>
                    </div>
                    <div className="w-full">
                        <button 
                            className="uppercase py-2 float-center px-6 rounded-2xl text-xl font-bold border border-green-400 text-white hover:bg-white hover:text-indigo-900 z-20"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className=" z-20 relative">
                <button onClick={scrollTop} className="w-14 h-14 rounded-2xl shadow-xl bg-white text-indigo-900 text-2xl">
                    <i className="fas fa-angle-double-up"></i>
                </button>
            </div> */}
            <div className="w-full ">
                <div className="flex justify-center s-20">
                    <animated.a 
                        style={ iconBtnAnim } 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/yassineBassi" 
                        className="text-2xl bg-indigo-900 border border-green-400 hover:bg-green-400 hover:text-indigo-900 mx-3 rounded-xl w-16 z-20"
                    >
                        <i className="fab fa-facebook-f m-4"></i>
                    </animated.a>
                    <animated.a 
                        style={ iconBtnAnim } 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/
                        yassine-bassi-5b05ba192/" className="bg-indigo-900 border border-green-400 text-2xl hover:bg-green-400 hover:text-indigo-900 mx-3 rounded-xl w-16 z-20"
                    >
                        <i className="fab fa-linkedin-in m-4"></i>
                    </animated.a>
                    <animated.a 
                        style={ iconBtnAnim } 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/yassineBassi" 
                        className="text-2xl bg-indigo-900 border border-green-400 hover:bg-green-400 hover:text-indigo-900 mx-3 rounded-xl w-16 z-20"
                    >
                        <i className="fab fa-github m-4"></i>
                    </animated.a>
                    <animated.a 
                        style={ iconBtnAnim } 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/yassineBassi" 
                        className="text-2xl bg-indigo-900 border border-green-400 hover:bg-green-400 hover:text-indigo-900 mx-3 rounded-xl w-16 z-20" 
                    >
                        <i className="fab fa-google-plus-g m-4"></i>
                    </animated.a>
                </div>
                <div className="pt-4">
                    <span className="text-lg">BASSI YASSINE @ { (new Date()).toJSON().slice(0, 4) }</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;