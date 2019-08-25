import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'

type Props = {
  cellCount: number
  colIndex?: number
  rowIndex?: number
}

type Cell = {
  rowIndex: number
  colIndex: number
  count: number
}

const getCellsArray = (cellCount: number) => {
  var cells: Array<Cell> = []
  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < cellCount; rowIndex++) {
      var cell = {
        rowIndex,
        colIndex,
        count: 0
      }
      cells.push(cell)
    }
  }
  return cells
}

// let Cells: Array<Cell> =

// var timer
// var miliseconds = 500

// const toggleColors = colors => {
//   clearTimeout(timer)
//   var change = () => {
//     document.bgColor = colors // Change the color
//     if (colors.length > 1) timer = setTimeout(change, miliseconds) // Call the changer
//   }

//   change()
// }

// let [cells, setCells] = useState(getCellsArray(10))

const CreateTable = ({ cellCount }: Props) => {
  const [cells, setCells] = useState(getCellsArray(cellCount))

  console.log('create Table')

  const createColumns = (colIndex: number) => {
    console.log('create Columns')
    const incrementCellsValue = (rowIndex: number, colIndex: number) => {
      cells.forEach(c => {
        if (c.rowIndex === rowIndex || c.colIndex === colIndex) c.count++
      })

      console.log(cells)
      setCells([...cells])
    }

    var cellInCol = cells.filter(cell => cell.colIndex === colIndex)

    const gridData = []

    console.log(cellInCol)
    cellInCol.map(cell => {
      const index = cell.colIndex + cell.rowIndex
      var key = index.toString()
      gridData.push(
        <GridData
          key={key}
          onClick={() => incrementCellsValue(cell.rowIndex, cell.colIndex)}
        >
          {cell.count}
        </GridData>
      )
    })
    return gridData
  }

  const table = []
  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    table.push(<GridColumn>{createColumns(colIndex)}</GridColumn>)
  }

  return <GridContainer>{table}</GridContainer>
}

CreateTable.defaultProps = {
  cellCount: 10
}

export { CreateTable }
