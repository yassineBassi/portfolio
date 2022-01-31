import React from 'react';
import CharAnimation from './CharAnimation';


function TextAnimation(props) {
    return (
        <div className="nowrap">
                { props.text.split(' ').map((word, ind) => (
                    <span key={ind} className="ml-1 whitespace-nowrap">
                        { word.split('').map((char, ind) => (
                            <CharAnimation {...props} key={ind} char={char} ind={ind}></CharAnimation>
                        ))}  
                    </span>
                )) }
        </div>
    )
}

export default TextAnimation;