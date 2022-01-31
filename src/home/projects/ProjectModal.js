import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

function ProjectModel(props) {

  const [pointedImage, setPointedImage] = useState(0)
  const [selectedImage , setSelectedImage ] = useState(0)

  const toLeft = () => {
      if(pointedImage > 0) setPointedImage(ind => ind - 1)
  }

  const toRight = () => {
      if(pointedImage < props.project.images.length - 5) setPointedImage(ind => ind + 1)
  }

  const modalAnim = useSpring({
    from: {
        opacity:0,
        top: -800
    }, 
    to: {
        opacity:1,
        top: 0
    }, 
    delay: 300
})

  return <div className="h-full w-full absolute top-0 left-0 z-py-40 px-80">
    <div className="h-full w-full absolute top-0 left-0 bg-opacity-60 bg-black"></div>
    <animated.div style={modalAnim} className="bg-white w-full h-full shadow-xl py-8 px-2 rounded-xl grid grid-cols-6 z-30">
        <div className="col-span-4 px-4 flex flex-col">
            <span className="text-3xl font-bold">{props.project.name}</span>
            <div className="flex-grow py-4 overflow-hidden">
                <img className="w-full h-full" src={props.project.images[selectedImage]} alt="" />
            </div>
            <div className="flex w-full" >
                <div className="px-2 flex items-center justify-center">
                    <span className="cursor-pointer" onClick={ toLeft }>
                        <i className="fas fa-chevron-left"></i>
                    </span>
                </div>
                <div className="flex-grow overflow-hidden ">
                    <div className="flex flex-grow relative image-slider" style={{left: `${(pointedImage * -80)}px`}}>
                        {props.project.images.map((img, ind) => (
                            <img 
                              key={ind}
                              className={"h-24 w-24 mr-1 cursor-pointer " + (selectedImage === ind ? 'border-black border-2 filter brightness-75' : '')} 
                              onClick={() => setSelectedImage(ind)}
                              src={img} 
                              alt=""
                            />
                        ))}
                    </div>
                </div>
                <div className="px-2 flex items-center justify-center">
                    <span className="cursor-pointer" onClick={ toRight }>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </div>
            </div>
        </div>
        <div className="col-span-2 overflow-auto px-2">
            <spa className="text-2xl font-bold block ">About the project</spa>
            <span className="block mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam tempora, similique modi ut autem molestias quisquam expedita? Repellat ut hic distinctio natus, qui sapiente, expedita sint, nemo animi amet voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis a alias numquam quae autem assumenda praesentium cumque? Magnam architecto facilis nesciunt dolor unde labore nostrum autem cum eos quod.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptas, perferendis quia nihil, facere magnam, officia quos maxime veniam dolore excepturi. Nisi corporis explicabo facere provident? Deleniti voluptas dolorem commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi voluptatem magnam explicabo ratione? Laboriosam adipisci tempore aspernatur vero mollitia ducimus odio! Consequatur molestias, esse ad quam ipsum animi nam!</span>
            <div className="mt-6">
                <span className="block">TECHNOLOGIES</span>
                <div className="mt-3 flex flex-wrap">
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                    <span className="px-3 py-1 border border-black m-1">Reactjs</span>
                </div>
            </div>
        </div>
    </animated.div>
  </div>
}

export default ProjectModel;