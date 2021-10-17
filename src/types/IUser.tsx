export interface IUser {
    id: number;
    name: string;
    email: string;
    address: UserAddress;
}

export interface UserAddress {
    street: string;
    city: string;
}
