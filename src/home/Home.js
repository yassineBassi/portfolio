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
        <div className="bg-gradient-to-b from-gray-900 to-gray-900 flex flex-col w-full h-full">
            <Stars></Stars>
            <div className="w-full text-center mt-2">
                <button 
                    onClick={ previousStep }
                    className="text-2xl uppercase text-blue-500 font-bold"
                >
                    <span className="flex flex-col items-center">
                        <FeatherIcon icon="chevron-up" size="48" />
                    </span>
                </button>
            </div>
            
            <div className="flex-auto overflow-y-auto">
                <animated.div style={headerAnim}>
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

            <div className="w-full mt-2 flex items-end justify-center">
                <button 
                    onClick={ nextStep }
                    className="text-2xl uppercase text-blue-500 font-bold"
                >
                    <span className="flex flex-col items-center">
                        <FeatherIcon icon="chevron-down" size="48" />
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Home;