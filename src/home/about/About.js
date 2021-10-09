import React from 'react';
import { useSpring, animated } from 'react-spring';
import TextAnimation from './../../animations/TextAnimation';

function About(props) {

    // const [hoveredSkill, setHoveredSkill] = useState(-1);

    const skills = [
        {
            title: 'Fast',
            description: 'Fast load times and lag free interaction, my highest priority.',
            icon: 'fas fa-tachometer-alt'
        },
        {
            title: 'Intuitive',
            description: 'Strong preference for easy to use, intuitive UX/UI.',
            icon: 'fas fa-lightbulb'
        },
        {
            title: 'Responsive',
            description: 'My layouts will work on any device, big or small.',
            icon: 'fas fa-mobile-alt'
        },
        {
            title: 'Dynamic',
            description: 'Websites don\'t have to be static, I love making pages come to life',
            icon: 'fas fa-rocket'
        }
    ];

    const iconAnim = useSpring({
        from: {
            opacity:0,
            width: 0,
            height: 0
        },
        to: {
            opacity:1,
            width: 80,
            height: 80
        },
        delay: 500
    })

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

    const descriptionAnim = useSpring({
        from: {
            opacity:0,
            marginTop: -100
        }, 
        to: {
            opacity:1,
            marginTop: 0
        }, 
        delay: 200,
    })

    const SkillDescriptionAnim = useSpring({
        from: {
            opacity: 0,
            marginTop: '-500px'
        },
        to: {
            opacity: 1,
            marginTop: '0px'
        },
        delay: 300
    })

    return (
        <div className="flex h-full flex-col">
            <div className="relative text-white text-center">
                <span className="text-4xl font-bold">
                    <TextAnimation
                        type="zoom"
                        fontSize={34}
                        delay={300}
                        speed={100}
                        text="ABOUT"
                    >
                    </TextAnimation>
                </span>
                <animated.div style={ lineAnim } className="w-100 flex justify-center">
                    <div className="bg-white h-1 w-16 mt-3"></div>
                </animated.div>
            </div>
            <div className="w-100 text-center mt-6">
                <img className="mx-auto w-24 h-24 rounded-full ring-1 ring-indigo-500" src={ process.env.PUBLIC_URL + '/avatar.jpg' } alt="" />
                <span className="text-green-400 text-2xl mt-4 block">
                    '' It's not about <b>RIGHT</b> and <b className="text-red-300">WRONG </b> 
                     it's about <b>BETTER</b> and <b className="text-red-300">WORSE</b> ''
                </span>
            </div>
            <div className="text-white flex justify-center pt-4 mt-2 z-10 relative">
                <div className="w-full mx-6 md:mx-0 md:w-11/12 lg:w-10/12 xl:w-6/12 text-center py-8 border-2 border-double border-green-400 rounded-lg px-4">
                    <span className="text-2xl font-bold block
                    ">
                        <TextAnimation
                            type="up-down"
                            delay={200}
                            speed={20}
                            text="Hi, I’m Yassine. Nice to meet you."
                        >
                        </TextAnimation>
                    </span>
                    <animated.div style={descriptionAnim}>
                        <p className="mt-5 md:mx-0 text-xl">
                            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </p>
                    </animated.div>
                </div>
            </div>
            
            <div className="flex-grow md:px-20 lg:px-40 xl:px-40 pb-8 relative z-20 text-white rounded-3xl text-center flex items-center">
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 w-full mt-4">
                    { skills.map((skill, ind) => (
                        <div key={ ind } className="lg:mt-4 mx-4 md:pb-4 py-2 flex flex-col items-center my-3 md:my-0 w-full">
                            <div className="flex justify-center items-center text-white text-3xl xl:mx-auto w-24 h-24">
                                <animated.div 
                                    className=" rounded-full bg-white flex items-center justify-center bg-blue-900 text-green-400 border-4 border-green-400"
                                    style={ iconAnim }
                                >
                                    <i className={skill.icon}></i>
                                </animated.div>
                            </div>
                            <div className="text-center xl:text-center mt-2">
                                <span className="block xl:my-1 font-bold text-2xl text-green-400"> 
                                    <TextAnimation
                                        type="fade"
                                        fontSize={12}
                                        text={skill.title}
                                        delay={400}
                                    >
                                    </TextAnimation>
                                </span>
                                <div className="relative overflow-hidden mt-2">
                                    <animated.div style={ SkillDescriptionAnim } className="relative">
                                        <span>{ skill.description }</span>
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}
export default About;