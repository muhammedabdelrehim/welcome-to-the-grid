import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'

type Props = {
  cells: Number
  index: Number
}

const makeYellow = index => {
  const [count, setCount] = useState(0)
  return (
    <GridData key={index} onClick={() => setCount(count + 1)}>
      <p>{count}</p>
    </GridData>
  )
}

const createTable = ({ index, cells }: Props) => {
  let table = []

  // Outer loop to create parent
  for (let i = 0; i < cells; i++) {
    let children = []
    //Inner loop to create children
    for (let j = 0; j < cells; j++) {
      children.push(makeYellow(index))
    }
    //Create the parent and add the children
    table.push(<GridColumn>{children}</GridColumn>)
  }
  return table
}

const Grid = index => {
  return (
    <>
      <GridContainer>{createTable(index)}</GridContainer>
    </>
  )
}

Grid.defaultProps = {
  cells: 50
}

export { Grid }
