import React, { Component } from 'react';
import './Home.css'
import About from './about/About';
import Projects from './projects/Projects';
import Footer from './footer/Footer';
import Header from './header/Header';

class Home extends Component {

    constructor(){
        super()
        this.state = { width: 0, height: 0, stars: [] };
    }

    componentDidMount() {
        console.log('hi')
        setTimeout(() => {
            this.setDimensions(); 
            this.initStars();
        }, 1000);
        setInterval(() => {
            this.setStars();
        }, 50);
        window.addEventListener('resize', this.setDimensions); 
    }
    
    //remove listener on page exit
    componentWillUnmount() {
        window.removeEventListener('resize', this.setDimensions); 
    }

    setDimensions = () => {
        console.log('set dimensions')
        this.setState({ 
            width: document.body.clientWidth, 
            height: document.body.clientHeight
        });
    }

    initStars(){
        const stars = []
        for(let i = 0; i < 100; i++){
            const star = {
                top: this.random(this.state.height),
                left: this.random(this.state.width)
            }
            console.log(star);
            stars.push(star)
            
        }
        
        this.setState({stars: stars});
        console.log(this.state.stars);
    }

    setStars(){
        this.setState({stars: this.state.stars.map(
            star => ({
                top: star.top > document.body.offsetHeight ? 0 : (star.top + 5),
                left: star.top > document.body.offsetHeight ? this.random(this.state.width) : star.left
            }))
        });
    }

    random(max){
        console.log(max)
        return Math.random() * max;
    }

    render() {
        return (
            <div className="bg-gray-800">
                {this.state.stars.map((star, ind) => (
                    <div key={ind} className="w-1 star h-1 z-10 bg-white rounded-full absolute" style={{top: star.top, left: star.left}}></div>
                ))}
                <Header></Header>
                <About></About>
                <div className="w-100 text-center">
                    <img className="mx-auto w-40 h-40 rounded-full ring-1 ring-indigo-500" src={ process.env.PUBLIC_URL + '/avatar.jpg' } alt="" />
                    <span className="text-gray-400 text-4xl mt-10 block">''this is my quote in development ok''</span>
                </div>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        );
    }
}


export default Home;