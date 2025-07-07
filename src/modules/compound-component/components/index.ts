import { ComponentProps, JSX } from 'react'
import { ArticleActions } from './ArticleActions'
import { ArticleCard as ArticleCardHOC } from './ArticleCard'
import { ArticleDescription } from './ArticleDescription'
import { ArticleTitle } from './ArticleTitle'

interface ArticleCardProps {
  (Props: ComponentProps<typeof ArticleCardHOC>): JSX.Element
  Title: (Props: ComponentProps<typeof ArticleTitle>) => JSX.Element
  Description: (Props: ComponentProps<typeof ArticleDescription>) => JSX.Element
  Actions: (Props: ComponentProps<typeof ArticleActions>) => JSX.Element | JSX.Element[]
}

export const ArticleCard: ArticleCardProps = Object.assign(ArticleCardHOC, {
  Title: ArticleTitle,
  Description: ArticleDescription,
  Actions: ArticleActions,
})
