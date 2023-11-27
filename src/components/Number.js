import React from 'react'

export default function Number(props) {
  return (
    <div>
        
   <input 
   onChange={props.onChange}
   type='Number'
   value = {props.bill}
   />
   </div>
  )
}
