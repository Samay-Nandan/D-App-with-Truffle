//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TaskContract {
    event AddTask(address recipient, uint256 taskId);
    event DeleteTask(uint256 taskId);
    event UpdateTask(uint256 taskId);

    struct Task {
        uint256 id;
        address username;
        string task;
        bool isCompleted;
    }

    Task[] private tasks;

    function addTask(string memory task, bool isCompleted) external {
        uint256 taskId = tasks.length;
        tasks.push(Task(taskId, msg.sender, task, isCompleted));
        emit AddTask(msg.sender, taskId);
    }

    function getTasks() external view returns (Task[] memory) {
        return tasks;
    }

    function deleteTask(uint256 taskId) external {
        delete tasks[taskId];
        emit DeleteTask(taskId);
    }

    function updateTask(
        uint256 taskId,
        string memory task,
        bool isCompleted
    ) external {
        tasks[taskId].task = task;
        tasks[taskId].isCompleted = isCompleted;
        emit UpdateTask(taskId);
    }
}
