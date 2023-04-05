import { CheckboxInput, TextInput, DeleteTodoButton } from "../styles/components/TodoListItem.styles";
import { Task } from "../contracts";
import { FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { SET_TODO_LIST } from "../store/types/todo";
import { toast } from "react-toastify";

const TodoListItem = (props) => {

    const { todoList } = useSelector((state) => state.Todo);

    const dispatch = useDispatch();

    const { id, task, isCompleted } = props;

    const updateTask = (key, value) => {
        const index = todoList.findIndex(({ index }) => index === id)
        const tasks = [...todoList]
        tasks[index] = { ...todoList[index], [key]: value }
        return tasks
    }

    const inputKeyDownHandler = async (e) => {
        if (e.key !== "Enter") return
        try {
            await Task.updateTask(id, e.target.value, isCompleted);
            dispatch({ type: SET_TODO_LIST, payload: updateTask("task", e.target.value) })
        } catch (error) {
            toast.error(error.info.error.message, { toastId: error.info.error.message })
        }
    }

    const onChangeIsCompleted = async (e) => {
        try {
            await Task.updateTask(id, task, e.target.checked);
            dispatch({ type: SET_TODO_LIST, payload: updateTask("isCompleted", !e.target.checked) })
        } catch (error) {
            toast.error(error.info.error.message, { toastId: error.info.error.message })
        }
    }

    const deleteTaskHandler = async () => {
        try {
            await Task.deleteTaskById(id)
            dispatch({ type: SET_TODO_LIST, payload: todoList.filter(({ index }) => index !== id) })
        } catch (error) {
            toast.error(error.info.error.message, { toastId: error.info.error.message })
        }
    }

    return (
        <tr>
            <td>
                <CheckboxInput
                    type="checkbox"
                    checked={isCompleted}
                    onChange={onChangeIsCompleted}
                />
            </td>
            <td>
                <TextInput
                    type="text"
                    onKeyDown={inputKeyDownHandler}
                    defaultValue={task}
                />
            </td>
            <td>
                <DeleteTodoButton onClick={deleteTaskHandler}>
                    <FaTrash color="orangered" fontSize={16} />
                </DeleteTodoButton>
            </td>
        </tr>
    )
}

export default TodoListItem