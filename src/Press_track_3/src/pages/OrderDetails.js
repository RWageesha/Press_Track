import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../css/OrderDetails.css';

const OrderDetails = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const order = location.state || {};

  // Function to generate and download the PDF
  const handleQuotationDownload = async () => {
    const input = document.getElementById('quotation-preview'); // Element to capture
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust image to fit PDF size
    pdf.save(`Quotation_Order_${orderId}.pdf`);
  };

  return (
    <div className="order-details-container">
      <div className="order-details-header">
        <h2>ORDER {orderId}</h2>
        <Link to="/orders/new" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i>
        </Link>
      </div>
      <div className="order-details-content">
        <div className="order-details-box">
          <h3>Order Details</h3>
        </div>
        <div className="container my-5">
          <div id="quotation-preview" className="card"> {/* ID for PDF generation */}
            <div className="card-body">
              <p><strong>ID:</strong> {order.id}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Customer Email:</strong> {order.userEmail}</p>
              <p><strong>Date & Time:</strong> {order.dateTime}</p>
              <p><strong>Description:</strong> {order.description}</p>
              <p><strong>Total:</strong> ${order.price}</p>

            </div>
          </div>
        </div>
        <div className="order-final-actions">
          <div className="button-group">
            <button onClick={handleQuotationDownload} className="ok-btn">
              Download PDF
            </button>
            {/* <button className="dropdown-btn">
              <i className="bi bi-caret-down-fill"></i>
            </button> */}
          </div>
          <button className="ok-btn">Send Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
