import { useState } from "react";
import { Task } from "../contracts";
import { TodoForm, TodoInput, TodoButton } from "../styles/components/InputTodoItem.styles";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { SET_TODO_LIST } from "../store/types/todo";
import { toast } from 'react-toastify';

const DEFAULT_FORM = {
    task: ''
}

const InputTodoItem = () => {

    const { todoList } = useSelector((state) => state.Todo);
    const { account } = useSelector((state) => state.Wallet);

    const dispatch = useDispatch();

    const [form, setForm] = useState(DEFAULT_FORM);

    const inputChangeHandler = (e) => setForm({ [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Task.addNewTask(form.task, false);
            if(todoList.length === 0) return window.location.reload()
            const payload = {
                index: +todoList[todoList.length - 1].index + 1,
                address: account,
                task: form.task,
                isCompleted: false
            }
            dispatch({ type: SET_TODO_LIST, payload: [...todoList, payload] })
            setForm(DEFAULT_FORM);
        } catch (error) {
            toast.error(error.info.error.message, { toastId: error.info.error.message })
        }
    }

    return (
        <TodoForm onSubmit={handleSubmit}>
            <TodoInput
                placeholder="Add todo"
                value={form.task}
                onChange={inputChangeHandler}
                name="task"
            />
            <TodoButton onClick={handleSubmit}>
                <FaPlusCircle color={"darkcyan"} fontSize={20} />
            </TodoButton>
        </TodoForm>
    )
}

export default InputTodoItem