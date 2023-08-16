import SingleTodo from "./SingleTodo"

function TodoList({ todoList, handleTodoCompleted, editTodo, editTodoId, handleSetEditTodo, handleDeleteTodo, handleUpdateTodo }) {
    return (
        <ul className="list-group">
            {todoList.map(todo => {
                return (
                    <SingleTodo 
                        key={todo.id}
                        todo={todo}
                        handleTodoCompleted={handleTodoCompleted}
                        editTodo={editTodo}
                        editTodoId={editTodoId}
                        handleSetEditTodo={handleSetEditTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleUpdateTodo={handleUpdateTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList