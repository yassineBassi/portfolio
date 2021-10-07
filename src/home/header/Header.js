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
            width: 450
        },
        delay: 200
    });


    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="text-white">
                <div className="p-5 flex justify-center">
                    <animated.div style={logoAnim}>
                        <img className="w-full relative z-20" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                    </animated.div>
                </div>
                <div className="w-full flex justify-center mt-2 px-24">
                    <div className="text-center">
                        <span className="text-4xl font-bold block flex justify-center nowrap">
                            <TextAnimation type="up-down" text="Full "></TextAnimation>
                            <TextAnimation type="up-down" text="Stack "></TextAnimation>
                            <TextAnimation type="up-down" text="Developer "></TextAnimation>
                        </span>
                        <animated.span style={textAnim} className="block mt-5">
                            I design and code beautifully simple things, and I love what I do
                        </animated.span>
                    </div>
                </div>
                
                <div className="w-full flex justify-center mt-2 px-4">
                    <div className="flex justify-center items-center" style={{width: 500}}>
                        <animated.img className="relative z-20" src={process.env.PUBLIC_URL + '/developer.svg'} alt="" style={imageAnim} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;