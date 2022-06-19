import { useState } from 'react'
function UpdateProduct() {
    const [productId, setp_id] = useState('')
    const [productName, setp_name] = useState('')
    const [productPrice, setp_price] = useState('')
    const [productCategory, setp_category] = useState('')
    const [productDescription, setp_desc] = useState('')
    const [productUrl, setp_url] = useState('')


    function updateproduct() {

        let item = { productId, productName, productPrice, productCategory, productDescription, productUrl }
        console.warn("item", item)
        fetch(`http://localhost:44354/api/Admin/updateProduct/${productId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                if (resp.Status == 'Success') {
                    alert("Product Id:" + productId + "  Updated!")
                }
                else {
                    alert("Invalid product Id");
                }

            })
        })
    }

    return (
        <div>

            <div className="container">
                <h3> Product Update form</h3>
                <hr></hr>

                <section style={{ textAlign: 'left' }}>
                    <div className="container">
                        <div className="col-xl-9">
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>PRODUCT ID</h4>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" onChange={(e) => { setp_id(e.target.value); }} required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>PRODUCT NAME</h4>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" onChange={(e) => { setp_name(e.target.value); }} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>PRODUCT PRICE</h4>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" onChange={(e) => { setp_price(e.target.value); }} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>PRODUCT CATEGORY</h4>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-control" onChange={(e) => { setp_category(e.target.value); }} required>
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
                                    <input type="text" className="form-control" onChange={(e) => { setp_desc(e.target.value); }} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>PRODUCT URL</h4>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" onChange={(e) => { setp_url(e.target.value); }} required />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr></hr>

                <button className="btn btn-primary" onClick={updateproduct} >Update Product</button>




            </div>


        </div>
    )

}
export default UpdateProduct;
