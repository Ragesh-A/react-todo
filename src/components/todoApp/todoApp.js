import React from 'react';
import './todoApp.css';

class Todo extends React.Component {
  state = {
    task: [],
  };
  
  checkColor(p){
    console.log(this.state);
    const todoBody = document.querySelector('.todo-body')
    if(this.state.task.length != 0){
      todoBody.className = 'todo-body active'
    }else{

      todoBody.classList.remove('active')
    };
  }


  storeTask = (e) => {
    e.preventDefault();
    const taskInput = e.target.children[0].value.trimStart();
    
    
    if (taskInput.length > 0) {
      this.setState((p)=>(
        { task: [...this.state.task, taskInput] }
      ), ()=> this.checkColor());
    }
    e.target.children[0].value = '';
   ;

  };

  deleteTask=(index)=>{
    this.setState({
      task : this.state.task.filter((data, key)=> key != index)
    },()=>this.checkColor())
  }
 
  


  render() {
    const { task } = this.state;
    return (
      <div className="todo-container-wrap">
        <div className="todo-container" >
          <h1 className="title">Todo App</h1>
          <div className="todo-body">
            <div className="tasks-wrap">
              <ul id='tasks'>
                {task.map((data, index) => {
                  return (
                    <li key={index}>
                      {data}
                      <div className="icons-wrap">
                        <i className="fa-solid fa-trash-can" onClick={()=>this.deleteTask(index)}></i>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <form className="input-wrap" onSubmit={this.storeTask}>
              <input type="text" name="" id="" placeholder="enter items..." />
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
