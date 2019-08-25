import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { desktopUp } from './Breakpoints'

export const GridContainer = styled.div`
  display: flex;
`

export const GridColumn = styled.div``
export const GridData = styled.a`
  display: block;
  text-align: center;
  padding: 5px;
  border: 1px solid #dddddd;

  ${desktopUp} {
    padding: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`
