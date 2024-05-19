import React, { useState } from 'react';
import axios from 'axios';
import './UpdateRemark.css';

const UpdateRemark = () => {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const updateRemark = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/api/configurations/${configId}`, { remark });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating remark:", error);
    }
  };

  return (
    <div className="update-remark-container">
      <h1>Update Remark</h1>
      
      <div className="input-section">
        <label htmlFor="configId">Config to update (configId):</label>
        <input
          id="configId"
          type="text"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          placeholder="Enter Config ID"
        />
      </div>
      
      <div className="input-section">
        <label htmlFor="remark">Remark:</label>
        <textarea
          id="remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder="Enter Remark"
        ></textarea>
      </div>
      
      <button onClick={updateRemark}>Submit</button>
      
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default UpdateRemark;
