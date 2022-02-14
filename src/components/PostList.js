import React from "react";
import useResources from "./useResources";

const PostList = () => {
  const resources = useResources('posts')
  
  return (
    <div className="ui divided relaxed list" >
      {
      resources.map(record => 
          <div  key={record.id} className="item">
            <h2 key={record.id} className='content'>{record.title}</h2> 
            <div key={record.id} className='content'>{record.body}</div> 
          </div>
      )}
    </div>

  )
}

export default PostList