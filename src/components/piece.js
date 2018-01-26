import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const ItemTypes = {
   PEICE: 'peice'
};

const PeiceSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Peice extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div
         className='peiceStyle'
         style={{
           opacity: isDragging ? 0.5 : 1,
           cursor: 'move'
         }}></div>
    );
  }
}

Peice.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};



export default DragSource(ItemTypes.PEICE, PeiceSource, collect)(Peice);
