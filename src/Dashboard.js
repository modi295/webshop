
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { useEffect } from 'react';
import Footer from './Footer';

function Dashboard() {



    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:44354/api/Admin/productList").then((result) => {
            result.json().then((resp) => {
                setproduct(resp)

            })

        })

    }, [])

    function deleteUser(productId) {
        fetch(`http://localhost:44354/api/Admin/deleteProduct/${productId}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                if (resp.Status == 'Invalid') {
                    alert("product doesn't exist");
                }
                else {
                    alert('Product deleted succesfully');

                }

            })
        })
    }

    return (

        < div className="animated fadeIn" >

            < Row >

                < Col >

                    < Card >

                        < CardHeader >

                            < i className="fa fa-align-justify" ></i > <h3>Product List</h3>

                        </CardHeader >

                        < CardBody >

                            < Table hover bordered striped responsive size="sm" >

                                < thead>

                                    < tr>
                                        < th > Product Id</th >
                                        < th > Product Name</th >
                                        < th > Product Price</th >
                                        < th > Product Category</th >
                                        < th > Product Description</th >
                                        < th > Action</th >

                                    </tr >

                                </thead >

                                < tbody >
                                    {product.map((data) => {
                                        return <tr>
                                            <td>{data.productId}</td>
                                            <td>{data.productName}</td>
                                            <td>{data.productPrice}</td>
                                            <td>{data.productCategory}</td>
                                            <td>{data.productDescription}</td>

                                            <td><Link to="/UpdateProduct"><button class="btn btn-info">Update</button></Link></td>
                                            <td><Link to="/ProductList"><button class="btn btn-danger" onClick={() => deleteUser(data.productId)} >Delete</button></Link></td>

                                        </tr>

                                    })
                                    }
                                </tbody >

                            </Table >

                        </CardBody >

                    </Card >

                </Col >

            </Row >
            <Link to="/addproduct"><button class="btn btn-info">Add product</button></Link>
            <hr></hr>
            <div>
                <Footer />
            </div>

        </div>





    );
}
export default Dashboard;