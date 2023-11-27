import React from 'react'

export default function Notes(props) {
  return (
      <li className=''>
        <button onClick={props.onClick}>
          {props.name}
          
        </button>
        
      </li>
    
  )
}
