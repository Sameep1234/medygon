import React from 'react'

export default function patient() {
  return (
    <div className="container">
      <div className="panel gradient-background">
        <div className="panel-heading">
          <h3 className="text-center">Personal Information</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <table className="table">
                <tbody><tr>
                  <th>Name:</th>
                  <td id="name" />
                </tr>
                  <tr>
                    <th>Age:</th>
                    <td id="age" />
                  </tr>
                </tbody></table>
              <div className="text-center">
                <h5>Your records are stored here: http://localhost:8080/ipfs/<span id="recordsHash" /></h5>
                <button type="submit" className="btn btn-info btn-lg" onclick="showRecords(this)">View medical records</button>
              </div>
              <pre id="records" style={{ marginTop: 20 }}>{"\n"}{"                            "}</pre>
            </div>
          </div>
        </div>
      </div>
      <div className="panel gradient-background">
        <div className="panel-heading">
          <h3 className="text-center">Share your Medical Record</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal" action="/action_page.php">
            <div className="form-group">
              <label htmlFor="permitDoctorList" className="control-label col-sm-2">Doctor:</label>
              <div className="col-sm-8">
                <select className="form-control" id="permitDoctorList">
                  <option selected disabled>-- Please Select --</option>
                </select>
              </div>
            </div>
          </form>
          <div className="text-center">
            <button onclick="giveAccess()" className="btn btn-primary btn-lg">Submit</button>
          </div>
        </div>
      </div>
      <div className="panel gradient-background">
        <div className="panel-heading">
          <h3 className="text-center">Current EMR access holders</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <table id="accessDoc" className="table table-hover">
                <tbody><tr>
                  <th>Doctor</th>
                  <th className="publicKeyDoctor">Public Key</th>
                  <th>Revoke access</th>
                </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}