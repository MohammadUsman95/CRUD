import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

// Employee Name
//Employee Id
//Employee Designation
//Employee Email
//Employee Education
//Employee Address
// Employee Salary
// Employee SALARY
// Employee Joining Date
// Employee Performance

const AddEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const [isUpdate, setIsUpdating] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("location", state);

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "Normanl",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isUpdate) {
      setEmployeeList([...employeeList, formValue]);
      setFormValue({
        EmployeeName: "",
        EmployeeId: "",
        Designation: "",
        Email: "",
        Education: "",
        Address: "",
        Salary: "",
        JoiningDate: "",
        Performance: "Normanl",
      });
    }else{
      const updating = employeeList?.map((item, index)=>{
      return index === state?.ind ? {...item, ...formValue } : item;
    });
    setEmployeeList(updating);
    setIsUpdating(false)
    navigate("/");
    }
  };

  useEffect(() => {
    if (state?.data) {
      setIsUpdating(true);
      setFormValue({ ...state?.data});
    }
  }, [state?.data]);

  console.log("employee-List", employeeList);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="m-0">AddEmployee</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EmployeeName
                    </label>
                    <input
                      type="text"
                      placeholder="Employee Name"
                      className="form-input"
                      name="EmployeeName"
                      value={formValue?.EmployeeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EmployeeId
                    </label>
                    <input
                      type="text"
                      placeholder="Employee Id"
                      className="form-input"
                      name="EmployeeId"
                      value={formValue?.EmployeeId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Designation
                    </label>
                    <input
                      type="text"
                      placeholder="Designation"
                      className="form-input"
                      name="Designation"
                      value={formValue?.Designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-input"
                      name="Email"
                      value={formValue?.Email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Education
                    </label>
                    <input
                      type="text"
                      placeholder="Education"
                      className="form-input"
                      name="Education"
                      value={formValue?.Education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-input"
                      value={formValue?.Address}
                      onChange={handleChange}
                      name="Address"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Salary
                    </label>
                    <input
                      type="text"
                      placeholder="Salary"
                      className="form-input"
                      name="Salary"
                      value={formValue?.Salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      JoiningDate
                    </label>
                    <input
                      type="date"
                      placeholder="Joining Date"
                      className="form-input"
                      name="JoiningDate"
                      value={formValue?.JoiningDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      Performance
                    </label>
                    <select
                      className="form-select"
                      name="Performance"
                      value={formValue?.Performance}
                      onChange={handleChange}
                    >
                      <option value="Normal">Normal</option>
                      <option value="Average">Average</option>
                      <option value="Exellent">Exellent</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary" type="Submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
