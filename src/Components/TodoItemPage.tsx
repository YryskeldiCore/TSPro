import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/ITodo";
import {useHistory, useParams} from "react-router-dom";
import fetchItems from "../Services/getData";

interface TodoItemPageParams {
    id: string;
}

function TodoItemPage() {

    const [Todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        load('https://jsonplaceholder.typicode.com/todos/' + params.id)
    }, [])

    const load = async (url: string) => {
        const res = await fetchItems(url)
        console.log(res.data)
        setTodo(res.data)
    }

    return (
        <div>
            <button onClick={() => history.push('/todos')}>Back</button>
            <div>
                {Todo?.id} {Todo?.title}
            </div>
        </div>
    );
}

export default TodoItemPage;