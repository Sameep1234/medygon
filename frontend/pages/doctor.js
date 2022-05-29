import React from 'react'

export default function doctor() {
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
            </div>
          </div>
        </div>
      </div>
      <div className="panel gradient-background">
        <div className="panel-heading">
          <h3 className="text-center">Accessible EMRs</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <table id="viewPatient" className="table table-hover">
                <tbody><tr>
                  <th>Patient</th>
                  <th className="publicKeyPatient">Public Key</th>
                  <th>Action</th>
                </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}