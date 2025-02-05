import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      maiores qui necessitatibus iusto explicabo, dignissimos voluptas! Veniam
      culpa cumque recusandae odit numquam, labore enim at quae, perspiciatis,
      aliquid modi animi!
    </Descricao>
  </Card>
)

export default Product
