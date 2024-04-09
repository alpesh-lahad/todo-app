import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import TodoItem from './TodoItem';

function TodoItems() {
    const {todoItems, deleteItem} =  useContext(TodoItemsContext);
    
    return (
        <>
            {todoItems.map((item, index) =>
                <TodoItem
                    key={index}
                    todoName={item.name}
                    todoDate={item.dueDate} 
                    onDeleteClick={deleteItem}
                />
            )}
        </>
    )
}

export default TodoItems;