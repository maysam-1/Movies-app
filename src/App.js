import logo from './logo.svg';
import './App.css';
import GetMovies from './components/getMovies';
import Navbar from './components/navBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddMovie from './components/addMovie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='list' element={<Navbar/>}/>
        <Route path='add' element={<AddMovie/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
