import * as yup from "yup";
export default yup.object().shape({
  name: yup
    .string()
    .required("username is required")
    .min(3, "name must be 3 characters long"),
  email: yup
    .string()
    .required("email is required")
    .email("must be a valid email"),
  password: yup
    .string()
    .required("password is required")
    .min(5,"password must be 5 characters long"),
    terms: yup.boolean()
    .oneOf([true], "Must agree to terms is required"),
  
});