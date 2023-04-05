import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputTodoItem from "./components/InputTodoItem";
import TodoListItem from "./components/TodoListItem";
import { Task } from "./contracts";
import { useConnectWallet } from "./hooks";
import { AppContainer, H1, Table } from "./styles/App.styles";
import { SET_TODO_LIST } from "./store/types/todo";
import { toast } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.Wallet);
  const { todoList } = useSelector((state) => state.Todo)

  useConnectWallet();

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: SET_TODO_LIST, payload: await Task.getTaskList() })
      } catch (error) {
        toast.error(error.code, { toastId: error.code })
      }
    }
    )()
  }, [dispatch])

  if (!account) return <H1>Connect to Metamask</H1>;

  return (
    <AppContainer>
      <H1>Connected Account: {account}</H1>
      <InputTodoItem />
      <Table>
        <tbody>
          <tr>
            <th>isCompleted</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
          {
            todoList.map(({ index, task, isCompleted }) =>
              <TodoListItem key={index} id={index} task={task} isCompleted={isCompleted} />)
          }
        </tbody>
      </Table>
    </AppContainer>
  );
}

export default App;
