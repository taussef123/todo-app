import { useContext } from "react";
import Todo from "./Todo";
import { TodoItemContext } from "../store/todo-items-store";

const Todos =()=>{
   const {todoItems} =useContext(TodoItemContext);
   console.table(todoItems)
    return (
      <>
        {todoItems.map((item,index) => (
          <Todo
         key={index}
         index={index}
            todoName={item.todoName}
            todoDate={item.todoDate}/>
        ))}
      </>
    );
}

export default Todos;