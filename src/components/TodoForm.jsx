import React, { useState } from 'react'

/**
 * react hook - is fucntion which allow us  to have state(data) and lifecycle features in functional components.
 
 * useState is a React hook that allows you to add state to functional components.
 * It returns an array with two elements:
 * 1. The current state value text.
 * 2. A function setText that can be used to update the state value.
 
* useState for creating a state variable called text 
 * which is initialized to an empty string.
 * setText is a function that can be used to update the value of text.
 */

function TodoForm({ addTodo }) {
    // useState is a React hook that allows you to add state to functional components.
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText(''); // Fixed from setTodo('')
        }
    };

    return (
        /*
        handlesubmit check is text is not 
        and if not it will call the addTodo function
        rest is basic form with input and button
        */
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className='todo-input'
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;