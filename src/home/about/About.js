import React, { useEffect } from 'react';
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

    // const skillsAnim = useSpring({
    //     marginTop: showSkills ? -40 : -100
    // })


    useEffect(() => {
        // setTimeout(() => {
        //     setHoveredSkill(0);
        // }, 1000)
        // setInterval(() => {
        //     setHoveredSkill(skill => (skill + 1) % skills.length);
        // }, 3000)
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
                <span className="text-gray-400 text-3xl mt-4 block">''this is my quote in development ok''</span>
            </div>
            <div className="text-white flex justify-center pt-4 mt-2 z-10 relative">
                <div className="w-full mx-6 px-4 md:mx-0 md:w-10/12 lg:w-7/12 xl:w-5/12 text-center py-4 border-2 border-double border-indigo-500 ">
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
                        <p className="mt-5 md:mx-12 text-xl">
                            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </p>
                    </animated.div>
                </div>
            </div>
            
            <div className="w-full md:px-20 lg:px-40 xl:px-40 pb-8 relative z-20 text-white rounded-3xl text-center mt-6">
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 w-full mt-4">
                    { skills.map((skill, ind) => (
                        <div key={ ind } className="lg:mt-4 mx-6 md:pb-4 py-2 flex xl:block items-center my-3 md:my-0">
                            <div className="flex justify-center items-center text-white text-3xl xl:mx-auto" style={{height: 80, width: 80}}>
                                <animated.div 
                                    className=" rounded-full bg-white flex items-center justify-center bg-indigo-900 text-white border-4 border-white"
                                    style={ iconAnim }
                                >
                                    <i className={skill.icon}></i>
                                </animated.div>
                            </div>
                            <div className="text-left xl:text-center ml-3 xl:ml-0">
                                <span className="block xl:my-1 font-bold text-2xl"> 
                                    <TextAnimation
                                        type="fade"
                                        fontSize={12}
                                        text={skill.title}
                                        delay={400}
                                    >
                                    </TextAnimation>
                                </span>
                                <div className="relative overflow-hidden">
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