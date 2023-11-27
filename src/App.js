import { useState } from "react";
import Number from "./components/Number";
import Pourcentage from "./components/Pourcentage";

function App() {
  const [bill, setbill] = useState(0);
  const [pers, setpers] = useState(0);

  
  const onChangeHandler = function (event) {
    setbill(event.target.value);
  };
  console.log(bill);
  
  //   const onClickHandler = function (pourcent){
  //   const pourcents = [5,10,15,20,50];

  //   return pourcents.map((pourcent) => <button key={pourcent}>{pourcent}</button>);
  // }


  return (


    <div className="min-h-screen bg-indigo-400 font-mono justify-center items-center">
      <h1 className="col-span-2 text-center ">TIPTOP CALC</h1>

      <div className="grid grid-cols-2 bg-slate-100 rounded m3-3 ">
        <section className="">
          <div>
            <h3>bill</h3>
            <Number
              onChange={onChangeHandler}
              value={bill}
              name="bill"
            ></Number>
          </div>

          <div className="flex flex-wrap">

             <Pourcentage
             on onClickHandler={onClickHandler}
             
             ></Pourcentage>
            
          </div>

          <div>
            <h3>Number of People</h3>
            <Number
              onChange={onChangeHandler}
              value={pers}
              name="pers"
            ></Number>
          </div>
        </section>

        <section className="bg-indigo-300 rounded m-3">
          <div>
            <p>fkffjkd</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
