import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('User saved successfully!');
        setFormData({ firstName: '', lastName: '', email: '' });
      } else {
        alert('Failed to save user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to backend.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md w-80">
      <h2 className="text-lg font-semibold mb-4">User Form</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
