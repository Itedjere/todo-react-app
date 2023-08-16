import UpdateTodo from "./UpdateTodo"

function SingleTodo({ todo, handleTodoCompleted, editTodo, editTodoId, handleSetEditTodo, handleDeleteTodo, handleUpdateTodo}) {
    return (
        <li 
            className="list-group-item"
            key={todo.id}
        >
            <div className="row">
                <div className="col-sm-1 d-flex align-items-center">
                    <div className="form-check form-switch">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        checked={todo.completed} 
                        onChange={e => handleTodoCompleted(todo.id, e.target.checked)}
                    />
                    </div>
                </div>
                <div className="col-sm-9 d-flex align-items-center ">
                    {(editTodo && editTodoId === todo.id) ? (
                    <>
                        <UpdateTodo 
                            todo={todo}
                            handleUpdateTodo={handleUpdateTodo}
                        />
                    </>
                    ) : (
                    <p className={todo.completed ? 'text-decoration-line-through m-0' : 'm-0'}>{todo.text}</p>
                    )}
                </div>
                <div className="col-sm-2 text-end">
                    <div className="btn-group" role="group" aria-label="Actions">
                    <button 
                        type="button" 
                        className="btn btn-warning btn-sm"
                        onClick={() => handleSetEditTodo(todo.id)}
                        disabled={todo.completed}
                    >Edit</button>
                    <button 
                        className="btn btn-danger btn-sm" 
                        type="button"
                        onClick={() => handleDeleteTodo(todo.id)}
                    >Delete</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SingleTodo