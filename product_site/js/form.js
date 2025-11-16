// Brandon Ezovski, 11/16/2025, JavaScript to handle form validation and feedback on homepage.html

document.addEventListener('DOMContentLoaded', function() {
    // Get form and input elements
    var form = document.querySelector('form');
    var nameInput = document.getElementById('name');
    var favoriteCharInput = document.getElementById('FavoriteChar');
    var fromRIRadio = document.getElementById('FromRI');
    var notFromRIRadio = document.getElementById('NotFromRI');

    // Create message display elements for feedback
    var nameMessage = document.createElement('span');
    nameMessage.id = 'nameMessage';
    nameMessage.style.display = 'block';
    nameMessage.style.fontSize = '0.9em';
    nameInput.parentNode.insertBefore(nameMessage, nameInput.nextSibling);

    var charMessage = document.createElement('span');
    charMessage.id = 'charMessage';
    charMessage.style.display = 'block';
    charMessage.style.fontSize = '0.9em';
    favoriteCharInput.parentNode.insertBefore(charMessage, favoriteCharInput.nextSibling);

    var radioMessage = document.createElement('span');
    radioMessage.id = 'radioMessage';
    radioMessage.style.display = 'block';
    radioMessage.style.fontSize = '0.9em';
    // Insert after the <br> tag following the radio buttons
    var brAfterRadio = notFromRIRadio.parentNode.querySelector('br:nth-of-type(3)');
    if (brAfterRadio) {
        brAfterRadio.parentNode.insertBefore(radioMessage, brAfterRadio);
    } else {
        // Fallback: insert after parent form element's third child
        var formParent = notFromRIRadio.parentNode;
        formParent.insertBefore(radioMessage, formParent.children[7]);
    }

    // Focus event listener for name input - display helpful message
    nameInput.addEventListener('focus', function() {
        nameMessage.textContent = 'Please enter your name (cannot be blank, max 55 characters).';
        nameMessage.style.color = 'blue';
    });

    // Blur event listener for name input - validate input
    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            nameMessage.textContent = 'Error: Name cannot be blank.';
            nameMessage.style.color = 'red';
        } else if (nameInput.value.length > 55) {
            nameMessage.textContent = 'Error: Name must be 55 characters or less.';
            nameMessage.style.color = 'red';
        } else {
            nameMessage.textContent = '✓ Valid';
            nameMessage.style.color = 'green';
        }
    });

    // Focus event listener for favorite character input - display helpful message
    favoriteCharInput.addEventListener('focus', function() {
        charMessage.textContent = 'Please enter your favorite character (cannot be blank, max 55 characters).';
        charMessage.style.color = 'blue';
    });

    // Blur event listener for favorite character input - validate input
    favoriteCharInput.addEventListener('blur', function() {
        if (favoriteCharInput.value.trim() === '') {
            charMessage.textContent = 'Error: Favorite character cannot be blank.';
            charMessage.style.color = 'red';
        } else if (favoriteCharInput.value.length > 55) {
            charMessage.textContent = 'Error: Favorite character must be 55 characters or less.';
            charMessage.style.color = 'red';
        } else {
            charMessage.textContent = '✓ Valid';
            charMessage.style.color = 'green';
        }
    });

    // Focus event listeners for radio buttons - display helpful message
    fromRIRadio.addEventListener('focus', function() {
        radioMessage.textContent = 'Please select whether you are from Rhode Island.';
        radioMessage.style.color = 'blue';
    });

    notFromRIRadio.addEventListener('focus', function() {
        radioMessage.textContent = 'Please select whether you are from Rhode Island.';
        radioMessage.style.color = 'blue';
    });

    // Blur event listeners for radio buttons - validate selection
    function validateRadio() {
        if (!fromRIRadio.checked && !notFromRIRadio.checked) {
            radioMessage.textContent = 'Error: Please select an option.';
            radioMessage.style.color = 'red';
        } else {
            radioMessage.textContent = '✓ Valid';
            radioMessage.style.color = 'green';
        }
    }

    fromRIRadio.addEventListener('blur', validateRadio);
    notFromRIRadio.addEventListener('blur', validateRadio);

    // Also validate radio when changed
    fromRIRadio.addEventListener('change', function() {
        radioMessage.textContent = '✓ Valid';
        radioMessage.style.color = 'green';
    });

    notFromRIRadio.addEventListener('change', function() {
        radioMessage.textContent = '✓ Valid';
        radioMessage.style.color = 'green';
    });

    // Form submit event listener - prevent default and display success message
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Final validation check
        var isValid = true;
        var errorMessages = [];

        if (nameInput.value.trim() === '') {
            errorMessages.push('Name cannot be blank.');
            isValid = false;
        }

        if (favoriteCharInput.value.trim() === '') {
            errorMessages.push('Favorite character cannot be blank.');
            isValid = false;
        }

        if (!fromRIRadio.checked && !notFromRIRadio.checked) {
            errorMessages.push('Please select whether you are from Rhode Island.');
            isValid = false;
        }

        if (isValid) {
            // Display success message
            var successMessage = document.createElement('div');
            successMessage.style.backgroundColor = '#4CAF50';
            successMessage.style.color = 'white';
            successMessage.style.padding = '15px';
            successMessage.style.marginTop = '10px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.textAlign = 'center';
            successMessage.textContent = 'Success! Your responses have been recorded.';
            
            form.parentNode.insertBefore(successMessage, form.nextSibling);

            // Optional: Clear form after submission
            // form.reset();
            // nameMessage.textContent = '';
            // charMessage.textContent = '';
            // radioMessage.textContent = '';
        } else {
            // Display error message
            var errorDiv = document.createElement('div');
            errorDiv.style.backgroundColor = '#f44336';
            errorDiv.style.color = 'white';
            errorDiv.style.padding = '15px';
            errorDiv.style.marginTop = '10px';
            errorDiv.style.borderRadius = '5px';
            errorDiv.textContent = 'Error: ' + errorMessages.join(' ');
            
            // Remove any previous error messages
            var existingError = document.querySelector('[style*="background-color: rgb(244, 67, 54)"]');
            if (existingError) {
                existingError.remove();
            }
            
            form.parentNode.insertBefore(errorDiv, form.nextSibling);
        }
    });
});
