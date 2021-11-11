import './App.css';
import Main from './pages/main';
import { Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup'
import Profile from './pages/profile';
import Update from './pages/update';
import Product from './pages/product';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './section/header';


function App() {
  return (
    <BrowserRouter> 
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile/update' element={<Update/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes> 
      </Provider>
    </BrowserRouter> 
   
  );
}

export default App;
