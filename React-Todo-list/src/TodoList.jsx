import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList ()  {
    let [ todos, setTodos ] = useState([{ task: "Sample task", id: uuidv4(), isDone: false}]);
    let [ newTodo, setNewTodo ] = useState("");

    let addNewTask = () => {
        setTodos( (prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        } );
        setNewTodo("");
    }

    let updateTodoValue = (event) =>  {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, isDone: true,
                    };
                }
                else {
                    return todo;
                }
            })
        );
    };

    let markAllDone = () => {
        setTodos((prevTodos) => 
        prevTodos.map((todo) => {
            return {
                ...todo, isDone: true
            }
        })
    );
    }

    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>

            <br />
            <br />
            <hr />
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key= {todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={() => { deleteTodo(todo.id) } }>delete</button>
                            <button onClick={() => { markAsDone(todo.id) } }>Mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllDone}>Mark all as done</button>
        </div>
    );
}

export default TodoList;