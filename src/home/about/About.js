import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="bg-indigo-900 -mt-14 text-white flex justify-center pt-12 pb-40 z-10 relative">
                    <div className="w-full md:w-9/12 lg:w-7/12 xl:w-5/12 text-center">
                        <span className="text-2xl font-bold mt-5 block">Hi, I’m Yassine. Nice to meet you.</span>
                        <p className="mt-5 mx-10 text-xl">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                    </div>
                </div>
                <div className="shadow-lg mb-20 mx-10 md:mx-20 lg:mx-40 xl:mx-80 p-10 -mt-32 pb-20 bg-indigo-900 relative z-20 text-white rounded-3xl text-center">
                    <div className="">
                        <span className="text-4xl font-bold">ABOUT</span>
                        <div className="bg-white h-1 w-16 mx-auto mt-3"></div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 w-full mt-2">
                        <div className="mt-16 mx-6">
                            <span className="inline-block text-3xl w-20 h-20 rounded-full mx-auto text-indigo-900 bg-white">
                                <i className="fas fa-tachometer-alt m-6"></i>
                            </span>
                            <span className="block my-1 text-2xl">Fast</span>
                            <span className="block">Fast load times and lag free interaction, my highest priority.</span>
                        </div>
                        <div className="mt-16 mx-6">
                            <span className="inline-block text-3xl w-20 h-20 rounded-full mx-auto text-indigo-900 bg-white">
                                <i className="fas fa-lightbulb m-6"></i>
                            </span>
                            <span className="block my-1 text-2xl">Intuitive</span>
                            <span className="block">Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="mt-16 mx-6">
                            <span className="inline-block text-3xl w-20 h-20 rounded-full mx-auto text-indigo-900 bg-white">
                                <span className="my-6 mx-3 flex">
                                    <i className="fas fa-laptop"></i>
                                    <i className="fas fa-mobile-alt mt-1 text-xl-mx-1"></i>
                                </span>
                            </span>
                            <span className="block my-1 text-2xl">Responsive</span>
                            <span className="block">My layouts will work on any device, big or small.</span>
                        </div>
                        <div className="mt-16 mx-6">
                            <span className="inline-block text-3xl w-20 h-20 rounded-full mx-auto text-indigo-900 bg-white">
                                <i className="fas fa-rocket m-6"></i>
                            </span>
                            <span className="block my-1 text-2xl">Dynamic</span>
                            <span className="block">Websites don't have to be static, I love making pages come to life.</span>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default About;