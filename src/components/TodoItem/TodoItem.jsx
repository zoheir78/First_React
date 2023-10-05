import React from "react";
import "./TodoItem.css"


function TodoItem(props)
{
    const { todo, idx, func} = props;

    return (
        <div className="todoContainer">
            <span className="span1"> {todo}</span>
            <button onClick={() => func(idx)}>delite</button>
            <button onClick={() => {editItem(idx)}}> edit</button>
        </div>
    );
}
export default TodoItem;