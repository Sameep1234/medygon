import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  let [currentAccount, setCurrentAccount] = useState(null);
  let [patient_redirect, redirectPatient] = useState(false);
  let [doctor_redirect, redirectDoctor] = useState(false);

  async function requestAccount(event) {
    if (window.ethereum) { // Check whether the browser has metamask or not
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setCurrentAccount(accounts[0])
      console.log("Connected wallet address is: ", currentAccount)
    }
    else {
      alert("Please install metamask extention")
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount() // Set state for account address

      axios.get("/api/patientHandler")
        .then((response) => {
          console.log("Patient Response: ", JSON.stringify(response.data))
          if (response.data.data.length != 0) {
            response.data.data.map((patient) => {
              if (patient.public_hash === currentAccount) {
                redirectPatient(true)
              }
            })
          }
        })
        .catch((error) => {
          alert("Error in fetching patient details")
        })

      axios.get('/api/doctorHandler')
        .then((response) => {
          console.log("Doctor Response: ", JSON.stringify(response.data))
          if (response.data.data.length != 0) {
            response.data.data.map((doctor) => {
              if (doctor.public_hash === currentAccount) {
                redirectDoctor(true)
              }
            })
          }

        })
    }
    else {
      alert("Please install metamask extention")
    }
  }

  useEffect(() => {
    if (patient_redirect) {
      router.push("/patient")
    }
    else if (doctor_redirect) {
      router.push("/doctor")
    }
  }, [patient_redirect, doctor_redirect])

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
