import { createContext, useState,useRef } from "react";


export const TodoItemContext =createContext({
    todoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
    todoNameRef:null,
    todoDateRef:null,
    editIndex:null,
    setEditIndex:()=>{},
    setTodoItems:()=>{},

})


export const TodoItemProvider=({children})=>{
    const [editIndex, setEditIndex] = useState(null);
    const [todoItems, setTodoItems] = useState([]);
    
    const todoNameRef=useRef()
    const todoDateRef=useRef()

    const addNewItem = (itemName, itemDate) => {
      const todoArr = [
        ...todoItems,
        {
          todoName: itemName,
          todoDate: itemDate,
        },
      ];
      setTodoItems(todoArr);
    };

    const deleteItem = (todoItemName) => {
      const todoArr = todoItems.filter((item) => {
        return item.todoName !== todoItemName;
      });
      setTodoItems(todoArr);
    };

    const editItem = (index, itemName, itemDate) => {
      if (todoNameRef.current && todoDateRef.current) {
        todoNameRef.current.value = itemName;
        todoDateRef.current.value = formatdate(itemDate);
        setEditIndex(index);
      }
    };
    const formatdate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toISOString().split("T")[0]; 
      
    };
return(
<TodoItemContext.Provider
  value=
  {{
    todoItems,
    addNewItem,
    deleteItem,
    editItem,
    editIndex,
    setEditIndex,
    todoNameRef,
    todoDateRef,
    setTodoItems,
  }}>
    {children}
</TodoItemContext.Provider>)
}