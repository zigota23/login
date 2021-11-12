import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useStyles } from "./style";
import { userUpdate } from "../../store/actions/user";
import { useDispatch } from "react-redux";
import MyForm from "../../components/form";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("Required field"),
  lastName: yup.string().required("Required field"),
  email: yup.string().email("Wrong email").required("Required field"),
});


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
];

const Update = (props) => {
  const s = useStyles();
  const navigate = useNavigate();
  const { firstName, lastName, email } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();




const initialValuesForm = { firstName, lastName, email };

  const onSubmit = (values, { setSubmitting }) => {
    const { firstName, lastName, email } = values;
    dispatch(userUpdate({ firstName, lastName, email, navigate }));
    setSubmitting(false);
  };

  return (
    <div className={s.updateForm}>
      <MyForm
        onSubmit={onSubmit}
        initialValues={initialValuesForm}
        formItem={formItem}
        typeForm="changeProfile"
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default Update;
