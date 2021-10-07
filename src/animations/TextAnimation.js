import React from 'react';
import CharAnimation from './CharAnimation';


function TextAnimation(props) {
    return (
        <div className="nowrap">
                { props.text.split('').map((char, ind) => (
                    <CharAnimation {...props} key={ind} char={char} ind={ind}></CharAnimation>
                )) }
        </div>
    )
}

export default TextAnimation;