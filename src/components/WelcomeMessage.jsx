import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

function WelcomeMessage() {
    const {todoItems} =  useContext(TodoItemsContext);

    return (
        <>
            {
                todoItems.length === 0 && <h3 className="text-center">Enjoy your day!</h3>
            }
        </>
    )
}

export default WelcomeMessage;