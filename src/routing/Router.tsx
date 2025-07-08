import { CompoundComponentPage } from '@/modules/compound-component/pages/CompoundComponentPage'
import { DefaultLayout } from '@/routing/layout/DefaultLayout'
import { Home } from '@/routing/pages/Home'
import { Route, Routes } from 'react-router'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route
          path='compound-component'
          element={<CompoundComponentPage></CompoundComponentPage>}
        />
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}
