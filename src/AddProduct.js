import { useState } from "react";
function AddProduct() {
    const [productId, setpid] = useState('')
    const [productName, setpname] = useState('')
    const [productPrice, setpprice] = useState('')
    const [productCategory, setpcategory] = useState('')
    const [productDescription, setpdesc] = useState('')
    const [productUrl, setpurl] = useState('')

    function register1(e) {
        let data = { productId, productName, productPrice, productCategory, productDescription, productUrl }
        fetch("http://localhost:44354/api/Admin/addproduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                if (resp.Status == 'Invalid') {
                    alert('Product Id already exists try with another Id');
                }
                else {
                    alert('Product added successfully');
                }
            })
        })
    }
    function p_id(e) {
        setpid(e.target.value)
    }
    function p_name(e) {
        setpname(e.target.value)
    }
    function p_price(e) {
        setpprice(e.target.value)
    }
    function p_category(e) {
        setpcategory(e.target.value)
    }

    function p_desc(e) {
        setpdesc(e.target.value)
    }
    function p_url(e) {
        setpurl(e.target.value)
    }

    return (
        <div>

            <div className="container">
                <h3> Product Registration form</h3>
                <hr></hr>
                <form onSubmit={register1}>
                    <section style={{ textAlign: 'left' }}>
                        <div className="container">
                            <div className="col-xl-9">

                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT ID</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={p_id} required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT NAME</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={p_name} required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT PRICE</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={p_price} required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT CATEGORY</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-control" onChange={p_category} required>
                                            <option>--select option--</option>
                                            <option>Electronics</option>
                                            <option>Home Appliances</option>
                                            <option>Fashion</option>
                                            <option>Groceries</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT DESCRIPTION</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={p_desc} required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4>PRODUCT URL</h4>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" onChange={p_url} required></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                    <button type="submit" className="btn btn-primary">AddProduct</button>

                </form>


            </div>

        </div>
    )
}
export default AddProduct;