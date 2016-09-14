import React from 'react'
import Piece from '../Piece'
import './Square.css'

class Square extends React.Component {
  render () {
    const pieceColor = (this.props.piece === this.props.piece.toLowerCase()) ? 'black' : 'white'
    const spaceContents = (this.props.piece !== 'x')
      ? <Piece type={this.props.piece} color={pieceColor} />
      : ''
    return (
      <div className={"Square Square--" + this.props.color}>
        {spaceContents}
        <div className="Square__PositionInfo">
          <div>x: {this.props.x}</div>
          <div>y: {this.props.y}</div>
        </div>
      </div>
    )
  }
}

Square.defaultProps = {
  color: '',
  piece: '',
  x: '',
  y: 0
}

Square.propTypes = {
  color: React.PropTypes.string.isRequired,
  piece: React.PropTypes.string.isRequired,
  x: React.PropTypes.string.isRequired,
  y: React.PropTypes.number.isRequired
}

export default Square
