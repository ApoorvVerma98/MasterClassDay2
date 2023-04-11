import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
    
  });

  const [savedData, setSavedData] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSavedData([...savedData, formData]); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      location: ''
    });
  };

  return (
    <div className={styles.container}>
      <section className={styles.formSection}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Save</button>
        </form>
      </section>
      <section className={styles.liveUiSection}>
        <h2>Live UI</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Location: {formData.location}</p>
      </section>
      <section className={styles.savedDataSection}>
        <h2>Saved Data</h2>
        {savedData.map((data, index) => (
          <div key={index}>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Location: {data.location}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Form;
