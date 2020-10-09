import React , {Component} from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component{

    render(){
        return this.props.todos.map((todo)=>(
            <TodoItem  todo={todo} key ={todo.id} 
            markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
        ))
            
    }
    
}

Todos.propTypes={
    todos: propTypes.array.isRequired,
    markComplete:propTypes.func.isRequired,
    deleteTodo: propTypes.func.isRequired

}

export default Todos ;