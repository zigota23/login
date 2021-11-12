import './App.css';
import Main from './pages/main';
import { Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup'
import Profile from './pages/profile';
import Update from './pages/update';
import Product from './pages/product';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Header from './section/header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { setDataUser } from './store/actions/user';



function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  return (
    <>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile/update' element={<Update/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes> 
    </>
   
  );
}

export default App;
