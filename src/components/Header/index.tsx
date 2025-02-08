import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinksCart, LinksItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <a href="#">Novidades</a>
            </LinksItem>
            <LinksItem>
              <a href="#">Promoção</a>
            </LinksItem>
          </Links>
        </nav>
      </div>
      <LinksCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinksCart>
    </HeaderBar>
  )
}

export default Header
