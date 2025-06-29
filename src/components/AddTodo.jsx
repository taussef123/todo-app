import { useContext } from "react"
import { TodoItemContext } from "../store/todo-items-store"


 const AddTodo=(

)=>{

  const {addNewItem,todoNameRef,todoDateRef,todoItems,editIndex,setTodoItems,setEditIndex} =  useContext(TodoItemContext)

     const handleAddItem = (e)=>{
       e.preventDefault()
        const todoName = todoNameRef.current.value;
        const todoDate = todoDateRef.current.value;
        if(editIndex!==null){
          const updatedTodos=[...todoItems];
          updatedTodos[editIndex]={todoName,todoDate,}
          setTodoItems(updatedTodos)
         setEditIndex(null)
        
        }else{
          addNewItem(todoName,
            todoDate);
        }
       

       todoNameRef.current.value="";
       todoDateRef.current.value="";
       

     }
    return (
      <div className="row ">
        <div className="col-4">
          <input
          ref={todoNameRef}
            type="text"
           placeholder="Enter Your Todo"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
          
          ref={todoDateRef}
           type="date"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <button 
          onClick={handleAddItem}
          className="btn btn-success">
            {editIndex!==null?"update":"Add"}
            </button>
        </div>
      </div>
    );
}

export default AddTodo;

