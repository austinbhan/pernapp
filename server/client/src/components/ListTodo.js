import React, { Fragment, useEffect, useState } from "react";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

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
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      ))}
    </tbody>
  </table> 
  </Fragment>
);
};

export default ListTodo;