import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Products from './pages/Products.jsx'
import Navbar from './components/navbar.jsx'
import Layout from './pages/home.jsx'
import ProductPage from './pages/productPage.jsx'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
