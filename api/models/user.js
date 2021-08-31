const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: [25, 'FirstName must be less than 20 characters'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowercase: true,
    validate: {
      validator(v) {
        return v.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        );
      },
    },
  },
  password: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 6,
    validate: {
      validator(v) {
        const passArray = ['12345', 'god123', 'password'];
        const isMatch = passArray.some((pass) => v.includes(pass));
        if (isMatch) {
          return false;
        }
      },
    },
  },
  role: {
    type: Number,
    default: 0,
  },
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
