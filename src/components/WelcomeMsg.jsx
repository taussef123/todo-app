import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const WelcomeMsg = (
  // {todoItems}
)=>{
    const {todoItems}=useContext(TodoItemContext);
    return (
      <div className="welc-msg">
        {todoItems.length===0 && <p className="wel-p">No more work enjoy the day</p>}
      </div>
    );
}

export default WelcomeMsg;