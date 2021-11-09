import './App.css';
import Main from './pages/main';
import { Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup'
import Profile from './pages/profile';
import Update from './pages/update';


function App() {
  return (
    <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/update' element={<Update/>}/>
    </Routes>  
   
  );
}

export default App;
