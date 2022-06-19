import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function CustomerReg() {
  const [userId, setuid] = useState("");
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [password, setpwd] = useState("");
  const [reenterPassword, setrpwd] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [emailId, setemail] = useState("");
  const [contactNo, setcontactno] = useState("");
  const [address, setaddress] = useState("");
  const [district, setdistrict] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [pincode, setpincode] = useState("");
  const [secretQuestion, setsq] = useState("");
  const [sqAnswer, setsqa] = useState("");

  function register1(e) {
    let data = {
      userId,
      firstName,
      lastName,
      password,
      reenterPassword,
      dob,
      gender,
      emailId,
      contactNo,
      address,
      district,
      state,
      pincode,
      secretQuestion,
      sqAnswer,
      country,
    };

    fetch("http://localhost:44354/api/Customer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        if (resp.Status == "Invalid") {
          alert("User Id already exists try with another one");
        } else {
          alert("Registration successful");
        }
      });
    });
  }
  function u_id(e) {
    setuid(e.target.value);
  }
  function f_name(e) {
    setfname(e.target.value);
  }
  function l_name(e) {
    setlname(e.target.value);
  }
  function c_pwd(e) {
    setpwd(e.target.value);
  }
  function c_rpwd(e) {
    setrpwd(e.target.value);
  }
  function c_dob(e) {
    setdob(e.target.value);
  }
  function c_gender(e) {
    setgender(e.target.value);
  }
  function c_mail(e) {
    setemail(e.target.value);
  }
  function c_no(e) {
    setcontactno(e.target.value);
  }
  function c_addr(e) {
    setaddress(e.target.value);
  }
  function c_dis(e) {
    setdistrict(e.target.value);
  }
  function c_state(e) {
    setstate(e.target.value);
  }
  function c_country(e) {
    setcountry(e.target.value);
  }
  function c_pincode(e) {
    setpincode(e.target.value);
  }
  function c_sq(e) {
    setsq(e.target.value);
  }
  function c_sqa(e) {
    setsqa(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <h2
          style={{
            color: "#055755",
          }}
        >
          Customer Registration Form
        </h2>
        <hr></hr>
        <form onSubmit={register1}>
          <section style={{ textAlign: "center" }}>
            <div className="container">
              <div className="col-xl-9">
                <div className="row">
                  <div className="col-md-3">
                    <label>USER ID</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={u_id}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>FIRST NAME</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={f_name}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>LAST NAME</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={l_name}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>PASSWORD</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      onChange={c_pwd}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>RE-ENTER PASSWORD</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      onChange={c_rpwd}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>DOB</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      onChange={c_dob}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>GENDER</label>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      onChange={c_gender}
                      required
                    >
                      <option>--select option--</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>EMAIL ID</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_mail}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>CONTACT NO</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_no}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>ADDRESS</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_addr}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>DISTRICT</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_dis}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>STATE</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_state}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>COUNTRY</label>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      onChange={c_country}
                      required
                    >
                      <option>--select option--</option>
                      <option>India</option>
                      <option>France</option>
                      <option>China</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>PINCODE</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_pincode}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>SECRET QUESTION</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_sq}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>SQ ANSWER</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      onChange={c_sqa}
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr></hr>
          <button type="submit" className="btn btn-success">
            Register
          </button>
          <br></br>
          <br></br>
          <Link to="/CustomerLogin">Go to login!!!</Link>
        </form>
      </div>
      <hr></hr>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default CustomerReg;
