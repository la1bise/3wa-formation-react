import React from 'react'
import Greeting from '../components/Greeting'
import ItemTopics from '../components/ItemTopics'
import data from '../assets/data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="bg-sky-950 min-h-screen">
    <div className='max-w-7xl mx-auto grid md:grid-cols-3 justify-center items-center min-h-screen md:space-x-36 px-8'>
      
     <Greeting></Greeting>

    <section className="md:col-span-2"> 
    
      <ul className="w-full flex flex-col space-y-5">
        {data.quizzes.map((item, index)=>( 
          <Link key={index} to={`/${index}`}>
          <ItemTopics 

          index={index}
          key={index} 
          title={item.title} 
          logo={item.icon}></ItemTopics>
          </Link>
          ))}
      </ul>
      
    </section>
     </div>
    </main>
  )
}
