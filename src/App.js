import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' whatsup='hi'/>
      <Todo text='Update Todo'/>
      <Todo text='Finish tutorial'/>
    </div>
  );
}

export default App;
