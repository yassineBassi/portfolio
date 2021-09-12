import React from 'react';

// import { Container } from './styles';
import TextAnimation from './../../animations/TextAnimation';
import { Animated } from 'react-animated-css';

function Loader() {
  return <div className="h-full overflow-hidden">
        <div className="h-full flex flex-col items-center justify-center text-3xl text-white">
            <div>
                <img className="text-white w-64 h-64" src={process.env.PUBLIC_URL + "/loading.gif"} alt="" />
            </div>
            <div className="flex mt-3">
                <span className="mr-3">Loading </span>
                <TextAnimation
                    delay={200}
                    speed={20} 
                    type="up-down" 
                    loop={true}
                    text="..." 
                ></TextAnimation>
            </div>
        </div>
    </div>;
}

export default Loader;