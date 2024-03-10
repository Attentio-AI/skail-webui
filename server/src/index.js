const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Middleware to verify Firebase ID token
async function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) {
    return res.status(403).send('Unauthorized: No token provided');
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).send('Unauthorized: Invalid token');
  }
}

// Initialize Express app
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Public route example
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Protected route example
app.get('/protected', verifyToken, (req, res) => {
  res.send(`Access to protected resource granted. User ID: ${req.user.uid}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
