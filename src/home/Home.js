import React, { Component } from 'react';
import './Home.css'
import About from './about/About';
import Projects from './projects/Projects';
import Footer from './footer/Footer';
import Header from './header/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <About></About>
                <div>
                    <img className="mx-auto w-40 h-40 rounded-full ring-1 ring-indigo-500" src={ process.env.PUBLIC_URL + '/avatar.jpg' } alt="" />
                </div>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;