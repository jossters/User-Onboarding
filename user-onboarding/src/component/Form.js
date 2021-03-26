import React from 'react'
export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const changeValue = type === "checkbox" ? checked : value;
    change(name, changeValue);
  };
  return(
      <form onSubmit={onSubmit}>
          <h1>OnBoard A New User</h1>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
          <label>
              Name
              <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
              />
          </label>
          <label>
              Email
              <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="text"
              />
          </label>
          <label>
              Password
              <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="text"
              />
          </label>
          <h4>
              Terms of Service
              <label>Agree
                  <input
              value="agree"
              onChange={onChange}
              name="terms"
              type="checkbox"
              checked={values.terms}
              />
              </label> 
          </h4>
          <button id='submitBtn' disabled={disabled}>Submit</button>
      </form>
  ) 
}
