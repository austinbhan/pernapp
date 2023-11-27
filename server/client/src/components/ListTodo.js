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

    console.log(todos);
    return (
    <Fragment>
        {" "}
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr>
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