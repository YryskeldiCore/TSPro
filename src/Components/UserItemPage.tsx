import React, {FC, useEffect, useState} from 'react';
import fetchItems from "../Services/getData";
import {useParams, useHistory} from 'react-router-dom';
import {IUser} from "../types/IUser";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        load('http://jsonplaceholder.typicode.com/users/'+ params.id)
    }, [])

    const load = async (url: string) => {
        const res = await fetchItems(url)
        setUser(res.data)
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <div>
                Страница usera {user?.name} {user?.id} {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street}
            </div>
        </div>
    );
}

export default UserItemPage;