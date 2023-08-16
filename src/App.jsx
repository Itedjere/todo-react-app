import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoStatistics from './components/TodoStatistics'

function App() {

  const [ todoList, setTodoList ] = useState(() => {
    const localValue = localStorage.getItem("TODO_ITEMS")
    if (localValue === null ) {
      return []
    }

    return JSON.parse(localValue)
  });
  const [ editTodo, setEditTodo ] = useState(false);
  const [ editTodoId, setEditTodoId ] = useState(0);

  useEffect(() => {
    // Add Todos to Storage 
    localStorage.setItem("TODO_ITEMS", JSON.stringify(todoList));

  }, [todoList])

  function handleSubmit(newTodo) {

    setTodoList([
      ...todoList,
      newTodo
    ])
  }

  function handleSetEditTodo(todoId) {
    setEditTodo(!editTodo)

    setEditTodoId(!editTodo ? todoId : 0)
  }

  function handleTodoCompleted(todoId, completed) {
    setTodoList(todoList.map(todo => {
      if ( todo.id === todoId ) {
        return {
          ...todo,
          completed,
        }
      }
      return todo;
    }))
  }

  function handleDeleteTodo(todoId) {
    setTodoList(todoList.filter(todo => todo.id !== todoId))
  }

  function handleUpdateTodo(updatedTodoText, todoId) {
    setTodoList(todoList.map(todo => {
      if ( todo.id === todoId ) {
        return {
          ...todo,
          text: updatedTodoText
        }
      }

      return todo
    }))

    handleSetEditTodo(todoId)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 mx-auto">
        <div className="card">
          <div className="card-body">
            <TodoForm handleSubmit={handleSubmit} />

            <h5 className="card-title text-center">List Of ToDo Items</h5>
            <p className="card-text text-center">You Can Edit And Delete A Todo Item</p>

            {todoList.length === 0 ? (
              <p className="card-text text-center">No ToDo Item Found</p>
            ) : (
              <TodoList 
                todoList={todoList} 
                handleTodoCompleted={handleTodoCompleted} 
                editTodo={editTodo}
                editTodoId={editTodoId}
                handleSetEditTodo={handleSetEditTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleUpdateTodo={handleUpdateTodo}
              />

            )}

            <TodoStatistics todoList={todoList} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
