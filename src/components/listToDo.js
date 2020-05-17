import React, {Fragment, useEffect, useState} from "react";
import EditToDos from './editToDo';

const ListToDo = () => {
    
    const [todos, setToDos] = useState([]); 

    const deleteToDO = async(id) => {
        try {
            const deleteToDO = await fetch(`http://localhost:5000/todos/${id}`,{
                method: 'DELETE'
            });
            setToDos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }
    
    const getToDos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData =  await response.json();

            setToDos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(() => {
        getToDos();
    },[]);


    return(
        <Fragment>
             <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*     <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {todos.map(todo  => (
          <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditToDos todo={todo}/></td>
              <td><button className='btn btn-danger' onClick={() => deleteToDO(todo.todo_id)}>Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListToDo;