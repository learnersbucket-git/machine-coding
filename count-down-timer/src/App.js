import "./App.css";
import TimerWrapper from "./Timer/TimerWrapper";

function App() {
  const onExpire = () => {
    console.log("Expired");
  };

  return (
    <div className="App">
      <TimerWrapper onExpire={onExpire} duration={10 * 1000} />
    </div>
  );
}

export default App;
