import React from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
class CustomerLogin extends React.Component {

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
        fetch('http://localhost:44354/Api/Customer/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                userId: this.state.userId,
                password: this.state.password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid') {
                    alert('Invalid User');
                }

                else {

                    this.props.history.push('/Home');

                }

            })
    }

    render() {

        return (
            <div>
                <div className="container">
                    <h2 style={{ color: "#055755" }}>Customer Login Form</h2>
                    <hr></hr>
                    <section style={{ textAlign: 'left' }}>
                        <div class="container">
                            <div class="col-xl-9">

                                <div class="row">
                                    <div class="col-md-3">
                                        <label>USER ID</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" onChange={this.userId}></input>
                                    </div>
                                </div>
                                <br/>
                                <div class="row">
                                    <div class="col-md-3">
                                        <label>PASSWORD</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="password" class="form-control" onChange={this.password}></input>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>

                    <button type="submit" onClick={this.login} class="btn btn-success">LOGIN</button>


                    <br/> 
                    <Link to="/customerregistration">
                        <a>Don't have account?Register</a>
                    </Link>
                    <br/>
                    <Link to="/changepassword">
                        <a>Forgot password?Click here</a>
                    </Link>
                </div>
                <hr></hr>
                <br/><br/> <br/><br/> <br/>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(CustomerLogin);
