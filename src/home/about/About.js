import React from 'react';
import { useSpring, animated } from 'react-spring';
import TextAnimation from './../../animations/TextAnimation';

function About(props) {

    // const [showSkills, setShowSkills] = useState(false);

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

    const skillDescription = useSpring({
        from: {
            opacity:0,
            marginTop: 100
        }, 
        to: {
            opacity:1,
            marginTop: 0
        }, 
        delay: 200
    })

    // const skillsAnim = useSpring({
    //     marginTop: showSkills ? -40 : -100
    // })


    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowSkills(true)
    //     }, 500)
    // }, [])
    
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
        <div className="pt-0">
            <div className="w-100 text-center px-6">
                <img className="mx-auto w-40 h-40 rounded-full ring-1 ring-indigo-500" src={ process.env.PUBLIC_URL + '/avatar.jpg' } alt="" />
                <span className="text-gray-400 text-3xl mt-8 block">''this is my quote in development ok''</span>
            </div>
            <div className="bg-indigo-900 text-white flex justify-center pt-4 mt-8 pb-12 z-10 relative">
                <div className="w-full md:w-9/12 lg:w-7/12 xl:w-5/12 text-center">
                    <span className="text-2xl font-bold mt-5 block
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
            
            <div className="shadow-xl mx-10 md:mx-20 lg:mx-40 xl:mx-80 pb-8 relative z-20 text-white rounded-3xl text-center mt-4">
                <div className="relative">
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
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 w-full mt-4">
                    { skills.map(skill => (
                        <div className="mt-4 mx-6">
                            <div className="flex justify-center items-center text-white text-3xl mx-auto" style={{height: 80, width: 80}}>
                                <animated.div 
                                    className=" rounded-full bg-indigo-900" 
                                    style={ iconAnim }
                                >
                                    <i className={skill.icon + " m-6"}></i>
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
                            <animated.span style={ skillDescription }>
                                <span>{ skill.description }</span>
                            </animated.span>
                        </div>
                    )) }
                </div>
            </div>
            
            
        </div>
    );
}
// fas fa-laptop
export default About;