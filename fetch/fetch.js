import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/submitForm");
        const responseData = response.data;

        if (responseData.success === false) {
          setError(true);
        } else {
          setData(responseData); // Assuming your response is an array of data
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
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Password</th>
                <th>StrongPassword</th>
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
                </tr>
              ))}
            </tbody>
          </table>

          {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
          {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-md-12 text-center">
          <button style={{ textAlign: 'center' }} className='border px-2 py-1 bg-black text-white w-1/12 rounded-lg' onClick={HandleData}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
