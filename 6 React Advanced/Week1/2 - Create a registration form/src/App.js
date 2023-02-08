import "./App.css";
import { validateEmail } from './utils'
import { useState } from "react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const PasswordErrorMessage = ({ pass }) => {
  if (!pass.isTouched) {
    return (
      <p>Password should consist of atleast 8 characters</p>
    )
  }
  else if (pass.value.length < 8) {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }else {
    return (
      <div>Good</div>
    )
  }
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if (firstName && lastName && validateEmail(email) && password.value.length>=8){
      console.log("yeah")
      return true;
    }
    else {
      return false
    }
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setRole("role")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIsFormValid()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" value={password.value} onBlur={e => (setPassword({value: e.target.value, isTouched: true,}))} onChange={e => setPassword({
              value: e.target.value,
              isTouched: false,
            })} />
            <PasswordErrorMessage pass={password}/>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
