import React from "react";
import ToDoList from "./components/ToDoList";
import { createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
