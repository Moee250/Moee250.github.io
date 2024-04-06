document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var isValid = true;
        var validationMessage = '';

        var name = document.getElementById('name').value;
        if (!name.match(/^[A-Za-z\s]{3,}$/)) {
            isValid = false;
            validationMessage += 'Full Name must contain at least three letters and spaces only.\n';
        }

        var email = document.getElementById('email').value;
        if (email.length === 0 || !email.includes('@')) {
            isValid = false;
            validationMessage += 'Please enter a valid email address.\n';
        }

        var age = document.getElementById('age').value;
        if (age < 18 || age > 99) {
            isValid = false;
            validationMessage += 'Age must be between 18 and 99.\n';
        }

        var website = document.getElementById('website').value;
        if (website.length === 0 || (!website.startsWith('http://') && !website.startsWith('https://'))) {
            isValid = false;
            validationMessage += 'Please enter a valid URL for your personal website.\n';
        }

        if (isValid) {
            console.log('Form is valid. Submitting...');
            form.submit(); 
        } else {
            alert(validationMessage);
        }
    });

});
