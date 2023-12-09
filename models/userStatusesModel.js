const { Schema, model } = require('mongoose');

const userStatusSchema = Schema(
  {
    userStatusName: {
      type: String,
      required: [true, 'User status is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const UserStatus = model('userStatus', userStatusSchema);

module.exports = {
  UserStatus,
};
