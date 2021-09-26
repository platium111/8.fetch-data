import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  const fetchTodosUsingFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const responseJson = await response.json();
    setData(responseJson);
  };

  // [learn] axios is better, not need to use 2 await, just use one and using response.data
  const fetchTodosUsingAxios = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(response.data);
    console.log("axios", response.data);
  };

  // [learn] render 2 times, one is default app, one when we setData() inside fetchTodos()
  useEffect(() => {
    fetchTodosUsingAxios();
  }, []);

  console.log("----------App rendering-------");

  return <div className="App"></div>;
}

export default App;
