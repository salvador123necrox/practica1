import React, {useState} from 'react'
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({todo:'',number:''})
    const [todos, setTodos] = useState([])
const handleChange = e => setTodo({...todo,[e.target.name]: e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
        alert('El campo no puede estar vacio')
        return
    }
    setTodos([...todos,todo])
    setTodo({todo:'',number:''});
}
const deleteTodo = indice =>{
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
    setTodo({todo:'',number:''});
}
    return (
        <>
        <form onSubmit={e=> e.preventDefault()}>
            <label> Agregar tarea </label><br/>
            <input value= {todo.todo} type="text" name="todo" onChange={handleChange}/>
            <input value= {todo.number} type="text" name="number" onChange={handleChange}/>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (
            <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} />))
        }
        </>
    )
}
export default Form