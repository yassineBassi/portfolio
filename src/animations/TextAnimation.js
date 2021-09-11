import React from 'react';
import CharAnimation from './CharAnimattion';


function TextAnimation(props) {
    return (
        <div className="">
                { props.text.split('').map((char, ind) => (
                    <CharAnimation {...props} key={ind} char={char} ind={ind}></CharAnimation>
                )) }
        </div>
    )
}

export default TextAnimation;