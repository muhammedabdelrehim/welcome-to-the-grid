import React, { useState } from 'react'
import { GridContainer, GridColumn, GridData } from '../../styles/Grid_styles'
import { theme } from '../../styles/ThemeProvider'

type Props = {
  id: number
  cellCount: number
  rowIndex: number
  colIndex: number
  count: number
}

const getCellsArray = (cellCount: number) => {
  var cells: Array<Props> = []
  var id = 0
  for (let colIndex = 0; colIndex < cellCount; colIndex++) {
    for (let rowIndex = 0; rowIndex < cellCount; rowIndex++) {
      var cell = {
        id,
        cellCount,
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

const GenerateFibonacciSerie = (number: number) => {
  if (number === 1) {
    return [0, 1]
  } else {
    var serie: Array<number> = GenerateFibonacciSerie(number - 1)
    serie.push(serie[serie.length - 1] + serie[serie.length - 2])
    return serie
  }
}

let fibonacciSerie = GenerateFibonacciSerie(50)

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
  console.log(fibonacciSerie)

  const backgroundColor = (cell: Props) => {
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

  const createColumns = (colIndex: number) => {
    const incrementCellsValue = (cell: Props) => {
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
