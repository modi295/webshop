import React from 'react';
import { Link } from 'react-router-dom';

function OrderPlaced() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <h3 style={{ marginLeft: "-100px" }}>Order placed succesfully!!!</h3>

            <img src='https://www.legalraasta.com/wp-content/uploads/2017/06/legalraasta.gif' height="500"></img>
            <Link to="/feedback">
                <b>Give Feedback Here.... </b>
            </Link>
        </div>
    )
}

export default OrderPlaced;