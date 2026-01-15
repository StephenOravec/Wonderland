// Wonderland Login Handler
// This will connect to auth.wonderland.oravec.io once backend is ready

const loginButton = document.getElementById('loginButton');
const statusDiv = document.getElementById('status');

// Login button click handler
loginButton.addEventListener('click', () => {
  loginButton.disabled = true;
  statusDiv.textContent = 'Authentication backend not yet deployed...';
  statusDiv.className = 'info';
  
  // Re-enable button after 2 seconds
  setTimeout(() => {
    loginButton.disabled = false;
    statusDiv.textContent = '';
    statusDiv.className = '';
  }, 2000);
  
  // Once backend is ready, uncomment this line:
  // window.location.href = 'https://auth.wonderland.oravec.io/auth/login';
});

// Check for error parameters in URL
const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');

if (error) {
  let message;
  switch(error) {
    case 'unauthorized':
      message = 'Your email is not authorized. Please contact an administrator.';
      break;
    case 'invalid_state':
      message = 'Security validation failed. Please try again.';
      break;
    case 'auth_failed':
      message = 'Authentication failed. Please try again.';
      break;
    default:
      message = 'An error occurred during login.';
  }
  
  statusDiv.textContent = message;
  statusDiv.className = 'error';
}