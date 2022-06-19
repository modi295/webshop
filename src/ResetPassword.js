import { React } from 'react';
import Footer from './Footer';
import { useState } from 'react'

function ResetPassword() {
    const [userId, setuserid] = useState('')
    const [secretQuestion, setsq] = useState('')
    const [sqAnswer, setsqa] = useState('')
    const [password, setpwd] = useState('')

    function updatepassword() {

        let item = { userId, secretQuestion, sqAnswer, password }
        console.warn("item", item)
        fetch(`http://localhost:44354/api/Admin/updatePassword/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((Response) => {
            Response.json().then((result) => {
                console.log(result);
                if (result.Status == 'Invalid') {
                    alert("Something went wrong");
                }
                else {
                    alert('Password changed succesfully');
                }

            })
        })
    }
    return (
        <div>
            <h2>Change password</h2><hr></hr>
            <section style={{ textAlign: 'left' }}>
                <div className="container">
                    <div className="col-xl-9">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>USER ID</h4>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={(e) => { setuserid(e.target.value); }} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4>SECRET QUESTION</h4>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={(e) => { setsq(e.target.value); }} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4>SQ ANSWER</h4>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={(e) => { setsqa(e.target.value); }} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4>NEW PASSWORD</h4>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={(e) => { setpwd(e.target.value); }} required></input>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr></hr>
            <button className="btn btn-primary" onClick={updatepassword}>SAVE</button>
            <hr></hr>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default ResetPassword;