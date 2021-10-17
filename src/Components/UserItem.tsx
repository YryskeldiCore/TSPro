import React, {FC} from 'react';
import {IUser} from "../types/IUser";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)}>
            {user.id} {user.name} {user.email} {user.address.city} {user.address.street}
        </div>
    );
}

export default UserItem;