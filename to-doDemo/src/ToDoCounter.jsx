/* eslint-disable react/prop-types */
// import { useState } from "react";
// import PropTypes from 'prop-types';
// import AddToDo from "./AddToDo";

const ToDoCounter = ({ todos }) => {
    return(
        <div>Total de Tareas: {todos.length}</div>
    )
}

export default ToDoCounter;
