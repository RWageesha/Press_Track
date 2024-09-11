import React, { useState } from 'react';
import '../css/Supplier.css'; // Make sure to create this CSS file

const suppliersList = [
  'item# - Amal Wijesooriya                   ',
  'item# - Kamal Hewagama                      ',
  'item# - Sunil Jayaweera',
  'item# - Nimal Rathnasena',
  'item# - Nayana Senadeera',
  'item# - Devin Hapuarachchi',
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
        <h2>SUPPLIERS</h2>
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
