import React from 'react';
import { Link } from 'react-router-dom'

function Feedback() {
    function thankyou() {
        alert('Thanks for your valuable feedback!!!');

    }
    return (
        <div >
            <center>
                <div style={{ margin: "150px 100px 0px 100px", textAlign: "left" }} >
                    <div className="col-xl-9">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>FEEDBACK:</h4>
                            </div>
                            <div className="col-md-4">
                                <input type="text" height="200px" className="form-control" required></input>
                            </div>
                            <Link to="/Home">
                                <button className='btn btn-primary' onClick={thankyou}>SUBMIT</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Feedback;