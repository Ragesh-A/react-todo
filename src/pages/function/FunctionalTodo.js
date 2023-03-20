import { useState, useRef, useEffect } from 'react';

const getLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem('todoTask'))
}

const FunctionalTodo = () => {
  const [tasks, setTask] = useState(getLocalStorage());
  const todoBody = useRef();
  const input = useRef();

  //add new task into todo
  const addTask = (e) => {
    e.preventDefault();
    const taskInput = input.current.value.trimStart();
    if (taskInput.length > 0) {
      const newTask = {
        name: taskInput,
        completed: false
      }
      setTask([...tasks, newTask]);
      input.current.value = '';
    }
  };

  //task completed
  const completeTask =(key)=>{
    const newTask = tasks.map((task, index)=>{
    if(index === key){
      task.completed = true
    }
    return task;
    })
    setTask(newTask)
  }
  
  //delete task from todo
  const deleteTask = (key) => {
    const newTask = tasks.filter((task, index) => index != key);
    setTask(newTask);
  };

  useEffect(() => {
    {
      if (tasks.length > 0) {
        todoBody.current.className = 'todo-body active';
      } else {
        todoBody.current.className = 'todo-body';
      }
      localStorage.setItem('todoTask', JSON.stringify(tasks))
    }
  }, [tasks]);

  return (
    <>
      <div className="todo-container-wrap">
        <div className="todo-container">
          <div>
            <h1 className="title">Todo App</h1>
            <p className="description">--- Using functional component ---</p>
          </div>
          <div className="todo-body" ref={todoBody}>
            <div className="tasks-wrap">
              <ul id="tasks">
                {tasks.map((task, index) => {
                  return (
                    <li key={index} >
                      <p onClick={()=>completeTask(index)}>{task.completed ?  <strike> {task.name} </strike> : task.name}</p>
                      <div className="icons-wrap">
                        <i className="fa-solid fa-trash-can" onClick={() => deleteTask(index)}></i>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <form className="input-wrap" onSubmit={addTask}>
              <input type="text" name="" id="" placeholder="enter items..." ref={input}/>
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalTodo;
