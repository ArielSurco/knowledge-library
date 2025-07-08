import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from '@shared/components/atoms/Card/Card'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Home</h1>
      <Card>
        <CardHeader>My first card</CardHeader>
        <CardContent>
          <CardDescription>This is a description of my first card</CardDescription>
          <CardAction>
            <Link to='/example'>Go to example</Link>
          </CardAction>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>"Compound components" nativos - Gonza</CardHeader>
        <CardContent>
          <CardDescription>
            ¿Cómo se comportan los componentes compuestos y como crearlos?
          </CardDescription>
          <CardAction>
            <Link to='/compound-component'>Ingresar</Link>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  )
}
