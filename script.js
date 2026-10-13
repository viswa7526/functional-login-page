// Select the main container element
const container = document.getElementById('container');

// Select the overlay interaction buttons
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Select forms to prevent empty form reloads
const forms = document.querySelectorAll('form');

/**
 * Event Listener: Sign Up Trigger
 * Adds the 'active' class to push the overlay left and reveal the registration form.
 */
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

/**
 * Event Listener: Sign In Trigger
 * Removes the 'active' class to reset layout positions and reveal the entry form.
 */
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

/**
 * Optional: Prevent default browser submission behavior during interface tests
 */
forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Form field data retrieval placeholder
        console.log("Form submission caught without page reload.");
    });
});
