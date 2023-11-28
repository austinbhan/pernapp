import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch(err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:4000/todos");
            const jsonData = await response.json();
            setTodos(jsonData.rows);
            
        } catch(err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);


    return (
    <Fragment>
        {" "}
    <table className="table mt-5 text-center">
    <tbody>
      {todos.map(todo => (
        <tr key={todo.todo_id}> 
            <td>{todo.description}</td>
            <th><EditTodo todo={todo}/></th>
            <th><button className="btn btn-danger" onClick={() => { deleteTodo(todo.todo_id) }}>Delete</button></th>
        </tr>
      ))}
    </tbody>
  </table> 
  </Fragment>
);
};

export default ListTodo;