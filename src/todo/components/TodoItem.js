import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyles = () => {
    return {
      background: '#3f51b530',
      padding: '10px',
      borderBottom: '1px white solid',
      // fontStyle: 'italic',
      // color: 'grey',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {_id, name} = this.props.item
    return (
      <div style={this.getStyles()}>
        <p>
        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.toogleComplete.bind(this,_id,this.props.item)}
        />{"  "}
          {name}

          <button style={btnStyle} className="material-icons">
            delete
          </button>
          <button style={btnStyle} className="material-icons">
            edit
          </button>
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
  background: 'rgba(0, 0, 0, 0)',
  // color: 'lightred',
  border: 'none',
  fontSize: 25,
  padding: '5px 10px',
  float: 'right',
  cursor: 'pointer',
  fontWeight: 900
}

export default TodoItem
