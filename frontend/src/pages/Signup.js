import { useState } from "react";
import { register } from "../api/api";

function Signup({ setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await register({ email, password });

    alert("User created successfully");

    setShowLogin(true);
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>

      <p onClick={() => setShowLogin(true)}>Already have account? Login</p>
    </div>
  );
}

export default Signup;
