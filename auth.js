import { createUser, createAppointment, getAllUsers, getAllAppointments } from './database.js';

function registerUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const id = email; //for example

  createUser(id, name, email, password, phone);
}

function bookAppointment() {
  const date = document.getElementById('appointmentDate').value;
  const time = document.getElementById('appointmentTime').value;
  const service = document.getElementById('appointmentService').value;
  const userId = 'user1'; //for testing purposes
  const appointmentId = userId+date+time; //for example

  createAppointment(appointmentId, userId, date, time, service);
}

async function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const users = await getAllUsers();
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert('Login successful');
  } else {
    alert('Invalid credentials');
  }
}

async function displayAppointments() {
  const appointments = await getAllAppointments();
  const appointmentsSection = document.getElementById('appointments-section');
  appointmentsSection.innerHTML = ''; // Clear previous appointments

  appointments.forEach(appointment => {
    const appointmentParagraph = document.createElement('p');
    appointmentParagraph.textContent = `Date: ${appointment.date}, Time: ${appointment.time}, Service: ${appointment.service}, User ID: ${appointment.userId}`;
    appointmentsSection.appendChild(appointmentParagraph);
  });
}


document.getElementById('loginButton').addEventListener('click', (event) => {
    event.preventDefault();
    loginUser();
  });



document.getElementById('registerButton').addEventListener('click', registerUser);

document.getElementById('bookAppointmentButton').addEventListener('click', bookAppointment);


window.addEventListener('load', displayAppointments);

