import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    // setTodos([...todos, { id: Math.random().toString(), text }]);
    // This does not guarantee the latest state snapshot -> theoretically react schedules state updates therefore todos value here might not necessarily be the latest state when this update is performed
    // Passing an arrow function with the previous state as a parameter is the best practice
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
