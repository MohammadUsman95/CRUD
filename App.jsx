import React, { useState, createContext } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./Component/AddEmp";
import ViewEmp from "./Component/ViewEmp";
import ListEmp from "./Component/ListEmp";
import "./App.css";

const listContext = createContext(); // Export the context here

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <listContext.Provider value={{ employeeList, setEmployeeList }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListEmp />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/view/:id" element={<ViewEmp />} />
        </Routes>
      </Router>
    </listContext.Provider>
  );
};

export { listContext }; 

export default App;
