import React from "react";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../store/actions/user";
import { useNavigate } from "react-router";
import MyForm from "../../components/form";
import * as yup from 'yup'

const validationSchema = yup.object({
  firstName: yup.string().required('Required field'),
  lastName: yup.string().required('Required field'),
  email: yup.string().email('Wrong email').required('Required field'),
  password: yup.string().min(8,'Not long').required('Required field'),
}) 

const initialValuesForm = {}

const formItem = [
  {
    element: "Input",
    propsItem: {
      type: "firstName",
      name: "firstName",
      placeholder: "First name",
    },
  },
  {
    element: "Input",
    propsItem: {
      type: "lastName",
      name: "lastName",
      placeholder: "Last name",
      sx: { marginTop: "20px" },
    },
  },
  {
    element: "Input",
    propsItem: {
      type: "email",
      name: "email",
      placeholder: "Email",
      sx: { marginTop: "20px" },
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
];

const SignUp = (props) => {
  const s = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values, { setSubmitting }) => {
    const { firstName, lastName, email, password } = values;
    dispatch(userSignUp({ firstName, lastName, email, password, navigate }));
    setSubmitting(false);
  }

  return (
    <div>
      <div className={s.signUpForm}>
        <MyForm
          onSubmit={onSubmit}
          initialValues={initialValuesForm}
          formItem={formItem}
          typeForm="signup"
          validationSchema={validationSchema}
        />
      </div>
    </div>
  );
};

export default SignUp;
