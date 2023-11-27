import {useEffect, useState, } from 'react';

const ListTodo = () => {

    const [list, setList] = useState([]);

    // const [list, setList] = useState([]);
    
    // export ListTodo to app.js
    // useEffect on ListTodo in App.js 

    // Retrieve array of todos 
    const listTodos = async () => {
        try {
            const response = await fetch('http://localhost:4000/todos');
            const jsonData = await response.json();
            setList(jsonData);
        } catch(err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        setList(listTodos);
    }, []);

    console.log(list);

    

    return (
        
        <div className="list">
        {/* Loop through and display list here */}
        <h3>This is the list component</h3>
    </div>
)
}

export default ListTodo;