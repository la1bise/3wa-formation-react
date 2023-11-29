import data from "./assets/data";
import Carte from "./components/Carte";
import { useReducer } from "react"; //#1




const initialValue = {//#3
    textEntered: "",
    deckFilter: null,
  };


const reducer = function (state, action) { //#2
  switch (action.type) {
    case "onChangeInput": // if(action.type === 'onChangeInput')
      const searchFilter = data.filter((item) => //#7
        item.name.toLowerCase().includes(action.payload.toLowerCase)
      );
      return { //#8
        ...state,
        textEntered: action.payload,
        deckFilter: searchFilter,
      };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue); //#4

  

  const onChangeHandler = (event) =>
    dispatch({ type: "onChangeInput", payload: event.target.value }); //#5
  
    // short circuiting => permet d'évaluer les valeurs données et va choissir la premiere valeur VERIDIQUE
  const decks = state.deckFilter || data; //#9


  return (
    <div className="min-h-screen bg-slate-700 font-mono ">
      <input
        onChange={onChangeHandler} //#6
        className="rounded-lg m-2 py-1 text-center"
        type="search"
        placeholder="search"
      />

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-star ">
        {decks.map((item, index) => (
          <li 
          key={index}>
            <Carte
              frame={item.image}
              name={item.name}
              description={item.description}
            ></Carte>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
