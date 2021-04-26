const express = require("express");
const app = express();
const cors = require("cors");
const port = 3006;
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to your online to do list!");
});

app.post("/todo", async (req, res) => {
    try {
        const { description } = require.body;
        
        const newToDoInDB = await pool.query(
            "INSERT INTO todo (description) VALUES($1)",[description]
    );

    res.json(newToDoInDB);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/read_todos", async (req, res) => {
    try {
        const readTodosFromDB = await pool.query("SELECT * from todo ORDER BY todo_id");
        res.json(readTodosFromDB.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/read_todos/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const readSingleTodoFromDB = await pool.query("SELECT * from todo WHERE todo_id = ($1)",[id]
    );
        res.json(readSingleTodoFromDB);
    } catch (err) {
        console.error(err.messsage);
    }
});

app.put("/update_todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updateToDoInDB = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Updated the list of ToDos!");
    } catch (err) {
        console.error(err.message);
    }
}); 

app.delete("/delete_todo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteToDoInDB = await pool.query("DELETE FROM todo WHERE todo_id = $1",
        [id]
    );
    res.json("Todo was successsfully deleted!");
} catch (err) {
    console.log(err.messsage);
}
}); 
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});