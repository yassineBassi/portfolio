import React, { useEffect, useState } from 'react';
import './Home.css'
import About from './about/About';
import Stars from './Stars';
import { animated, useSpring } from 'react-spring';
import Header from './header/Header';
import FeatherIcon from 'feather-icons-react';
import Footer from './footer/Footer';
import Projects from './projects/Projects';

function Home() {

    const [step, setStep] = useState(-1);
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
        marginTop: step === 1 ? 0 : 500
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
            transform: 'translateY(0px)'
        },
        to: {
            transform: step !== 0 ? 'translateY(20px)' : 'translateY(0px)'
        },
        loop: true
    });

    const arrowDownAnim = useSpring({
        from: {
            transform: 'translateY(-20px)'
        },
        to: {
            transform: 'translateY(0px)'
        },
        loop: true
    });

    const nextStep = () => {
        setStep(step => step + 1);
    }
    const previousStep = () => {
        setStep(step => step - 1);
    }

    useEffect(() => {
        setStep(0);
    }, [])

    return (
        <div className="bg-gray-900 flex flex-col w-full h-full">
            <Stars></Stars>
            <animated.div style={arrowUpAnim} className="w-full text-center pt-2">
                <button 
                    onClick={ previousStep }
                    className={"text-2xl uppercase font-bold " + (step === 0 ? "text-gray-500" : "text-blue-500") }
                >
                    <span className="flex flex-col items-center">
                        <FeatherIcon icon="chevron-up" size="48" />
                    </span>
                </button>
            </animated.div>
            
            <div className="flex-auto overflow-y-auto overflow-x-hidden">
                <animated.div className="h-full" style={headerAnim}>
                    <Header></Header>
                </animated.div>
                <animated.div style={aboutAnim}>
                    <About></About>
                </animated.div>
                <animated.div style={projectsAnim}>
                    <Projects></Projects>
                </animated.div>
                <animated.div style={footerAnim}>
                    <Footer></Footer>
                </animated.div>
            </div>

            <animated.div style={arrowDownAnim} className="w-full mt-2 flex items-end justify-center pb-2">
                <button 
                    onClick={ nextStep }
                    className="text-2xl uppercase text-blue-500 font-bold"
                >
                    <span className="flex flex-col items-center">
                        <FeatherIcon icon="chevron-down" size="48" />
                    </span>
                </button>
            </animated.div>
        </div>
    );
}

export default Home;