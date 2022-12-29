import { useState, useContext } from "react";
import {v1 as uuidv1} from 'uuid';
import { ThemeContext } from '../Contexts/ThemeContext';
import check from '../images/icon-check.svg'
import cross from '../images/icon-cross.svg'

const TodoList = ({theme}) => { 

    
    
    const [todos, setTodos] = useState([
        {title: "Complete React tutorial", id:1},
        {title: "Complete Javascript tutorial", id:2},
        {title: "Complete Svelte tutorial", id:3}
    ])
    const [comp, setComp] = useState("")
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos, {title, id: uuidv1()}]);
        setTitle("")
    }
    const removeTodos = (id) =>{
        setTodos(todos.filter( todo => todo.id !== id))
    }
    const completed = () =>{
        if(comp === ""){
            setComp("com")
        }else{
            setComp("")
        }
    }
    return ( 
        <>
            <div className='flex w-full mt-10 gap-5 bg-white p-4 items-center rounded-[0.25em]' style={{background: theme.bg}}>
                <div className='rounded-full w-5 h-5 border-2 border-gray-300'></div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} className='w-4/4 outline-none' placeholder='Create a new todo...' style={{background: theme.bg}} onChange={e => setTitle(e.target.value)}/>
                </form>
            </div>
            <div className='grid w-full mt-10 gap-2 items-center rounded-[0.25em] shadow-xl font-semibold' style={{color: theme.syntax, background: theme.bg}}>
                {todos && todos.map(todo =>{
                    return(
                        <>
                            <div className='flex gap-3 p-4 items-center saw' key={todo.id}>
                                <div className='rounded-full border-2 w-5 h-5' onClick={completed}>
                                    {/* <img src={check} alt="" /> */}
                                </div>
                                <p className={`${comp}`}>{todo.title}</p>
                                <img src={cross} alt="" className='w-4 h-4 ml-auto see hidden' onClick={(id)=> removeTodos(todo.id)}/>
                            </div>
                            <hr style={{borderTop: `1px solid ${theme.hr}`}}/>
                        </>
                        
                    )
                })}
                <div className='flex justify-between p-3 text-sm font-semibold text-lightTheme-DarkGrayishBlue'>
                    <p>{todos.length} items left</p> 
                    <div className='flex gap-3'>
                        <h3>All</h3>
                        <h3>Active</h3>
                        <h3>Completed</h3>
                    </div>
                    <p>Clear Completed</p>
                </div>
            </div>
        </>
        

     );
}
 
export default TodoList;