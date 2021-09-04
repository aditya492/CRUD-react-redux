import React from "react";
import { Link } from "react-router-dom";
import Documents from "../Documents/Documents";
import Header from "../Layout/Header";
import "../../All.css"


const Dashboard = () => {
  return (
    <div>
     <div> <Header /></div>
      <div className="addDocument"><Link to="/add">Add Document</Link></div>
      <Documents />
    </div>
  );
};

export default Dashboard;
