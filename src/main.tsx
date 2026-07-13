import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/homePage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StorePage from './pages/storePage.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)
