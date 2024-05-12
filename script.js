
// Function to open the modal with the clicked photo
function openModal(imageSrc) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImage');

  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

