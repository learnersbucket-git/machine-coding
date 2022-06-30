import TimerWithRestart from "./Timer/TimerWithRestart";
import "./App.css";

function App() {
  const onExpire = () => {
    console.log("Called");
  };

  return (
    <div className="App">
      <TimerWithRestart duration={20 * 1000} onExpire={onExpire} />
    </div>
  );
}

export default App;
