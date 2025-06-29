
// example of passing Props



import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import Todos from "./components/Todos";
// import { useRef, useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import Container from "./components/Container";
import {  TodoItemProvider } from "./store/todo-items-store";









const App = ()=>{
  
        return (
           <center>
            <Container>
              <TodoItemProvider>
                <div className="container">
                  <AppName />
                  <AddTodo />
                  <Todos />
                  <WelcomeMsg />
                </div>
              </TodoItemProvider>
            </Container>
            </center>
        
        );
    }
    
    export default App;