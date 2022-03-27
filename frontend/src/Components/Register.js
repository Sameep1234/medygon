import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: 0,
            type: "",
        }

        this.sendContract = this.sendContract.bind(this);
    }

    sendContract(e) {
        e.preventDefault();

        //send to smart contract
        
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
                        <div className="auth-input error">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name" id="name" />
                            <p className="auth-error">Name is a required field.</p>
                        </div>
                        <div className="auth-input">
                            <label htmlFor="age">
                                Age
                            </label>
                            <input type="number" name="age" id="age" />
                        </div>
                        <div className="auth-input">
                            <label htmlFor="type">
                                Type
                            </label>
                            <select name='type' id='type' className='auth-input' style={{ height: "20px" }}>
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
