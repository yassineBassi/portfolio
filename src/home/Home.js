import React, { useEffect, useState } from 'react';
import './Home.css'
import About from './about/About';
import { animated, useSpring } from 'react-spring';
import Header from './header/Header';
import FeatherIcon from 'feather-icons-react';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import Loader from './loader/loader';
import ParticleBackground from './../particles/ParticleBackground';

function Home() {

    const [step, setStep] = useState(-2);
    const stepsLength = 3;

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
            color: step >= stepsLength - 1 ? 'grey' : 'transparent'
        },
        to: {
            color: step > stepsLength - 1 ? 'grey' : '#a488ff'
        },
        loop: true
    });

    const nextStep = () => {
        if(step < stepsLength) setStep(step => step + 1);
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
        <div className="bg-gray-900 w-full h-full">
            <div className="w-full h-full flex flex-col">
                {step >= 0 && (
                    <animated.div style={arrowUpAnim} className="w-full text-center pt-4 z-20">
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
                    <animated.div className="h-full" style={projectsAnim}>
                        {step >= 2 && (
                            <Projects></Projects>
                        )}
                    </animated.div>
                    <animated.div className="h-full" style={footerAnim}>
                        {step >= 3 && (
                            <Footer></Footer>
                        )}
                    </animated.div>
                </div>

                {step >= 0 && (
                    <animated.div style={arrowDownAnim} className="w-full mt-2 flex items-end justify-center pb-2 z-20">
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
            <div className="absolute w-full top-0 left-0 h-full">
                <ParticleBackground className="h-full"></ParticleBackground>
            </div>
        </div>
    );
}

export default Home;