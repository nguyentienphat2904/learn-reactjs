import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/home/Home'
import Blogs from './pages/blogs/Blogs'
import Contact from './pages/contact/Contact'
import NoPage from './pages/NoPage'
import Authenticate from './pages/authenticate/Authenticate'

import './App.css'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/authenticate' element={<Authenticate />} />
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='blogs' element={<Blogs />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>   
  )
}

export default App
