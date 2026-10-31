import React, { useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register_container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
        <input type="text" name="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
