import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyles = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      // fontStyle: 'italic',
      // color: 'grey',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {_id, name} = this.props.item
    // console.log('from dooo', _id)
    return (
      <div style={this.getStyles()}>
        <p>
        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.toogleComplete.bind(this,_id)}
        />{"  "}
          {name}
          <button
            style={btnStyle}
            onClick={this.props.removeItem.bind(this,_id)}>
          X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const btnStyle = {
  background: '#f4f4f4',
  color: 'red',
  border: 'none',
  fontSize: 14,
  padding: '5px 10px',
  float: 'right',
  cursor: 'pointer',
  fontWeight: 900
}

export default TodoItem
