import React, { Component } from 'react'
import Web3 from 'web3'

// Change Contract Name to our contract name
var medical;

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: 0,
            type: "patient",
        }

        this.sendContract = this.sendContract.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    sendContract(e) {
        e.preventDefault();

        //send to smart contract
        medical.methods.add_agent()
    }

    handleInputChange(e)
    {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.name]: value,
        })
    }

    async initializeWeb3() {
        const contract_abi = null
        const contract_address = null

        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable()

        medical = web3.eth.Contract(contract_abi, contract_address)
    }

    render() {
        return (
            <div className="auth">
                <div className="auth-container">
                    <div className="auth-logo">
                        <h1 style={{ color: '#0064FF' }}>Medygon</h1>
                    </div>
                    <form action method="post" className="auth-form">
                        <h1>Sign in</h1>
                        <div className="auth-input">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input required onChange={this.handleInputChange} type="text" name="name" id="name" />
                            {/* <p className="auth-error">Name is a required field.</p> */}
                        </div>
                        <div className="auth-input">
                            <label htmlFor="age">
                                Age
                            </label>
                            <input required onChange={this.handleInputChange} type="number" name="age" id="age" />
                        </div>
                        <div className="auth-input">
                            <label htmlFor="type">
                                Type
                            </label>
                            <select required onChange={this.handleInputChange} name='type' id='type' className='auth-input' style={{ height: "20px" }}>
                                <option value='patient'>Patient</option>
                                <option value='doctor'>Doctor</option>
                            </select>
                        </div>
                        <button onClick={this.sendContract} type="submit" name="submit" className="auth-btn">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
