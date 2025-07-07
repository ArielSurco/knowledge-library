import { createContext, CSSProperties, ReactElement } from 'react'
import { Article } from '../interfaces/article'

interface ArticleContextProps {
  article: Article
}

export const ArticleContext = createContext<ArticleContextProps>({} as ArticleContextProps)
const { Provider } = ArticleContext

interface Props {
  article: Article
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export const ArticleCard = ({ children, article }: Props) => {
  return (
    <Provider value={{ article }}>
      <div className='max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        {children}
      </div>
    </Provider>
  )
}
