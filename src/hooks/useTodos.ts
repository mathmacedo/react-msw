import { useEffect, useState } from "react";


export const useTodos = () => {
    const [errorMesage, setErrorMesage] = useState(null);

    const [todos, setTodos] = useState([]);

    useEffect(() => {
    fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((res) => {
        console.log('todos: ', res.todos);
        setTodos(res.todos);
        setErrorMesage(null);
        }).catch((err) => {
        console.log('error: ', err.statusText);
        console.log('error: ', err.message);
        console.log('error: ', err);
        console.log(JSON.stringify(err));
        setErrorMesage(err.message);
        })
    }, []);

    return { todos, errorMesage };
}