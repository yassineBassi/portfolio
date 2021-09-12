import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TextAnimation from './../../animations/TextAnimation';

function About(props) {

    const [hoveredSkill, setHoveredSkill] = useState(-1);

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

    const SkillDescriptionAnim = (ind) => useSpring({
        opacity: hoveredSkill === ind ? 1 : 0,
        marginTop: hoveredSkill === ind ? '0px' : '-200px'
    })

    // const skillsAnim = useSpring({
    //     marginTop: showSkills ? -40 : -100
    // })


    useEffect(() => {
        setTimeout(() => {
            setHoveredSkill(0);
        }, 1000)
        setInterval(() => {
            setHoveredSkill(skill => (skill + 1) % skills.length);
        }, 3000)
    }, [])
    
    // const imageAnim = useSpring({
    //     from: {
    //         width: 0
    //     },
    //     to: {
    //         width: 500
    //     },
    //     delay: 1000
    // });

    return (
        <div>
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
                <span className="text-gray-400 text-3xl mt-6 block">''this is my quote in development ok''</span>
            </div>
            <div className="text-white flex justify-center pt-4 mt-4 z-10 relative">
                <div className="w-full md:w-9/12 lg:w-7/12 xl:w-5/12 text-center py-4 border-2 border-dashed border-indigo-500 ">
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
                        <p className="mt-5 mx-20 text-xl">
                            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </p>
                    </animated.div>
                </div>
            </div>
            
            <div className="mx-80 pb-8 relative z-20 text-white rounded-3xl text-center mt-4">
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 w-full mt-4">
                    { skills.map((skill, ind) => (
                        <div key={ ind } className={"mt-4 mx-6 pb-6 " + (hoveredSkill === ind ? "border-b-2 border-white" : "" )}>
                            <div className="flex justify-center items-center text-white text-3xl mx-auto" style={{height: 80, width: 80}}>
                                <animated.div 
                                    className={" rounded-full bg-white flex items-center justify-center " + (hoveredSkill === ind ? 'bg-indigo-900 text-white border-4 border-white' : 'bg-white text-indigo-900')} 
                                    style={ iconAnim }
                                >
                                    <i className={skill.icon}></i>
                                </animated.div>
                            </div>
                            <span className="block my-1 font-bold text-4xl"> 
                                <TextAnimation
                                    type="zoom"
                                    text={skill.title}
                                    delay={400}
                                >
                                </TextAnimation>
                            </span>
                            <div className="relative overflow-hidden">
                                <animated.div className="relative" style={ SkillDescriptionAnim(ind) }>
                                    <span>{ skill.description }</span>
                                </animated.div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
            
            
        </div>
    );
}
// fas fa-laptop
export default About;