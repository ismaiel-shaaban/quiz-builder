
import { Routes ,Route} from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Admin from './pages/admin';
import Home from './pages/home';
import Student from './pages/student';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='student' element={<Student/>}/>
      </Routes>
    </div>
  );
}

export default App;
