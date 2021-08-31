//requiring mongoose
const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

async function DBConnect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err);
  }
}

module.exports = DBConnect;
