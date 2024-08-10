import React from 'react';
import '../css/Customers.css';

const customerData = [
  { id: '001', name: 'Kamal Perera', address: 'No. 45, Galle Road, Colombo', email: 'kamal@example.com', contact: '+94 77 123 4567' },
  { id: '002', name: 'Nimal Fernando', address: 'No. 123, Kandy Road, Kandy', email: 'nimal@example.com', contact: '+94 71 987 6543' },
  { id: '003', name: 'Sunil Jayawardena', address: 'No. 78, Matara Road, Galle', email: 'sunil@example.com', contact: '+94 75 234 5678' },
  { id: '004', name: 'Anura Wijesinghe', address: 'No. 90, Peradeniya Road, Peradeniya', email: 'anura@example.com', contact: '+94 77 456 7890' },
  { id: '005', name: 'Samanthi Senanayake', address: 'No. 10, Kurunegala Road, Kurunegala', email: 'samanthi@example.com', contact: '+94 72 678 9012' },
];

const Customers = () => {
  return (
    <div className="customers-container">
      <div className="customers-header">
        <h2>Customers</h2>
      </div>
      <div className="customers-table">
        <table>
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
