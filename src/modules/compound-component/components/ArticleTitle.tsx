import { useContext } from 'react'
import { ArticleContext } from './ArticleCard'

export const ArticleTitle = () => {
  const { article } = useContext(ArticleContext)
  return (
    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
      {article.title}
    </h5>
  )
}
