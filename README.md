# Medygon 👾

This project was a part of Ingenious Hackathon 3.0

## Overview
- Blockchain-based medical records on Polygon's Matic network 
- Medygon solves the problem of tampering with medical records through blockchain's immutability.
- Currently, Doctors and Patients are the stakeholders considered in the transaction.
- Initially, the Patient grants access to the Doctor.
- Only after that, the Doctor can view the patient in his/her list and add documents for that Patient.
- The uploaded report can be viewed by the Patient - and each upload is identified by the Doctor's public key.

## Pre-requisities

Node, npm, Truffle, Ganache, React, Metamask
## Tech Stack

**Polygon:** Ethereum sidechain to store the records

**Solidity:** To write smart contracts

**Truffle:** Compiling .sol files

**Ganache:** Personal local blockchain

**IPFS:**  distributed hypermedia protocol

**React:** Client facing website

## Architecture
![](app/media/architecture.png)
## Processes
![](app/media/image.png)
## Demo

Insert gif or link to demo


## Run Locally

#### Clone the project

```bash
  git clone https://kutt.it/medygon
```
### Ganache
- Open the Ganache desktop client 
- Under Server tab:
    - Set Hostname to 127.0.0.1 -lo
    - Set Port Number to 8545
    - Enable Automine
- Under Accounts & Keys tab:
    - Enable Autogenerate HD Mnemonic
### IPFS
- Fire up your terminal and run `ipfs init`
```bash
  ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
  ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
  ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'
```
### Truffle 
```
  npm install -g truffle
  truffle compile
  truffle migrate --network matic
```
### Running the DApp
* Connect Metamask to `localhost:8485`
```bash
  cd app
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```
* Open `localhost:3000`
## Authors

- [Parth Shah](https://www.github.com/parthmshah1302)
- [Malav Doshi](https://www.github.com/malav312)
- [Sameep Vani](https://www.github.com/Sameep1234)
- [Samkit Kundalia](https://www.github.com/samkitk)



## License

[MIT](https://choosealicense.com/licenses/mit/)




### Agent Smart Contract 
- Rinkeby -> `0xc18ef3db0e61b74739a615483249bdac16f9fcfa28b500e139e5a4a0aea30e8b`
- Matic -> 
  - Txn Hash - `0x8de03b46074825f13691b03e7178fd905b5c82ad1f5da52253d4c1363eecbeb7`
  - Contract Address - `0xBc17152E46998E6B1b7615f06442af53e03F82d8`

### Smart Contract Details

❯ truffle migrate --network matic
⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'matic'
> Network id:      80001
> Block gas limit: 20000000


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xfc7d53c65cab9096b76d1c44fab3337f4d18db4be01341c2d107adb27694193d
   > Blocks: 1            Seconds: 8
   > contract address:    0xb1B94F6213fA3e53F81ceD878f5d5f4cFEfE2526
   > account:             0x4E4F07Cb512346F10a74ca8AC4aDC0deC318b9d3
   > balance:             1.35261920312331325
   > gas used:            245924
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00491848 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 26105930)
   > confirmation number: 2 (block: 26105931)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00491848 ETH


2_deploy_agent.js
=================

   Deploying 'Agent'
   -----------------
   > transaction hash:    0x1801e484f2de99f97806651e3054d450fd77a909a40138abc24130bd904c30ce
   > Blocks: 0            Seconds: 4
   > contract address:    0x4f72ba25bb8cb56aa63F5ced1c73A51d57fCCd68
   > account:             0x4E4F07Cb512346F10a74ca8AC4aDC0deC318b9d3
   > balance:             1.31605836312331325
   > gas used:            1782268
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03564536 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 26105934)
   > confirmation number: 2 (block: 26105935)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03564536 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.04056384 ETH


## Latest Contract (Apr 27, 7:04 PM)

❯ truffle migrate --network matic
⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'matic'
> Network id:      80001
> Block gas limit: 20000000


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x927728d4770edbe38651a2279315e7ae2346520c584c006e308656eeaddb3121
   > Blocks: 0            Seconds: 5
   > contract address:    0xE595379c3e7851b70cDEF91F030C11f0261C74f2
   > account:             0x4E4F07Cb512346F10a74ca8AC4aDC0deC318b9d3
   > balance:             1.31056640312331325
   > gas used:            245924
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00491848 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 26106486)
   > confirmation number: 2 (block: 26106487)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00491848 ETH


2_deploy_agent.js
=================

   Deploying 'Agent'
   -----------------
   > transaction hash:    0x121695474146de5d260446ae6bca96353d09a9a44f11f47d299856ddfb4908fa
   > Blocks: 0            Seconds: 4
   > contract address:    0x74abE38f1E905fe10faFf07BC5CC55bbf5F8cc16
   > account:             0x4E4F07Cb512346F10a74ca8AC4aDC0deC318b9d3
   > balance:             1.27400508312331325
   > gas used:            1782292
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03564584 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 26106490)
   > confirmation number: 2 (block: 26106491)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03564584 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.04056432 ETH