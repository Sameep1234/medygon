import React, { useState, useEffect } from 'react'

export const Login = () => {
  const [currentAccount, setCurrentAccount] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts;
        console.log("ACCOUNT LENGTH: ", accounts.length);
        console.log("ACCOUNT: ", accounts);
        account.map((acc) => {
          console.log("Found an authorized account:", acc);
          setCurrentAccount(currentAccount.push(acc));
        })
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    // connectWallet();
  })

  // if(currentAccount)
  // {
  //   temp = <div>
  //     {currentAccount && (
  //         <button className="waveButton" onClick={connectWallet}>
  //           Connect Wallet
  //         </button>
  //       )}
  //   </div>
  // }
  // else
  // {
  //   temp = <button>Register</button>
  // }
  return (
    <div className="mainContainer">
      {currentAccount && (
        <button className="waveButton" onClick={connectWallet}>
          Connect Wallet
        </button>)}
    </div>
  );
}
