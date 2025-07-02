import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}
