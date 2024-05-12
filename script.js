function translateText() {
    var textElement = document.getElementById("thepage-text");
    var translateButton = document.getElementById("translate-btn");
    
    if (textElement.textContent.trim() === "Welcome to our page! Here you can find information about me, view my photos, listen to my playlist, like my content, generate QR codes, ask questions, and get in touch with me. Feel free to explore!") {
        textElement.textContent = "ברוכים הבאים לעמוד שלנו! כאן תוכלו למצוא מידע אודותי, לראות את התמונות שלי, להאזין לרשימת השירים שלי, לפרגן בלייקים לתוכן שלי, לשאול שאלות, וליצור קשר איתי. אל תהססו לחקור!";
        translateButton.textContent = "Translate to English";
    } else {
        textElement.textContent = "Welcome to our page! Here you can find information about me, view my photos, listen to my playlist, like my content, generate QR codes, ask questions, and get in touch with me. Feel free to explore!";
        translateButton.textContent = "תרגם לעברית";
    }
}


function replaceText() {
  var button = document.getElementById('next-button');
  var aboutText = document.getElementById('about-me').querySelector('p');
  if (button.innerHTML === '>>') {
      aboutText.innerHTML = 'Hello hello';
      button.innerHTML = '<<';
  } else {
      aboutText.innerHTML = 'Mois, a resilient soul of 85 years, was born on May 7, 1939, in the vibrant city of Haifa, Israel. His journey through life has been woven with the threads of love and companionship, as he has been joyfully married to Josy for six fruitful decades. Mois embodies a life rich in experiences, marked by the tapestry of family, love, and cherished memories. Through the years, he has weathered the storms of time with grace and resilience, leaving an indelible mark on the hearts of those around him. His journey stands as a testament to the enduring power of love and the beauty of a life well-lived.';
      button.innerHTML = '>>';
  }
}



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



