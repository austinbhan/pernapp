const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// create todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)", 
            [description]
        );

        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

// get all todos

// get a todo

// update todo

// delete todo

app.listen(3000, () => {
    console.log("server has started on port 3000");
});

