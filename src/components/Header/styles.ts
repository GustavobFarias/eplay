import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`

export const LinksCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
