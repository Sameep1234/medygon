pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract medygon {
    mapping(address => doctor() doctorId;
    mapping(address => patient() patientId;

    struct recordHash {
        address ipfsHash;
    }

    record[] public recordHash;

    function sendHash(string x) public {
        ipfsHash = x;
    }

    function getHash() public view returns (string x) {
        // address = zombies.push(record(ipfsHash);
        return ipfsHash;
    }

    function hashToPatient(address patientId) private view {}

    // function viewDoctor(address _owner)
    //     external
    //     view
    //     returns (uint256[] memory)
    // {
    //     uint256[] memory result = new uint256[](ownerZombieCount[pa]);
    //     uint256 counter = 0;
    //     for (uint256 i = 0; i < zombies.length; i++) {
    //         if (zombieToOwner[i] == _owner) {
    //             result[counter] = i;
    //             counter++;
    //         }
    //     }
    //     return result;
    // }
}
