import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'
import { theme } from '../../styles/ThemeProvider'

type Props = {
  cellCount: number
  colIndex?: number
  rowIndex?: number
}

type Cell = {
  id: number
  rowIndex: number
  colIndex: number
  count: number
}

const getCellsArray = (cellCount: number) => {
  var cells: Array<Cell> = []
  var id = 0
  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < cellCount; rowIndex++) {
      var cell = {
        id,
        rowIndex,
        colIndex,
        count: 0
      }
      cells.push(cell)
      id++
    }
  }
  return cells
}

const GenerateFibonacciSerie = (n: number) => {
  if (n === 1) {
    return [0, 1]
  } else {
    var s: Array<number> = GenerateFibonacciSerie(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
  }
}

let fibonacciSerie = GenerateFibonacciSerie(50)

console.log(fibonacciSerie)

const CreateTable = ({ cellCount }: Props) => {
  const [cells, setCells] = useState(getCellsArray(cellCount))

  const fibonacciRangeCompare = () => {
    for (let rowIndex = 0; rowIndex < cellCount - 5; rowIndex++) {}

    for (let colIndex = 0; colIndex < cellCount - 5; colIndex++) {}

    // cells.forEach(c => {
    //   if (fibonacciSerie.includes(c.count)) {
    //     var firstIndexMatch = fibonacciSerie.indexOf(c.count)
    //     var secondIndexMatch = fibonacciSerie.lastIndexOf(c.count)
    //   }
    // })
  }

  const backgroundColor = (cell: Cell) => {
    cells.forEach(c => {
      if (c.rowIndex === cell.rowIndex || c.colIndex === cell.colIndex) {
        var element = document.getElementById(c.id.toString())

        element.style.background = theme.identityColors.yellow
        setTimeout(function() {
          element.style.background = theme.identityColors.white
        }, 1000)
      }
    })
  }

  const createColumns = colIndex => {
    const incrementCellsValue = (cell: Cell) => {
      cells.forEach(c => {
        if (c.rowIndex === cell.rowIndex || c.colIndex === colIndex) {
          c.count++
          backgroundColor(cell)
        }
      })
      setCells([...cells])
    }

    var cellInCol = cells.filter(cell => cell.colIndex === colIndex)

    const gridData = []
    cellInCol.map((cell, index) => {
      gridData.push(
        <GridData
          id={cell.id}
          key={cell.id}
          onClick={() => incrementCellsValue(cell)}
        >
          {cell.count === 0 ? '' : cell.count}
        </GridData>
      )
    })
    return gridData
  }

  const table = []
  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    table.push(
      <GridColumn key={colIndex}>{createColumns(colIndex)}</GridColumn>
    )
  }

  return <GridContainer>{table}</GridContainer>
}

CreateTable.defaultProps = {
  cellCount: 50
}

export { CreateTable }
