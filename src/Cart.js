
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Footer from './Footer';
import './Container/Products.css';




function Cart() {
    const [orders, setorders] = useState([]);
    const [quantity, setquantity] = useState(1);
    useEffect(() => {
        fetch("http://localhost:44354/api/Orders/ordersList").then((result) => {
            result.json().then((resp) => {
                setorders(resp)

            })

        })

    }, [])

    function decrement() {
        if (quantity > 0) {
            setquantity(quantity - 1);
        }
        else {
            alert('Min value should be 1');
        }

    }
    function increment() {
        setquantity(quantity + 1);
    }

    function deleteprd(pr_Id) {
        fetch(`http://localhost:53177/api/Orders/deleteProduct/${pr_Id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)

            })
        })
    }



    return (
        <div>
            <center>

                <div>
                    {orders.length > 0 ?
                        <div className='container'>
                            <h1 style={{ color: "#d56260", textAlign: "Center" }}></h1>
                            <div className='row'>
                                {orders.map((item) => (
                                    <div className='product' style={{ padding: "30px" }} key={item.pr_Id}>

                                        <img src={item.pr_Url} className='product_img'></img>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.pr_Name}</h5>
                                            <h5 className='card-text'>{item.pr_Description}</h5>
                                            <div className='card-text'><b>Rs.{item.pr_Price}</b></div>
                                            <div>
                                                <button style={{ marginRight: "8px", backgroundColor: "lightblue" }} onClick={decrement}><b>-</b></button>
                                                {quantity}
                                                <button style={{ marginLeft: "8px", backgroundColor: "lightblue" }} onClick={increment}><b>+</b></button>
                                            </div><br></br>
                                            <button className="btn btn-danger" onClick={() => deleteprd(item.pr_Id)} >Remove</button>
                                        </div>
                                    </div>
                                )
                                )}




                            </div>
                            <div style={{ textAlign: 'left' }} className="col-xl-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PAYMENT MODE</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-control" required>
                                            <option>--select option--</option>
                                            <option>UPI</option>
                                            <option>DEBIT/CREDIT</option>
                                            <option>NET BANKING</option>
                                            <option>CASH ON DELIVERY</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>ADDRESS</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" required></input>
                                    </div>

                                </div>
                            </div>
                            <hr></hr>
                            <Link to="/orderplaced">
                                <button className='btn btn-success'>Order Now</button>
                            </Link>
                        </div>
                        :
                        <div>
                            <center><h4>Cart is Empty</h4></center>
                        </div>

                    }



                </div>

            </center>
            <hr></hr>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Cart;