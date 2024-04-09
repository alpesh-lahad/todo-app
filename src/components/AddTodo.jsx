import { useRef } from "react";
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

function AddTodo() {
    const {addNewItem} =  useContext(TodoItemsContext);
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (e) => {
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        addNewItem(todoName, dueDate);
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
    }

    return (
        <>
            <form action="" onSubmit={handleAddButtonClicked}>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <input
                            type="text"
                            ref={todoNameElement}
                            className="form-control"
                            placeholder="Enter todo here"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="date"
                            ref={dueDateElement}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            className="btn btn-success w-100"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTodo;