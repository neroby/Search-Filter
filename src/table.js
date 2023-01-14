import React from "react";
import { Users } from "./users";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
