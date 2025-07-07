import { useContext } from 'react'
import { ArticleContext } from './ArticleCard'

export const ArticleActions = () => {
  const { article } = useContext(ArticleContext)

  return article.actions.map((action) => (
    <a className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
      {action.label}
      {action.icon}
    </a>
  ))
}
