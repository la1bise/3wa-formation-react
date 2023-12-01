import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemTopics(props) {
  return (
    
    <div> 
            <li className='bg-sky-900 rounded-lg w-full flex items-center space-x-3 text-white font-bold px-6 py-5 shadow-md shadow-orange-50/70'>
                <img className='bg-white-300' src={props.logo} alt={`logo de ${props.title}`} />
                <span>{props.title}</span>
            </li>
    </div>
  )
}
