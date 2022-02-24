import React from "react";
import {Link} from "react-router-dom";
export const FormTable = ({ dataArray }) => {
  return (
    <div className="container text-center">
      <h3>Table List</h3>
      {/* <Link to="/Profiles"> Profile</Link> */}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {dataArray.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.uname}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                 
                </td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
};
