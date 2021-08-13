import React, { Component } from 'react';

class Footer extends Component {

    scrollTop(){
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

    render() {
        return (
            <div className="text-white text-center">
                <div className="bg-indigo-900">
                    <div className="bg-gray-800 h-40 relative rounded-bl-full rounded-br-full w-full"></div>
                </div>
                <div className="relative z-10 bg-indigo-900 pt-16 pb-6">
                    <div className='my-5'>
                        <div className="text-4xl font-bold uppercase">Contact</div>
                        <div className="bg-white h-1 w-20 mx-auto mt-3"></div>
                    </div>
                    <span className="block text-xl">Have a question or want to work together?</span>
                    <div className="grid grid-cols-12 my-3">
                        <div className="col-span-2"></div>
                        <div className="col-span-8 pb-10">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="block bg-gray-800 rounded-2xl px-4 py-6 my-3 w-full h-10 mx-auto focus:outline-none" 
                            />
                            <input 
                                type="text" 
                                placeholder="Enter E-mail" 
                                className="block bg-gray-800 rounded-2xl px-4 my-3 py-6 w-full h-10 mx-auto focus:outline-none " 
                            />
                            <textarea 
                                placeholder="Your Message" 
                                className="block bg-gray-800 rounded-2xl px-4 my-3 py-3 w-full mx-auto focus:outline-none" 
                                rows="5"
                            ></textarea>
                            <button 
                                className="uppercase py-2 float-center px-6 rounded-2xl text-xl font-bold border border-white text-white hover:bg-white hover:text-indigo-900 mt-4"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="-mt-10 z-20 relative">
                    <button onClick={this.scrollTop} className="w-14 h-14 rounded-2xl shadow-xl bg-white text-indigo-900 text-2xl">
                        <i className="fas fa-angle-double-up"></i>
                    </button>
                </div>
                <div className="bg-gray-800 w-full -mt-8">
                    <div className="flex pt-14 justify-center">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yassine-bassi-5b05ba192/" className="text-white bg-indigo-900 text-3xl bg-black-900 hover:bg-white hover:text-indigo-900 mx-3 rounded-xl">
                            <i className="fab fa-linkedin-in m-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/yassineBassi" className="text-white text-3xl bg-indigo-900 hover:bg-white hover:text-indigo-900 mx-3 rounded-xl">
                            <i className="fab fa-github m-4"></i>
                        </a>
                    </div>
                    <div className="pt-4 pb-2">
                        <span className="text-lg">BASSI YASSINE @ 2021</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;