'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/schools");
        const responseData = response.data;

        if (responseData.success === false) {
          setError(true);
        } else {
          setData(responseData.products); 
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='pt-32 pb-80'>
      <div className="container-fluid mx-auto border">
        <div className="col-md-12">
          <table className="table table-bordered table-dark bg-dark">
            <thead>
              <tr>
                <th>Index</th>
                <th>School Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Contact Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.school}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.contactnumber}</td>
                  <td>{user.email}</td>
                  <td>{user.image}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
