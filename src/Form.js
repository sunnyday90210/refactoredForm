import React, { useState } from 'react';

const Form = () => {
  const [values, setVales] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setVales({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    submit();
  };

  function submit() {
    console.log(
      'Success',
      `email: ${values.email} 🥇  password: ${values.password}`
    );
  }

  return (
    <div style={{ marginTop: '25px', marginLeft: '50px' }}>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            name='email'
            type='email'
            value={values.email}
            onChange={handleChange}
          />
          {/* error message */}
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            name='password'
            type='password'
            value={values.password}
            onChange={handleChange}
          />
          {/* error message */}
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
