import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [error, seterror] = useState({
    email: [false, "invalid email format "],
    password: [false, "password can't be less than 8 characters"],
    cpassword: [false, "password not match"],
  });

  function submitForm(e) {
    e.preventDefault();
    console.log(error);
    if (error.email[0] && error.password[0] && error.cpassword[0]) {
      alert("Form submitted Successfully!");
    } else {
      alert("Form can't submitted ");
    }
  }

  function handleCPassword(e) {
    let { value } = e.target;
    setCPassword(value);
    console.log(password, cpassword);
    if (password !== value || value.length < 8) {
      e.target.style.border = "2px solid red";
      seterror({
        ...error,
        [e.target.name]: [false, "password not match"],
      });
    } else {
      seterror({ ...error, [e.target.name]: [true] });

      e.target.style.border = "2px solid green";
    }
  }

  function handleEmail(e) {
    let { value } = e.target;
    setEmail(value);
    if (!(value.includes("@") && value.endsWith(".com"))) {
      e.target.style.border = "2px solid red";
      seterror({ ...error, [e.target.name]: [false, "invalid email format"] });
    } else {
      seterror({ ...error, [e.target.name]: [true] });

      e.target.style.border = "2px solid green";
    }
    console.log(e.target);
  }

  function handlePassword(e) {
    let { value } = e.target;
    setPassword(value);
    if (value.length < 8) {
      e.target.style.border = "2px solid red";
      seterror({ ...error, [e.target.name]: [false, "password can't be less than 8 characters"] });
    } else {
      seterror({ ...error, [e.target.name]: [true] });

      e.target.style.border = "2px solid green";
    }
  }

  return (
    <form  onSubmit={submitForm}>
      <label htmlFor="email">Name:</label>
      <input
        id="email"
        value={email}
        type="email"
        name="email"
        onChange={handleEmail}
      />
      <span hidden={error.email[0]}>{error.email[1]}</span>
      <br />

      <label htmlFor="password">password:</label>
      <input
        id="password"
        value={password}
        type="password"
        name="password"
        onChange={handlePassword}
      />
      <span hidden={error.password[0]}>{error.password[1]}</span>
      <br />

      <label htmlFor="cpassword">confirm password:</label>

      <input
        id="cpassword"
        type="password"
        name="cpassword"
        value={cpassword}
        onChange={handleCPassword}
      />
      <span hidden={error.cpassword[0]}>{error.cpassword[1]}</span>
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default App;
