import {useState} from 'react';
function TodoInput({addTodo}) {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return; // Prevent adding empty tasks
        addTodo(task);
        setTask(""); // Clear input after adding
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter task' value={task} onChange={(e)=>setTask(e.target.value) } className='border-2 border-black'/>
            <button type='submit' className=' border-2 border-black'>Add</button>
        </form>
    )
}
export default TodoInput;
// This component is a simple input form for adding new todo items.