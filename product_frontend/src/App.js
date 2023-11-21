// import "antd/dist/antd.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewProduct from "./pages/AddNewProduct";
import AllProduct from "./pages/AllProduct/AllProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/add" exact Component={AddNewProduct} />
        {/* <Route path='/allstudent' exact Component={AllStudents}/>  */}
        <Route path="/" exact Component={AllProduct} />
        {/* <Route path="/edit/:studentId" exact Component={EditStudent} /> */}
      </Routes>
    </Router>
  );
};

export default App;
