module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  contracts_build_directory: "../src/truffle_abis",
  compilers: {
    solc: {
      version: "0.8.15",
    }
  },
};
