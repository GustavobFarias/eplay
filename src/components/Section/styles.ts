import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    width: 640px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
    }
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
