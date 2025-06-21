
function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const error = document.getElementById('register-error');

  if (username === '' || password === '') {
    error.textContent = 'Please fill all fields.';
    return;
  }

  if (localStorage.getItem(username)) {
    error.textContent = 'Username already exists.';
    return;
  }

  localStorage.setItem(username, password);
  alert('Registration successful! You can now login.');
  window.location.href = 'log.html';
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const error = document.getElementById('login-error');

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword || storedPassword !== password) {
    error.textContent = 'Invalid username or password.';
  } else {
    alert('Login successful!');
    window.location.href = 'new.html';
  }
}
