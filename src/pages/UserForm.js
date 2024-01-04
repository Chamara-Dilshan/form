import React, { useState } from 'react';

const UserForm = () => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [illnessType, setIllnessType] = useState('');

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    updateIllnessType(e.target.value, location);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    updateIllnessType(time, e.target.value);
  };

  const updateIllnessType = (selectedTime, selectedLocation) => {
    if (selectedLocation === 'top front' && selectedTime === '3days') {
      setIllnessType('Migrane');
    } else if (selectedLocation === 'right front' && selectedTime === '2days') {
      setIllnessType('Serious Headache');
    } else {
      setIllnessType('Normal Headache');
    }
  };

  return (
     
      <div style={{ margin: '20px', border: '1px solid gray', padding: '90px', backgroundColor: 'lightgray', minHeight: '60vh' }}>
        <h1>Diagonosis Form</h1>
        <label style={{ display: 'block', margin: '20px 0' }}>
          Time Period:
          <select
            name="time"
            value={time}
            onChange={handleTimeChange}
            style={{ marginLeft: '10px', marginTop: '10px' }}
          >
            <option value="">Select</option>
            <option value="1day">1 Day</option>
            <option value="2days">2 Days</option>
            <option value="3days">3 Days</option>
          </select>
        </label>
    
        <label style={{ display: 'block', margin: '20px 0' }}>
          Pain Location:
          <select
            name="location"
            value={location}
            onChange={handleLocationChange}
            style={{ marginLeft: '10px', marginTop: '10px' }}
          >
            <option value="">Select</option>
            <option value="left front">Left Front</option>
            <option value="right front">Right Front</option>
            <option value="top front">Top Front</option>
          </select>
        </label>
    
        <div className="suggestion-list" style={{ marginTop: '20px' }}>
          <strong>Suggestion List:</strong>
          <ul>
            <li style={{ fontWeight: illnessType === 'Migrane' ? 'bold' : 'normal' }}>Migrane</li>
            <li style={{ fontWeight: illnessType === 'Normal Headache' ? 'bold' : 'normal' }}>Normal Headache</li>
            <li style={{ fontWeight: illnessType === 'Serious Headache' ? 'bold' : 'normal' }}>Serious Headache</li>
            <li style={{ fontWeight: illnessType === 'Dehydration' ? 'bold' : 'normal' }}>Dehydration</li>
          </ul>
        </div>
      </div>
    );
    
  
};

export default UserForm;
