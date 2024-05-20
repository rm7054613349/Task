import React, { useState } from 'react';
import axios from 'axios';
import './FetchConfiguration.css';

const FetchConfiguration = () => {
  const [configId, setConfigId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchConfig = async () => {
    setLoading(true);
    setError('');
    setData(null);

    try {

         
        // const response = await axios.get(`https://task-2-423l.onrender.com/api/configurations/${configId}`);
      const response = await axios.get(`https://task-3-vh3k.onrender.com/api/configurations/${configId}`);
      if (response.data.length === 0) {
        setError('No data found');
      } else {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching configuration:", error);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setConfigId(e.target.value);
    setError('');
  };

  return (
    <div className="fetch-config-container">
      <h1>Fetch Config</h1>
      <div className="input-section">
        <label>Config to update (configId):</label>
        <input
          type="text"
          value={configId}
          onChange={handleChange}
          placeholder="Enter Config ID"
        />
        <button onClick={fetchConfig}>Submit</button>
      </div>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {data && (
        <div className="data-section">
          {data.map((row, index) => (
            <div key={index} className="data-row">
              {row.join(', ')}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchConfiguration;
