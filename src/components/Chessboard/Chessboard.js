import React from 'react'
import Square from '../Square/'
import './Chessboard.css'

class Chessboard extends React.Component {

  expandFen (fen) {
    let expandedFen = ''
    for (let i = 0; i <= fen.length - 1; i++) {
      expandedFen += (!isNaN(fen[i])) ? this.padEmptySpaces(fen[i]) : fen[i]
    }
    return expandedFen
  }

  padEmptySpaces (count) {
    let paddedEmptySpaces = ''
    for (let i = 1; i <= count; i++) {
      paddedEmptySpaces += 'x'
    }
    return paddedEmptySpaces
  }

  render () {
    let rowsText = this.props.fen.substring(0, this.props.fen.indexOf(' '))
    const rowsTextExpanded = this.expandFen(rowsText)
    const rowsStrings = rowsTextExpanded.split('/', 8)
    const board = rowsStrings.map(function (row, rowIndex) {
      const columnIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      const squares = row.split('').map(function (piece, squareIndex) {
        const squareColor = ((squareIndex + rowIndex) % 2 === 0) ? 'dark' : 'light'
        const squareRowPos = (squareIndex % 8)
        const squareX = columnIds[squareRowPos];
        return (<Square color={squareColor} piece={piece} x={squareX} y={rowIndex + 1} />)
      })
      return squares
    })

    return (
      <div className="Chessboard">
        {board}
      </div>
    )
  }
}

Chessboard.defaultProps = {
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
}

Chessboard.propTypes = {
  fen: React.PropTypes.string.isRequired
}
export default Chessboard
