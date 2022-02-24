import React, { useState } from "react";
import { FormTable } from "./FormTable";
export const Form = () => {
  const [data, setData] = useState({
    uname: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "",
  });
  const [dataArray, setdataArray] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    const newData = {
      ...data,
      id: Math.floor(Math.random() * 1000),
    };
    setdataArray([...dataArray, newData]);
  };

  return (
    <>
      <h3 className="text-center">Fill the form</h3>
      <div className="container">
        <form className="row g-3" onSubmit={submit}>
          <div className="col-md-6">
            <label htmlFor="uname" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={data.uname}
              onChange={handleInput}
              className="form-control"
              name="uname"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={handleInput}
              className="form-control"
              name="email"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              value={data.phone}
              onChange={handleInput}
              className="form-control"
              name="phone"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              value={data.dob}
              onChange={handleInput}
              className="form-control"
              name="dob"
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              value={data.city}
              onChange={handleInput}
              className="form-control"
              name="city"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="district" className="form-label">
              District
            </label>
            <input
              type="text"
              value={data.district}
              onChange={handleInput}
              className="form-control"
              name="district"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="province" className="form-label">
              Province Number
            </label>
            <select
              id="province"
              value={data.province}
              onChange={handleInput}
              className="form-select"
              name="province"
            >
              <option>Choose...</option>
              <option>Province No.1</option>
              <option>Province No.2</option>
              <option>Province No.3</option>
              <option>Province No.4</option>
              <option>Province No.5</option>
              <option>Province No.6</option>
              <option>Province No.7</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              id="country"
              value={data.country}
              onChange={handleInput}
              className="form-select"
              name="country"
            >
              <option value="Nepal">Nepal</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>China</option>
              <option>England</option>
              <option>India</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-sm btn-success">
              Submit
            </button>
          </div>
        </form>
        <FormTable dataArray={dataArray} />
      </div>
    </>
  );
};
