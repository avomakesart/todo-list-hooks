import React, { useReducer, useEffect } from "react";
import "./App.css";
import { appReducer } from "./components/app-reducer/index";
import { useEffectOnce } from "./helpers/hooks/index";
import { TodosList } from "./components/todo-list/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const Context = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffectOnce(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) });
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
      <Context.Provider value={dispatch} className="App">
        <GlobalStyle blackColor />
        <h1>ToDo App</h1>
        <button onClick={() => dispatch({ type: "add" })}>New Todo</button>
        <TodosList items={state} />
      </Context.Provider>
    </ThemeProvider>
  );
}
