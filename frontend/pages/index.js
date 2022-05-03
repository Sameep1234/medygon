import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import web3 from 'web3'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  let [currentAccount, setCurrentAccount] = useState(null);

  async function login(provider) {
    /*  await window.ethereum.request({ method: "eth_requestAccounts" })
       .then((res) => {
         console.log(res)
         setCurrentAccount(res[0])
         console.log("Metamask account connected: ", currentAccount)
       })
 
     if (currentAccount != null) {
       console.log("Metamask account connected: ", currentAccount)
     } */

    publicKey = web3.currentProvider.selectedAddress;
    publicKey = publicKey.toLowerCase();
     setCurrentAccount(publicKey)
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
