import React from 'react';
import './App.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
class AdminLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            password: ''
        }

        this.password = this.password.bind(this);
        this.userId = this.userId.bind(this);
        this.login = this.login.bind(this);
    }

    userId(event) {
        this.setState({ userId: event.target.value })
    }
    password(event) {
        this.setState({ password: event.target.value })
    }
    login(event) {
        debugger;
        fetch('http://localhost:44354/Api/Admin/login', {
            method: 'post',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: this.state.userId,
                password: this.state.password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push('/Dashboard');
            })
    }

    render() {

        return (
            <div>
                <div className="container">
                    <h2 style={{ color: "#055755" }}>Admin Login Form</h2>
                    <hr></hr>
                    <section style={{ textAlign: "center" }}>
                        <div className="container">
                            <div className="col-xl-9">

                                <div className="row">
                                    <div className="col-md-3">
                                        <label>USER ID</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={this.userId}></input>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>PASSWORD</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="password" className="form-control" onChange={this.password}></input>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr> 
                    <button type="submit" onClick={this.login} className="btn btn-success">LOGIN</button>

                </div>
                <br></br>
                <Link to="/resetpassword">
                    <a>Forgot password?Click here</a>
                </Link>
                <hr></hr>
                <br/><br/> <br/><br/> <br/>
                
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(AdminLogin);