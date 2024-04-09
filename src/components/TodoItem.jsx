function TodoItem({ todoName, todoDate, onDeleteClick }) {
    return (
        <>
            <div className="row mb-4">
                <div className="col-md-6">
                    {todoName}
                </div>
                <div className="col-md-4">
                    {todoDate}
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger w-100" onClick={() => onDeleteClick(todoName)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoItem;