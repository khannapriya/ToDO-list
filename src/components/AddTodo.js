    import React, { Component } from 'react'
    import propTypes from 'prop-types';
    import { BsFillPlusSquareFill } from "react-icons/bs";

    export class AddTodo extends Component {

        state={
            title:'',
        }

      onChange =(e)=>{
          this.setState({
             [e.target.name]: e.target.value
          })
      }
      
      onSubmit=(e)=>{
          e.preventDefault();
          this.props.addTodo(this.state.title);
          this.setState({
              title: ''
          })
      }
      
      render() {
        return (
          <div fxflex="" fxlayout="row" fxlayoutalign="start center" > 
            <form onSubmit={this.onSubmit} >
                <input type="text" placeholder="Add To do ..." name="title" className="AddItem"
                value={this.state.title} onChange={this.onChange} style={ inputAdd }/>
            
                <button style={addBtn} className="btn" type="submit"><BsFillPlusSquareFill className=" IconReact" /></button>
            </form>
          </div>
        )
      }
    }

    AddTodo.propTypes= {
      addTodo: propTypes.func.isRequired
    }
    
    const addBtn={
      margin: '10px'
    }

    const inputAdd={
      width: '100%',
      maxWidth: '430px',
      overflow: 'hidden',
      boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
      padding:'12px',
      margin:'0px',
      borderRadius:'40px',
      border:'0px',
      
    }
    export default AddTodo
    