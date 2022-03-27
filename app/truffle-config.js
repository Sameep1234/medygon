/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 */
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const mnemonic = process.env.mnemonic
// const fs = require("fs");
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/v3/e628195dce684a88979174a43a49d9d0"
        );
      },
      network_id: 4,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },
};