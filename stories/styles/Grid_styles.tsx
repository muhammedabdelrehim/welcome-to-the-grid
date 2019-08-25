import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { desktopUp } from './Breakpoints'

export const GridContainer = styled.div`
  display: flex;
`

export const GridColumn = styled.div``
export const GridData = styled.a`
  display: block;
  font-family: ${theme.fontFamily};
  text-align: center;
  line-height: ${theme.gutters.large};
  align-items: center;
  height: ${theme.gutters.large};
  width: ${theme.gutters.large};
  border: 1px solid ${theme.identityColors.border};

  ${desktopUp} {
    line-height: ${theme.gutters.extraLarge};

    height: ${theme.gutters.extraLarge};
    width: ${theme.gutters.extraLarge};
  }

  &:hover {
    cursor: pointer;
  }
`
