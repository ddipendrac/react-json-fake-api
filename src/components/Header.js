import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // For navigation
  const navigate = useNavigate()

  // States for button color
  const [usersButtonColor, setUsersButtonColor] = useState('primary')
  const [postsButtonColor, setPostsButtonColor] = useState('')
  const [todosButtonColor, setTodosButtonColor] = useState('')

  function onUsersClick() {
    setUsersButtonColor('primary')
    setPostsButtonColor('')
    setTodosButtonColor('')
    navigate('/jsonapis/userlist')
  }
  function onPostsClick() {
    setUsersButtonColor('')
    setPostsButtonColor('primary')
    setTodosButtonColor('')
    navigate('/jsonapis/postlist')
  }
  function onTodosClick() {
    setUsersButtonColor('')
    setPostsButtonColor('')
    setTodosButtonColor('primary')
    navigate('/jsonapis/todolist')
  }

  return (
    <div >
      <h1>Json Placeholder apis</h1>
      <div>
        <button onClick={onUsersClick} className={`ui ${usersButtonColor} button`}>
          Users
        </button>
        <button onClick={onPostsClick} className={`ui ${postsButtonColor} button`}>
          Posts
        </button>
        <button onClick={onTodosClick} className={`ui ${todosButtonColor} button`}>
          Todos
        </button>
      </div>
    </div>
  )
}

export default Header
