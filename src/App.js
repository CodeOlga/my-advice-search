import "./App.css";
import { useEffect, useState } from "react";
import image from "./bored.jpg";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Felling bored?</h1>
      </div>
      <div className="container">
        <img src={image} alt="dog" width="400px" />
      </div>

      <div className="container">
        <button className="btn" onClick={getAdvice}>
          Get some ideas
        </button>
      </div>

      <div className="container">
        <h2 className="advice">{advice}</h2>
      </div>
    </div>
  );
}
export default App;
