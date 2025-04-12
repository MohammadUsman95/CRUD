import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { listContext } from "../App";

const ListEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const navigate = useNavigate();

  const handleView = (index) => {
    navigate(`/view/${index + 1}`);
  };

  const handleDelete = (ind) =>{
    const afterDelete = employeeList?.filter((_, index) => index !==ind);
    setEmployeeList(afterDelete);
  };

  const handleUpdate = (emp, index) =>{
    navigate("/add", {state:{data:emp, ind:index}})
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">Employee List</h4>
              <NavLink to="/add" className="btn btn-primary">
                Create New
              </NavLink>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center">SR.NO</th>
                    <th className="text-center">NAME</th>
                    <th className="text-center">ID</th>
                    <th className="text-center">EMAIL</th>
                    <th className="text-center">DESIGNATION</th>
                    <th className="text-center">PERFORMANCE</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList?.map((employee, index) => {
                    return (
                      <tr key={index + 1}>
                        <th className="text-center">{index + 1}</th>
                        <td className="text-center">
                          {employee?.EmployeeName}
                        </td>
                        <td className="text-center">{employee?.EmployeeId}</td>
                        <td className="text-center">{employee?.Email}</td>
                        <td className="text-center">{employee?.Designation}</td>
                        <td className="text-center">{employee?.Performance}</td>
                        <td className="text-center">
                          <i
                            className="fa-solid fa-eye pe-2 pointer text-primary pointer"
                            onClick={() => handleView(index)}
                          ></i>
                          <i className="fa-solid fa-pen-to-square pe-2 cursor-pointer text-success pointer" onClick={()=>handleUpdate(employee, index)}></i>
                          <i
                            className="fa-solid fa-trash pe-2 cursor-pointer text-danger pointer"
                            onClick={() => handleDelete(index)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
