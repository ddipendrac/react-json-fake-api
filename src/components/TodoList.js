import React from "react";
import useResources from "./useResources";

const TodoList = () => {
  const resources = useResources('todos')
  
  return (
    <div className="ui divided relaxed list" >
      {
      resources.map(record => 
          <div  key={record.id} className="item">
            <h3 key={record.id} className='content'>{record.title}</h3> 
          </div>
      )}
    </div>

  )
}

export default TodoList