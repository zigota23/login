import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import Input from "../Input";
import { useStyles } from "./style";
import { useNavigate } from "react-router";


const MyForm = (props) => {
  const s = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({initialValues:props.initialValues,onSubmit:props.onSubmit,validationSchema:props.validationSchema})

  const items = () =>
    props.formItem.map((item, index) => {
      if(item.element == 'Input'){
          const { type, name, placeholder, sx } = item.propsItem;
          return (
            <Input
              type={type}
              name={name}
              onChange={formik.handleChange}
              value={formik.values?formik.values[name]:''}
              onBlur={formik.handleBlur}
              errors={formik.errors[name]}
              touched={formik.touched[name]}
              placeholder={placeholder}
              sx={sx}
              key={index}
            />
          );
      }
      else return null    
    });

  const btnText = {
    signin: "Sign In",
    signup: "Sign Up",
    changeProfile: "Save"
  };

  return (
   
        <form onSubmit={formik.handleSubmit}>
          {items()}
          <div className={s.blockSubmit}>
            {props.typeForm == "signin" &&
              <div className={s.staySing}>
                <input
                  type="checkbox"
                  name="checkbox"
                  onChange={formik.handleChange}
                  value={formik.values?formik.values.checkbox:''}
                  errors={formik.errors.checkbox}
                  touched={formik.touched.checkbox}
                />
                Stay signed in?
              </div>
            }
            <div className={s.blockButton}>
              <Button type="submit" disabled={formik.isSubmitting} variant="contained">
                {btnText[props.typeForm]}
              </Button>
            </div>
          </div>
          {props.typeForm == "signin" &&
            <div className={s.createProfile}>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create an account
              </Button>
            </div>
          }
        </form>
   
  );
};

export default MyForm;
