import React, { useEffect, useState } from 'react';
import './Home.css'
import About from './about/About';
import Stars from './Stars';
import { animated, useSpring } from 'react-spring';
import Header from './header/Header';
import FeatherIcon from 'feather-icons-react';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import Loader from './loader/loader';
import {Animated} from "react-animated-css";

function Home() {

    const [step, setStep] = useState(-2);
    // const [scroll, setScroll] = useState(0);

    // const home = useRef(null)
    // const about = useRef(null)
    // const projects = useRef(null)
    // const contact = useRef(null)

    // const navbarItems = [
    //     {
    //         text: 'home',
    //         ref: home
    //     },
    //     {
    //         text: 'about',
    //         ref: about
    //     },
    //     {
    //         text: 'Projects',
    //         ref: projects
    //     },
    //     {
    //         text: 'Contact',
    //         ref: contact
    //     }
    // ]

    const headerAnim = useSpring({
        opacity: step === 0 ? 1 : 0,
        display: step === 0 ? 'block' : 'none',
        marginTop: step === 0 ? 0 : -550
    });

    const aboutAnim = useSpring({
        opacity: step === 1 ? 1 : 0,
        display: step === 1 ? 'block' : 'none',
        marginTop: step === 1 ? 0 : -500
    });

    const projectsAnim = useSpring({
        opacity: step === 2 ? 1 : 0,
        display: step === 2 ? 'block' : 'none',
        marginTop: step === 2 ? 0 : -550
    });

    const footerAnim = useSpring({
        opacity: step === 3 ? 1 : 0,
        display: step === 3 ? 'block' : 'none',
        marginTop: step === 3 ? 0 : -550
    });

    const arrowUpAnim = useSpring({
        from: {
            color: step <= 0 ? 'grey' : 'transparent'
        },
        to: {
            color:  step <= 0 ? 'grey' : '#a488ff'
        },
        loop: true
    });

    const arrowDownAnim = useSpring({
        from: {
            color: 'transparent'
        },
        to: {
            color: '#a488ff'
        },
        loop: true
    });

    const nextStep = () => {
        setStep(step => step + 1);
    }
    const previousStep = () => {
        if(step > 0) setStep(step => step - 1);
    }

    useEffect(() => {
        setStep(-1);
        setTimeout(() => {
            setStep(0);
        }, 3000);
    }, [])

    return (
        <div className="bg-gray-900 flex flex-col w-full h-full">
            <Stars></Stars>
            {step >= 0 && (
                <animated.div style={arrowUpAnim} className="w-full text-center pt-4">
                    <button 
                        onClick={ previousStep }
                        className={"text-2xl uppercase font-bold " }
                    >
                        <span className="flex flex-col items-center">
                            <FeatherIcon icon="chevron-up" size="48" />
                        </span>
                    </button>
                </animated.div>
            )}
            
            <div className="flex-auto overflow-y-auto overflow-x-hidden py-3">
                {step === -1 && (
                    <Loader></Loader>
                )}
                <animated.div className="h-full" style={headerAnim}>
                    {step >= 0 && (
                        <Header></Header>
                    )}
                </animated.div>
                <animated.div style={aboutAnim}>
                    {step >= 1 && (
                        <About></About>
                    )}
                </animated.div>
                <animated.div style={projectsAnim}>
                    <Projects></Projects>
                </animated.div>
                <animated.div style={footerAnim}>
                    <Footer></Footer>
                </animated.div>
            </div>

            {step >= 0 && (
                <animated.div style={arrowDownAnim} className="w-full mt-2 flex items-end justify-center pb-2">
                    <button 
                        onClick={ nextStep }
                        className="text-2xl uppercase font-bold"
                    >
                        <span className="flex flex-col items-center">
                            <FeatherIcon icon="chevron-down" size="48" />
                        </span>
                    </button>
                </animated.div>
            )}
        </div>
    );
}

export default Home;