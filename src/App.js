import logo from './logo.svg';
import './App.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider from './store/todo-items-store';

function App() {

  return (
    <TodoItemsContextProvider>
      <div className="App">
        <div className="container my-4">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
