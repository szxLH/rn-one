'use strict';
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = app => {
  const mongoose = app.mongoose;

  const getHmac = () => {
    const secret = app.config.jwt.secret;
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(Date.now().toString());
    return hmac.digest('hex');
  };

  const UserSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userSecret: {
      type: String,
      default: getHmac(),
    },
    create_at: {
      type: Date,
      default: Date.now(),
    },
    update_at: {
      type: Date,
      default: Date.now(),
    },
  });

  UserSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
      return next();
    } catch (e) {
      return next(e);
    }
  });

  return mongoose.model('User', UserSchema);
};
