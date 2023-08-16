import { useState } from 'react'

function TodoForm({ handleSubmit }) {

    const [ todo, setTodo ] = useState('');

    function handleAddNewTodo(e) {
        e.preventDefault();
    
        if ( todo === '' ) {
          return;
        }
    
        let newTodo = {
            id: crypto.randomUUID(),
            text: todo,
            completed: false,
        }

        handleSubmit( newTodo )
    
        setTodo('')
    }

    return (
        <>
            <h5 className="card-title text-center">React ToDo App</h5>
            <p className="card-text text-center">Use The Form Below To Add Your A Todo.</p>

            <form onSubmit={handleAddNewTodo}>
                <div className="row">
                    <div className="col-sm-12">
                        <div class="mb-3">
                            <label htmlFor="addTodo" className="form-label">Add Todo</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="addTodo" 
                            placeholder="Enter Todo" 
                            value={todo}
                            onChange={e => setTodo(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Add ToDo Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TodoForm