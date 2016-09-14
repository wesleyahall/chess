import React from 'react'
import './Piece.css'

class Piece extends React.Component {
  renderPieceSymbol (type) {
    const unicodePieces = {
      'P': '♙',
      'p': '♟',
      'N': '♘',
      'n': '♞',
      'B': '♗',
      'b': '♝',
      'R': '♖',
      'r': '♜',
      'Q': '♕',
      'q': '♛',
      'K': '♔',
      'k': '♚',
      'x': ''
    }
    return unicodePieces[type]
  }

  render () {
    const className = "Piece Piece--" + this.props.type + " Piece--" + this.props.color
    const pieceSymbol = this.renderPieceSymbol(this.props.type)

    return (
      <div className={className}>{pieceSymbol}</div>
    )
  }
}

Piece.defaultProps = {
  color: '',
  type: '',
}

Piece.propTypes = {
  color: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
}

export default Piece
