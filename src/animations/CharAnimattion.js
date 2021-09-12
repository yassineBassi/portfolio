import React from 'react';

// import { Container } from './styles';
import { animated, useSpring } from 'react-spring';

function CharAnimation(props) {

    const speed = props.speed ? props.speed : 80
    const delay = props.delay ? props.delay : 80
    const fontSize = props.fontSize ? props.fontSize : 18

    const textAnimations = {
        'up-down': {
            from: {
                opacity: 0,
                transform: 'translateY(' + ((props.ind % 2 === 0 ? 1 : -1) * 80) + 'px)'
            },
            to: {
                opacity: 1,
                transform: 'translateY(0px)'
            },
            loop: props.loop,
            delay: delay + (props.ind * speed)
        },
        'fade': {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
            loop: props.loop,
            delay: delay + (props.ind * speed)
        },
        'zoom': {
            from: {
                fontSize: 0,
            },
            to: {
                fontSize: fontSize,
            },
            loop: props.loop,
            delay: delay + (props.ind * speed)
        }
    }

    const styles = useSpring(textAnimations[props.type])

    return (
        <animated.pre 
            className="inline-block" 
            style={styles}
        >
            { props.char }
        </animated.pre>
    );
}

export default CharAnimation;