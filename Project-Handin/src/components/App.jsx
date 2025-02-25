import { useEffect, useMemo, useReducer, useRef, useState } from "react"
import ToDoReducer from "./ToDoReducer"
import '../App.css';

const App = () =>{
    const[todos, dispatch] = useReducer(ToDoReducer, []);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    // lưu danh sách công việc vào localStorage khi ds thay đổi
    useEffect(() =>{
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if(storedTodos){
            dispatch({Type : 'SET', payload: storedTodos});
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // sử dụng useMemo để filter các công viejc đã hoàn thành và chưa
    const filteredTodos = useMemo(() =>{
        return {
            incomplete : todos.filter(todo => !todo.completed),
            completed: todos.filter(todo => todo.completed),
        };
    }, [todos]);

    const handleAddTodo = () =>{
        if(!inputValue) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        dispatch({type : 'ADD', payload : newTodo});
        setInputValue('');
        inputRef.current.focus();
    };

    const handleToggleTodo = (id) =>{
        dispatch({type : 'TOGGLE', payload : id});
    };

    const handleDeleteTodo = (id) =>{
        dispatch({type: 'DELETE', payload : id});
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <div className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    // ref={inputRef}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div className="todo-lists">
                <h2>Incomplete Tasks</h2>
                <ul>
                    {filteredTodos.incomplete.map(todo => (
                        <li key={todo.id}>
                            <span
                                className={todo.completed ? 'completed' : ''}
                                onClick={() => handleToggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                    
                </ul>
                <h2>Completed Tasks</h2>
                <ul>
                    {filteredTodos.completed.map(todo => (
                        <li key={todo.id}>
                            <span
                                className={todo.completed ? 'completed' : ''}
                                onClick={() => handleToggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default App;