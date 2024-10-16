
import './App.css';

import Main from './Component/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Linearsearch from './Component/Linearsearch';
import Bubblesort from './Component/Bubblesort';
import Backtracking from './Component/Backtracking';

function App() {
  return (
  <>
  
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<Main/>}/>
  <Route path='/linearsearch' element={<Linearsearch/>}/>
  <Route path='/bubblesort' element={<Bubblesort/>}/>
  <Route path='/backtracking' element={<Backtracking/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
