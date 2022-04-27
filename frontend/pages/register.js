export default function Register() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Medygon</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="./index.html">Login</a>
              </li>
              <li className="active">
                <a href="./register.html">Register</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
      <div className="container">
        <div className="panel gradient-background">
          <div className="panel-heading">
            <h3 className="text-center">Please enter your details to register.</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="alert alert-warning col-sm-8 col-sm-offset-2" style={{ display: 'none' }}>
                <strong>Warning!</strong> Invalid public key. Please enter a valid public key to register.
              </div>
              <div className="alert alert-info col-sm-8 col-sm-offset-2" style={{ display: 'none' }}>
                <strong>Info!</strong> User already registered. Please check your details.
              </div>
            </div>
            <form name="registerForm" className="form-horizontal" action="./doctor.html">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="name" placeholder="Enter name" name="Name" required autofocus />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="age">Age:</label>
                <div className="col-sm-8">
                  <input type="age" className="form-control" id="age" placeholder="Enter age" name="Age" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="designation" className="control-label col-sm-2">Registering as</label>
                <div className="col-sm-8">
                  <select className="form-control" id="designation" required>
                    <option selected disabled>-- Please Select --</option>
                    <option value={0}>Patient</option>
                    <option value={1}>Doctor</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="text-center">
              <button className="btn draw-border" onclick="addAgent()">Register</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>

  )
}