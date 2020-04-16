import React, { useReducer } from "react";
import { appReducer } from "../app-reducer/index";

const Context = React.createContext();

export function TodoItem({ id, completed, text }) {
  // const dispatch = useContext(Context);
  const [dispatch] = useReducer(appReducer, []);
  return (
    <Context.Provider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({ type: "completed", payload: id })}
        />
        <input type="text" defaultValue={text} />
        <button onClick={() => dispatch({ type: "delete", payload: id })}>
          Delete
        </button>
      </div>
    </Context.Provider>
  );
}
