import React, {useState, useEffect, FC} from 'react';
import UserPage from "./Components/UserPage";
import TodoPage from "./Components/TodoPage";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserItemPage from "./Components/UserItemPage";
import TodoItemPage from "./Components/TodoItemPage";

const App = () => {
  return (
        <BrowserRouter>
            <div>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
            </div>
            <Route path={'/users'} exact>
                <UserPage/>
            </Route>
            <Route path={'/todos'} exact>
                <TodoPage/>
            </Route>
            <Route path={'/users/:id'}>
                <UserItemPage/>
            </Route>
            <Route path={'/todos/:id'}>
                <TodoItemPage/>
            </Route>
        </BrowserRouter>
  );
}

export default App;
