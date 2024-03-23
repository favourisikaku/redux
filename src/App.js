import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Home from './Home'


const App = () => {  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/CreateUser' element={<CreateUser />}/>
          <Route path='/EditUser/:id' element={<EditUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
