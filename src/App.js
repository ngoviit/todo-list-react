import './App.css';
import Todo from './components/Todo'
import { Fragment } from 'react';
import "./assets/css/todo.scss"
function Header(){
  return(
    <h1 className='title'>Todo Lists <span>A simple React Todo List App</span></h1>
  )
}
function App() {
  return (
    <Fragment>
      <div className='todoList'>
        <Header/>
        <Todo/>
      </div>
    </Fragment>
  );
}
export default App;
