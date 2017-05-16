const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String, required: true},
  email: {type: String, required: false},
  password: {type: String, required: false}
});
userSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password, 10);
};
userSchema.methods.validatePassword = function(password){
  return bcrypt.compare(input, this.password);
}

const quizItemSchema = mongoose.Schema({
  index: {type: Number, required: true},
  character: {type: String, required: true},
  meaning: {type: String, required: true},
  hint: {type: String},
  pinyin: {type: String, required: true},
});

const User = mongoose.model('users', userSchema);
const QuizItem = mongoose.model('quiz-items', quizItemSchema);

module.exports = {User, QuizItem};