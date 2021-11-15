import React, { useEffect } from "react";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setDataUser, userLogin } from "../../store/actions/user";
import { useNavigate } from "react-router-dom";
import MyForm from "../../components/form";
import * as yup from "yup";
import img from '../../assets/img/loginBackground.jpg'

const validationSchema = yup.object({
  email: yup.string().email("Wrong email").required("Required field"),
  password: yup.string().min(8, "Not long").required("Required field"),
});

const initialValuesForm = {};

const Login = (props) => {
  const s = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onSubmit = (values, { setSubmitting }) => {
    const { email, password, checkbox = false } = values;
    dispatch(userLogin({ email, password, navigate }));
    setSubmitting(false);
  };

  const formItem = [
    {
      element: "Input",
      propsItem: {
        type: "email",
        name: "email",
        placeholder: "Email",
      },
    },
    {
      element: "Input",
      propsItem: {
        type: "password",
        name: "password",
        placeholder: "Password",
        sx: { marginTop: "20px" },
      },
    },
    {
      element: "Button",
      propsItem: {
        type: "submit",
        sx: { marginTop: "10px" },
      },
    },
  ];

  return (
    <div>
      <div className={s.backgroungLogin}><img src={img}></img></div>
      <div className={s.loginForm}>
        <MyForm
          onSubmit={onSubmit}
          initialValues={initialValuesForm}
          formItem={formItem}
          typeForm="signin"
          validationSchema={validationSchema}
          title='Sign In'
        />
      </div>
    </div>
  );
};

export default Login;
