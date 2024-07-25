const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: 'User created successfully' });
  });
  app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
  });
  app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({ message: 'User updated successfully' });
  });
  app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User deleted successfully' });
  });
  const createUserForm = document.getElementById('create-user-form');
const usersContainer = document.getElementById('users-container');

createUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
async function fetchUsers() {
  try {
    const response = await fetch('/users');
    const data = await response.json();
    usersContainer.innerHTML = '';
    data.forEach((user) => {
      const userElement = document.createElement('div');
      userElement.textContent = `${user.name} (${user.email})`;
      usersContainer.appendChild(userElement);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();