import React, {useEffect, useState} from 'react';
import fetchItems from "../Services/getData";
import {ITodo} from "../types/ITodo";
import List from "./List";
import TodoItem from "./TodoItem";
import {useHistory} from 'react-router-dom';

function TodoPage() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const history = useHistory();

    useEffect(() => {
        load('https://jsonplaceholder.typicode.com/todos?_limit=10');
    }, [])

    async function load(url: string){
        let res = await fetchItems(url);
        setTodos(res.data)
    }

    return (
        <div>
            <button onClick={() => history.push('/')}>Back</button>
            <List items={todos} renderItem={(todo) =>
                <TodoItem
                    onClick={(todo) => history.push('/todos/' + todo.id)}
                    todo={todo}
                />
            }/>
        </div>
    );
}

export default TodoPage;