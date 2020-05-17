import React, {Fragment} from 'react';
import './App.css';
import InputToDo from './components/inputTodo';
import ListToDo from './components/listToDo';


function App() {
  return <Fragment>
    <div className='container'>
    <InputToDo/>
    <ListToDo />
    </div>
  </Fragment>
}

export default App;
