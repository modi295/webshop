
import React, { useState } from 'react';
import './Products.css';
import { connect } from 'react-redux';

const Products = ({ filter_name }) => {
    const [pr_Id, setid] = useState('')
    const [pr_Name, setname] = useState('')
    const [pr_Price, setprice] = useState('')
    const [pr_Cat, setcat] = useState('')
    const [pr_Description, setdesc] = useState('')
    const [pr_Url, seturl] = useState('')
    const [product, setproduct] = useState([]);
    const [cloneData, setclonedata] = useState([]);
    React.useEffect(() => {
        fetch("http://localhost:44354/api/Admin/productList").then((result) => {
            result.json().then((resp) => {
                setproduct(resp);
                setclonedata(resp);
            })

        })

    }, [])

    React.useEffect(() => {
        if (filter_name != "All") {
            let specific = cloneData.filter(item => item.productCategory === filter_name);
            setproduct(specific);
        }
        else {
            setproduct(cloneData);
        }
    }, [filter_name])
    function p_id(e) {
        setid(e.target.value)
    }
    function p_name(e) {
        setname(e.target.value)
    }
    function p_price(e) {
        setprice(e.target.value)
    }
    function p_category(e) {
        setcat(e.target.value)
    }

    function p_desc(e) {
        setdesc(e.target.value)
    }
    function p_url(e) {
        seturl(e.target.value)
    }

    function addtocart() {
        let data = { pr_Name, pr_Price, pr_Description }
        alert(pr_Name);
        fetch("http://localhost:44354/api/Orders/addproduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp)
            })
        })
    }
    return (
        <div>
            <center>

                <div>
                    {product.length > 0 ?
                        <div className='container'>
                            <div className='row'>
                                {product.map((item) => (

                                    <div className='product'>
                                        <div style={{ padding: "30px" }} key={item.productId}>
                                            <img src={item.productUrl} className='product_img'></img>
                                            <div >

                                                <h5 className='card-title' onChange={p_name}>{item.productName}</h5>
                                                <h5 className='card-text' onChange={p_desc}>{item.productDescription}</h5>
                                                <h5 className='card-text' onChange={p_price}><b>Rs.{item.productPrice}</b></h5>
                                                <button className='btn btn-primary' onClick={addtocart}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>

                                )
                                )}
                            </div>
                        </div>
                        :
                        <div>

                        </div>

                    }



                </div>

            </center>
        </div>
    )
}

const mapStateToProps = state => ({
    filter_name: state.FilterReducer.filter_name
})
export default connect(mapStateToProps)(Products);