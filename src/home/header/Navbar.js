import React from 'react';
import { animated, useSpring } from 'react-spring';
import './Navbar.css'

function Navbar(props) {

    const styles = useSpring({
        from: { marginTop: -100},
        to: { marginTop: 0},
        delay: 2000
    })

  return (
    <div className="fixed w-full z-40">
        <animated.div style={styles}>
            <div className="w-full flex justify-center">
                <ul className="flex items-center shadow-xl bg-gray-900 py-2 px-8 rounded-bl-full rounded-br-full border border-t-0 border-gray-600">
                    <li className="mx-2">
                        <img className="w-8 relative z-20" src={process.env.PUBLIC_URL + './logo.png'} alt="" />
                    </li>
                    {
                        props.items.map((item, ind) => (
                            <li key={ind} className="my-2 mx-3 text-gray-400 text-md uppercase cursor-pointer hover:text-white">
                                <span>{ item.text }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </animated.div>
    </div>
  );
}

export default Navbar;