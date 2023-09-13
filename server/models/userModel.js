const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const repoSchema = new Schema({
  fullName: String,
  license: String, 
  description: String,
  url: String,
  size: String,
  stars: String,
  language: String,
  forks: String,
  watchers: String,
  open_issues: String,
  topics: String
})

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  repos: {type: [repoSchema], default: []}
})

userSchema.pre('save', (next) => {
  //if user already exists, break out of func, otherwise hash PW
  if (!this.isModified('password')) return next();

  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
})

const User = mongoose.model('user', UserSchema);

module.exports = User;