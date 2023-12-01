import { Route, Routes } from 'react-router-dom';
import Page from "./page/Page";
import HomePage from './page/HomePage';
import QuizPage from './page/QuizPage';


function App() {

  return (
    
     <Routes>
    <Route path='/'>
    <Route index element={<HomePage/>}/>
    <Route path=':indexTopic' element={<QuizPage/>} />
    </Route>
      
      </Routes>
     
  );
}

export default App;
