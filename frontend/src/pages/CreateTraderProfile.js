import React, { useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateTraderProfile() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [istrader, setIsTrader] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const artical = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      phonenumber: phonenumber,
      password: password,
      confirmpassword: confirmpassword,
    };
    console.log("artical : ", artical);

    axios
      .post("http://localhost:3000/traderprofiles", artical, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/TraderPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row" style={{ color: "#384047"}}>
      <div className="col-md-12">
        <div
          style={{
            margin: "10px auto",
            padding: "10px 20px",
            background: "#f4f7f8",
            borderRadius: "8px",
            maxWidth: "480px",            
            float:"left",
          }}
        >
          <h1 style={{ margin: "0 0 30px 0", textAlign: "center" }}>
            {" "}
            Trader Profile Registation Form{" "}
          </h1>
          <fieldset style={{ marginBottom: "30px", border: "none" }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                First Name:<br></br>
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Last Name:<br></br>
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                User Name:<br></br>
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                name="user_name"
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="email"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Email:<br></br>
              </label>
              <input
                type="email"
                id="mail"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Phone Number:<br></br>
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="password"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Password:<br></br>
              </label>
              <input
                type="password"
                id="password"
                name="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="password"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Confirm Password:<br></br>
              </label>
              <input
                type="password"
                id="password"
                name="user_password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: "90%", height: "5%" }}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            style={{
              padding: "19px 39px 18px 39px",
              color: "#FFF",
              backgroundColor: "black",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "normal",
              borderRadius: "5px",
              width: "100%",
              border: "1px solid black",
              borderWidth: "1px 1px 3px",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
              marginBottom: "10px",
            }}
            onClick={() => handleSubmit()}
          >
            Add
          </button>
          
          <Link to="/ItemsAdd">
            <div
              style={{
                padding: "19px 39px 18px 39px",
              color: "#FFF",
              backgroundColor: "black",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "normal",
              borderRadius: "5px",
              width: "82%",
              border: "1px solid black",
              borderWidth: "1px 1px 3px",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
              marginBottom: "10px",
              }}
            >
              Add a New Item
            </div>
            
            </Link>

            <Link to="/ItemsView">
            <div
              style={{
                padding: "19px 39px 18px 39px",
              color: "#FFF",
              backgroundColor: "black",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "normal",
              borderRadius: "5px",
              width: "82%",
              border: "1px solid black",
              borderWidth: "1px 1px 3px",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
              marginBottom: "10px",
              }}
            >
              View Item List
            </div>
            
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateTraderProfile;
