import React from "react";
import { Link } from "react-router-dom";

function TraderPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <div>
          <a href="ItemsAdd" style={{ textDecoration: "none", color: "black" }}>
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
              Add Items
            </div>
          </a>
          <a
            href="ItemsView"
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
              View Item List
            </div>
          </a>
          <a
            href="ViewCustomers"
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
              Vide Customer List
            </div>
          </a>
          <a
            href="AddPromotions"
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
              Add Promo
            </div>
          </a>
          <a
            href="ViewPromotions"
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
              View Promo
            </div>
          </a>
        </div>
      </div><br></br><br></br><br></br><br></br>
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
              width: "14%",
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
              width: "14%",
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
  );
}

export default TraderPage;
