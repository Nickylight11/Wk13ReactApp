import React from "react";
import LoginButton from "./LoginButton";

export default class LoginForm extends React.Component {
  render() {
    return (
      <section className="loginSection">
        <div className="card w-75 mx-auto">
          <div className="card-header">
            <h3> Log In</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="col-sm-6">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" id="password" />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <LoginButton />
          </div>
        </div>
      </section>
    );
  }
}
