import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3 from 'web3'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  let [currentAccount, setCurrentAccount] = useState(null);

  async function login(provider) {
    await window.ethereum.request({ method: "eth_requestAccounts" })
      .then((res) => {
        console.log(res)
        setCurrentAccount(res[0])
        console.log("Metamask account connected: ", currentAccount)
      })

    if (currentAccount != null) {
      console.log("Metamask account connected: ", currentAccount)
    }
    /* 
        const web3 = new Web3(provider)
        const accounts = web3.eth.getAccounts()
    
        if (accounts.length == 0) {
          console.log("Please connect to MetaMask!");
        }
        else if (accounts[0] !== currentAccount) {
          setCurrentAccount(accounts[0]);
          console.log("Hash of connected metamask is: ", currentAccount)
     */
    /* contractInstance.get_patient_list(function (error, result) { // Backend + Mongo update
      if (!error) {
        var PatientList = result;
        for (var i = 0; i < PatientList.length; i++) {
          if (publicKey.toLowerCase() == PatientList[i]) {
            location.href = "./patient.html?key=" + publicKey;
          }
        }

      } else {
        console.log(error);
        console.log("Invalid Patient!");
      }
    });

    contractInstance.get_doctor_list(function (error, result) {
      if (!error) {
        var DoctorList = result;
        for (var i = 0; i < DoctorList.length; i++) {
          if (publicKey.toLowerCase() == DoctorList[i]) {
            location.href = "./doctor.html?key=" + publicKey;
          }
        }

      } else {
        console.log(error);
        console.log("Invalid Doctor!");
      }
    }); */
    // }
  }

  return (
    <div className="gradient-background mx-40 mt-80">
      <div className="panel-heading">
        <h3 className="text-center">Welcome to Medygon</h3>
      </div>
      <div className="panel-body">
        <div className="text-center">
          <button className="btn draw-border mr-1 mb-1" onClick={login}>Connect Wallet</button>
          <Link href="/register">
            <a className="btn draw-border">Register Here</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
