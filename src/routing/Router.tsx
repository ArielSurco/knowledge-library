import { Home } from '@/routing/pages/Home'
import { Route, Routes } from 'react-router'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}
