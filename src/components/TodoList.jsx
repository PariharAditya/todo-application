import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
    if (todos.length === 0) {
        return <p>No tasks available</p>;
    }
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;