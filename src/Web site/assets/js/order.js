function toggleServiceOptions() {
    // Hide all service option sections
    document.querySelectorAll('.service-options').forEach(option => option.style.display = 'none');
    
    // Get the selected order type
    const selectedService = document.getElementById('service_type').value;
    
    // Display the corresponding options based on the selected service type
    if (selectedService === 'book') {
      document.getElementById('book_options').style.display = 'block';
    } else if (selectedService === 'hand_bill') {
      document.getElementById('hand_bill_options').style.display = 'block';
    } else if (selectedService === 'visiting_card') {
      document.getElementById('visiting_card_options').style.display = 'block';
    } else if (selectedService === 'file') {
      document.getElementById('file_options').style.display = 'block';
    }
  }
  
  // Add event listener to call toggleServiceOptions when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    toggleServiceOptions();
  });
  
  // Add event listener to the dropdown to trigger the toggle function whenever the selection changes
  document.getElementById('service_type').addEventListener('change', toggleServiceOptions);

  // Function to handle drag and drop
function setupDragAndDrop() {
    const dropZone = document.getElementById('drop_zone');
    const fileInput = document.getElementById('design_file');
  
    // Highlight the drop zone when dragging over
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
  
    // Remove highlight when dragging leaves the drop zone
    dropZone.addEventListener('dragleave', (e) => {
      dropZone.classList.remove('drag-over');
    });
  
    // Handle file drop
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      
      const files = e.dataTransfer.files; // Get the dropped files
      if (files.length) {
        fileInput.files = files; // Assign dropped files to the hidden file input
        dropZone.textContent = `${files[0].name} uploaded`; // Show file name in the drop zone
      }
    });
  
    // Fallback to file input when clicking the drop zone
    dropZone.addEventListener('click', () => {
      fileInput.click();
    });
  
    // Update drop zone text when a file is selected via input (for browsers without drag-and-drop)
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        dropZone.textContent = `${fileInput.files[0].name} selected`;
      }
    });
  }
  
  // Initialize the drag and drop functionality when the page loads
  document.addEventListener('DOMContentLoaded', setupDragAndDrop);
  