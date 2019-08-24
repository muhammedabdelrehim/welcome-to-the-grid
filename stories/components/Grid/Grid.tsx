import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'

type Props = {
  cells: Number
}

const createGridData = (cells, i, j) => {
  const index = i * cells + j + 1
  const [count, setCount] = useState(0)
  return (
    <GridData key={index.toString()} onClick={() => setCount(count + 1)}>
      {/* {count} */}
      {index}
    </GridData>
  )
}

const createTable = ({ cells }: Props) => {
  let table = []

  // Outer loop to create parent
  for (let i = 0; i < cells; i++) {
    let children = []
    //Inner loop to create children
    for (let j = 0; j < cells; j++) {
      children.push(createGridData(cells, i, j))
    }
    //Create the parent and add the children
    table.push(<GridColumn>{children}</GridColumn>)
  }
  return table
}

const Grid = ({ cells }: Props) => {
  return (
    <>
      <GridContainer>{createTable({ cells })}</GridContainer>
    </>
  )
}

Grid.defaultProps = {
  cells: 50
}

export { Grid }
