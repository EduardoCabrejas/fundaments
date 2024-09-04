/* eslint-disable react/prop-types */
const ToDoList = ({todos}) => {
    // const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);

    return (
        <ul>
            {todos.map((tarea) => {
                return <li key={tarea}>{tarea}</li>;
            })}
        </ul>
    )
}

export default ToDoList;