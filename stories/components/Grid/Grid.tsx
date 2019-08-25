import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'

type Cell = {
  rowIndex: number
  colIndex: number
  count: number
}

let Cells: Array<Cell> = []

type Props = {
  cellCount: number
}

const createColumns = (cellCount: number, colIndex: number) => {
  let [count, setCount] = useState(0)
  const children = []

  const incrementCellsValue = (rowIndex: number, colIndex: number) => {
    setCount(count + 1)
    Cells.forEach(c => {
      if (c.rowIndex === rowIndex && c.colIndex === colIndex) c.count++
      if (c.rowIndex === rowIndex && c.colIndex !== colIndex) c.count++
      if (c.rowIndex !== rowIndex && c.colIndex === colIndex) c.count++
    })

    console.log(Cells)
  }

  for (let rowIndex = 0; rowIndex < cellCount; rowIndex++) {
    var cell = {
      rowIndex,
      colIndex,
      count
    }
    if (
      Cells.find(c => c.colIndex === colIndex && c.rowIndex === rowIndex) ===
      undefined
    ) {
      Cells.push(cell)
    }

    const index = colIndex * cellCount + rowIndex
    var key = index.toString()
    children.push(
      <GridData
        key={key}
        onClick={() => incrementCellsValue(rowIndex, colIndex)}
      >
        {count}
      </GridData>
    )
  }
  return children
}

const CreateTable = ({ cellCount }: Props) => {
  const table = []

  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    table.push(<GridColumn>{createColumns(cellCount, colIndex)}</GridColumn>)
  }
  return <GridContainer>{table}</GridContainer>
}

CreateTable.defaultProps = {
  cellCount: 50
}

export { CreateTable }
