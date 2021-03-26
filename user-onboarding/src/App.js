import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import schema from "./validation/formShema";
import User from "./component/User";
import * as yup from "yup";
import axios from "axios";

const initialVal = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const intialErr = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const initialUsers = [];
const initialDis = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formVal, setFormVal] = useState(initialVal);
  const [formErr, setFormErr] = useState(intialErr);
  const [disabled, setDisabled] = useState(initialDis);

  

  const postNewUser = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormVal(initialVal);
    })
    .catch((err) => {
      console.log(err)
    })

  }
  JSON.stringify(postNewUser)
  const inputChan = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErr({
          ...formErr,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErr({
          ...formErr,
          [name]: err.errors[0],
        });
      });
    setFormVal({
      ...formVal,
      [name]: value, 
    });
  };
  const formSub = () => {
    const newUser = {
      name: formVal.name.trim(),
      email: formVal.email.trim(),
      password: formVal.password,
      terms:formVal.terms,
    }
    postNewUser(newUser);
  }
  
  useEffect(() => {
    schema
    .isValid(formVal)
    .then((valid) => {
      setDisabled(!valid);
    });
  },[formVal]);

  return (
    <div className="App">
      <Form
        values={formVal}
        change={inputChan}
        submit={formSub}
        disabled={disabled}
        errors={formErr}
      />

      {users.map((user) => {
        return (<User key={user.id} userDe={user} />);
      })}
    </div>
  );
}
