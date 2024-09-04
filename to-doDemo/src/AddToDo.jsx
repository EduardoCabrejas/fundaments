/* eslint-disable react/prop-types */
// import { useState } from "react";

const AddToDo = ({setTodos}) => {
function handleSubmit(event) {
    event.preventDefault();
    const tarea = event.target.elements.todo.value;
    setTodos(prevTodos => [...prevTodos, tarea]);
    event.target.elements.todo.value = '';
}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="todo" />
            <button type="submit">Add task</button>
        </form>
    )
}

export default AddToDo;