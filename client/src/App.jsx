import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
      fetch("/api/hello")
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(() => setMessage("Error"));
  }, []);

  return (
    <div>
      <h1>Yosef Mesika the queen !!!!!!!!!!!!!!!!!!!!! </h1>
      <h1>Yosef!!!!!!!!!!!!!!!!!!!!! </h1>
      <h1>its work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! </h1>
      <h1> WOW!!!!!!!!!!!!!!!!!!!!!!!!!! </h1>
      <h1> הולכים לסופר פארם!!!!!!!!!!!!!!!!!! </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
