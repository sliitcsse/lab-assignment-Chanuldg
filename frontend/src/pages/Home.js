import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          float:"left",
        }}
      >
        <div>
          <a
            href="CreateCuatomerProfile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
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
            >
              Add Customer
            </div>
          </a>
          <a
            href="CreateTraderProfile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
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
            >
              Add Trader
            </div>

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
              width: "100%",
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
              width: "100%",
              border: "1px solid black",
              borderWidth: "1px 1px 3px",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
              marginBottom: "10px",
              }}
            >
              View Item List
            </div>
            
            </Link>
          </a>
        </div>
      </div>
      <div><br></br><br></br><br></br><br></br><br></br><br></br>
     </div>
    </div>
  );
}

export default Home;
