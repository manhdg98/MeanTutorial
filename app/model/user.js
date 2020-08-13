var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true},
    password: { type: String, required: true},
    email   : { type: String, lowercase: true, required: true, unique: true}
})

UserSchema.pre('save', (next) => {
    var user = this;
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return next();
        user.password = hash;
        next();
    })
    next();
})

module.exports = mongoose.model('User', UserSchema);