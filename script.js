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
