import React from 'react'

export default function Carte(props) {
  return (
    <div className='bg-white max-w-xs rounded-xl'>
          <img 
          className='rounded-xl '
          src={props.frame} 
          alt={props.name}/>
          <h2 className='m-3 text-xl font-extrabold'>{props.name}</h2>
          <p className='m-l-3 font-normal font-mono'>{props.description}</p>
          <button className='bg-blue-700 m-2 p-2 rounded-xl'>read more</button>

    </div>
  )
}
