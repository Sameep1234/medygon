import Link from 'next/link'
import { useState } from 'react'
import { ethers } from 'ethers'

export default function Home() {
  let [currentAccount, setCurrentAccount] = useState(null);

  async function requestAccount(event) {
    if (window.ethereum) { // Check whether the browser has metamask or not
      try { // Get account address
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setCurrentAccount(accounts[0])
      }
      catch (error) {
        alert("Error connecting metamask")
      }
    }
    else {
      alert("Please install metamask extention")
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount() // Set state for account address
      
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log(provider)
    }
  }

  return (
    <div className="gradient-background mx-40 mt-80">
      <div className="panel-heading">
        <h3 className="text-center">Welcome to Medygon</h3>
      </div>
      <div className="panel-body">
        <div className="text-center">
          <button className="btn draw-border mr-1 mb-1" onClick={connectWallet}>Connect Wallet</button>
          <Link href="/register">
            <a className="btn draw-border">Register Here</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
