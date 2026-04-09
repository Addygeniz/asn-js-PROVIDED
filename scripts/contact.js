// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitBtn = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // stop the form from trying to submit/reload
    contactPage.innerHTML = '<p class="large-text">Thank you for your message!</p>';
});
