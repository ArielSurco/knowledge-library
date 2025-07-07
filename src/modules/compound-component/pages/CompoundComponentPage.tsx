import { ArticleCard } from '../components'
import { ArrowIcon } from '../icons/ArrowIcon'

export const CompoundComponentPage = () => {
  return (
    <>
      <ArticleCard
        article={{
          title: 'Hola',
          description: 'Descripcion hola',
          actions: [
            {
              label: 'Leer mas',
              icon: <ArrowIcon />,
            },
          ],
        }}
      >
        <ArticleCard.Title></ArticleCard.Title>
        <ArticleCard.Description></ArticleCard.Description>
        <ArticleCard.Actions></ArticleCard.Actions>
      </ArticleCard>
    </>
  )
}
