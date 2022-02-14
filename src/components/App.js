import React from 'react'
import Header from './Header'
import UserList from './UserList'
import TodoList from './TodoList'
import PostList from './PostList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className='ui container' style={{marginTop: '16px'}}>
        <div style={{marginBottom: '30px'}}>
          <Header />
        </div>
        <Routes>
        <Route path='/' element={<UserList/>} />
          <Route path='/jsonapis/userlist' element={<UserList/>} />
          <Route path='/jsonapis/postlist' element={<PostList/>} />
          <Route path='/jsonapis/todolist' element={<TodoList/>} />
        </Routes>
      </div>
  </Router>
  )
}

export default App