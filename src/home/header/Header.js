import React from 'react';
import { animated, useSpring } from 'react-spring'
import TextAnimation from './../../animations/TextAnimation';

function Header(props) {

    const logoAnim = useSpring({
        from: {
            opacity: 0,width: 0
        },
        to: {
            opacity: 1, width: 100
        }
    })
    const textAnim = useSpring({
        from: {
            opacity: 0, 
            marginLeft: -500
        },
        to: {
            opacity: 1, 
            marginLeft: 0
        },
    });
    
    const imageAnim = useSpring({
        from: {
            width: 0
        },
        to: {
            width: 500
        },
        delay: 1000
    });


    return (
        <div className="text-white -full">
            <div className="p-5 flex justify-center pt-20">
                    <animated.div style={logoAnim}>
                            <img className="w-full relative z-20" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                    </animated.div>
            </div>
            <div className="w-full flex justify-center mt-2 px-4">
                <div className="text-center">
                    <span className="text-4xl font-bold block">
                        <TextAnimation type="up-down" text="Full Stack Developer"></TextAnimation>
                    </span>
                    <animated.span style={textAnim} className="block mt-5">
                        I design and code beautifully simple things, and I love what I do
                    </animated.span>
                </div>
            </div>
            
            <div className="w-full flex justify-center mt-2 px-4">
                <div className="w-100 flex justify-center items-center" style={{width: 500}}>
                    <animated.img className="relative z-20" src={process.env.PUBLIC_URL + '/developer.svg'} alt="" style={imageAnim} />
                </div>
            </div>

        </div>
        
    );
}

export default Header;