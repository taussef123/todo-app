import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";


const Todo = (
  {todoName,todoDate,index

  }
)=>{

 const {deleteItem}=useContext(TodoItemContext);

 const {editItem}=useContext(TodoItemContext)

 const handleEdit=()=>{
  editItem(index,todoName,todoDate)
  
  
 }
    return (
      <div className="items-container">
        <div className="row">
          <div className="col-3">
            <p>{todoName}</p>
          </div>
          <div className="col-3">
            <p>{todoDate}</p>
          </div>
          <div className="col-3">
            <button 
            onClick={()=>deleteItem(todoName)}
            className="btn btn-primary">Delete </button>
          </div>
          <div className="col-3">
            <button
            onClick={()=>handleEdit()}
             className="btn btn-danger">Edit</button>
          </div>
        </div>
      </div>
    );
}

export default Todo;