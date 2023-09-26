import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    id_type: "",
    id_number:"",
    gender:"",
  });

  const { firstname, lastname, dob, id_type, id_number, gender } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create Customer</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your Date of Birth"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
             </div>
            {/*<div className="mb-3">
              <label htmlFor="id_type" className="form-label">
                ID_type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Select your ID type"
                name="id_type"
                value={id_type}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="id_type" className="form-label">
              ID_type
            </label>
              <select
              className="form-select"
              name="id_type"
              value={id_type}
              onChange={onInputChange}
      >
             <option value="">Select your ID type</option>
            <option value="Aadhar">Aadhar</option>
            <option value="Passport">Passport</option>
            <option value="Driving_licence">Driving Licence</option>
            <option value="PAN">PAN</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="id_number" className="form-label">
                ID_number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your ID number"
                name="id_number"
                value={id_number}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Select your Gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
                <label htmlFor="id_type" className="form-label">
                    Gender
                </label>
                <select
                  className="form-select"
                  name="gender"
                  value={gender}
                  onChange={onInputChange}
      >
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
            
                </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
