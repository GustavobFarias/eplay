import { Children } from 'react'
import { Container } from './styles'
import { title } from 'process'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card
