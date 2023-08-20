import { useState, useEffect } from "react";
import "./App.css";
const KEY = "afe166fc";
function App() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=afe166fc`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <>hello</>;
}

export default App;
