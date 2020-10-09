import React  from 'react';  
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import Todos from './components/Todos';
import About from './components/pages/About';
import {v4 as uuid } from 'uuid';
import axios from 'axios'

class App extends React.Component{

    // state={
    //   todos:[
    //     {
    //     id :uuid(),
    //     title:'Todos title 1',
    //     completed:false,
    //   },
    //   {
    //     id :uuid(),
    //     title:'Todos title 2',
    //     completed:false,
    //   },
    //   {
    //     id :uuid(),
    //     title:'Todos title 3',
    //     completed:false,
    //   },
    //   {
    //     id :uuid(),
    //     title:'Todos title 4',
    //     completed:true,
    //   }

    // ]
    // }

    state= {
      todos:[]
    }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=> this.setState({todos:res.data}));
    }


    markComplete=(id)=>{
      
      this.setState({
        todos: this.state.todos.map(todo=>{
          if(todo.id===id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      })
    }

    deleteTodo=(id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        res=>this.setState({ 
          todos:[...this.state.todos.filter(todo=>todo.id !== id)]
        })
      )
      
    }

    addTodo =(title) =>{
      
      // const newTodo={
      //   id:uuid(),
      //   completed:false,
      //   title:title,
      // }
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed:false
      }).then(res=>
      this.setState({
        todos:[...this.state.todos, res.data]
      }))
      // this.setState({
      //   todos:[...this.state.todos, newTodo]
      // })
    }

    render(){

      return (

        <Router>
        <div style={AppStyle}>

        <Header />   

        <Route exact path='/ToDO-list' render={props=>(
          <React.Fragment>
            <div  fxflex="" fxlayout="row" fxlayoutalign="start center" >
                
                <AddTodo addTodo={this.addTodo} /> 

                <Todos todos={this.state.todos}  markComplete={this.markComplete} 
                deleteTodo={this.deleteTodo}/>
            
            </div>
            
          </React.Fragment>
        )} />
        
        {/* About Route */}

        <Route path='/about' component={About} />
        </div>
        </Router>
      );
    }
 

}


const AppStyle ={
  textAlign: 'center',
    display: 'flex',
    flexDirection:' column',
    width:' 100%',
    justifyContent:' flex-start'
}
export default App;
