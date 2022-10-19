const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3001;
const admin = {
  username: 'admin',
  password: 'password123'
}
const bookings = [];
let token = '';

app.use(cors());
app.use(express.json());

app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  if (username === admin.username && password === admin.password) {
    token = uuidv4();
    return res.jsonp({ token });
  } else {
    return res.status(403).jsonp({ message: 'Bad Credentials'});
  }
});

app.post('/booking', (req, res) => {
  const payload = req.body;
  payload.id = bookings.length + 1;
  bookings.push(payload);

  return res.jsonp(payload);
});

app.delete('/booking/:id', (req, res) => {
  const booking = bookings.findIndex((element) => element.id === req.params.id);
  if (booking === -1) {
    return res.status(404).jsonp({ message: 'Booking not found' });
  }

  bookings.splice(booking, 1);

  return res.status(201);
});

app.put('/booking/:id', (req, res) => {
  const booking = bookings.findIndex((element) => element.id === req.params.id);
  if (booking === -1) {
    return res.status(404).jsonp({ message: 'Booking not found' });
  }
  bookings[booking] = Object.assign(bookings[booking], body.payload);

  return res.jsonp(bookings[booking]);
});

app.get('/booking', (req, res) => {
  return res.jsonp(bookings);
});

app.get('/booking/:id', async (req, res) => {
  const booking = bookings.find((element) => element.id === req.params.id);
  if (booking) {
    return res.jsonp(booking);
  }

  return res.status(404).jsonp({ message: 'Booking not found '});
});


app.listen(PORT, () => {
  console.log(`API is running on port: ${PORT}`);
});