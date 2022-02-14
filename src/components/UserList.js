import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const resources = useResources('users')
  
  return (
    <div className="ui divided relaxed list" >
      {
      resources.map(record => 
          <div  key={record.id} className="item">
            <i className="disabled user middle large icon"></i>
            <h3 key={record.id} className='content'>{record.name}</h3> 
          </div>
      )}
    </div>
  )
}

export default UserList