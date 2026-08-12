// IMPORTS //

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/majorComponents/Header'
import Footer from './components/majorComponents/Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Pages from './pages/Pages'

// accountFlow //
import Login from './pages/accountFlow/Login'
import Register from './pages/accountFlow/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        {/* ACCOUNT FLOW */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App