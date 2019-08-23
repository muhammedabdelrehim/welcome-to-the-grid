import React from 'react'
import {} from '../../styles/Grid_styles'

type Props = {
  cells: Number
}

const Grid = ({ cells }: Props) => {
  return <>{cells}</>
}

Grid.defaultProps = {
  cells: 50
}

export { Grid }
