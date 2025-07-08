import { ReactNode } from 'react'

export interface Article {
  title: ReactNode
  description: ReactNode
  actions: {
    label: ReactNode
    icon?: ReactNode
  }[]
}
