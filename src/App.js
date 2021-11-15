import "./App.css";
import Main from "./pages/main";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Update from "./pages/update";
import Product from "./pages/product";
import Header from "./section/header";
import { Navigate, useLocation } from "react-router";
import Loading from "./pages/loading";
import { useDispatch, useSelector } from "react-redux";
import ErrorApi from "./pages/error";
import { getUser } from "./store/actions/user";
import { useEffect } from "react";
import Cookies from 'js-cookie'

function App() {
  const token = Cookies.get('accessToken')
  const location = useLocation()
  const isLoading = useSelector((state) => state.statusReducer.isLoading)
  const isError = useSelector((state) => state.statusReducer.isError)
  const dispatch =  useDispatch()
  const {first_name,last_name} = useSelector(state=>state.authReducer)

  useEffect(()=>{
    if(first_name=== '' && last_name === '' && token)dispatch(getUser())
  },[])

  if (isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header />
        <ErrorApi error={isError} />
      </>
    );
  }

  if (
    !token &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    !isLoading &&
    !isError
  ) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<Update />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
