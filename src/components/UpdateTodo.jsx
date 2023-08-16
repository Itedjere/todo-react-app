import { useState } from 'react'

function UpdateTodo({todo, handleUpdateTodo}) {
    const [ newTodoText, setNewTodoText ] = useState(todo.text)

    function pleaseHandleUpdatedTod() {
        if ( newTodoText === '' ) {
            return;
        }

        handleUpdateTodo(newTodoText, todo.id)
    }
    
    return (
        <>
            <input 
                type="text" 
                className="form-control form-control-sm" 
                value={newTodoText}
                onChange={e => setNewTodoText(e.target.value)}
            />
            <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={pleaseHandleUpdatedTod}
            >Update</button>
        </>
    )
}

export default UpdateTodo