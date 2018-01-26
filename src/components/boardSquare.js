import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import { DropTarget } from 'react-dnd';
import { canMovePiece, movePiece } from './game';


const ItemTypes = {
   PEICE: 'peice'
};

const squareTarget = {
  canDrop(props) {
  return canMovePiece(props.x, props.y);
  },
  drop(props) {
    movePiece(props.x,props.y);
  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}


class BoardSquare extends Component {
  renderOverlay(color) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color,
    }} />
  );
}

  render() {
    const { x, y, connectDropTarget, isOver ,canDrop} = this.props;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
        <Row>
          {this.props.children}
        </Row>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>

    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.PEICE, squareTarget, collect)(BoardSquare);
