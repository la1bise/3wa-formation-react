import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Carte(props) {
  return (
    <div className='bg-white max-w-xs rounded-xl'>
          <img 
          className='rounded-xl '
          src={props.frame} 
          alt={props.name}/>
          <h2 className='m-3 text-xl font-extrabold'>{props.name}</h2>
          <p className='m-3 font-normal font-mono'>{props.description}</p>
          
          <button className='flex items-center justify-center gap-1 bg-blue-700 m-4 p-2 rounded-xl w-48'>read more <FaArrowRight className='' /></button>
          

    </div>
  )
}
