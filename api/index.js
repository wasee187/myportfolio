const express = require('express');
require('dotenv').config();
const DBConnect = require('./config/db');
const authRouter = require('./routes/auth');
const projectRouter = require('./routes/projects');
const categoryRouter = require('./routes/category');
const multer = require('multer');
const path = require('path');

//********app declaration and database connect */
const app = express();
DBConnect();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});
//*************Routes****** */
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/categories', categoryRouter);

app.listen('5000', () => {
  console.log('BackEnd is running');
});
