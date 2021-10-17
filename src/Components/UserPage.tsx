import React, {useEffect, useState} from 'react';
import List from "./List";
import UserItem from "./UserItem";
import {IUser} from "../types/IUser";
import fetchItems from "../Services/getData";
import {useHistory} from 'react-router-dom';

function UserPage() {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        load('https://jsonplaceholder.typicode.com/users');
    }, [])

    async function load(url: string){
        let res = await fetchItems(url);
        setUsers(res.data)
    }

    return (
        <div>
            <button onClick={() => history.push('/')}>Back</button>
            <List
                items={users}
                renderItem={(user) =>
                    <UserItem
                        onClick={(user: IUser) => history.push('/users/' + user.id)}
                        user={user}
                    />}
            />
        </div>
    );
}

export default UserPage;