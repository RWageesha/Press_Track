import React, { useState } from 'react';
import '../css/Supplier.css'; // Make sure to create this CSS file

const suppliersList = [
  'Amal',
  'Kamal',
  'Sunil',
  'Nimal',
  'Nayana',
  'Amara',
];

const Supplier = () => {
  const [filter, setFilter] = useState('');
  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliersList);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterApply = () => {
    setFilteredSuppliers(
      suppliersList.filter((supplier) =>
        supplier.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <div className="supplier-container">
      <div className="supplier-header">
        <h2>Supplier</h2>
      </div>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter Suppliers"
          value={filter}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <button onClick={handleFilterApply} className="apply-btn">
          Apply
        </button>
      </div>
      <div className="supplier-list-section">
        <h3>All Suppliers</h3>
        <div className="supplier-list">
          {filteredSuppliers.map((supplier, index) => (
            <div key={index} className="supplier-item">
              {supplier}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
