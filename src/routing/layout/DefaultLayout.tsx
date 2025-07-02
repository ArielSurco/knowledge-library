import { cn } from '@/shared/utils/cn'
import { Outlet } from 'react-router'

const maxWidth = 'max-w-[1440px]'

export const DefaultLayout = () => {
  return (
    <div className='flex min-h-screen w-screen justify-center p-4'>
      <main className={cn('w-full', maxWidth)}>
        <Outlet />
      </main>
    </div>
  )
}
