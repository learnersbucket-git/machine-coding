import { useState } from "react";
import "./App.css";

function App() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    // async operation to validate email
    if (email.trim()) {
      setTrack(1);
    } else {
      console.log("Please provide valid email");
    }
  };

  const validatePassword = () => {
    // async operation to validate the password.
    if (password.trim()) {
      console.log("Successful");
    }
  };

  return (
    <div className="App">
      {track === 0 ? (
        <section id="email-section">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={validateEmail}>Next</button>
        </section>
      ) : (
        <section id="email-section">
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => setTrack(0)}>Change Email</button>
          <button onClick={validatePassword}>Submit</button>
        </section>
      )}
    </div>
  );
}

export default App;
