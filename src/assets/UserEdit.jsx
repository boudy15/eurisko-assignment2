import React, { useState } from 'react';

const UserEdit = ({ userToEdit, onUserUpdate, onClose, statusOptions, isDarkMode }) => {
  const [name, setName] = useState(userToEdit.name);
  const [email, setEmail] = useState(userToEdit.email);
  const [status, setStatus] = useState(userToEdit.status);
  const [dob, setDob] = useState(userToEdit.dob);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dobError, setDobError] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setDobError('');

    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!dob) {
      setDobError('Date of birth is required');
      isValid = false;
    }

    if (isValid) {
      const updatedUser = {
        id: userToEdit.id,
        name,
        email,
        status,
        dob,
      };
      onUserUpdate(updatedUser);
    }
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: isDarkMode ? '#333' : 'white',
    color: isDarkMode ? 'white' : 'black',
    padding: '30px',
    borderRadius: '8px',
    border: `1px solid ${isDarkMode ? '#666' : '#ddd'}`,
    width: '400px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: isDarkMode ? '#444' : 'white',
    color: isDarkMode ? 'white' : 'black',
    border: `1px solid ${isDarkMode ? '#666' : '#ccc'}`,
    boxSizing: 'border-box',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.8em',
    marginBottom: '5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  return (
    <div style={modalStyle}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} placeholder="Enter Name" />
          {nameError && <div style={errorStyle}>{nameError}</div>}
        </label>
        <label style={labelStyle}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} placeholder="Enter Email" />
          {emailError && <div style={errorStyle}>{emailError}</div>}
        </label>
        <label style={labelStyle}>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)} style={inputStyle}>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label style={labelStyle}>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={inputStyle} />
          {dobError && <div style={errorStyle}>{dobError}</div>}
        </label>
        <div style={buttonContainerStyle}>
          <button type="submit" style={{ ...buttonStyle, backgroundColor: '#3251D0', color: 'white' }}>
            Save
          </button>
          <button type="button" onClick={onClose} style={{ ...buttonStyle, backgroundColor: '#f44336', color: 'white' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;