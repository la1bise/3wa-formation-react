import { useState, useEffect } from "react";
import TaskItem from "./components/Taskitem";
import logo from "./assets/images/logo.png";



function App() {
  // 1 er sera la valeur de votre state
  // 2e sera la fonction qui permet de mettre à jour le state
  // TOUJOURS LE DÉCLARER AU TOP DE LA FONCTION 💥
  const [ task, setTask] = useState("");
  const [ tasks, setTasks] = useState ([]);

  useEffect(() => {

    const tasksList = JSON.parse(localStorage.getItem('my-tasks'))
    if(tasksList){
      setTasks(tasksList);
    }
  }, []);
  
console.log('tasks')


  const onChangeHandler = function(event) {
    // event.target => document.querySelector('input)
    // `event.target.value` permet de récuperer la valeur d'un input
    // 👆 Il fonctionne qu'avec les balises formulaires (input, select)
    // event.target.classList.add('red') // ajoute la class `red` quand on entre une saissie
    setTask(event.target.value);
  };

  const addTaskHandler = function (event){
    // A ajouter pour TOUT formulaire utilisant une balise `form`
    // Elle permet de ne pas recharger la page au submit
    event.preventDefault();
    //Mauvaise manniére de faire :
    //tasks.push(task);

    //Bonne maniére de faire (utiliser le spread operator):
    // une liste (tableau) puis ajouter le nouvelle tâche
    const newArr = [...tasks, task];
    setTasks(newArr)

    setTask('')
    localStorage.setItem('my-tasks', JSON.stringify(newArr))
  };

console.log(tasks);

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">

      {/* <h1 className="text-slate-50 text-3xl font-bold text-center mb-5">TODO APP</h1> */}
      <img className="block mx-auto" src={logo} alt="le logo" />
    
    <form 
    onSubmit={addTaskHandler}
    className="flex justify-between-center items-center gap-4">

      <input value={task}
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
      onChange={onChangeHandler}
      type="text" 
      className="w-full md:w-2/3" />

      <input 
      type="submit" 
      value="Add Task" 
      className="text-yellow-400 text-2xl" />
    </form>
    <section className="mt-6 md:w-2/3 mx-auto">
      <ul className="flex flex-col space-y-3">
        {/* 
          La méthode `map` va parcourrir le liste (tableau) et retourner les éléments de la liste (tableau) dans l
          Elle attend une fonction en `callback` la fonction recevra
          chaque élément du tableau via les paramétres
          Donc dans notre exemple `item` représente chaque élément de la liste `tasks`
          */}
          {tasks.map((item, index) => (

            <TaskItem removeItem={()=>{ 
              const newArr = [...tasks];
              newArr.splice(index,1)
              setTasks(newArr);
            }} 
            key={index} 
            name={item}></TaskItem>
          ))}
      
      </ul>
    </section>
    </main>
  );
}

export default App;
