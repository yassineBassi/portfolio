import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

function Stars() {

    const [pageWidth, setPageWidth] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const [starsList, setStars] = useState([]);
    const [meteor, setMeteor] = useState([]);
    
    useEffect(() => {
        if(pageWidth && pageHeight){
            setStars([]);
            initStars();
            // setInterval(() => {
            //     createMeteor();
            // }, Math.floor(Math.random() * 5000 + 5000))
            setInterval(() => {
                updateStars();
            }, 50);
        }
    }, [pageWidth, pageHeight])


    useEffect(() => {
        setTimeout(() => {
            setDimensions();
        }, 2000);
        window.addEventListener('resize', setDimensions); 
    }, []);

    const createMeteor = () => {
        const x = random(pageHeight - 50)
        const y = random(pageWidth - 50)
        for(let i = 0; i < 50; i++){
            setMeteor(meteor => {
                return [...meteor, {
                    top: x + i,
                    left: y + i
                }];
            });
        }
        const direction = Math.random() > 0.5 ? 1 : -1; 
        console.log(direction)
        setInterval(() => {
            setMeteor(oldMeteor => oldMeteor.map(meteor => ({
                top: meteor.top > document.body.scrollHeight ? meteor.top :  (meteor.top + (10 * direction)),
                left: meteor.left > document.body.scrollWidth ? meteor.left : (meteor.left + (10 * direction))
            })))
        }, 10)
    };
    
    const setDimensions = () => {
        setPageWidth(document.body.clientWidth - 50);
        setPageHeight(document.body.scrollHeight - 50)
    }
    
    const initStars = () => {
        for(let i = 0; i < 25; i++){
            const star = {
                top: random(pageHeight),
                left: random(pageWidth)
            }
            setStars(oldstars => {
                return [...oldstars, star];
            });
        }
    }
    
    const updateStars = () => {
        setStars(oldStars => oldStars.map(star => ({
                top: star.top > document.body.scrollHeight - 50 ? 0 : (star.top + 1),
                left: star.top > document.body.scrollHeight - 50 ? random(pageWidth) : star.left
        })))
    }
    
    const random = (max) =>{
        return Math.random() * max;
    }

    const starAnim = useSpring({
        from: {
            width: 0,
            height: 0
        },
        to: {
            width: 2.5,
            height: 2.5
        },
        delay: 1000
    })

    return (
        <section>
            {[...starsList, ...meteor].map((star, ind) => (
                <div key={ind} className="absolute"  style={{top: star.top, left: star.left}}>
                    <animated.div className="z-10 bg-white w-1 h-1 rounded-full" style={starAnim} ></animated.div>
                </div>
            ))}
        </section>
    );
}

export default Stars;