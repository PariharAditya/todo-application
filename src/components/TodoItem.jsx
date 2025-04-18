import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-item">
            <div className="todo-content">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#999" : "#fff",
                    }}
                >
                    {todo.text}
                </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}
export default TodoItem;