import React, { Component, useState } from "react";
import propTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

class TodoItem extends Component {
  getStyle() {
    return {
      display: "flex",
      justifyContent: "flex-start",
      padding: "5px ",
      width: "inherit",
      marginLeft: '40px',
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  }
    getStyleCheckbox(){
        return{
            background:this.props.todo.completed ? 'red': 'none'
        }
    }
  render() {
    // destructring
    const { id, title } = this.props.todo;

    return (
      <div fxflex="" fxlayout="row" fxlayoutalign="start center">
        <div style={listItem} >
          <input 
            type="checkbox" checked={this.props.todo.completed} 
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          <p style={this.getStyle()}>{title}</p>
          <button
            className="btn"
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            <AiFillDelete className="IconReact" />
          </button>
        </div>

      </div>
    );
  }
}

// PropType

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteTodo: propTypes.func.isRequired,
};

const row = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const listItem = {
  width: "100%",
  maxWidth: "480px",
  overflow: "hidden",
  boxShadow:
    "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)",
  padding: "12px",
  margin: "12px auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  background: '#fcfcfc',
  borderRadius: '5px',
};

export default TodoItem;
