import React, {FC, useState} from 'react';
import {ITodo} from "../types/ITodo";

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {

    const [IsChecked, setIsChecked] = useState(false);

    const changeCheckbox = (bool: boolean) => {
        setIsChecked(bool)
    }


    return (
        <div style={{border: '2px solid black', marginTop: '5px'}}>
            <input type='checkbox'
                   checked={!IsChecked? todo.completed: IsChecked}
                   onChange={(e) => changeCheckbox(e.target.checked)}/>
            <table>
                <tr>
                    <td>{todo.id}</td>
                    <td onClick={() => onClick(todo)}>{todo.title}</td>
                </tr>
            </table>
        </div>
    );
}

export default TodoItem;