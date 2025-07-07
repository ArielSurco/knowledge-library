import { useContext } from 'react'
import { ArticleContext } from './ArticleCard'

export const ArticleDescription = () => {
  const { article } = useContext(ArticleContext)

  return <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{article.description}</p>
}
