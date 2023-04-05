import TaskContract from "../../truffle_abis/TaskContract.json"
import { ethers } from "ethers";
import { EMPTY_ADDRESS } from "../../constants/ethereum";

export const Task = async () => {
    const abi = TaskContract.abi;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contractAddress = TaskContract.networks["5777"].address;
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
}

export const getTaskList = async () => {
    const taskContract = await Task()
    const taskList = await taskContract.getTasks()
    if (taskList.length <= 0) return [];
    const tasks = [];
    for (const iterator of taskList) {
        const [index, address, task, isCompleted] = iterator;
        if (address === EMPTY_ADDRESS) continue;
        const payload = {
            index: index.toString().replaceAll("n", ""),
            address,
            task,
            isCompleted
        }
        tasks.push(payload)
    }
    return tasks;
}

export const addNewTask = async (task, isCompleted) => {
    const taskContract = await Task()
    await taskContract.addTask(task, isCompleted)
}

export const deleteTaskById = async (taskId) => {
    const taskContract = await Task()
    await taskContract.deleteTask(taskId)
}

export const updateTask = async (taskId, task, isCompleted) => {
    const taskContract = await Task()
    await taskContract.updateTask(taskId, task, isCompleted)
}