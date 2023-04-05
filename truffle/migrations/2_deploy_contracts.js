const Task = artifacts.require("TaskContract");

module.exports = function (deployer) {
  deployer.deploy(Task);
};
