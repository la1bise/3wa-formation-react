import { useState } from "react";
import Notes from "./components.js/Notes";


function App() {
  const [step, setStep] = useState(0)
  const [ chiffre, setChiffre ] = useState (0)

  const ratings = [1,2,3,4,5]
  

  const handleClick = (chiffre) =>(setChiffre(chiffre))
  
console.log(chiffre);
  // {step === 1 ? sectnion-Thanks  : section-start}
  return (
    <div>
      <section>
        
        <h1>How did we do ?</h1>

        <p>Please let us know how we did with your support request? All feedback is appreciated to help us improve our offering!</p>

        <ul className="flex justify-evenly">
        {ratings.map((item, index)=>(
            <Notes
            key={index}
            name={item}
            onClick={()=>handleClick(item)}
            ></Notes>
        ))}

        </ul>

        <button>Submit</button>

      </section>
    </div>


  );
}

export default App;
