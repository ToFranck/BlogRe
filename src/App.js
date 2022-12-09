import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar/index.jsx';
import Home from './Pages/Home/index.jsx';
import About from './Pages/About/index.jsx';
import Blog from './Pages/Blog/index.jsx';
import Event from './Pages/Event/index.jsx';

function App() {
  return (
    
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/Event' element={<Event/>}></Route>
    </Routes>
    </>

  );
}

export default App;
