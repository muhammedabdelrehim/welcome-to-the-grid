import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { tabletUp } from './Breakpoints'

export const GridContainer = styled.div`
  display: flex;
`

export const GridColumn = styled.div``
export const GridData = styled.a`
  display: block;
  text-align: center;
  padding: 10px;
  border: 1px solid #dddddd;

  &:hover {
    cursor: pointer;
  }
`
