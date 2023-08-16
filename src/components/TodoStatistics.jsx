function TodoStatistics({ todoList }) {

    const completedTodos = todoList.filter(todo => todo.completed === true).length;
    const unCompletedTodos = todoList.filter(todo => todo.completed === false).length;

    return (
        <div className="row mt-3">
            <div className="col-sm-4">
            Total ToDos: { todoList.length }
            </div>
            <div className="col-sm-4">
            Completed Todos: { completedTodos }
            </div>
            <div className="col-sm-4">
            Uncompleted Todos: { unCompletedTodos }
            </div>
        </div>
    )
}

export default TodoStatistics