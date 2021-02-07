import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import EditEmployee from "./EditEmployee";
import { Dashboard } from "./Dashboard";
import EmployeeList from "./EmployeeList";


function Routes() {
  return (
    <>
      <Route path="/" render={() => <Navbar />} />
      <Route path="/" exact render={() => <Dashboard/>} />
      <Route path="/allEmployee" render={() => <EmployeeList />} />
      <Route path="/editEmployee/:id" render={props => <EditEmployee {...props} />} />
    </>
  );
}

export default Routes;